import { Button, Checkbox, Col, Divider, Form, Input, message, Modal, notification, Row } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {callLoginBenhNhan } from "../../../services/apiuser";
import RegisterPage from "../RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { doLoginAction } from "../../../redux/account/accountSlice";
import Header from "../../../component/User/header";


const LoginPage = () => {
    const [openModalLogin, setOpenModalLogin] = useState(false);

    const [formLogin] = Form.useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [remember, setRemember] = useState(false); // Trạng thái của checkbox "Ghi nhớ tài khoản"
    const [openRegisterKH, setOpenRegisterKH] = useState(false)
    // const acc = useSelector(state => state.account.user)
    // console.log("acc: ", acc);
    

    // Kiểm tra access_token khi component load
    useEffect(() => {
        const accessToken = localStorage.getItem("access_tokenBenhNhan");
        if (accessToken) {
            // Nếu đã có token, điều hướng đến trang 
            navigate("/");
            // window.location.reload();
        }
    }, [navigate]);
    
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
            localStorage.setItem("access_tokenBenhNhan", res.access_token)
            dispatch(doLoginAction(res.data))
            console.log("dispatch(doLoginAction(res.data)): ", dispatch(doLoginAction(res.data)));
            message.success("Đăng nhập thành công")

            if (remember) {
                // Nếu người dùng chọn "Ghi nhớ tài khoản", lưu thông tin vào localStorage
                localStorage.setItem("rememberedAccountBenhNhan", JSON.stringify({ email, password }));
            } else {
                // Nếu không chọn, xóa dữ liệu đã lưu (nếu có)
                localStorage.removeItem("rememberedAccountBenhNhan");
            }

            navigate("/")
            formLogin.resetFields()
            setOpenModalLogin(false)
            // handleLoginSuccess(res.access_token);
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
        
        // if(res.data){
        //     localStorage.setItem("access_token", res.access_token)
        //     localStorage.setItem("lastName", res.data.lastName);
        //     localStorage.setItem("firstName", res.data.firstName);
        //     message.success("Đăng nhập thành công!")

        //     if (remember) {
        //         // Nếu người dùng chọn "Ghi nhớ tài khoản", lưu thông tin vào localStorage
        //         localStorage.setItem("rememberedAccount", JSON.stringify({ email, password }));
        //     } else {
        //         // Nếu không chọn, xóa dữ liệu đã lưu (nếu có)
        //         localStorage.removeItem("rememberedAccount");
        //     }
            
        //     navigate("/")
            
        // } else {
        //     notification.error({ 
        //         message: "Đăng nhập không thành công!",
        //         description:
        //             res.message && Array.isArray(res.message) ? res.message[0] : res.message,
        //         duration: 5
        //     })
        // }
        setIsLoading(false)
    }

    const handleCancel = () => {
        setOpenModalLogin(false)
    }


    return (
      
 
        
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}
        open={openModalLogin}
        onCancel={() => handleCancel()}
        
        >
        <h2>Đăng Nhập</h2>
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
        
        </div>
            
    );
    
};
export default LoginPage