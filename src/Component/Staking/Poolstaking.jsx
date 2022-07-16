import React from "react";
import pool from "../images/15.png";
import raffleitem from "../images/17.png";
import raffle_item2 from "../images/16.png";
import inner_item4 from "../images/18.png";
import Box from "../Modalbox/Box";
function Poolstaking() {
  return (
    <>
      {/* Button trigger modal */}
      <Box />
      {/* modal end */}
      {/* platform-area start */}
      <div className="platform-area">
        <div className="container">
          <div className="inner-container">
            <h2>
              <a href="#">
                <i className="fas fa-angle-left" />
              </a>
              Luxury Raffle Pool
            </h2>
          </div>
          <div className="raffle-area">
            <div className="raffle-item">
              <h2>
                STAKE QUINT WORTH 500$ OR MORE <br />
                AND GET ENTRY TO THE LUXURY RAFFLE
              </h2>
              <p>STAKE MORE, WIN MORE</p>
              <img src={pool} alt="" />
            </div>
            <div
              className="raffle-item2"
              style={{
                backgroundImage: `url(${raffle_item2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
              <div className="raffle-item2-inner">
                <div className="raffle-item2-inner2">
                  <h6>POOL A</h6>
                  <h2>
                    2 HUBLOT DIAMOND FROSTED WATCHES <br />
                    WORTH $120,000 each
                  </h2>
                  <div className="platform-item-inner">
                    <h6>Pool Ends in</h6>
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
                  <div className="raffle-item2-inner3">
                    <div>
                      <h5>You Have Staked</h5>
                      <h3>Q 0.00</h3>
                    </div>
                    <div>
                      <h5>Tickets</h5>
                      <h3>0</h3>
                    </div>
                  </div>
                </div>
                <div className="raffle-item2-inner4">
                  <img src={raffleitem} alt="" />
                </div>
              </div>
              <div className="raffle-item2-inner5">
                <div className="raffle-item2-inner6">
                  <form>
                    <input type="text" name="" placeholder="Enter Quint" />
                  </form>
                  <ul>
                    <li>
                      <a href="#">Stake &amp; Enter Pool</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-download" />
                        Withdraw
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="raffle-item2-inner7">
                  <a href="#">
                    <i className="fas fa-ellipsis-h" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="raffle-item2 raffle-item3"
              style={{
                backgroundImage: `url(${inner_item4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
              <div className="raffle-item2-inner">
                <div className="raffle-item2-inner2">
                  <h6>POOL B</h6>
                  <h2>COMING SOON</h2>
                  <div className="platform-item-inner">
                    <h6>Pool Ends in</h6>
                    <ul id="countdown">
                      <li>
                        <span className="days4" /> D
                      </li>
                      <li>
                        <span className="hours4" /> H
                      </li>
                      <li>
                        <span className="minutes4" /> M
                      </li>
                      <li>
                        <span className="seconds4" /> S
                      </li>
                    </ul>
                  </div>
                  <div className="raffle-item2-inner3">
                    <div>
                      <h5>You Have Staked</h5>
                      <h3>Q 0.00</h3>
                    </div>
                    <div>
                      <h5>Tickets</h5>
                      <h3>0</h3>
                    </div>
                  </div>
                </div>
                <div className="raffle-item2-inner4">
                  <img src={raffleitem} alt="" />
                </div>
              </div>
              <div className="raffle-item2-inner5">
                <div className="raffle-item2-inner6">
                  <form>
                    <input type="text" name="" placeholder="Enter Quint" />
                  </form>
                  <ul>
                    <li>
                      <a href="#">Stake &amp; Enter Pool</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-download" />
                        Withdraw
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="raffle-item2-inner7">
                  <a href="#">
                    <i className="fas fa-ellipsis-h" />
                  </a>
                </div>
              </div>
            </div>
            <div className="raffle-item4">
              <h2>HOW TO PARTICIPATE</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="raffle-item4-inner">
                    <h3>BUY QUINT</h3>
                    <p>
                      Buy/Hold the required amount of <br />
                      QUINT tokens in the connected wallet
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="raffle-item4-inner">
                    <h3>STAKE &amp; WAIT FOR THE DRAW</h3>
                    <p>
                      The draw happens on the 22nd day after <br />
                      the pool ends
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="raffle-item4-inner">
                    <h3>CHECK THE WINNER</h3>
                    <p>
                      The Winner Wallet address will be revealed
                      <br /> on the draw day
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="raffle-item5">
              <h2>Draw Instructions:</h2>
              <ul>
                <li>
                  &gt; Any Quint holder with a minimum of 500 QUINT can choose
                  to participate in the Luxury Raffle pool.
                </li>
                <li>
                  &gt; When a person stakes 500 QUINT tokens, he will get a
                  guaranteed spot in the Luxury Raffle pool.
                </li>
                <li>
                  &gt; For every 500 QUINT, 1 spot is guaranteed. So if a person
                  stakes 5000 tokens in a pool, he/she will have 10
                  spots/tickets in the particular pool.
                </li>
                <li>
                  &gt; The more the tickets in a particular pool, the higher the
                  chances of winning the Luxury Raffle Rewards.
                </li>
                <li>&gt; Every pool will take place for 21 days. </li>
                <li>
                  &gt; The Staker can withdraw the prize at the end of the
                  event. if the Staker has won any draw, then they will receive
                  the same to their wallet
                </li>
                <li>
                  &gt; Others can withdraw the compounded tokens or re-stake
                  them in the next pool.
                </li>
              </ul>
            </div>
            <div className="raffle-item6">
              <h2>HISTORY</h2>
              <div className="history-area">
                <div className="table-responsive">
                  <div className="history-item">
                    <table cellPadding={0} cellSpacing={0}>
                      <tbody>
                        <tr>
                          <th>Pool</th>
                          <th>Draw Date</th>
                          <th>Reward</th>
                          <th>Winner</th>
                        </tr>
                        <tr>
                          <td>Pool A </td>
                          <td>21-06-2022</td>
                          <td>2 HUBLOT DIAMOND FROSTED WATCHES</td>
                          <td>0x64619f611248256F7F4b72fE83872F89d5d60d64</td>
                        </tr>
                        <tr>
                          <td>Pool A </td>
                          <td>21-06-2022</td>
                          <td>2 HUBLOT DIAMOND FROSTED WATCHES</td>
                          <td>0x64619f611248256F7F4b72fE83872F89d5d60d64</td>
                        </tr>
                        <tr>
                          <td>Pool A </td>
                          <td>21-06-2022</td>
                          <td>2 HUBLOT DIAMOND FROSTED WATCHES</td>
                          <td>0x64619f611248256F7F4b72fE83872F89d5d60d64</td>
                        </tr>
                        <tr>
                          <td>Pool A </td>
                          <td>21-06-2022</td>
                          <td>2 HUBLOT DIAMOND FROSTED WATCHES</td>
                          <td>0x64619f611248256F7F4b72fE83872F89d5d60d64</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* platform-area end */}
    </>
  );
}

export default Poolstaking;
