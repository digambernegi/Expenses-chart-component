import React from "react";
import Chart from "../component/Chart/Chart";
import Header from "../component/Header/Header";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Chart />
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Digamber negi</a>.
        </div>
      </div>
    </>
  );
}

export default Home;
