import React from "react";
import superstaking from "../images/01.png";
import sliderimg from "../images/02.png";
import historypic from "../images/03.png";
import platformitem from "../images/06.png";
import bgplatformitem3 from "../images/05.png";
import platformbanner2 from "../images/04.png";
import Box from "../Modalbox/Box";
import { Link } from "react-router-dom";
function Staking() {
  return (
    <>
      {/* Button trigger modal */}
      <Box />
      {/* modal end */}
      {/* platform-area start */}
      <div className="platform-area">
        <div className="container">
          <div className="inner-container">
            <h3>Super Staking Platform</h3>
            <ul>
              <li>
                <a href="#">
                  <img src={superstaking} alt="" />
                  Redeem
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={historypic} alt="" />
                  History
                </a>
              </li>
            </ul>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={sliderimg} alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={sliderimg} alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={sliderimg} alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={sliderimg} alt="" />
              </div>
            </div>
          </div>
          {/* start platform */}
          <div className="platform-area-inner row justify-content-around p-md-0 p-xs-2">
            <div className="platform-item-inner2 col-md-4 col-12 m-xs-auto">
              <Link
                to="/Convintionalstaking"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="platform-item"
                  style={{
                    backgroundImage: `url(${platformbanner2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: " center",
                  }}
                >
                  <h2>CONVENTIONAL POOLS</h2>
                  <p>CRYPTO REWARDS</p>
                </div>
              </Link>
            </div>
            <div className="platform-item-inner3 col-md-8  col-12 m-xs-auto mt-xs-2">
              <div
                className="platform-item"
                style={{
                  backgroundImage: `url(${bgplatformitem3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              >
                <h2>QUINTESSENTIAL POOLS</h2>
                <p>EXOTIC HOLIDAYS &amp; MUCH MORE</p>
              </div>
            </div>
          </div>
          {/* end platform */}
          <div
            className="platform-item"
            style={{
              backgroundImage: `url(${platformitem})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: " center",
            }}
          >
            <h2>LUXURY RAFFLE POOLS</h2>
            <p>GET A CHANCE TO WIN REAL WORLD LUXURY PRICES</p>
            <div className="platform-item-inner">
              <h6>Current Pool Ends in</h6>
              <ul id="countdown">
                <li>
                  <span className="days3" /> D
                </li>
                <li>
                  <span className="hours3" /> H
                </li>
                <li>
                  <span className="minutes3" /> M
                </li>
                <li>
                  <span className="seconds3" /> S
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* platform-area end */}
    </>
  );
}

export default Staking;
