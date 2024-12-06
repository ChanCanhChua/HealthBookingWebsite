import{memo} from "react" ; 
import Header from "../../../component/User/header";
import Footer from "../../../component/User/footer";
import HinhTronSlider from "../../../component/HinhVuong/HinhTronSlider";
import { Carousel, Col, Divider, Row } from "antd"

import { useEffect, useState } from "react";
import {fetchAllDoctor} from "../../../services/apidoctor";
import { useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage";
const HomePage = () => {
  const [dataDoctor, setDataDoctor] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
        await listDoctor();
    
    };

    fetchData();
}, [])
const listDoctor = async () => {
  const res = await fetchAllDoctor()
  if(res && res.data){
      setDataDoctor(res.data)
  }
}
const items = [
  {
      key: '0',
      src: 'https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png',
      txtP: 'Bác sĩ',
      navigate: '/doctorpage'
  },
  {
      key: '1',
      src: 'https://cdn.bookingcare.vn/fo/w384/2023/11/01/140537-chuyen-khoa.png',
      txtP: 'Chuyên khoa',
      navigate: '/user/chuyen-khoa-kham'
  }
  
];

const items_BacSiNoiBat = dataDoctor ? dataDoctor.map(doctor => ({
  id: doctor._id, // Thêm _id vào đây
  src: `${"http://localhost:3001"}/uploads/${doctor?.image}`, 
  txtP: `${doctor?.chucVuId.map(chucVu => chucVu?.name).join(', ')}
          , ${doctor?.lastName} ${doctor?.firstName}`,
  txtB: `${doctor?.chuyenKhoaId.map(chuyenKhoa => chuyenKhoa.name).join(', ')}`
})) : [];
const handleRedirectDoctor = (item) => {
  navigate(`/doctorpage?id=${item}`)
}  
    return (
<div>
      <Header/>
        <div>
        <section id="home" className="slider" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <div className="owl-carousel owl-theme">
                <div className="item item-first">
                  <div className="caption">
                    <div className="col-md-offset-1 col-md-10">
                      <h3>Làm cho cuộc sống của bạn tốt đẹp hơn</h3>
                      <h1>Sống lành mạnh</h1>
                      <a href="#team" className="section-btn btn btn-default smoothScroll">Gặp gỡ các bác sĩ</a>
                    </div>
                  </div>
                </div>
                <div className="item item-second">
                  <div className="caption">
                    <div className="col-md-offset-1 col-md-10">
                      <h3>Quan tâm đến sức khỏe của bạn</h3>
                      <h1>Phong cách sống mới</h1>
                      <a href="#about" className="section-btn btn btn-default btn-gray smoothScroll">Thông tin của chúng tôi</a>
                    </div>
                  </div>
                </div>
                <div className="item item-third">
                  <div className="caption">
                    <div className="col-md-offset-1 col-md-10">
                      <h3>Nền tảng của sức khỏe</h3>
                      <h1>Lợi ích của sức khỏe</h1>
                      <a href="#news" className="section-btn btn btn-default btn-blue smoothScroll">Tin tức</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*ABOUT*/}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="about-info">
                  <h2 className="wow fadeInUp" data-wow-delay="0.6s">Chào mừng bạn đến với<br /><i className="fa fa-h-square" />ealth Booking</h2>
                  {'{'}{'{'}user.email{'}'}{'}'}
                  <div className="wow fadeInUp" data-wow-delay="0.8s">
                    <p>Là Bệnh viện đa khoa chiến lược tuyến
                      cuối, trung tâm y học quân sự phía
                      Nam, với chức năng, nhiệm vụ khám
                      bệnh, chữa bệnh, điều trị bệnh
                      nhân, chăm sóc, bảo vệ sức khoẻ cán
                      bộ lãnh đạo Đảng, Nhà nước, Quân
                      đội, thương bệnh
                      binh, cán bộ, chiến sĩ lực lượng vũ
                      trang cũng như nhân dân ở khu vực
                      phía Nam và cán bộ cấp cao của Quân
                      đội Hoàng gia Camphuchia</p>
                    <p>“TẬN TÂM – THẤU HIỂU – ĐOÀN KẾT – KỶ
                      CƯƠNG”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section id="team" data-stellar-background-ratio={1}>
        
              <Row    
                className="ben-trong" 
                style={{
                    backgroundImage: "url('https://cdn.bookingcare.vn/fo/2023/11/01/140311-background5.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginBottom: "20px",
                }}>
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <span style={{fontWeight: "500", fontSize: "4vh", padding: "4vh 22vh"}}>Bác sĩ nổi bật</span>                    
                        <span style={{
                            fontWeight: "500", 
                            fontSize: "3vh", 
                            backgroundColor: "blue", 
                            height: "50px", 
                            lineHeight: "45px",
                            borderRadius: "15px",
                            textAlign: "center",
                            backgroundColor: "#d0edf7",
                            color: "rgb(45 145 179)",
                            margin: "3vh 22vh",
                            cursor: "pointer",
                            padding: "3px 10px"}}
                            onClick={() => navigate('/doctor')}
                        >Xem thêm</span>    
                    </div> 
                    <div 
                        style={{
                            backgroundColor: "transparent", 
                            width: "77%", height: "100%",                        
                            position: "relative",
                            left: "24vh",
                            
                        }}>
                        <HinhTronSlider items={items_BacSiNoiBat} urlDoctor={handleRedirectDoctor} />              
                    </div>                    
            </Row>
              
          
        </section>
        {/* NEWS */}
        <section id="news" data-stellar-background-ratio="2.5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                {/* SECTION TITLE */}
                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                  <h2>Tin tức</h2>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                {/* NEWS THUMB */}
                <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                  <a href="news-detail.html">
                    <img src="images/new1.png" className="img-responsive" alt="" />
                  </a>
                  <div className="news-info">
                    <span>24/09/2024</span>
                    <h3><a href="news-detail.html">Tích trữ
                        thực phẩm đúng cách đảm bảo
                        dinh dưỡng cho mùa mưa
                        lũ</a></h3>
                    <p>Maecenas risus neque, placerat
                      volutpat tempor ut, vehicula et
                      felis.</p>
                    <div className="author">
                      <img src="images/author-image.jpg" className="img-responsive" alt="" />
                      <div className="author-info">
                        <h5>Jeremie Carlson</h5>
                        <p>CEO / Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                {/* NEWS THUMB */}
                <div className="news-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <a href="news-detail.html">
                    <img src="images/new2.png" className="img-responsive" alt="" />
                  </a>
                  <div className="news-info">
                    <span>23/09/2024</span>
                    <h3><a href="news-detail.html">Hướng dẫn
                        người dân phòng tránh các bệnh
                        về da thường gặp trong mùa mưa
                        lũ</a></h3>
                    <p>Fusce vel sem finibus, rhoncus massa
                      non, aliquam velit. Nam et est
                      ligula.</p>
                    <div className="author">
                      <img src="images/author-image.jpg" className="img-responsive" alt="" />
                      <div className="author-info">
                        <h5>Jason Stewart</h5>
                        <p>General Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                {/* NEWS THUMB */}
                <div className="news-thumb wow fadeInUp" data-wow-delay="0.8s">
                  <a href="news-detail.html">
                    <img src="images/new3.png" className="img-responsive" alt="" />
                  </a>
                  <div className="news-info">
                    <span>13/08/2024</span>
                    <h3><a href="news-detail.html">Những
                        điều cần biết về bệnh bạch
                        hầu</a></h3>
                    <p>Vivamus non nulla semper diam cursus
                      maximus. Pellentesque
                      dignissim.</p>
                    <div className="author">
                      <img src="images/author-image.jpg" className="img-responsive" alt="" />
                      <div className="author-info">
                        <h5>Andrio Abero</h5>
                        <p>Online Advertising</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    <Footer/>

    </div>
)
}; 
export default memo(HomePage) ; 