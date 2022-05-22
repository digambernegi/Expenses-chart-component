import React from "react";
import "./chart.css";
import Bar from "../Bar/Bar";

function Chart() {
  const data = require("../../data.json");

  const amounts = data.map((item) => item.amount);
  const highest = Math.max(...amounts);
  console.log(amounts, highest);
  return (
    <>
      <div className="Chart">
        <h3 className="chart__title">Spending - Last 7 days</h3>
        <div className="bar">
          {data.map((item) => (
            <Bar key={item.day} highest={highest === item.amount} data={item} />
          ))}
        </div>
        <div className="hr" />
        <div className="footer">
          <div className="footer__total">
            <span className="footer__title">Total this month</span>
            <p className="footer__amount">$478.33</p>
          </div>
          <div className="footer__percentage">
            <span className="profit">+2.4%</span>
            <span className="fromlastmonth">from last month</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
