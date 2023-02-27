import React from "react";
import "./slider.css";
import { slide } from "../../resources/data/data";

export const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="container grid">
          {slide.map((item, i) => (
            <div className="box" key={i}>
              <div className="img">
                <img
                  src={require(`../../resources/images/slide/${item.image}`).default}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
