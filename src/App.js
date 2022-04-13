import React, { useState } from "react";
import "./App.css";
// import black from './black.png';
// import white from './white.png';
// import green from './green.png';
// import brown from './brown.png';

const data = [
  {
    id: "1",
    key: "1",
    title: "Sofa 1",
    text: "Green Sofa",
    color:"https://p.kindpng.com/picc/s/128-1289659_green-circle-png-page-green-bubbles-speech-png.png",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "2",
    key: "2",
    title: "Sofa 2",
    color:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png",
    text: "Brown Sofa",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "3",
    key: "3",
    title: "Sofa 3",
    color:"https://e7.pngegg.com/pngimages/666/994/png-clipart-line-circle-circle-white-circle-thumbnail.png",
    text: " White Sofa",
    img: "https://images.unsplash.com/photo-1616627974584-fe184eee3645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1063&q=80"
  },
  {
    id: "4",
    key: "4",
    title: "Sofa 4",
    color:"https://freepikpsd.com/file/2019/10/grey-circle-png-6-1-Transparent-Images.png",
    text: "Black Sofa",
    img: "https://images.unsplash.com/photo-1616464916566-c09efd4272a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80"
  }
];

export default function App() {
  const [toggle, setToggle] = useState("1");
  return (
    <div className="App">
      <h1 style={{color:"grey"}}>click title or the color to see the different sofa</h1>
      <button>Buy now</button>
      <button>Add to cart</button>
      {data.map(({ title, text, key, img,color }) => {
        return (
          <>
            <div className="main" style={{paddingLeft:"20px"}}>
              <div className="text">
                <h1 onClick={() => setToggle(key)}>{title} </h1>
                <img src={color} alt="" onClick={() => setToggle(key)} />
                {toggle === key ? (
                  <>
                    <p>{text}</p>
                  </>
                ) : null}
              </div>

              <div className="img">
                {toggle === key ? (
                  <>
                    <img src={img} key={key} className="photo" />
                  </>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}