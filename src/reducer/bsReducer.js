export const initialState = {
  stop: {},
  tooltip: {
    id: null,
    left: null,
    top: null,
    visibility: false,
  }
};

const bsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_STATE":
      console.log("UPDATE_STATE", payload);

      return {
        ...state,
        stop: payload.stop,
        tooltip: payload.tooltip
      };
    case "REMOVE_FROM_STATE":
      console.log("REMOVE_FROM_STATE");

      return {
        // ...state,
        // products: payload.products
        initialState
      };

    default:
      throw new Error(`No case for type ${type} found in bsReducer.`);
  }
};

export default bsReducer;
