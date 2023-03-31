import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Bookmark from "./components/Bookmark/Bookmark";

function App() {
  const [time, setTime] = useState(0);
  const [carts, setCarts] = useState([]);
  const [bookmarks, setBookmark] = useState([]);
  const [lengthCount, setLengthCount] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleBookMarks = (id) => {
    const bookItem = carts.find(cart=>cart.id===id);
    setBookmark([...bookmarks, bookItem])
    setLengthCount(bookmarks.length + 1)
  };
  const handleMarkRead = (id) => {
    const clickedItem = carts.find((cart) => cart.id === id);
    setTime(time + clickedItem.watch);
  };

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <div className="lg:flex gap-8 justify-between  py-5">
        <div className="lg:w-8/12">
          {carts.map((cart) => (
            <Carts
              cart={cart}
              key={cart.id}
              handleMarkRead={handleMarkRead}
              handleBookMarks={handleBookMarks}
            ></Carts>
          ))}
        </div>
        <div className="lg:w-4/12">
          <div>
          <Bookmarks time={time} lengthCount={lengthCount}></Bookmarks>
          <div className="p-7 bg-[#F3F3F3]">
            {bookmarks.map((cart, index) => (
              <Bookmark cart={cart} key={index}></Bookmark>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
