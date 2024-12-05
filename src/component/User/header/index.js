import{memo} from "react" ; 
import ReactDOM from 'react-dom'
import { BrowsernRouter as Router, Route, Link } from 'react-router'
const Header = () => {
    return (
        
      <div id="top" data-spy="scroll" data-target=".navbar-collapse"
      data-offset="50">
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate" />
          </div>
        </section>
        {/* HEADER */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <p />
              </div>
              <div className="col-md-8 col-sm-7 text-align-right">
                <span className="phone-icon"><i className="fa fa-phone" /> +84 704426360</span>
                <span className="date-icon"><i className="fa fa-calendar-plus-o" /> 7:00 SA - 5:00 CH (T2-T6)</span>
                <span className="email-icon"><i className="fa fa-user-o" /> <Link to='/login'>Đăng nhập/Đăng kí</Link></span>
              </div>
            </div>
          </div>
        </header>
        {/*Menu*/}
        <section className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
              </button>
              {/*Logo*/}
              <a href="index.html" className="navbar-brand"><i className="fa fa-h-square" />ealth Booking</a>
            </div>
            {/*Menu Link*/}
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/" className="smoothScroll">Trang chủ</a></li>
           
                <li><Link to='/doctor'>Bác sĩ </Link></li>
                <li><a href="#news" className="smoothScroll">Tin tức</a></li>
                <li><a href="#google-map" className="smoothScroll">Liên hệ</a></li>
                <li className="appointment-btn"><Link to='/order'>Đặt lịch</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
}; 
export default memo(Header) ; 