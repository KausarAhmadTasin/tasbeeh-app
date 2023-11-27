import { useState } from "react";
import "./App.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [counTasbeeh, setCountTasbeeh] = useState(0);
  const [countTahmeed, setCountTahmeed] = useState(0);
  const [countTakbeer, setCountTakbeer] = useState(0);
  
  
  const incrementCount = (incre, setIncrement) => {
    incre >= 33 ? setIncrement(33) : setIncrement(incre + 1);
  };

  const decrementCount = (decre, setDecrement) => {
    decre <= 0 ? setDecrement(0) : setDecrement(decre - 1);
  };
  
  const resetCount = (reset) => {
    reset(0);
  };

  const resetAllCount = () => {
    setCountTasbeeh(0);
    setCountTahmeed(0);
    setCountTakbeer(0);
  }

  

  return (
    <>
      <div className="all-cards">
      <div className="card">
          <h1>سُبْحَانَ ٱللَّٰهِ</h1>

          <h3>{counTasbeeh}</h3>
          <div className="icons">
            <div onClick={()=> decrementCount(counTasbeeh, setCountTasbeeh)}>
              <FaMinus />
            </div>
            <div title="Reset" onClick={()=> resetCount(setCountTasbeeh)}>
              <GrPowerReset />
            </div>
            <div onClick={()=> incrementCount(counTasbeeh, setCountTasbeeh)}>
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="card">
          <h1>ٱلْحَمْدُ لِلّٰهِ</h1>

          <h3>{countTahmeed}</h3>
          <div className="icons">
            <div onClick={()=> decrementCount(countTahmeed, setCountTahmeed)}>
              <FaMinus />
            </div>
            <div title="Reset" onClick={()=> resetCount(setCountTahmeed)}>
              <GrPowerReset />
            </div>
            <div onClick={()=> incrementCount(countTahmeed, setCountTahmeed)}>
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="card">
          <h1>اللّٰهُ أَكْبَر</h1>

          <h3>{countTakbeer}</h3>
          <div className="icons">
            <div onClick={()=> decrementCount(countTakbeer, setCountTakbeer)}>
              <FaMinus />
            </div>
            <div title="Reset" onClick={()=> resetCount(setCountTakbeer)}>
              <GrPowerReset />
            </div>
            <div onClick={()=> incrementCount(countTakbeer, setCountTakbeer)}>
              <FaPlus />
            </div>
          </div>
        </div>
        
      </div>
      <div className="content-center-flex">
      <button onClick={resetAllCount} className="reset-btn">Reset All<GrPowerReset /></button>
      </div>
      {
          (countTakbeer === 33) &&  (
            <div className="content-center-flex">
              <div className="pop-up">
                <h2>Say one time</h2>
                <h1>لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</h1>                
              </div>
            </div>
          )
      }
    </>
  );
}

export default App;
