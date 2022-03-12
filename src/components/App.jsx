import { useEffect, useState } from "react";
import iconDice from "../images/icon-dice.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

function App() {
  const [adviceData, setAdviceData] = useState({});

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  function fetchNewAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((slip) => {
        setAdviceData(slip);
      });
  }

  return (
    <main className="bg-dark-blue flex justify-center items-center h-screen w-screen">
      <div className="lg:w-[33vw] w-[90vw] relative font-bold bg-dark-greyish-blue flex flex-col justify-center items-center rounded-lg">
        <h1 className="uppercase text-center text-neon-green text-xs tracking-[.2rem] m-8">
          Advice #{adviceData?.slip?.id}
        </h1>
        <p className="text-light-cyan text-center text-2xl w-10/12">
          “{adviceData?.slip?.advice}”
        </p>
        <img
          className={`mt-6 mb-14 lg:w-10/12 lg:content-[url("${dividerDesktop}")]`}
          src={dividerMobile}
          alt="Pattern Divider"
        />
        <button
          type="submit"
          className="absolute -bottom-8 bg-neon-green rounded-full h-16 w-16 flex justify-center items-center hover:shadow-dice-button active:opacity-70"
          onClick={fetchNewAdvice}
        >
          <img src={iconDice} alt="Icon Dice" />
        </button>
      </div>
    </main>
  );
}

export default App;
