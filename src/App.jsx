import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Header from "./Components/Header";
// import Bottle from "./Components/Bottle/Bottle";

const bottlesPromise = fetch("../public/bottles.json").then((response) =>
  response.json()
);

function App() {
  return (
    <>
    <Header></Header>
      <Suspense fallback={<p className="text-4xl font-bold text-cyan-200 text-center">Please wait...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      {/* <Bottle></Bottle> */}
    </>
  );
}

export default App;
