import React, { useRef } from "react";
import { sliderInfo } from "./NewsData";

const Slider = () => {
  const sliderRef = useRef();
  const prevSlide = () => {
    sliderRef.current.scrollLeft -= 500;
  };
  const nextSlide = () => {
    sliderRef.current.scrollLeft += 500;
  };
  return (
    <>
      <div className="container news_container">
        <div className="news_slider" ref={sliderRef}>
          {sliderInfo.map((item) => {
            return (
              <div className="slider">
                <p>{item.title.slice(0, 50)}</p>
                <img src={item.url} width="100%" className="img-fluid" />
              </div>
            );
          })}
        </div>
        <i
          className="fa-solid fa-chevron-left fs-1 left_icon"
          onClick={() => prevSlide()}
        ></i>
        <i
          className="fa-solid fa-chevron-right fs-1 right_icon"
          onClick={() => nextSlide()}
        ></i>
      </div>
    </>
  );
};

export default Slider;
