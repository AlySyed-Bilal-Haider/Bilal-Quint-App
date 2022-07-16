import React, { useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import itemprice from "../../images/08.png";
import quintitem from "../../images/09.png";
import quinitembnb from "../../images/13.png";
import {
  useLpContract,
  useStakingContract,
  useTokenContract,
} from "../../../ConnectivityAss/hooks";
import { AppContext, gasEstimationForAll } from "../../../utils";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { toast } from "react-toastify";
import { stakingAddress } from "../../../ConnectivityAss/environment";
import Loading from "../loading";
import RealtimeTokenReward from "./realtimeTokenReward";
import RealtimeLpReward from "./realtimeLpReward";
import UnstakeModal from "./withdrawModal";
export default function SimpleAccordion() {
  const [expandedPanel, setExpandedPanel] = useState(false);
  const [panelstate, setPanelState] = useState(true);
  const { account, signer } = useContext(AppContext);
  const stakingContract = useStakingContract(signer);
  const tokenContract = useTokenContract(signer);
  const lpContract = useLpContract(signer);
  const [panelstatesecond, setPanelstatesecond] = useState(true);
  const [panelstateThird, setPanelthird] = useState(true);
  const [totalStakers, settotalStakers] = useState(0);
  const [totalStakedLp, settotalStakedLp] = useState(0);
  const [totalStakedToken, settotalStakedToken] = useState(0);
  const [totalWithdrawnLp, settotalWithdrawnLp] = useState(0);
  const [totalWithdrawnToken, settotalWithdrawnToken] = useState(0);
  const [userStakedLp, setuserStakedLp] = useState(0);
  const [userStakedToken, setuserStakedToken] = useState(0);
  const [userTotalWithdrawnLp, setuserTotalWithdrawnLp] = useState(0);
  const [userTotalWithdrawnToken, setuserTotalWithdrawnToken] = useState(0);
  const [tokenAmount, settokenAmount] = useState("");
  const [lpAmount, setlpAmount] = useState("");
  const [loading, setloading] = useState(false);
  const [withdrawModal, setwithdrawModal] = useState(false);
  const [index, setindex] = useState(0);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
    isExpanded ? setPanelState(false) : setPanelState(true);
    isExpanded ? setPanelstatesecond(true) : setPanelstatesecond(false);
    isExpanded ? setPanelthird(true) : setPanelthird(false);
  };
  const handleAccordionChangeSecond = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
    isExpanded ? setPanelstatesecond(false) : setPanelstatesecond(true);
    isExpanded ? setPanelState(true) : setPanelState(false);
    isExpanded ? setPanelthird(true) : setPanelthird(false);
  };
  const handleAccordionChangethird = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
    isExpanded ? setPanelthird(false) : setPanelthird(true);
    isExpanded ? setPanelstatesecond(true) : setPanelstatesecond(false);
    isExpanded ? setPanelState(true) : setPanelState(false);
  };

  const init = async () => {
    try {
      const [
        totalstakers,
        totalstakedlp,
        totalstakedtoken,
        totalwithdrawnlp,
        totalwithdrawntoken,
        tokenDecimals,
        lpDecimals,
      ] = await Promise.all([
        stakingContract.totalStakers(),
        stakingContract.totalStakedLp(),
        stakingContract.totalStakedToken(),
        stakingContract.totalWithdrawanLp(),
        stakingContract.totalWithdrawanToken(),
        tokenContract.decimals(),
        lpContract.decimals(),
      ]);
      settotalStakers(+totalstakers);
      settotalStakedLp(formatUnits(totalstakedlp, lpDecimals));
      settotalStakedToken(formatUnits(totalstakedtoken, tokenDecimals));
      settotalWithdrawnLp(formatUnits(totalwithdrawnlp, lpDecimals));
      settotalWithdrawnToken(formatUnits(totalwithdrawntoken, tokenDecimals));
      if (account) {
        const [
          { _amount: stakedLp },
          { _amount: stakedToken },
          { _totalWithdrawanLp, _totalWithdrawanToken },
        ] = await Promise.all([
          stakingContract.userLpStakeInfo(account),
          stakingContract.userTokenStakeInfo(account),
          stakingContract.getUserInfo(account),
        ]);
        setuserStakedLp(formatUnits(stakedLp, lpDecimals));
        setuserStakedToken(formatUnits(stakedToken, tokenDecimals));
        setuserTotalWithdrawnLp(formatUnits(_totalWithdrawanLp, lpDecimals));
        setuserTotalWithdrawnToken(
          formatUnits(_totalWithdrawanToken, tokenDecimals)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (stakingContract) {
      init();
    }
  }, [stakingContract, account]);

  const stakeTokenHandler = async () => {
    try {
      console.log("called");

      if (!account) {
        toast.error("Please connect your wallet");
      } else if (!tokenAmount) {
        toast.error("Please enter token amount");
      } else if (+tokenAmount <= 0 || isNaN(+tokenAmount)) {
        toast.error("Please enter valid token amount");
      } else {
        setloading(true);
        const tokenDecimals = await tokenContract.decimals();
        let data = [stakingAddress, parseUnits(tokenAmount, tokenDecimals)];
        let fn = tokenContract.estimateGas.approve;
        let tx = await tokenContract.approve(...data, {
          gasLimit: gasEstimationForAll(account, fn, data),
        });
        await tx.wait();
        let data1 = [parseUnits(tokenAmount, tokenDecimals), "0"];
        let fn1 = stakingContract.estimateGas.stake;
        let tx1 = await stakingContract.stake(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();

        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const stakeLpHandler = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet");
      } else if (!lpAmount) {
        toast.error("Please enter LP Token amount");
      } else if (+lpAmount <= 0 || isNaN(+lpAmount)) {
        toast.error("Please enter valid LP Token amount");
      } else {
        setloading(true);
        const tokenDecimals = await lpContract.decimals();
        let data = [stakingAddress, parseUnits(lpAmount, tokenDecimals)];
        let fn = lpContract.estimateGas.approve;
        let tx = await lpContract.approve(...data, {
          gasLimit: gasEstimationForAll(account, fn, data),
        });
        await tx.wait();
        let data1 = [parseUnits(lpAmount, tokenDecimals), "1"];
        let fn1 = stakingContract.estimateGas.stake;
        let tx1 = await stakingContract.stake(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const restakeTokenHandler = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);

        let data1 = ["0"];
        let fn1 = stakingContract.estimateGas.reStake;
        let tx1 = await stakingContract.reStake(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const restakeLpHandler = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);

        let data1 = ["1"];
        let fn1 = stakingContract.estimateGas.reStake;
        let tx1 = await stakingContract.reStake(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const claimTokenHandler = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);

        let data1 = ["0"];
        let fn1 = stakingContract.estimateGas.claim;
        let tx1 = await stakingContract.claim(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const claimLpHandler = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);

        let data1 = ["1"];
        let fn1 = stakingContract.estimateGas.claim;
        let tx1 = await stakingContract.claim(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const withdrawTokenHandler = async () => {
    try {
      console.log("token called");
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);

        let data1 = ["0"];
        let fn1 = stakingContract.estimateGas.withdraw;
        let tx1 = await stakingContract.withdraw(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };
  const withdrawLpHandler = async () => {
    try {
      console.log("lp called");
      if (!account) {
        toast.error("Please connect your wallet");
      } else {
        setloading(true);
        let data1 = ["1"];
        let fn1 = stakingContract.estimateGas.withdraw;
        let tx1 = await stakingContract.withdraw(...data1, {
          gasLimit: gasEstimationForAll(account, fn1, data1),
        });
        await tx1.wait();
        init();
        toast.success("Success! Transaction Confirmed.");
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
      setloading(false);
    }
  };

  return (
    <div
      className="table-responsive"
      style={{
        marginTop: "10px",
        margin: "auto",
        width: "95%",
        paddingBottom: "5px",
        minHeight: "300px",
      }}
    >
      <UnstakeModal
        open={withdrawModal}
        loading={loading}
        setOpen={setwithdrawModal}
        withdrawTokenHandler={withdrawTokenHandler}
        withdrawLpHandler={withdrawLpHandler}
        index={index}
      />
      <Loading loading={loading} />
      <Accordion
        className={`accordion-area10 ${
          panelstate ? "accodianfirst" : "accodiantab"
        }`}
        expanded={expandedPanel === "panel1"}
        onChange={handleAccordionChange("panel1")}
        sx={{ borderRadius: "20px" }}
      >
        <div className="accordion-area2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white", mr: 6 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ borderRadius: "4px" }}
          >
            {/* <Typography>Accordion 1</Typography> */}
            <div className="ziehharmonika" style={{ height: "50px" }}>
              <h3 className="active" style={{ marginTop: "-18px" }}>
                <div className="quint-item">
                  <div>
                    <img src={quintitem} alt="" />
                  </div>
                  <span>QUINT</span>
                </div>
                <div className="quint-item2">
                  <ul>
                    <li>{totalStakers}</li>
                    <li>15%</li>
                    <li>{(+totalStakedToken).toFixed(4)}</li>
                    <li>{(+totalWithdrawnToken).toFixed(4)}</li>
                  </ul>
                </div>
                <div className="quint-item4">
                  <a
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={claimTokenHandler}
                  >
                    <i className="fas fa-download" />
                    Claim
                  </a>
                </div>
              </h3>
            </div>
          </AccordionSummary>
        </div>
        <AccordionDetails className="accordion-area10">
          <div className="accordion-area2">
            <div className="ziehharmonika">
              <div style={{ display: "block" }}>
                <div className="quint-item3">
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Staked</h2>
                    <h2>Q {userStakedToken}</h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Reward</h2>
                    <h2>
                      Q <RealtimeTokenReward />
                    </h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Total Claimed</h2>
                    <h2>Q {userTotalWithdrawnToken}</h2>
                  </div>
                  <div className="quint-item3-inner2">
                    <div>
                      <form>
                        <input
                          type="text"
                          value={tokenAmount}
                          onChange={(e) => settokenAmount(e.target.value)}
                          placeholder="Enter Quint"
                        />
                      </form>
                      <ul>
                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={stakeTokenHandler}
                          >
                            Stake
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={restakeTokenHandler}
                          >
                            Compound
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={() => {
                              setindex(0);
                              setwithdrawModal(true);
                            }}
                          >
                            Unstake
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={`accordion-area10 ${
          panelstatesecond ? "accodianfirst" : "accodiantab"
        }`}
        expanded={expandedPanel === "panel2"}
        onChange={handleAccordionChangeSecond("panel2")}
        sx={{ borderRadius: "20px" }}
      >
        <div className="accordion-area2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white", mr: 6 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ borderRadius: "4px" }}
          >
            {/* <Typography>Accordion 1</Typography> */}
            <div className="ziehharmonika" style={{ height: "50px" }}>
              <h3 className="active" style={{ marginTop: "-18px" }}>
                <div className="quint-item">
                  <div>
                    <img src={quinitembnb} alt="" />
                  </div>
                  <span>QUINT/BNB</span>
                </div>
                <div className="quint-item2">
                  <ul>
                    <li>{totalStakers}</li>
                    <li>33%</li>
                    <li>{(+totalStakedLp).toFixed(4)}</li>
                    <li>{(+totalWithdrawnLp).toFixed(4)}</li>
                  </ul>
                </div>
                <div className="quint-item4 mr-md-0 mr-xs-2">
                  <a
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={claimLpHandler}
                  >
                    <i className="fas fa-download" />
                    Claim
                  </a>
                </div>
              </h3>
            </div>
          </AccordionSummary>
        </div>
        <AccordionDetails className="accordion-area10">
          <div className="accordion-area2">
            <div className="ziehharmonika">
              <div style={{ display: "block" }}>
                <div className="quint-item3">
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Staked</h2>
                    <h2>Q {userStakedLp}</h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Reward</h2>
                    <h2>
                      Q <RealtimeLpReward />
                    </h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h2 style={{ fontSize: "15px" }}>Total Claimed</h2>
                    <h2>Q {userTotalWithdrawnLp}</h2>
                  </div>
                  <div className="quint-item3-inner2">
                    <div>
                      <form>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter LP Quint"
                          value={lpAmount}
                          onChange={(e) => setlpAmount(e.target.value)}
                        />
                      </form>
                      <ul>
                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={stakeLpHandler}
                          >
                            Stake
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={restakeLpHandler}
                          >
                            Compound
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ cursor: "pointer", color: "white" }}
                            onClick={() => {
                              setindex(1);
                              setwithdrawModal(true);
                            }}
                          >
                            Unstake
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion 
       className={`accordion-area10 ${panelstateThird?"accordianthird" : "accodiantab"}`}
       expanded={expandedPanel === 'panel3'}
        onChange={handleAccordionChangethird('panel3')} sx={{borderRadius:'20px'}}>
        <div className="accordion-area2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white',mr:6}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{borderRadius:'4px'}}
        >
          <Typography>Accordion 1</Typography>
          <div className="ziehharmonika" style={{height:"50px"}}> 
          <h3 className="active" style={{marginTop:'-18px'}}>
                <div className="quint-item">
                  <div>
                    <img src={quinitembnb} alt="" />
                  </div>
                  <span>QUINT</span>
                </div>
                <div className="quint-item2">
                  <ul>
                    <li>$56M</li>
                    <li>50.3%</li>
                    <li>Q200K</li>
                    <li>Q2.6789</li>
                  </ul>
                </div>
                <div className="quint-item4">
                  <a style={{cursor:"pointer"}}>
                    <i className="fas fa-download" />
                    Claim
                  </a>
                </div>
              </h3>
              </div>
        </AccordionSummary>
        </div>
        <AccordionDetails className="accordion-area10">
          <div className="accordion-area2">
        <div className="ziehharmonika" >
              <div style={{ display: "block" }}>
                <div className="quint-item3">
                  <div className="quint-item3-inner">
                    <h4>Deposit</h4>
                    <h2>
                      Q 24,000.77 <span>$5,562.34</span>
                    </h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h4>Share</h4>
                    <h2>
                      0.0007 <span>%</span>
                    </h2>
                  </div>
                  <div className="quint-item3-inner">
                    <h4>Earnings</h4>
                    <h2>
                      Q 26,789<span>$20.56</span>
                    </h2>
                  </div>
                  <div className="quint-item3-inner2">
                    <div>
                      <form>
                        <input type="text" name="" placeholder="Enter Quint" />
                      </form>
                      <ul>
                        <li>
                          <a style={{cursor:"pointer"}}>Stake</a>
                        </li>
                        <li>
                          <a style={{cursor:"pointer"}}>-</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a style={{cursor:"pointer"}}>
                        <i className="fas fa-ellipsis-h" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
