import DoctorLayout from "../DoctorLayout";
import { Avatar, Button, Col, Row, Form, Divider, DatePicker, message, notification } from "antd";
import { PhoneOutlined, UserOutlined,} from '@ant-design/icons';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect, useState } from "react";
import {useSelector } from 'react-redux'
import { addTimeKhamBenh, fetchDoctorById, fetchAllTime } from '../../../services/apidoctor';
import moment from "moment"


const Dangki = () => {
    const [form] = Form.useForm()
    const [dataTime, setDataTime] = useState('')
    const [dataDoctor, setDataDoctor] = useState();    
    const [appointmentDate, setAppointmentDate] = useState(null);
    const [selectedTimes, setSelectedTimes] = useState([]);    
    const acc = useSelector(state => state.account.doctor);
    console.log("accinfor: ", acc)

    // lấy thông tin bác sĩ
    const Doctor = localStorage.getItem('doctor');
    let doctor;
    if(Doctor){
        console.log("Storedoctor: ", Doctor)
        doctor = JSON.parse(Doctor)
        // console.log("tên: ", doctor.firstName)
        // console.log("id: ", doctor._id)
        // console.log("role: ", doctor.roleId)
    }

    useEffect(() => {
        fetchADoctorById(doctor._id);
        fetchAllTimes();
    }, [doctor._id]);

    const fetchADoctorById = async (id) => {
        // const res = await fetchDoctorById(id)
        // // console.log("res: ", res);
        // if(res && res.data) {
        //     setDataDoctor(res.data)
        // }
    }

    const fetchAllTimes = async () => {
        // const res = await fetchAllTime()
        // console.log("res doctor: ", res);
        // if (res && res.data) {
        //     setDataTime(res.data)
        // }
    }

    const handleTimeSelect = (timeId) => {
        
        // Kiểm tra xem thời gian đã được chọn chưa
        const newSelectedTimes = selectedTimes.includes(timeId)
        ? selectedTimes.filter(id => id !== timeId) // Nếu đã chọn thì bỏ chọn
        : [...selectedTimes, timeId]; // Nếu chưa chọn thì thêm vào danh sách đã chọn

        setSelectedTimes(newSelectedTimes); // Cập nhật trạng thái

        // Cập nhật giá trị của trường trong form
        form.setFieldsValue({ time: newSelectedTimes });
    };

    const handleSubmit = async (values) => {
        const {date} = values;
        const id = doctor._id;
        const appointmentDate = date.format('DD-MM-YYYY'); // Giữ định dạng mà không chuyển đổi
        console.log("Bác sĩ ID: ", id);
        console.log("Ngày khám: ", date);
        console.log("Ngày khám appointmentDate: ", appointmentDate);
        console.log("Thời gian đã chọn:", selectedTimes);

        const res = await addTimeKhamBenh(appointmentDate, selectedTimes, id )
        console.log("res thêm time: ", res);
        if(res && res.data){
            message.success(res.message);            
        } else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })
        }
    }

    const handleDateChange = (date, dateString) => {
        setAppointmentDate(dateString);
    };

    return(
        <DoctorLayout pageTitle="Thêm lịch khám cá nhân">
        <Row>
            <Col span={18} className="col-body">
                <Row >
                    
                    <Col span={24} >
                    <p className="title-lichhen"> Thêm lịch khám cá nhân</p>
                    </Col> 
                </Row>
                <Row>
                    <Col md={21} sm={21} xs={21} span={21} push={3} style={{backgroundColor: "white", paddingLeft: 30}}>
                        <p style={{fontSize: "25px", marginTop: "10px", fontWeight: "500"}}>
                            {dataDoctor ? dataDoctor.chucVuId.map(item => item?.name).join(', ') : ''} - &nbsp;
                            {dataDoctor?.lastName} {dataDoctor?.firstName}
                        </p>
                        
                        <p style={{fontSize: "15px", marginTop: "-5px",}}><FaLocationDot />
                            <span style={{marginLeft: "5px"}}>{dataDoctor?.address}</span> &nbsp; &nbsp; - &nbsp;&nbsp;
                            <span style={{marginLeft: "5px"}}><PhoneOutlined /> {dataDoctor?.phoneNumber}</span>
                        </p>                                
                        
                    </Col>

                    <Col md={3} sm={24} xs={24} span={3} pull={21} style={{backgroundColor: "white", textAlign: "center"}}>
                        <Avatar src={`${"http://localhost:3001"}/uploads/${dataDoctor?.image}`} size={120} icon={<UserOutlined />} />    
                    </Col>
                </Row>
            </Col>
        </Row>

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
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Row gutter={[20,5]}>
                        <Col span={5} md={5} sm={5} xs={24} className="col-body">
                        <Form.Item
                                layout="vertical"
                                label="Chọn ngày"
                                name="date"    
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ngày!',
                                    },                                        
                                ]}                                
                            >  
                                <DatePicker 
                                placeholder="Chọn ngày khám" 
                                style={{width: "100%"}} 
                                format="DD/MM/YYYY" // Định dạng ngày/tháng/năm
                                onChange={handleDateChange} // thêm cái này
                                // onChange={onChange} 
                                disabledDate={current => current < moment().startOf('day')} // Không cho chọn ngày quá khứ
                                />
                                </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="time" // Đặt tên cho trường thời gian
                        style={{marginLeft: 250}}
                    >
                        <Row gutter={[20, 16]}>
                            {dataTime.length > 0 ? (
                                dataTime.map(time => (
                                    <Col className="gutter-row" span={10} key={time._id}>
                                        <div
                                            className={`styles ${selectedTimes.includes(time._id) ? 'active' : ''}`}
                                            onClick={() => {
                                                handleTimeSelect(time._id);
                                                // Cập nhật giá trị của trường trong form
                                                form.setFieldsValue({ time: selectedTimes });
                                            }}
                                        >
                                            {time.tenGio}
                                        </div>
                                    </Col>
                                ))
                            ) : (
                                <Col className="gutter-row" span={4}>
                                    <div className="styles">Không có time nào</div>
                                </Col>
                            )}
                        </Row>
                    </Form.Item>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            <Form.Item>
                                <br/>
                                <div style={{textAlign: "center"}}>
                                    <Button type="primary" htmlType="submit">Lưu lại</Button>
                                </div>                                    
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
        </DoctorLayout>
    )
}

export default Dangki;