import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Bookmark from "./components/Bookmark/Bookmark";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questions from "./components/Blogs/Blogs";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [time, setTime] = useState(0);
  const [carts, setCarts] = useState([]);
  const [bookmarks, setBookmark] = useState([]);
  const [lengthCount, setLengthCount] = useState(0);
  // fetch JSON data and store data in setCarts
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  // handle bookmark ==> when click bookmark icon then store clicked item
  const handleBookMarks = (id) => {
    const bookItem = carts.find((cart) => cart.id === id);
    const exist = bookmarks.find((mark) => mark.id === id);
    if (!exist) {
      setBookmark([...bookmarks, bookItem]);
      setLengthCount(bookmarks.length + 1);
      toast.success('added successfully!', {
        position: toast.POSITION.TOP_RIGHT
    })
    } else {
      toast.error('Already Exist!', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };
    // handle mark as read ==> when click mark as read - then update total watch time
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
          {/* data pass in carts components */}
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
          <div className="sticky top-1">
            <Bookmarks time={time} lengthCount={lengthCount}></Bookmarks>
            <div className="px-4 pb-2 bg-[#F3F3F3]">
              {/* data pass in bookmark components */}
              {bookmarks.map((cart, index) => (
                <Bookmark cart={cart} key={index}></Bookmark>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* blogs components for some important question */}
      <Blogs></Blogs>
    </div>
  );
}
export default App;
