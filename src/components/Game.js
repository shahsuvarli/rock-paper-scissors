import React, { useContext } from "react";
import { GameContext } from "../App";
import Card from "./Card";
import Main from "./Main";

export default function Game() {
  const { start } = useContext(GameContext);
  return <div className="main">{start ? <Card /> : <Main />}</div>;
}
