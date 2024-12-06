import{memo} from "react" ; 
const Footer = () => {
    return (
        <div>
        <section id="google-map">
          <iframe src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.889644222334!2d106.67739667485769!3d10.819756589331698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e2324759b7%3A0x6c91974ff86f05e3!2sMilitary%20Hospital%20175!5e0!3m2!1sen!2s!4v1728143373786!5m2!1sen!2s" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen />
        </section>
        {/*FOOTER*/}
        <footer data-stellar-background-ratio={5}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="footer-thumb">
                  <h4 className="wow fadeInUp" data-wow-delay="0.4s">Thông tin liên lạc</h4>
                  <div className="contact-info">
                    <p><i className="fa fa-phone" />+84 704426360</p>
                    <p><i className="fa fa-envelope-o" /> <a href="#">healthbooking@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="footer-thumb">
                  <h4 className="wow fadeInUp" data-wow-delay="0.4s">Tin tức</h4>
                  <div className="latest-stories">
                    <div className="stories-image">
                      <a href="#"><img src className="img-responsive" alt="" /></a>
                    </div>
                    <div className="stories-info">
                      <a href="#">
                        <h5>gdf</h5>
                      </a>
                      <span />
                    </div>
                  </div>
                  <div className="latest-stories">
                    <div className="stories-image">
                      <a href="#"><img src className="img-responsive" alt="" /></a>
                    </div>
                    <div className="stories-info">
                      <a href="#">
                        <h5 />
                      </a>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="footer-thumb">
                  <div className="opening-hours">
                    <h4 className="wow fadeInUp" data-wow-delay="0.4s">Giờ hoạt động</h4>
                    <p>T2 - T6 <span>7:00 SA - 5:00 CH</span></p>
                    <p>T7 <span>8:30 SA - 12:00 SA</span></p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/pi209" className="fa fa-facebook-square" attr="facebook icon" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter" />
                    </li>
                    <li>
                      <a href="https://www.instagram.com/v_nguyen209" className="fa fa-instagram" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 border-top">
                <div className="col-md-4 col-sm-6">
                  <div className="copyright-text">
                    <p>Design: <a href="https://www.facebook.com/pi209" target="_parent">Nhóm đồ án chuyên ngành</a></p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-align-center">
                  <div className="angle-up-btn">
                    <a href="#top" className="smoothScroll wow fadeInUp" data-wow-delay="1.2s"><i className="fa fa-angle-up" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}; 
export default memo(Footer) ; 