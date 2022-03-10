function App() {
  return (
    <main className="bg-dark-blue flex justify-center items-center h-screen w-screen">
      <div className="relative font-bold bg-dark-greyish-blue w-[90vw] flex flex-col justify-center items-center rounded-lg">
        <h1 className="uppercase text-center text-neon-green text-xs tracking-[.2rem] m-8">
          Advice #117
        </h1>
        <p className="text-light-cyan text-center text-2xl w-11/12">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <img
          className="mt-6 mb-14"
          src="./pattern-divider-mobile.svg"
          alt="Pattern Divider"
        />
        <button
          type="submit"
          className="absolute -bottom-8 bg-neon-green rounded-full h-16 w-16 flex justify-center items-center hover:shadow-dice-button active:opacity-70"
        >
          <img src="./icon-dice.svg" alt="Icon Dice" />
        </button>
      </div>
    </main>
  );
}

export default App;
