import Header from "../../../component/User/header";
import Footer from "../../../component/User/footer";
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import './lichhen.scss'
import { IoHomeSharp } from "react-icons/io5"
import { UserOutlined } from "@ant-design/icons"
import { MdAccessTimeFilled } from "react-icons/md"
import { BsCalendar2Date } from "react-icons/bs"
import { Avatar, Button, Col, Row } from "antd"
import { fetchLichKham } from "../../../services/apidoctor"


const LichHen = () => {

    let location = useLocation();
    // Phân tích cú pháp query string
    let params = new URLSearchParams(location.search);
    const idKhachHang = params.get("idKhachHang"); // Lấy giá trị của tham số "idKhachHang"

    console.log("check idKhachHang: ", idKhachHang);
    const [dataLichHen, setDataLichHen] = useState([])
    console.log("check dataLichHen: ", dataLichHen);

    useEffect(() => {
        fetchLichHenByIdKH(idKhachHang);
    }, [idKhachHang]);

    const fetchLichHenByIdKH = async (idKhachHang) => {

        const res = await fetchLichKham(idKhachHang)
        console.log("res: ", res);
        if(res && res.data) {
            setDataLichHen(res.data)
        }
    }

    return (
        <>
        <Header/>
        <Row>
            <Col span={18} className="col-body">
                <Row>
                    <Col span={24}>
                        <p className="txt-title"><IoHomeSharp /> / Lịch hẹn đã đặt</p>
                        {/* <Divider/> */}
                        <hr style={{border: "1px solid rgb(243, 243, 243)"}} />
                    </Col>
                    <Col span={24}>
                        <p className="title-lichhen">Lịch hẹn đã đặt</p>
                    </Col>                
                    {dataLichHen?.length > 0 ? (
                        dataLichHen.map((item, index) => (
                            <Col key={index} span={21} className="box-lich-kham">
                                <Row gutter={[0, 20]}>
                                    <Col span={6} className="ben-trai">
                                        <Avatar
                                            src={`${ "http://localhost:3001"}/uploads/${item?._idDoctor.image}`}
                                            style={{ backgroundColor: 'white', border: "1px solid red" }}
                                            icon={<UserOutlined />}
                                            size={90}
                                        />
                                        <p className="kham">Thời Gian Khám</p>
                                        <p className="txt-trai">
                                            <MdAccessTimeFilled size={30} /> &nbsp;
                                            <span style={{ top: "-7px", position: "relative" }}>{item.tenGioKham}</span>
                                        </p>
                                        <p className="txt-trai">
                                            <BsCalendar2Date /> &nbsp;
                                            <span>{item.ngayKhamBenh}</span>
                                        </p>
                                    </Col>
                                    <Col span={17} style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                                        <p className="txt-phai-benhnhan">Bệnh nhân: {item.patientName}</p>
                                        <p className="txt-phai" style={{ color: "rgb(69, 195, 210)" }}>
                                            {item._idDoctor ? item._idDoctor.chucVuId.map(items => items?.name).join(', ') : ''}
                                        </p>
                                        <p className="txt-phai">
                                            Bác sĩ: <span style={{ color: "rgb(69, 195, 210)" }}>{item._idDoctor?.lastName} {item._idDoctor?.firstName}</span>
                                        </p>
                                        <p className="txt-phai">Nơi khám: {item._idDoctor?.phongKhamId?.name}</p>
                                        <p className="txt-phai">Địa chỉ:
                                            <span style={{ lineHeight: "25px", fontSize: "18px", marginLeft: "5px" }}>{item._idDoctor?.phongKhamId?.address}</span>
                                        </p>
                                        <p className="txt-phai">Lí do khám: <span style={{ marginLeft: "5px" }}>{item.lidokham}</span></p>
                                        <Button size="large" className="btn-dat-kham" type="warning">Đã đặt khám</Button>
                                    </Col>
                                    <Col span={22} style={{ margin: "auto" }}>
                                        <hr style={{ border: "1px solid rgb(235, 235, 235)" }} />
                                    </Col>
                                    <Col span={15} style={{ margin: "auto" }}>
                                        <div className="hdsd">
                                            <p style={{ fontWeight: "500" }}>Hướng dẫn đi khám</p>
                                            <p style={{ fontStyle: "italic" }}><a href="#">Xem chi tiết</a></p>
                                        </div>
                                        <hr style={{ border: "1px solid rgb(235, 235, 235)" }} />
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    ) : (
                        <Col span={21} className="box-lich-kham">
                            <p style={{ textAlign: "center", color: "red", fontSize: "30px" }}>Chưa có lịch khám nào.</p>
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
        <Footer/>
        </>
    )
}
export default LichHen