import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

function Overview() {
  return (
    <div style={{ justifyContent: 'center', width: '100%' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img width="47" src="/assets/media/logo.png" alt="SERA LOGO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button
              className="navbar-toggler d-lg-none d-block float-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-times"></i>
            </button>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why ICo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu dropdown-menu-anim">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-inline mt-lg-0 mt-4">
              <li className="list-inline-item">
                <a
                  className="btn btn-md btn-white rounded-3 fw-medium"
                  href="#"
                >
                  Buy Now
                </a>
              </li>
              <li className="list-inline-item dropdown">
                <a
                  className="btn btn-md btn-outline-white rounded-3 dropdown-toggle fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul className="dropdown-menu dropdown-menu-anim">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="py-80"
        style={{
          backgroundImage: `url("/assets/media/home/bg/background-overlay.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="content pe-lg-5">
                <h1 className="text-uppercase mb-4 fs-44">
                  THE FIRST EVER <span style={{ color: '#5C7DFF' }}>ERP</span>{' '}
                  SYSTEM ON BLOCKCHAIN
                </h1>
                <p className="mb-5">
                  This ERP runs on layer-2 blockchain technology, so it combines
                  all the benefits of a regular ERP with the privacy and
                  security of a public blockchain for free!
                </p>

                <div className="mb-lg-0 mb-5">
                  <img src="/assets/media/home/ilus-bner.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ps-lg-5">
                <div className="card">
                  <div
                    className="card-body py-80 mx-auto"
                    style={{ maxWidth: '300px' }}
                  >
                    <div className="text-center">
                      <p className="fs-large mb-4">Pre-sale is Live Now</p>
                      <div className="count-down" id="timer"></div>
                      <div
                        className="border-bottom my-4 mx-auto"
                        style={{ maxWidth: '300px' }}
                      ></div>
                      <p className="fs-large mb-4">Pre Sale</p>

                      <div className="progress-bar-custom">
                        <div
                          className="progress-item active"
                          style={{ maxWidth: '35%' }}
                        >
                          <span>Pre Sale</span>
                        </div>
                        <div
                          className="progress-item active"
                          style={{ maxWidth: '35%' }}
                        >
                          <span>Soft Cap</span>
                        </div>
                        <div className="progress-item" style={{ width: '20%' }}>
                          <span>Bonus</span>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="btn btn-lg btn-primary rounded-pill fs-medium"
                        style={{ minWidth: '213px' }}
                      >
                        Purchase tokens
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-2 py-80">
        <div className="container">
          <h6 className="section-title text-uppercase">
            THE ERP ON BLOCKCHAIN
          </h6>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fs-40 mb-5">
                The First Ever Erp System On Blockchain!
              </h2>
              <div className="serv-container">
                <div className="serv-item d-flex">
                  <div className="serv-icon icon-2 me-4">
                    <img
                      src="/assets/media/home/icons/users.png"
                      alt="users icon"
                    />
                  </div>
                  <div className="serv-content">
                    <h5
                      className="mb-4 fw-medium"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Transparency & Auditability
                    </h5>
                    <p
                      className="fs-small"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="500"
                    >
                      The blockchain facilitates automation of processes <br />{' '}
                      and solves trust issues.
                    </p>
                  </div>
                </div>
                <div className="serv-item d-flex">
                  <div className="serv-icon icon-2 me-4">
                    <img
                      src="/assets/media/home/icons/users.png"
                      alt="users icon"
                    />
                  </div>
                  <div className="serv-content">
                    <h5
                      className="mb-4 fw-medium"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Transparency & Auditability
                    </h5>
                    <p
                      className="fs-small"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="500"
                    >
                      The blockchain facilitates automation of processes <br />{' '}
                      and solves trust issues.
                    </p>
                  </div>
                </div>
                <div className="serv-item d-flex">
                  <div className="serv-icon icon-2 me-4">
                    <img
                      src="/assets/media/home/icons/users.png"
                      alt="users icon"
                    />
                  </div>
                  <div className="serv-content">
                    <h5
                      className="mb-4 fw-medium"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Transparency & Auditability
                    </h5>
                    <p
                      className="fs-small"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="500"
                    >
                      The blockchain facilitates automation of processes <br />{' '}
                      and solves trust issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-end text-center">
                <img src="/assets/media/home/globe.png" alt="globe" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-80"
        style={{
          backgroundImage: `url("/assets/media/home/bg/background-overlay.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h6 className="section-title text-uppercase">Why choose our token</h6>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="mb-5" data-aos="fade-up" data-aos-duration="1500">
                <div className="icon mb-4">
                  <img
                    height="73"
                    className="object-fit-contain"
                    src="/assets/media/home/icons/mobile.png"
                    alt="mobile icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">
                    Blockchain In <br /> Finance
                  </h3>
                  <p style={{ color: '#D3D4E0' }}>
                    Due to SERA’s decentralized technology, fraudulent
                    operations are much less likely to happen.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="mb-5"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div className="icon mb-4">
                  <img
                    height="73"
                    className="object-fit-contain"
                    src="/assets/media/home/icons/wallet.png"
                    alt="wallet icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">
                    Lifetime free <br /> transaction
                  </h3>
                  <p style={{ color: '#D3D4E0' }}>
                    You can buy token without paying any transactions fee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="mb-5"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1000"
              >
                <div className="icon mb-4">
                  <img
                    height="73"
                    className="object-fit-contain"
                    src="/assets/media/home/icons/secure.png"
                    alt="secure icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">
                    Protect the <br /> identity
                  </h3>
                  <p style={{ color: '#D3D4E0' }}>
                    Use a mobile device to pay with simple steps
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="mb-5"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
              >
                <div className="icon mb-4">
                  <img
                    height="73"
                    className="object-fit-contain"
                    src="/assets/media/home/icons/list.png"
                    alt="list icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">
                    Sercurity & control <br /> over money
                  </h3>
                  <p style={{ color: '#D3D4E0' }}>
                    We provide high levels of sercurity to all users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-80">
        <div className="container">
          <ul
            className="nav nav-tabs border-bottom-0 mb-3"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Funding Allocation
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Token Allocation
              </button>
            </li>
          </ul>
          <div
            className="tab-content"
            id="myTabContent"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
            >
              <div className="bg-3 py-80 px-5 rounded-4">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="col-lg-8 mx-auto">
                      <div className="mb-lg-0 mb-5">
                        <canvas id="doughnut"></canvas>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="pe-5">
                      <div className="mb-4">
                        <p className="mb-2">Contingency: 5%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={5}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#3D88FB1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#3D88FB', width: '5%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Partner/Investor: 5%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={5}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#5637C81F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#5637C8', width: '5%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Legal & Regulation: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#00D89E1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#00D89E', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Business Development: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#ACDF351F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#ACDF35', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Operational: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#9116CD1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#9116CD', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Product Develoment: 40%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#FC3352' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#FC3352', width: '40%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Marketing: 20%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#FF9B5C' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#FF9B5C', width: '20%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab2" role="tabpanel">
              <div className="bg-3 py-80 px-5 rounded-4">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="col-lg-8 mx-auto">
                      <div className="mb-lg-0 mb-5">
                        <canvas id="doughnut"></canvas>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="pe-5">
                      <div className="mb-4">
                        <p className="mb-2">Contingency: 5%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={5}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#3D88FB1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#3D88FB', width: '5%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Partner/Investor: 5%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={5}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#5637C81F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#5637C8', width: '5%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Legal & Regulation: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#00D89E1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#00D89E', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Business Development: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#ACDF351F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#ACDF35', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Operational: 10%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#9116CD1F' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#9116CD', width: '10%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Product Develoment: 40%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#FC3352' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#FC3352', width: '40%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Marketing: 20%</p>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ backgroundColor: '#FF9B5C' }}
                        >
                          <div
                            className="progress-bar"
                            style={{ backgroundColor: '#FF9B5C', width: '20%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-80"
        style={{
          backgroundImage:
            "url('/assets/media/home/bg/background-overlay2.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderTop: '1px solid #414073',
          borderBottom: '1px solid #414073'
        }}
      >
        <div className="container">
          <h6 className="section-title">Sera Cryptlight Token</h6>
          <h2 className="fs-40 mb-5">Sera Details & Sale Tokens.</h2>
          <div className="mb-5">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>Start</h3>
                  <p className="mb-0">Aug 8, 2021 (9:00AM GMT)</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>End</h3>
                  <p className="mb-0">Feb 10, 2022 (9:00AM GMT)</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>Acceptable curencies</h3>
                  <p className="mb-0">ETH, BTC, LTC</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>Number of Tokens for Sale</h3>
                  <p className="mb-0">1.000.000 Tokens</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>Tokens exchange rate</h3>
                  <p className="mb-0">1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="block-1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>Minimal Transaction</h3>
                  <p className="mb-0">10 Tokens / Transaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-lg-flex d-none mb-4">
            <div className="circle">
              <span></span>
            </div>
            <div className="circle">
              <span></span>
            </div>
            <div className="circle">
              <span></span>
            </div>
            <div className="circle">
              <span></span>
            </div>
            <div className="circle">
              <span></span>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <div
              className="block-2 col bg-3 p-4 text-center rounded-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p
                className="d-inline-block pb-2"
                style={{ borderBottom: '1px solid #454466', color: '#EFF0FC' }}
              >
                Aug 08 - Aug 31
              </p>
              <h4 className="mb-1">30% Bonus</h4>
              <p className="mb-0" style={{ color: '#D3D4E0' }}>
                $0.2009/token
              </p>
            </div>
            <div
              className="block-2 col bg-3 p-4 text-center rounded-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <p
                className="d-inline-block pb-2"
                style={{ borderBottom: '1px solid #454466', color: '#EFF0FC' }}
              >
                Sep 01 - Sep 15
              </p>
              <h4 className="mb-1">20% Bonus</h4>
              <p className="mb-0" style={{ color: '#D3D4E0' }}>
                $0.3009/token
              </p>
            </div>
            <div
              className="block-2 col bg-3 p-4 text-center rounded-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <p
                className="d-inline-block pb-2"
                style={{ borderBottom: '1px solid #454466', color: '#EFF0FC' }}
              >
                Sep 16 - Sep 30
              </p>
              <h4 className="mb-1">15% Bonus</h4>
              <p className="mb-0" style={{ color: '#D3D4E0' }}>
                $0.4009/token
              </p>
            </div>
            <div
              className="block-2 col bg-3 p-4 text-center rounded-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <p
                className="d-inline-block pb-2"
                style={{ borderBottom: '1px solid #454466', color: '#EFF0FC' }}
              >
                Oct 01 - Oct 15
              </p>
              <h4 className="mb-1">10% Bonus</h4>
              <p className="mb-0" style={{ color: '#D3D4E0' }}>
                $0.5009/token
              </p>
            </div>
            <div
              className="block-2 col bg-3 p-4 text-center rounded-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              <p
                className="d-inline-block pb-2"
                style={{ borderBottom: '1px solid #454466', color: '#EFF0FC' }}
              >
                Oct 16 - Oct 31
              </p>
              <h4 className="mb-1">5% Bonus</h4>
              <p className="mb-0" style={{ color: '#D3D4E0' }}>
                $0.7009/token
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-80"
        style={{
          borderBottom: '1px solid #414073',
          backgroundImage:
            "url('/assets/media/home/bg/background-overlay4.png')",
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat'
        }}
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="text-center mb-80">
            <h6 className="mb-4">Road map</h6>
            <h2 className="fs-40 mb-5">Our Strategy & Project Plan</h2>
          </div>
          <div className="map-container pb-80">
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Sep 2020
                </p>
                <div className="icon active"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Concept</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    Planning and Development Started
                  </p>
                </div>
              </div>
            </div>
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Dec 2020
                </p>
                <div className="icon active"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Research</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    Whitepaper V1
                  </p>
                </div>
              </div>
            </div>
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Jun 2021
                </p>
                <div className="icon active"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Pre-Sale</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    Sera Low Code Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container pb-80">
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Dec 2021
                </p>
                <div className="icon"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>App beta test</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    • SERA ERP V1
                  </p>
                </div>
              </div>
            </div>
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Mar 2022
                </p>
                <div className="icon active"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Token sale</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    • Deployment on Layer 2 Chain • Business Pitching
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container pb-80">
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Sep 2022
                </p>
                <div className="icon"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Alpha test</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    • Public IDO • Exchanges' listing
                  </p>
                </div>
              </div>
            </div>
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Jan 2023
                </p>
                <div className="icon"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Benefits</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    SERA Chain Testnet
                  </p>
                </div>
              </div>
            </div>
            <div className="map-item">
              <div className="map text-center">
                <p
                  className="text-uppercase h4 mb-3 d-inline-block"
                  style={{ borderBottom: '2px solid #3772FF' }}
                >
                  Mar 2024
                </p>
                <div className="icon"></div>
                <div className="bg-3 p-4 mt-4 rounded-3">
                  <h5>Operational</h5>
                  <p
                    className="mb-0"
                    style={{ color: 'rgba(224, 224, 224, 0.95)' }}
                  >
                    SERA Chain Main Net
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-80">
        <div className="container">
          <div className="bg-2 py-80 px-5 rounded-4">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="section-title">Whitepaper</h6>
                <h2 className="fs-40 mb-5">Read Our Whitepaper</h2>
                <p className="mb-5" style={{ color: '#E0E0E0' }}>
                  Here is our full documents that help you to understand deeply
                  about us and our operation
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="d-flex align-items-center mb-4"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="icon-3">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="content ps-3">
                        <p className="mb-0">White Paper</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="d-flex align-items-center mb-4"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="500"
                    >
                      <div className="icon-3">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="content ps-3">
                        <p className="mb-0">Terms Of Coin Sale</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="d-flex align-items-center mb-4"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="1000"
                    >
                      <div className="icon-3">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="content ps-3">
                        <p className="mb-0">Privaci & Policy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <a
                    href="#"
                    className="btn btn-lg btn-primary rounded-pill fs-medium"
                    style={{ minWidth: '152px' }}
                  >
                    Dowload <i className="fas fa-caret-down ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-end text-center mt-lg-0 mt-5">
                  <img src="/assets/media/home/hand.png" alt="hand" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-80"
        style={{
          backgroundImage:
            "url('/assets/media/home/bg/background-overlay3.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderBottom: '1px solid #414073'
        }}
      >
        <div className="container">
          <div className="text-center">
            <h6 className="mb-4">OUR TEAM</h6>
            <h2 className="fs-40 mb-5">The Leadership Team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-6">
              <div
                className="card-1"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="card-img">
                  <img
                    className="w-100"
                    src="/assets/media/home/team/team1.png"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="content">
                    <h4 className="mb-1">Charlee Mangar</h4>
                    <p className="mb-1">CEO & CFO</p>
                    <div
                      style={{
                        height: '2px',
                        width: '44px',
                        backgroundColor: '#3772FF'
                      }}
                    ></div>
                  </div>
                </div>
                <a href="#" className="card-link"></a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div
                className="card-1"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div className="card-img">
                  <img
                    className="w-100"
                    src="/assets/media/home/team/team2.png"
                    style={{ aspectRatio: '12/12.8' }}
                  />
                </div>
                <div className="card-body">
                  <div className="content">
                    <h4 className="mb-1">Dinaval Jall</h4>
                    <p className="mb-1">Head of Marketing</p>
                    <div
                      style={{
                        height: '2px',
                        width: '44px',
                        backgroundColor: '#3772FF'
                      }}
                    ></div>
                  </div>
                </div>
                <a href="#" className="card-link"></a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div
                className="card-1"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1000"
              >
                <div className="card">
                  <div className="card-img">
                    <img
                      className="w-100"
                      src="/assets/media/home/team/team3.png"
                      style={{ aspectRatio: '12/12.8' }}
                      alt="Team Member"
                    />
                  </div>
                  <div className="card-body">
                    <div className="content">
                      <h4 className="mb-1">Robert Peterson</h4>
                      <p className="mb-1">Developer</p>
                      <div
                        style={{
                          height: '2px',
                          width: '44px',
                          backgroundColor: '#3772FF'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <a href="#" className="card-link"></a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div
                className="card-1"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
              >
                <div className="card-img">
                  <img
                    className="w-100"
                    src="/assets/media/home/team/team4.png"
                    style={{ aspectRatio: '12/12.8' }}
                    alt="Team Member"
                  />
                </div>
                <div className="card-body">
                  <div className="content">
                    <h4 className="mb-1">Carleno Emo</h4>
                    <p className="mb-1">Head of Sale</p>
                    <div
                      style={{
                        height: '2px',
                        width: '44px',
                        backgroundColor: '#3772FF'
                      }}
                    ></div>
                  </div>
                </div>
                <a href="#" className="card-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-80"
        style={{
          backgroundImage:
            "url('/assets/media/home/bg/background-overlay5.png')",
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className="text-center">
            <h6 className="mb-4">Contact</h6>
            <h2 className="fs-40 mb-5">Contact US !</h2>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-4">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-2">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-0">Info@sera.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-lg-center mb-4">
                <div className="icon-2">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-0">+84 0977425031</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center  justify-content-lg-center mb-0">
                <div className="icon-2">
                  <i className="fab fa-telegram-plane"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-0">Join us on Telegram</p>
                </div>
              </div>
            </div>
          </div>
          <form className="mb-5">
            <div className="mb-4">
              <input
                type="text"
                className="form-control form-control-md border-0 text-white-50 rounded-5"
                placeholder="Your name"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-control form-control-md border-0 text-white-50 rounded-5"
                placeholder="someone@example.com"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control form-control-md border-0 text-white-50 rounded-5"
                placeholder="http://yourwebsite.com"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control form-control-md border-0 text-white-50 rounded-5"
                rows={4}
                placeholder="Message"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}
              ></textarea>
            </div>
            <button
              className="btn btn-md btn-outline-warning w-100 rounded-5"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="row align-items-center">
                <div className="col-6">
                  <ul className="list-inline">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Creations</a>
                    </li>
                    <li>
                      <a href="#">Roadmap</a>
                    </li>
                    <li>
                      <a href="#">Creator</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-inline">
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Roadmap</a>
                    </li>
                    <li>
                      <a href="#">Token</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h3>Subscribe To Us</h3>
              <p className="fs-regular mb-5">
                Don’t hesitate to subscribe to latest news about ICo markets as
                well as crucial financial knowledge to become successful
                investors globally
              </p>

              <form action="">
                <div className="row align-items-stretch">
                  <div className="col-lg-8">
                    <div className="mb-lg-0 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-md bg-white rounded-pill"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 ps-lg-0">
                    <button className="btn btn-outline-white rounded-pill w-100 h-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyrights">
        <div className="container">
          <div
            style={{
              height: '1px',
              width: '100%',
              backgroundColor: '#414073',
              marginBottom: '25px'
            }}
          ></div>
          <p className="mb-0">Copyright © 2021. All rights reserved by Sera</p>
        </div>
      </div>

      <div id="preloader">
        <div className="loader_line"></div>
      </div>
    </div>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
