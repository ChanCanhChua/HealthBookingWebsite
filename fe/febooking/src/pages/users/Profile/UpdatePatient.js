import {Form, Modal, Divider, message, Col, notification, Row, Input, Radio} from "antd";
import { useEffect, useState } from "react";
import { updatePatient } from "../../../services/apiuser";

const UpdatePatient = (prop) => {
    const {openUpdatePatient, setOpenUpdatePatient, dataUpdate, setDataUpdate} = prop;

    const [form] = Form.useForm()
    const [initForm, setInitForm] = useState(null);
    const [genderPatient, setGenderPatient] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (openUpdatePatient && dataUpdate?._id){
            const init = {
                _id: dataUpdate._id,
                firstName: dataUpdate.firstName,
                lastName: dataUpdate.lastName,
                address: dataUpdate.address,
                email: dataUpdate.email,
                phoneNumber: dataUpdate.phone,
                gender: dataUpdate.gender, 
            }
            setInitForm(init);
            form.setFieldsValue(init);
        }
        return () => {
            form.resetFields();
        }

    },[dataUpdate, openUpdatePatient])

    const handleCancel = () => {
        setOpenUpdatePatient(false);
        form.resetFields()
    };

    const handleUpdatePatient = async (values) => {

        const { _id, email, firstName, lastName, address, phoneNumber, gender,} = values

        
        setIsSubmit(true)
        const res = await updatePatient( _id, email, firstName, lastName, address, phoneNumber, gender,)

            console.log("res info: ", res);
        if(res){
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
            title={`Sửa thông tin cá nhân của bạn`}
            style={{
                top: 20,
            }}
            open={openUpdatePatient}
            onOk={() => form.submit()} 
            onCancel={() => handleCancel()}
            width={1100}
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
                        onFinish={handleUpdatePatient}
                        autoComplete="off"
                        loading={isSubmit}
                    >
                        <Row gutter={[20,5]}>
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

                            <Col span={5} md={5} sm={5} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Họ"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập họ hiển thị!',
                                        },
                                        {
                                            required: false,
                                            pattern: new RegExp(/^[A-Za-zÀ-ỹ\s]+$/),
                                            message: 'Không được nhập số!',
                                        },
                                    ]}
                                >
                                <Input />
                                </Form.Item>
                            </Col>

                            <Col span={5} md={5} sm={5} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Tên"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tên hiển thị!',
                                        },
                                        {
                                            required: false,
                                            pattern: new RegExp(/^[A-Za-zÀ-ỹ\s]+$/),
                                            message: 'Không được nhập số!',
                                        },
                                    ]}
                                >
                                <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[20,5]}>
                            <Col span={5} md={5} sm={5} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Địa chỉ"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập đầy đủ thông tin!',
                                        },
                                    ]}
                                >
                                <Input />
                                </Form.Item>
                            </Col>

                            <Col span={5} md={5} sm={5} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Số điện thoại"
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập đầy đủ thông tin!',
                                        },
                                        {
                                            pattern: /^0\d{9}$/,
                                            message: 'Số điện thoại phải có 10 chữ số và bẳt đầu bằng số 0, không chứa kí tự!',
                                        },
                                    ]}
                                >
                                <Input />
                                </Form.Item>
                            </Col>

                            <Col span={4} md={4} sm={4} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Giới tính"
                                    name="gender"    
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn giới tính!',
                                        },                                        
                                    ]}                                
                                >
                                    <Radio.Group 
                                        onChange={(e) => {
                                            const genderValue = e.target.value; // true hoặc false
                                            setGenderPatient(genderValue); // Cập nhật trạng thái
                                            form.setFieldsValue({ gender: genderValue }); // Cập nhật giá trị trong form
                                        }} value={genderPatient}
                                    >
                                        <Radio value={true}>Nam</Radio>
                                        <Radio value={false}>Nữ</Radio>                                        
                                    </Radio.Group>                       
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[20,5]}>
                            <Col span={12} md={12} sm={12} xs={24}>
                                <Form.Item
                                    layout="vertical"
                                    label="Địa chỉ Email"
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
                                >
                                <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>    
            </Row>        
        </Modal>
    )
}

export default UpdatePatient;
