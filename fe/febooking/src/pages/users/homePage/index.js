import{memo} from "react" ; 
import Header from "../../../component/User/header";
import Footer from "../../../component/User/footer";
const HomePage = () => {
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
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="about-info">
                  <h2 className="wow fadeInUp" data-wow-delay="0.1s">Đội ngũ bác sĩ</h2>
                </div>
              </div>
              <div className="clearfix" />
              <div className="col-md-4 col-sm-6">
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                  <img src="images/bsphungvanviet.jpg" className="img-responsive" alt="" />
                  <div className="team-info">
                    <h3>BSCKII.Phùng Văn Việt</h3>
                    <p>Phó chủ nhiệm khoa Gây mê hồi sức</p>
                    <div className="team-contact-info">
                      <p><i className="fa fa-phone" />010-020-0120</p>
                      <p><i className="fa fa-envelope-o" />
                        <a href="#">general@company.com</a></p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href="#" className="fa fa-linkedin-square" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-envelope-o" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                  <img src="images/bsdomanhhieu.jpg" className="img-responsive" alt="" />
                  <div className="team-info">
                    <h3>BSCKI.Đỗ Mạnh Hiếu</h3>
                    <p>Phó chủ nhiệm Khoa bỏng-Vi phẫu tạo hình</p>
                    <div className="team-contact-info">
                      <p><i className="fa fa-phone" /> 010-070-0170</p>
                      <p><i className="fa fa-envelope-o" />
                        <a href="#">pregnancy@company.com</a></p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href="#" className="fa fa-facebook-square" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-envelope-o" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-flickr" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img src="images/bsthanhonganh.jpg" className="img-responsive" alt="" />
                  <div className="team-info">
                    <h3>BSCKII.Thân Hồng Anh</h3>
                    <p>Chủ nhiệm khoa Tim mạch khớp nội tiết</p>
                    <div className="team-contact-info">
                      <p><i className="fa fa-phone" /> 010-040-0140</p>
                      <p><i className="fa fa-envelope-o" />
                        <a href="#">cardio@company.com</a></p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href="#" className="fa fa-twitter" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-envelope-o" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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