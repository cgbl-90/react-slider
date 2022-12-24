import React, { useState, useEffect } from "react";
import data from "./data.js";
import "./sass/App.css";

function Slider() {
  let [personID, setPersonID] = useState(0);

  let position = (id) => {
    if (id === personID) return "currentSlide";
    if (id === personID - 1) return "lastSlide";
    return "nextSlide";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goPrev();
    }, 20000);
    return () => clearInterval(timer);
  }, [personID]);

  function goPrev() {
    if (personID < 0) setPersonID(data.length - 1);
    else setPersonID(personID - 1);
  }

  function goNext() {
    if (personID > data.length - 1) setPersonID(0);
    else setPersonID(personID + 1);
  }

  return (
    <div>
      {data.map(({ id, person, job, img, review }) => {
        return (
          <article key={id} className={position(id)}>
            <img src={img} alt={person} />
            <h3>{person}</h3>
            <h3>{job}</h3>
            <p>{review}</p>
          </article>
        );
      })}
      <button className="prev" onClick={goPrev}>
        🠐
      </button>
      <button className="next" onClick={goNext}>
        🠒
      </button>
    </div>
  );
}

export default Slider;
