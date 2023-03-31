import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import PictureSlide1 from "./components/PictureSlide1/PictureSlide1";
import PictureSlide2 from "./components/PictureSlide2/PictureSlide2";
import PictureSlide3 from "./components/PictureSlide3/PictureSlide3";
function App() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const onScroll = (e) => {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop < 500) {
      setFirst(true);
      setSecond(false);
      setThird(false);
    } else if (e.target.scrollTop <= 800) {
      setFirst(false);
      setSecond(true);
      setThird(false);
    } else if (e.target.scrollTop >= 1100) {
      setFirst(false);
      setSecond(false);
      setThird(true);
    }
  };

  return (
    <div id="both">
      {first ? <PictureSlide1 /> : <></>}
      {second ? <PictureSlide2 /> : <></>}
      {third ? <PictureSlide3 /> : <></>}
      <Sidebar onScroll={onScroll} />
    </div>
  );
}

export default App;
