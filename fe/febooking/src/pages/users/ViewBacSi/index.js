import {memo} from 'react' ; 
import Header from '../../../component/User/header';
import Footer from '../../../component/User/footer';

const ViewBacSi = () => {
    return(
        <div>
            <Header/>
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
        <Footer/>
        </div>
    )
};
export default memo(ViewBacSi) ; 