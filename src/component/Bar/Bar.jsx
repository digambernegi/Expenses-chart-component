import React, { useState } from "react";
import "./bar.css";

function Bar({ data, highest }) {
  console.log(data, highest);
  const [active, setActive] = useState(null);

  return (
    <div className="Bar">
      <p
        className="bar__amount"
        style={{
          animationName: active === null ? null : active ? "easeIn" : "easeOut",
        }}
      >
        ${data.amount}
      </p>
      <div
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        className="bar__candle"
        style={{
          borderRadius: ".2em",
          width: "2.4em",
          height: `${data.amount}%`,
          backgroundColor: highest
            ? active
              ? "hsl(186, 37%, 75%)"
              : "var(--Cyan)"
            : active
            ? "hsl(10, 79%, 75%)"
            : "var(--Soft-red)",
        }}
      ></div>
      <p className="bar__day">{data.day}</p>
    </div>
  );
}

export default Bar;
