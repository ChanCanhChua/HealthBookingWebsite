import DoctorLayout from "../../../component/Doctor/DoctorLayout";
import { Avatar, Button, Col, Row, notification, message, Popconfirm } from "antd";
import { PhoneOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoHomeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchOrderById, fetchDoctorById, checkin } from '../../../services/apidoctor';
import moment from "moment";
import {useSelector, useDispatch} from 'react-redux'
import './css.scss';
import ViewOrder from "./ViewOrder";

const LichKham = () => {

    const [dataDoctor, setDataDoctor] = useState();    
    const [dataAllShift, setDataAllShift] = useState([])
    const [dataorder, setDataorder] = useState();
    const dispatch = useDispatch();
    const [visibleCount, setVisibleCount] = useState(5); // Số lượng lịch hiển thị ban đầu
    const [isExpanded, setIsExpanded] = useState(false); // Trạng thái hiển thị tất cả lịch

    const [openViewOrder, setOpenViewOrder] = useState(false);
    const [dataDetailOrder, setDataDetailOrder] = useState(null);
    const acc = useSelector(state => state.account.doctor);
    
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
        fetchOrderOfThisDoctor(doctor._id);
    }, [Doctor]);

    const fetchADoctorById = async (id) => {
        const res = await fetchDoctorById(id)
        // console.log("res: ", res);
        if(res && res.data) {
            setDataDoctor(res.data)
        }
    }

    const fetchOrderOfThisDoctor = async (id) => {
        const res = await fetchOrderById(id)
        console.log("order: ", res)
        if(res && res.data){
            setDataorder(res.data)
        }
    };

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 2); // Tăng số lượng lịch hiển thị thêm 3
    };

    const handleToggleExpand = () => {
        setIsExpanded(prevCount => !prevCount); // Chuyển đổi trạng thái hiển thị
        if (!isExpanded) {
            setVisibleCount(dataDoctor.thoiGianKham.length); // Đặt visibleCount bằng tổng số lịch khi mở rộng
        } else {
            setVisibleCount(5); // Đặt lại về 5 khi thu hẹp
        }
    };

    const handleCheckin = async (id) => {

        const res = await checkin(id)
        if(res && res.data){
            notification.success({
                message: "Checkin",
                description: "Bạn đã checkin thành công"
            })
            await fetchOrderOfThisDoctor(acc._id);
        } else {
            notification.error({
                message: res.message
            })
        }
    }

    const cancelcheckin = (e) => {
        console.log(e);
        message.success('Hủy checkin');
    }; 

    return(
        <DoctorLayout pageTitle="Thêm lịch khám cá nhân">
        <Row>
            <Col span={18} className="col-body">
                <Row >
                    <Col span={24} >
                    <p className="txt-title" ><IoHomeSharp /> / Lịch Khám Của Bạn</p>
                    </Col>
                    <Col span={24} >
                    <p className="title-lichhen"> Lịch Khám Của Bạn</p>
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
        
        <Col span={18}  style={{backgroundColor: "white", display: "unset"}}>
            <p style={{
                color: "gray", fontSize: "16px", fontWeight: "500", padding: "10px 0", marginLeft: 160
            }}>
                <FaRegCalendarAlt />
                <span style={{marginLeft: 10}}>LỊCH KHÁM</span>    
            </p>

            {dataorder?.length > 0? (
                dataorder
                .sort((a, b) => new Date(a.ngayKhamBenh) - new Date(b.ngayKhamBenh))
                .slice(0, isExpanded ? dataorder.ngayKhamBenh.length : visibleCount)
                .map((value) => (
                    <Col>
                        <span style={{ fontWeight: "bold", fontSize: "18px"}}>
                            {moment(value.ngayKhamBenh).format('MM/DD/YYYY')}
                        </span>
                        <br /><br />
                        <Col span={30} className="box-lich-kham" style={{backgroundColor: "white", width: 1000}}>
                            <Row gutter={[10, 10]} >
                                <Col span={11}>
                                    <Row>
                                        <Col span={25}>
                                            <p 
                                            className="txt-bacsi" 
                                            style={{lineHeight: "23px", cursor: "pointer"}}>{value?.patientName}
                                            </p>

                                            <p
                                            className="txt-bacsi colors"
                                            style={{cursor: "pointer"}}>Thời gian {value?.ngayKhamBenh}: {value?.tenGioKham}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col span={9} style={{ borderLeft: "2px solid #f4f4f4"}}>
                                    <Row>
                                        <Col span={25}>
                                            <p
                                            className="txt-bacsi" 
                                            style={{lineHeight: "23px", cursor: "pointer"}}>Mô tả bệnh lý
                                            </p>

                                            <p 
                                            style={{lineHeight: "20px", cursor: "pointer"}}>{value?.lidokham}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col span={4} style={{ borderLeft: "2px solid #f4f4f4"}}>
                                    <EyeOutlined 
                                    className="txt-bacsi"
                                    style={{color: "green", fontWeight: "bold", cursor: "pointer"}}
                                        onClick={() => {
                                            setOpenViewOrder(true)
                                            setDataDetailOrder(value)
                                        }}
                                    />
                                    {value?.checkin==true? (
                                        <Button className="button" style={{marginLeft: 10, backgroundColor: "#b7f7ef"}}>
                                            Checkin
                                        </Button>
                                    ): (
                                        <Popconfirm
                                            title={`Xác nhận checkin cho ${value.patientName}`}
                                            description= {`Bạn không thể hủy tình trạng checkin cho ${value.patientName}`}
                                            onConfirm={() => handleCheckin(value._id)}
                                            onCancel={cancelcheckin}
                                            okText="Xác nhận checkin"
                                            cancelText="Không checkin"
                                        >
                                            <Button className="button" style={{marginLeft: 10, backgroundColor: "#f3fa70"}}>
                                                Checkin
                                            </Button>
                                        </Popconfirm>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                ))
            ) :(
                <Col span={24} style={{ textAlign: "center", padding: "20px" }}>
                    <p style={{ color: "gray", fontSize: "18px" }}>Hiện không có ai đặt lịch khám.</p>
                </Col>
            )}

            {dataorder?.length > visibleCount && !isExpanded && (
            <Button type="link" onClick={handleShowMore}>
                Xem thêm
            </Button>
            )}

            {isExpanded && (
            <Button type="link" onClick={handleToggleExpand}>
                Ẩn
            </Button>
            )}

            {!isExpanded && dataorder?.length > 5 && (
                <Button type="link" onClick={handleToggleExpand}>
                    Xem tất cả
                </Button>
            )}
        </Col>
        
        <ViewOrder 
        openViewOrder={openViewOrder}
        setOpenViewOrder={setOpenViewOrder}
        dataDetailOrder={dataDetailOrder}
        setDataDetailOrder={setDataDetailOrder}
        fetchListDoctor={fetchOrderById}
        /> 
        </DoctorLayout>
    )

}

export default LichKham;
