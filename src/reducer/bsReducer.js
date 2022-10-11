export const initialState = {
  stop: {},
  tooltip: {
    id: null,
    left: null,
    top: null,
    visibility: false,
  },
  line: null
};

const bsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_STOP_STATE":
      console.log("UPDATE_STOP_STATE", payload);

      return {
        ...state,
        stop: payload.stop
      };
    case "UPDATE_TOOLTIP_STATE":
      console.log("UPDATE_TOOLTIP_STATE", payload);

      return {
        ...state,
        tooltip: payload.tooltip
      };
    case "UPDATE_LINE_STATE":
      console.log("UPDATE_LINE_STATE", payload);

      return {
        ...state,
        line: payload.line
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
