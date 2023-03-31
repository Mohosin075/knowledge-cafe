import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";
import Bookmarks from "./components/Bookmarks/Bookmarks";


function App() {
  const [time, setTime] = useState(0);
  const [carts, setCarts] = useState([]);
  const [bookmarks, setBookmark] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleBookMarks=(id)=>{
    
  }
  const handleMarkRead=(id)=>{
    const clickedItem = carts.find(cart=>cart.id===id);
    setTime(time+clickedItem.watch)
  }

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <div className="lg:flex gap-8 justify-between  py-5">
        <div className='lg:w-8/12'>
          {carts.map((cart) => (
            <Carts 
            cart={cart} 
            key={cart.id}
            handleMarkRead={handleMarkRead}
            handleBookMarks={handleBookMarks}
            ></Carts>
          ))}
        </div>
        <div>
          <Bookmarks time={time}></Bookmarks>
        </div>
      </div>
    </div>
  );
}
export default App;
