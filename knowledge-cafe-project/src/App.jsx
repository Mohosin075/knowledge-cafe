import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";
import Bookmarks from "./components/Bookmarks/Bookmarks";


function App() {
  const [count, setCount] = useState(0);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <div className="lg:flex gap-8 justify-between  py-5">
        <div className='lg:w-8/12'>
          {carts.map((cart) => (
            <Carts cart={cart} key={cart.id}></Carts>
          ))}
        </div>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}
export default App;
