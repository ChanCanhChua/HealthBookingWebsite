import {Form, Modal, Col, Row, Input, Divider, message, notification} from "antd";
import { useEffect, useState } from "react";
import { changePassword } from "../../../services/apiuser";

const ChangePassword = (prop) => {
    const {openChangePassword, setOpenChangePassword, dataChangePassWord, setDataChangePassword} = prop;
    // console.log("datauser: ", dataChangePassWord)
    
    const [form] = Form.useForm()
    const [isSubmit, setIsSubmit] = useState(false);

    const handleCancel = () => {
        setOpenChangePassword(false);
        form.resetFields()
    };

    const handleChangePassword = async (values) => {

        const { password, passwordNew, passwordNAgain } = values;
        const _id = dataChangePassWord._id;
        if(passwordNew != passwordNAgain){
            notification.error({
                message: 'Mật khẩu mới không trùng khớp',
            })
        }
        
        setIsSubmit(true)
        const res = await changePassword( _id, password, passwordNew )

            console.log("res info: ", res);
        if(res && res.data){
            message.success(res.message);
            handleCancel()
        } else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })
        }
        
        setIsSubmit(false)
    }

    return(
        <Modal
            title={`Đổi mật khẩu`}
            style={{
                top: 200,
            }}
            open={openChangePassword}
            onOk={() => form.submit()} 
            onCancel={() => handleCancel()}
            width={500}
            maskClosable={false}
            confirmLoading={isSubmit}
            okText={"Lưu lại"}
            cancelText="Huỷ"
            // loading={true}
        >
            <Divider />
            <Row>
                <Col span={24}>
                    <Form
                        form={form}
                        name="basic"        
                        layout="vertical"                
                        style={{
                            maxWidth: "100%",
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleChangePassword}
                        autoComplete="off"
                        loading={isSubmit}
                    >
                        <Col hidden>
                                        <Form.Item
                                            hidden
                                            labelCol={{ span: 24 }}
                                            label="ID"
                                            name="_id"
                                        >
                                            <Input />
                                        </Form.Item>
                        </Col>
                        <Form.Item
                        label="Nhập mật khẩu cũ"
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
                                if(e.key === 'Enter') form.submit()
                            }} />
                        </Form.Item>
                        <Form.Item
                        label="Nhập mật khẩu mới"
                        name="passwordNew"
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
                                if(e.key === 'Enter') form.submit()
                            }} />
                        </Form.Item>
                        <Form.Item
                        label="Nhập lại mật khẩu mới"
                        name="passwordNAgain"
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
                                if(e.key === 'Enter') form.submit()
                            }} />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    )
}

export default ChangePassword;
