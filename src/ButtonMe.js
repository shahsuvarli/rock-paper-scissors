import * as React from "react";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function IconLabelButtons() {
  return (
    <Button
      variant="contained"
      endIcon={<PlayCircleOutlineIcon />}
      style={{ marginBottom: "10px" }}
      onClick={() => {
        console.log("efwe");
      }}
    >
      START GAME
    </Button>
  );
}
