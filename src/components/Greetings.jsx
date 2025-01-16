import React from "react";
import Day from "../assets/day.svg";
import Night from "../assets/night.svg";
import Evening from "../assets/evening.svg";

const Greetings = () => {
  const currentHours = new Date().getHours();
  let greeting = "";
  let img = "";

  if (currentHours >= 6 && currentHours < 12) {
    greeting = "Good Morning!";
    img = Day;
  } else if (currentHours >= 12 && currentHours < 17) {
    greeting = "Good Afternoon!";
    img = Day;
  } else if (currentHours >= 17 && currentHours < 21) {
    greeting = "Good Evening!";
    img = Evening;
  } else {
    greeting = "Good Night!";
    img = Night;
  }

  return (
    <h1 className="greeting">
      <img src={img} alt="time of day" />
      {greeting}
    </h1>
  );
};

export default Greetings;
