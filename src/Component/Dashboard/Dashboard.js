import React from 'react'
import Dashboardimg from '../images/14.png';
import ReactPlayer from 'react-player/lazy';
import Box from '../Modalbox/Box';
import { useMediaQuery } from '@mui/material';
function Dashboard() {
  const check=useMediaQuery(('max-width:500px'));
  return <>
  <Box/>
  <div className="platform-area">
  <div className="container py-2 ">
    <div className="inner-container">
      <h3>Dashboard</h3>
    </div>
    <div className="refferal-area">
      <div className="refferal-item" >
      <ReactPlayer
            url= 'video.MP4'
            width='100%'
            height='100%'
            controls = {true}
            playing={true}
            />
        <div className="refferal-item-inner">
          <h6>#124</h6>
          <h2>251,200 QUINT</h2>
          <p>$ 21,000</p>
          <a href="#">
            Refferal id <span>#123536236</span>{" "}
            <img src={Dashboardimg} alt="" />
          </a>
        </div>
      </div>
      <div className="refferal-item2 row   justify-content-around col-12 p-md-0 p-xs-2 " style={{margin:"auto"}}>
        <div className="refferal-item2-inner2 col-md-4  col-12 m-xs-auto m-md-0" >
          <h2>
            QUINT-SWAP{" "}
            <a href="#">
              <i className="fas fa-cog" />
            </a>
          </h2>
          <div className="refferal-item2-inner3">
            <div className="refferal-item2-inner4">
              <p>
                BNB <span>$2,600</span>
              </p>
              <h3>
                4.2 <span>MAX</span>
              </h3>
              <a href="#">
                <i className="fas fa-angle-down" />
              </a>
            </div>
            <div className="refferal-item2-inner4">
              <p style={{ color: "#00D9AC", fontWeight: 600 }}>
                QUINT
                <span style={{ color: "#040319", fontWeight: 400 }}>
                  $2,589
                </span>
              </p>
              <h3 style={{ color: "#00D9AC" }}>
                4500 <span>MAX</span>
              </h3>
            </div>
          </div>
          <div className="refferal-item2-inner5">
            <div>
              <h4>
                <span>Slippage Tolerance</span>
                <i className="fas fa-info" />
              </h4>
              <h4>11%</h4>
            </div>
            <div>
              <h4>
                <span>Minimum Received</span>
                <i className="fas fa-info" />
              </h4>
              <h4>$2,587</h4>
            </div>
          </div>
          <div className="refferal-item2-inner6">
            <a href="#">SWAP</a>
          </div>
        </div>
        <div className="refferal-item2-inner col-md-7 col-12 m-xs-auto m-md-0 ">
          <h2>QUINT CHART </h2>
          <p>COMING SOON</p>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
}

export default Dashboard