import React from 'react'
import Box from '../Modalbox/Box';
function Quintessential() {
  return <>
  <>
  {/* Button trigger modal */}
  <Box/>
  {/* modal end */}
  {/* platform-area start */}
  <div className="platform-area">
    <div className="container">
      <div className="inner-container">
        <h2>
          <a href="#">
            <i className="fas fa-angle-left" />
          </a>
          My Staking History
        </h2>
      </div>
      <div className="history-area">
        <div className="table-responsive">
          <div className="history-item">
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <th>Start Date</th>
                  <th>Amount</th>
                  <th>Interest</th>
                  <th>Penalty</th>
                  <th>Status</th>
                  <th>End Date</th>
                  <th>Txn id</th>
                </tr>
                <tr>
                  <td>21-06-2022</td>
                  <td>10000</td>
                  <td>0.0008</td>
                  <td>0.0008</td>
                  <td>Open</td>
                  <td>21-06-2022</td>
                  <td>122414151514123122414151514123122</td>
                </tr>
                <tr>
                  <td>21-06-2022</td>
                  <td>10000</td>
                  <td>0.0008</td>
                  <td>0.0008</td>
                  <td>Open</td>
                  <td>21-06-2022</td>
                  <td>122414151514123122414151514123122</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* platform-area end */}
</>

  </>
}

export default Quintessential