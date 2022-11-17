import * as React from "react";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { GameContext } from "./App";

export default function IconLabelButtons() {
  const { start, setStart } = React.useContext(GameContext);
  return (
    <Button
      variant="contained"
      endIcon={<PlayCircleOutlineIcon />}
      onClick={() => setStart(!start)}
    >
      start game
    </Button>
  );
}
