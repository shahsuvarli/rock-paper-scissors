import { Button } from "@mui/material";
import React, { useState } from "react";
import IconLabelButtons from "./ButtonMe";

export default function RPS() {
  const [start, setStart] = useState(false);
  return (
    <div className="main">
      {start ? (
        <>
          <h2>Rock Paper Scissors</h2>
          <img src="https://media.istockphoto.com/vectors/hand-game-rock-paper-scissors-gesture-illustration-in-line-art-style-vector-id1192618623?k=20&m=1192618623&s=612x612&w=0&h=Ot55yF0cxcEe0fQeLpEwOXq2uB_IV9XtJP5jhnzN2_A=" />
          <IconLabelButtons />
        </>
      ) : (
        <>
          <h2>Rock Paper Scissors</h2>
          <img src="https://media.istockphoto.com/vectors/hand-game-rock-paper-scissors-gesture-illustration-in-line-art-style-vector-id1192618623?k=20&m=1192618623&s=612x612&w=0&h=Ot55yF0cxcEe0fQeLpEwOXq2uB_IV9XtJP5jhnzN2_A=" />
          <IconLabelButtons />
        </>
      )}
    </div>
  );
}
