import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Form, Input, message, notification, Row, Modal } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { callLogin } from "../../services/apidoctor";
import { doLoginActionDoctor } from "../../redux/account/accountSlice";

const LoginDoctor = (prop) => {
    const {openLoginDoctor, setOpenLoginDoctor} = prop
    const [formLogin] = Form.useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [remember, setRemember] = useState(false);

    // Khi trang load, kiểm tra xem có dữ liệu trong localStorage không
    useEffect(() => {
        const rememberedAccount = localStorage.getItem("rememberedAccount");
        if (rememberedAccount) {
            const account = JSON.parse(rememberedAccount);
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
        const res = await callLogin(email, password)
        console.log("res login: ", res);
        
        if(res.data){
            localStorage.setItem("access_tokenDoctor", res.access_token)
            dispatch(doLoginActionDoctor(res.data))
            localStorage.setItem("lastName", res.data.lastName);
            localStorage.setItem("firstName", res.data.firstName);
            localStorage.setItem("role", res.data.roleId);
            message.success("Đăng nhập thành công!");

            if (remember) {
                // Nếu người dùng chọn "Ghi nhớ tài khoản", lưu thông tin vào localStorage
                localStorage.setItem("rememberedAccount", JSON.stringify({ email, password }));
            } else {
                // Nếu không chọn, xóa dữ liệu đã lưu (nếu có)
                localStorage.removeItem("rememberedAccount");
            }
            
            navigate("/doctor/home-page")
            
        } else {
            notification.error({ 
                message: "Đăng nhập không thành công!",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
        setIsLoading(false)
    }

    const handleCancel = () => {
        setOpenLoginDoctor(false)
    }

    return (
        <Modal
            title={`Đăng nhập bác sĩ`}
            style={{
                top: 200,
            }}
            open={openLoginDoctor}
            onCancel={() => handleCancel()}
            width={500}
            maskClosable={false}
            footer= {null}
            // loading={true}
        >
                            <Form
                                form={formLogin}
                                layout="vertical"
                                onFinish={onFinish} 
                            >
                                <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập đầy đủ thông tin!',
                                            },
                                            {
                                                type: "email",
                                                message: 'Vui lòng nhập đúng định dạng địa chỉ email',
                                            },
            
                                        ]}
                                        hasFeedback
                                    >
                                    <Input />
                                </Form.Item>
        
                                <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Password không được để trống!',
                                            },  
                                            {
                                                required: false,
                                                pattern: new RegExp(/^(?!.*\s).{6,}$/),
                                                message: 'Không được nhập có dấu cách, tối thiểu có 6 kí tự!',
                                            },                                  
            
                                        ]}
                                        hasFeedback
                                    >
                                    <Input.Password onKeyDown={(e) => {
                                        console.log("check key: ", e.key);
                                        if(e.key === 'Enter') formLogin.submit()
                                    }} />
                                </Form.Item>                            
        
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"                                
                                >
                                    <Checkbox
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                    >Ghi nhớ tài khoản</Checkbox>
                                </Form.Item>

                                <Form.Item >
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Button loading={isLoading} 
                                                type="primary" 
                                                onClick={() => formLogin.submit()}>
                                            Đăng nhập 
                                        </Button>
                                    </div>
                                </Form.Item>
        
                            </Form>
                            <Divider />
        </Modal>
    )
}

export default LoginDoctor;
