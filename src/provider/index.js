const initialState = {
  start: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, start: true };
    case "END":
      return { ...state, start: false };
  }
};
