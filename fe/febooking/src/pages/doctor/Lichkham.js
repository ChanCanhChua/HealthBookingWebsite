import Footer from "../../component/User/footer";
import HeaderViewDoctor from '../../component/User/header';
import { Avatar, Button, Col, Row } from "antd";
import { PhoneOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoHomeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchOrderById, fetchDoctorById } from '../../services/apidoctor';
import moment from "moment";
import './css.scss';
import ViewOrder from "./ViewOrder";

const LichKham = () => {

    const [dataDoctor, setDataDoctor] = useState();    
    const [dataAllShift, setDataAllShift] = useState([])
    const [dataorder, setDataorder] = useState();
    const [visibleCount, setVisibleCount] = useState(5); // Số lượng lịch hiển thị ban đầu
    const [isExpanded, setIsExpanded] = useState(false); // Trạng thái hiển thị tất cả lịch

    const [openViewOrder, setOpenViewOrder] = useState(false);
    const [dataDetailOrder, setDataDetailOrder] = useState(null);

    // !!!! Nhớ đổi lại !!!!
    useEffect(() => {
        fetchADoctorById('66fc2d695dcdd5d80c1ba3c0');
        fetchOrderOfThisDoctor('66fc2d695dcdd5d80c1ba3c0');
    }, ['66fc2d695dcdd5d80c1ba3c0']);

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

    return(
        <>
        <div className='layout-app'>
        <HeaderViewDoctor />
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
        <Row >
            <Col span={18} className='view-body-xem-lich-ck'>
                <Row>
                    <Col span={18} className="col-body" style={{backgroundColor: "rgb(247, 246, 246)"   }}>
                        <p style={{
                            color: "gray", fontSize: "16px", fontWeight: "500", padding: "10px 0"
                        }}>
                            <FaRegCalendarAlt />
                            <span style={{marginLeft: "10px"}}>LỊCH KHÁM</span>    
                        </p>

                        {dataorder?.length > 0? (
                            dataorder
                            .sort((a, b) => new Date(a.ngayKhamBenh) - new Date(b.ngayKhamBenh))
                            .slice(0, isExpanded ? dataorder.ngayKhamBenh.length : visibleCount)
                            .map((value) => (
                                <Col >
                                    <span style={{ fontWeight: "bold", fontSize: "18px", color: 'while' }}>
                                        {moment(value.ngayKhamBenh).format('DD/MM/YYYY')}
                                    </span>
                                    <br /><br />
                                    <Col span={24} className="box-lich-kham" style={{backgroundColor: "white"}}>
                                        <Row gutter={[10, 10]}>
                                            <Col span={13}>
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

                                            <Col span={11} style={{ borderLeft: "2px solid #f4f4f4"}}>
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

                                            <Col span={11} style={{ borderLeft: "2px solid #f4f4f4"}}>
                                                <EyeOutlined 
                                                className="txt-bacsi"
                                                style={{color: "green", fontWeight: "bold", cursor: "pointer"}}
                                                    onClick={() => {
                                                        setOpenViewOrder(true)
                                                        setDataDetailOrder(value)
                                                    }}
                                                />
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
                </Row>
            </Col>
        </Row>
        
        <ViewOrder 
        openViewOrder={openViewOrder}
        setOpenViewOrder={setOpenViewOrder}
        dataDetailOrder={dataDetailOrder}
        setDataDetailOrder={setDataDetailOrder}
        fetchListDoctor={fetchOrderById}
        /> 

        <Footer/>
        </div>
        </>
    )

}

export default LichKham;
