import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "../assets/data.json";
import "../styles/game.css";

function Card() {
  const [sec, setSec] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
  }, [sec]);

  return (
    <div className="card-container">
      <div className="items">
        {data.map((item) => {
          return (
            <div className="item-container">
              <img
                src={require(`../assets/images/${item.name}.png`)}
                alt={item.name}
              />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <span>{sec}</span>
      <Button variant="outlined" onClick={() => setSec(5)}>
        roll
      </Button>
    </div>
  );
}

export default Card;
