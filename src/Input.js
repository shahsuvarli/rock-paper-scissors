import React, { useRef, useState } from "react";

export default function Input() {
  const nameRef = useRef();
  const scoreRef = useRef();
  const [startGame, setStartGame] = useState(true);

  const getInputs = () => {
    if (nameRef.current.value && scoreRef.current.value) {
      setStartGame(false);
    }
  };

  return (
    <>
      {startGame ? (
        <div className="inputs">
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" placeholder="Name" ref={nameRef} type="name" />
          </div>
          <div>
            <label htmlFor="max-score">Max score: </label>
            <input
              id="max-score"
              placeholder="Max score"
              ref={scoreRef}
              type="number"
            />
          </div>
          <button type="submit" onClick={() => getInputs()}>
            START
          </button>
        </div>
      ) : (
        <div className="inputs"></div>
      )}
    </>
  );
}
