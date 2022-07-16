import React from 'react'
import NFTcollectionsimg from '../images/27.png';
import NFTcollectionsitems from '../images/21.png';
import Clubarea from '../images/26.png';
import Box from '../Modalbox/Box';
function NFTcollections() {
  return <>
  <>
  <Box/>
  {/* platform-area start */}
  <div className="platform-area platform-area3">
    <div className="container">
      <div className="inner-container2">
        <a href="#">
          <i className="fas fa-chevron-left" />
          Home
        </a>
      </div>
      <div className="club-area" style={{
         backgroundImage: `url(${Clubarea})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         backgroundPosition: "center"
      }}>
        <div className="club-item">
          <div>
            <img src={NFTcollectionsimg} alt="" />
          </div>
          <h2>BORED APE YATCH CLUB</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-6 col-lg-3">
          <div className="collection-item-inner8">
            <a href="#" className="collection-item-inner20">
              <div className="collection-item-inner9">
                <img src={NFTcollectionsitems} alt="" />
              </div>
            </a>
            <div className="collection-item-inner15">
              <a href="#" className="collection-item-inner20">
                <div className="collection-item-inner10">
                  <div></div>
                  <h2>
                    QUINTCAR <span>Collection Name 1</span>
                  </h2>
                </div>
                <h3>10,000 QUINT</h3>
                <p>$7,753</p>
              </a>
              <div className="collection-item-inner11 collection-item-inner16">
                <a href="#" className="collection-item-inner20"></a>
                <a href="#">Sold out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 col-lg-3">
          <div className="collection-item-inner8">
            <a href="#" className="collection-item-inner20">
              <div className="collection-item-inner9">
                <img src={NFTcollectionsitems} alt="" />
              </div>
            </a>
            <div className="collection-item-inner15">
              <a href="#" className="collection-item-inner20">
                <div className="collection-item-inner10">
                  <div></div>
                  <h2>
                    QUINTCAR <span>Collection Name 1</span>
                  </h2>
                </div>
                <h3>10,000 QUINT</h3>
                <p>$7,753</p>
              </a>
              <div className="collection-item-inner11">
                <a href="#" className="collection-item-inner20"></a>
                <a href="#">Coming Soon</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 col-lg-3">
          <div className="collection-item-inner8">
            <a href="#" className="collection-item-inner20">
              <div className="collection-item-inner9">
                <img src={NFTcollectionsitems} alt="" />
              </div>
            </a>
            <div className="collection-item-inner15">
              <a href="#" className="collection-item-inner20">
                <div className="collection-item-inner10">
                  <div></div>
                  <h2>
                    QUINTCAR <span>Collection Name 1</span>
                  </h2>
                </div>
                <h3>10,000 QUINT</h3>
                <p>$7,753</p>
              </a>
              <div className="collection-item-inner11">
                <a href="#" className="collection-item-inner20"></a>
                <a href="#">Coming Soon</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 col-lg-3">
          <div className="collection-item-inner8">
            <a href="#" className="collection-item-inner20">
              <div className="collection-item-inner9">
                <img src={NFTcollectionsitems} alt="" />
              </div>
            </a>
            <div className="collection-item-inner15">
              <a href="#" className="collection-item-inner20">
                <div className="collection-item-inner10">
                  <div></div>
                  <h2>
                    QUINTCAR <span>Collection Name 1</span>
                  </h2>
                </div>
                <h3>10,000 QUINT</h3>
                <p>$7,753</p>
              </a>
              <div className="collection-item-inner11">
                <a href="#" className="collection-item-inner20"></a>
                <a href="#">Coming Soon</a>
              </div>
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

export default NFTcollections;