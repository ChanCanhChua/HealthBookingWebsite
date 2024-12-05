import{memo} from "react" ; 
const Footer = () => {
    return (
        <div>
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
                  <div className="opening-hours">
                    <h4 className="wow fadeInUp" data-wow-delay="0.4s">Giờ hoạt động</h4>
                    <p>T2 - CN <span>24/7</span></p>
                   
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