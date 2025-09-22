import { Suspense, useState } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Header from "./Components/Header";
import LocalStorage from "./Utilitise/LocalStorage";

const bottlesPromise = fetch("../public/bottles.json").then((response) =>
  response.json()
);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart}></Header>
      <Suspense
        fallback={
          <p className="text-4xl font-bold text-cyan-200 text-center">
            Please wait...
          </p>
        }
      >
        <Bottles
          bottlesPromise={bottlesPromise}
          cart={cart}
          setCart={setCart}
        ></Bottles>
      </Suspense>
      <LocalStorage></LocalStorage>
    </>
  );
}

export default App;
