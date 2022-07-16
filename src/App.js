import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer/Footer";
// import Shop from "./Component/Shop/Shop";
import NFTcollections from "./Component/Marketplace/Marketplace";
import Staking from "./Component/Staking/Staking";
import Navbar from "./Component/Header/Navbar/Navbar";
import Poolstaking from "./Component/Staking/Poolstaking";
import Convintionalstaking from "./Component/Staking/Convintionalstaking";
import Qunitessential from "./Component/Staking/Qunitessential";
import Quintessential from "./Component/Staking/quintessential";
import NFTone from "./Component/Marketplace/NFTone";
import NFTtwo from "./Component/Marketplace/NFTtwo";
import NFTthree from "./Component/Marketplace/NFTthree";
import NFTfour from "./Component/Marketplace/NFTfour";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Staking" element={<Staking />} />
        <Route exact path="/Poolstaking" element={<Poolstaking />} />
        <Route
          exact
          path="/Convintionalstaking"
          element={<Convintionalstaking />}
        />
        <Route exact path="/Qunitessentialone" element={<Qunitessential />} />
        <Route exact path="/NFTcollections" element={<NFTcollections />} />
        <Route exact path="/NFTone" element={<NFTone />} />
        <Route exact path="/NFTtwo" element={<NFTtwo />} />
        <Route exact path="/Quintessentialtwo" element={<Quintessential />} />
        <Route exact path="/NFTthree" element={<NFTthree />} />
        <Route exact path="/NFTfour" element={<NFTfour />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
