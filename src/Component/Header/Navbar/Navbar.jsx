import React, { useContext } from "react";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../utils";
const styledactivelink = ({ isActive }) => {
  return {
    backgroundColor: isActive ? "#00D9AC" : "#00d9ac00",
    textDecoration: "none",
  };
};
function Navbar() {
  const { account, connect, disconnect } = useContext(AppContext);
  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="row justify-content-xs-center justify-content-around p-md-0 p-1">
            <nav className="navbar navbar-expand-md  col-md-0 col-11 m-xs-auto m-md-0 ">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="" />
              </a>
              <div
                className="hamburger hamburger--spring navbar-toggler"
                data-toggle="collapse"
                data-target="#menu1"
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
              <div className="collapse navbar-collapse" id="menu1">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      style={styledactivelink}
                      to="/"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Staking"
                      style={styledactivelink}
                    >
                      Staking
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Convintionalstaking"
                      style={styledactivelink}
                    >
                      Convintional staking
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Poolstaking"
                      style={styledactivelink}
                    >
                    Poolstaking
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/NFTcollections"
                      style={styledactivelink}
                    >
                     NFTcollections
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">Marketplace</a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
                <div className="ml-auto">
                  {account ? (
                    <div className="menu-right" onClick={disconnect}>
                      <a style={{ cursor: "pointer" }}>
                        {account.slice(0, 4) + "..." + account.slice(-6)}
                      </a>
                    </div>
                  ) : (
                    <div className="menu-right" onClick={connect}>
                      <a style={{ cursor: "pointer" }}>Connect Wallet</a>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
