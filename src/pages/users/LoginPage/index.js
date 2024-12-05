import{memo} from "react" ; 
const LoginPage = () => {
    return (
        <div>
        {/* LOGIN IMAGE */}
        <svg className="login__blob" viewBox="0 0 566 840" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha">
            <path d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
        0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
        591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
        167.9   45 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
        0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
        591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
        167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z" />
            {/* size: 1000 x 1200 */}
            <image className="login__img" href="/images/login.png" />
          </g>
        </svg>      
        {/* LOGIN */}
        <div className="login container grid" id="loginAccessRegister">
          {/* LOGIN ACCESS */}
          <div className="login__access">
            <h1 className="login__title">Đăng nhập</h1>
            <div className="login__area">
              <form method="POST" action="/home" className="login__form">
                <div className="login__content grid">
                  <div className="login__box">
                    <input type="email" name="email" id="email" required placeholder=" " className="login__input" />
                    <label htmlFor="email" className="login__label">Email</label>
                    <i className="ri-mail-fill login__icon" />
                  </div>
                  <div className="login__box">
                    <input type="password" name="password" id="password" required placeholder=" " className="login__input" />
                    <label htmlFor="password" className="login__label">Mật khẩu</label>
                    <i className="ri-eye-off-fill login__icon login__password" id="loginPassword" />
                  </div>
                </div>
                <a href="#" className="login__forgot">Quên mật khẩu?</a>
                <button type="submit" id="setlayout" className="login__button">Đăng nhập</button>
              </form>
              <div className="login__social">
                <p className="login__social-title">Đăng nhập với</p>
                <div className="login__social-links">
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-google.svg" alt="image" className="login__social-img" />
                  </a>
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-facebook.svg" alt="image" className="login__social-img" />
                  </a>
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-apple.svg" alt="image" className="login__social-img" />
                  </a>
                </div>
              </div>
              <p className="login__switch">
                Bạn không có tài khoản? 
                <button id="loginButtonRegister">Đăng ký</button>
              </p>
            </div>
          </div>
          {/* LOGIN REGISTER */}
          <div className="login__register">
            <h1 className="login__title">Đăng ký tài khoản</h1>
            <div className="login__area">
              <form method="POST" action="/register" className="login__form">
                <div className="login__content grid">
                  <div className="login__group grid">
                    <div className="login__box">
                      <input type="text" name="surnames" id="surnames" required placeholder=" " className="login__input" />
                      <label htmlFor="surnames" className="login__label">Họ Tên</label>
                      <i className="ri-id-card-fill login__icon" />
                    </div>
                  </div>
                  <div className="login__box">
                    <input type="email" name="emailCreate" id="emailCreate" required placeholder=" " className="login__input" />
                    <label htmlFor="emailCreate" className="login__label">Email</label>
                    <i className="ri-mail-fill login__icon" />
                  </div>
                  <div className="login__box">
                    <input type="password" name="passwordCreate" id="passwordCreate" required placeholder=" " className="login__input" />
                    <label htmlFor="passwordCreate" className="login__label">Mật khẩu</label>
                    <i className="ri-eye-off-fill login__icon login__password" id="loginPasswordCreate" />
                  </div>
                </div>
                <button type="submit" className="login__button">Tạo tài khoản</button>
              </form>
              <p className="login__switch">
                Đã có tài khoản? 
                <button id="loginButtonAccess">Đăng nhập</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}; 
export default memo(LoginPage) ; 