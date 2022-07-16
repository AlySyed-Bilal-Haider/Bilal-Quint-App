import React, { useState } from "react";
import { Link } from "react-router-dom";
import itemprice from "../images/08.png";
import Box from "../Modalbox/Box";
import SimpleAccordion from "./Accordian/Accordian";

function Convintionalstaking() {
  // const [firstAccordian,setFirstAccordian]=useState(true)
  return (
    <>
      <Box />
      <div className="platform-area">
        <div className="container">
          <div className="inner-container">
            <h2>
              <Link to="/Staking">
                <i
                  className="fas fa-chevron-left"
                  style={{ fontSize: "22px" }}
                />
              </Link>{" "}
              Conventional Staking Pool
            </h2>
          </div>
          <div className="prize-item prize-item2">
            <div className="prize-item-inner3">
              <div>
                <h5>Token</h5>
              </div>
              <div className="prize-item-inner4">
                <ul>
                  <li>
                    Users
                    <img src={itemprice} alt="" />
                  </li>
                  <li>
                    APR
                    <img src={itemprice} alt="" />
                  </li>
                  <li>Staked</li>
                  <li>Withdrawn</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <SimpleAccordion />
        </div>
      </div>

      {/* platform-area end */}
    </>
  );
}

export default Convintionalstaking;
