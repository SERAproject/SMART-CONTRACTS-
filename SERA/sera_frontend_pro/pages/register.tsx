import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

function Register() {
  return (
    <div style={{ justifyContent: 'center', width: '100%' }}>
      <div className="wrapper hv-100">
        <div className="row h-100 m-0">
          <div className="col-lg-7 p-0">
            <div className="position-relative h-100">
              <img
                className="h-100 w-100"
                src="/assets/media/sign/plane.webp"
                alt="sign"
              />
              <div className="position-absolute end-0 start-0 mx-auto top-50 text-center">
                <a
                  className="icon-1"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column justify-content-center h-100 p-lg-5 p-4">
              <div className="text-center mb-5">
                <a href="#">
                  <img src="/assets/media/logo.png" alt="Sera logo" />
                </a>
              </div>

              <div className="mb-5">
                <h2 className="text-white mb-4">Sign up</h2>
                <p className="text-white mb-1">
                  If you already have an account register
                </p>
                <p className="text-white mb-0">
                  You can{' '}
                  <a className="text-pink ms-2" href="/login">
                    Login here !
                  </a>
                </p>
              </div>

              <form className="mb-5">
                <div className="mb-5">
                  <label className="text-white mb-1">
                    <small>Email</small>
                  </label>
                  <div className="input-group border-bottom border-white">
                    <span className="input-group-text border-0 bg-transparent ps-0">
                      <img
                        src="/assets/media/sign/icons/message.png"
                        alt="message icon"
                      />
                    </span>
                    <input
                      type="email"
                      className="form-control border-0 bg-transparent text-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-white mb-1">
                    <small>Username</small>
                  </label>
                  <div className="input-group border-bottom border-white">
                    <span className="input-group-text border-0 bg-transparent ps-0">
                      <img
                        src="/assets/media/sign/icons/user.png"
                        alt="user icon"
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent text-white"
                      placeholder="Enter your User name"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-white mb-1">
                    <small>Password</small>
                  </label>
                  <div className="input-group mb-3 border-bottom border-white">
                    <span className="input-group-text border-0 bg-transparent ps-0">
                      <img
                        src="/assets/media/sign/icons/padlock.png"
                        alt="padlock icon"
                      />
                    </span>
                    <input
                      type="password"
                      className="form-control border-0 bg-transparent text-white"
                      placeholder="Enter your Password"
                    />
                    <a className="input-group-text text-white border-0 bg-transparent pe-0 toggleBtn cursor-pointer">
                      <i className="fas fa-eye-slash"></i>
                    </a>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-white mb-1">
                    <small>Confrim Password</small>
                  </label>
                  <div className="input-group mb-3 border-bottom border-white">
                    <span className="input-group-text border-0 bg-transparent ps-0">
                      <img
                        src="/assets/media/sign/icons/padlock.png"
                        alt="padlock icon"
                      />
                    </span>
                    <input
                      type="password"
                      className="form-control border-0 bg-transparent text-white"
                      placeholder="Confrim your Password"
                    />
                    <a className="input-group-text text-white border-0 bg-transparent pe-0 toggleBtn cursor-pointer">
                      <i className="fas fa-eye-slash"></i>
                    </a>
                  </div>
                </div>

                <button
                  className="btn btn-lg rounded-pill pink-btn w-100"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="preloader">
        <div className="loader_line"></div>
      </div>
    </div>
  );
}

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
