import { Button, Divider, Form, Input, message, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {callLoginBenhNhan } from "../../../services/apiuser";
import RegisterPage from "../RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { doLoginActionPatient } from "../../../redux/account/accountSlice";


const LoginPage = (prop) => {
    const {openLoginUser, setOpenLoginUser} =prop;
    const [isSubmit, setIsSubmit] = useState(false);

    const [formLogin] = Form.useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [remember, setRemember] = useState(false); // Trạng thái của checkbox "Ghi nhớ tài khoản"
    const [openRegisterKH, setOpenRegisterKH] = useState(false)
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    // const acc = useSelector(state => state.account.user)
    // console.log("acc: ", acc);
    

    // Kiểm tra access_token khi component load
    
    
    // Khi trang load, kiểm tra xem có dữ liệu trong localStorage không
    useEffect(() => {
        const rememberedAccountBenhNhan = localStorage.getItem("rememberedAccountBenhNhan");
        if (rememberedAccountBenhNhan) {
            const account = JSON.parse(rememberedAccountBenhNhan);
            console.log("JSON.parse(rememberedAccountBenhNhan): ",JSON.parse(rememberedAccountBenhNhan));
            
            formLogin.setFieldsValue({
                email: account.email,
                password: account.password,
                remember: true,
            });
            setRemember(true);
        }
    }, [formLogin]);

    const onFinish = async (values) => {
        console.log("kết quả values: ", values);
        const {email, password } = values

        setIsLoading(true)
        const res = await callLoginBenhNhan(email, password)
        console.log("res login: ", res);

        if(res.data) {
            localStorage.setItem("access_tokenBenhNhan", res.access_token);
            localStorage.setItem("role", res.data.roleId);
            dispatch(doLoginActionPatient(res.data));
            console.log("dispatch(doLoginAction(res.data)): ", dispatch(doLoginActionPatient(res.data)));
            message.success("Đăng nhập thành công");
            if (remember) {
                // Nếu người dùng chọn "Ghi nhớ tài khoản", lưu thông tin vào localStorage
                localStorage.setItem("rememberedAccountBenhNhan", JSON.stringify({ email, password }));
            } else {
                // Nếu không chọn, xóa dữ liệu đã lưu (nếu có)
                localStorage.removeItem("rememberedAccountBenhNhan");
            }

            navigate("/")
            formLogin.resetFields()
            setOpenLoginUser(false)
            // handleLoginSuccess(res.access_token);
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
        setIsLoading(false)
    }

    const handleCancel = () => {
        setOpenLoginUser(false)
    }


    return (
        <Modal
            title={`Đăng nhập`}
            style={{
                top: 200,
            }}
            open={openLoginUser}
            onCancel={() => handleCancel()}
            width={500}
            maskClosable={false}
            confirmLoading={isSubmit}
            footer= {null}
            // loading={true}
        >
            <Form layout="vertical" onFinish={onFinish} form={formLogin}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập email!',
                    },
                    {
                        type: 'email',
                        message: 'Địa chỉ email không hợp lệ!',
                    },
                ]}
                >
                <Input />
              </Form.Item>
      
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                    },
                ]}
              >
                <Input.Password onKeyDown={(e) => {
                    console.log("check key: ", e.key);
                    if(e.key === 'Enter') formLogin.submit()
                }}
                />
              </Form.Item>
      
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isLoading}
                  >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
            <Divider />
                <div style={{ textAlign: "center" }}>
                    Chưa có tài khoản? <Link onClick={() => setOpenRegisterKH(true)}>Đăng ký tại đây</Link>
                    {/* Chưa có tài khoản? <Link to={"/user/register-benh-nhan"}>Đăng ký tại đây</Link> */}
                </div>
    
                <RegisterPage 
                setOpenRegisterKH={setOpenRegisterKH}
                openRegisterKH={openRegisterKH}
                />
        </Modal>
    );
    
};
export default LoginPage