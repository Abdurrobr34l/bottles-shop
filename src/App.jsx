import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
// import Bottle from "./Components/Bottle/Bottle";

const bottlesPromise = fetch("../public/bottles.json").then((response) =>
  response.json()
);

function App() {
  return (
    <>
      <Suspense fallback="Please wait...">
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      {/* <Bottle></Bottle> */}
    </>
  );
}

export default App;
