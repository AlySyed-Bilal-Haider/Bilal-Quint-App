import React from 'react'
import logo from '../images/logo.png';
function Footer() {
  return <>
<>
  {/* footer-area start */}
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-3">
          <div className="footer-item">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p>
              QUINT is the revolutionary token bringing real-world rewards to
              investors by linking the metaverse with reality. Revolutionary
              super-staking pools deliver returns while unlocking exclusive
              lifestyle perks. With a Boutique NFT Market Place, Quint Shop and
              more!
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 offset-lg-1">
          <div className="footer-item">
            <h2>Applications</h2>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Super Staking Platform</a>
              </li>
              <li>
                <a href="#">Boutique NFT Marketplace</a>
              </li>
              <li>
                <a href="#">The Quint Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="footer-item">
            <h2>Testimonials</h2>
            <ul>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Celebrity Tweets</a>
              </li>
              <li>
                <a href="#">Real World Events</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="footer-item">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">Whitepaper </a>
              </li>
              <li>
                <a href="#">Brand Guide</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-item2">
        <p>© 2022 QUINT</p>
      </div>
    </div>
  </footer>
  {/* footer-area end */}
</>

  </>
}

export default Footer