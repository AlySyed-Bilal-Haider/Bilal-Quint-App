import React from 'react'
import itemcollections from '../images/25.png';
import Box from '../Modalbox/Box';
function NFTthree() {
  return <>
  <>
  {/* Button trigger modal */}
  <Box/>
  {/* modal end */}
  {/* platform-area start */}
  <div className="platform-area platform-area2">
    <div className="container">
      <div className="inner-container2">
        <a href="#">
          <i className="fas fa-chevron-left" />
          Explore
        </a>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="collection-item5">
            <img src={itemcollections} alt="" />
            <a href="#">
              <i className="fas fa-heart" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="collection-item6">
            <div className="collection-item6-inner">
              <div className="collection-item-inner10">
                <div></div>
                <h2>
                  QUINTCAR <span>Collection Name 1</span>
                </h2>
              </div>
              <div className="collection-item6-inner2">
                <ul>
                  <li>
                    <a className="active" href="#">
                      <i className="fas fa-share-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collection-item2-inner2">
              <h6 style={{ marginBottom: 20 }}>
                Steerable machine that is peddled by the rider’s feet. The
                wheels are mounted in-line in a metal frame, with the front
                wheel held in a rotatable fork. The rider sits on a saddle and
                steers by leaning and turning handlebars that are attached to
                the fork. Steerable machine that is peddled by the rider’s feet.
                The wheels are mounted in-line in a metal frame, with the front
                wheel held in a rotatable fork. The rider sits on a saddle and
                steers by leaning and turning handlebars that are attached to
                the fork
              </h6>
              <h4>Current price</h4>
              <h3>10,000 QUINT</h3>
              <p>$7,753</p>
              <h5>Sale Ends In</h5>
            </div>
            <div className="collection-item2-inner3 collection-item2-inner35">
              <div className="time-area">
                <div>
                  <span className="hours3" /> h
                </div>
              </div>
              <div className="time-area">
                <div>
                  <span className="minutes3" /> m
                </div>
              </div>
              <div className="time-area">
                <div>
                  <span className="seconds3" /> s
                </div>
              </div>
            </div>
            <div className="collection-item6-inner3  collection-item6-inner40">
              <ul>
                <li>
                  <a href="#">
                    Attributes
                    <i className="fas fa-chevron-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Contract
                    <i className="fas fa-chevron-down" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="collection-item6-inner4">
              <ul>
                <li>
                  <a href="#">Buy NFT</a>
                </li>
                <li>
                  <a href="#">Buy QUINT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* platform-area end */}
</>

  </>
}

export default NFTthree