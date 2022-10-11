import { createContext, useReducer, useContext } from "react";
import bsReducer, { initialState } from "../reducer/bsReducer";

const BSContext = createContext(initialState);

export const BSProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bsReducer, initialState);

  const updateStop = (stop) => {
    // const updatedCart = state.products.concat(product);
    dispatch({
      type: "UPDATE_STOP_STATE",
      payload: {
        stop: stop
      }
    });
  };

  const updateTooltip = (tooltip) => {
    // const updatedCart = state.products.concat(product);
    dispatch({
      type: "UPDATE_TOOLTIP_STATE",
      payload: {
        tooltip: tooltip
      }
    });
  };

  const updateLine = (line) => {
    // const updatedCart = state.products.concat(product);
    dispatch({
      type: "UPDATE_LINE_STATE",
      payload: {
        line: line
      }
    });
  };

  const removeFromState = () => {
    dispatch({
      type: "REMOVE_FROM_STATE",
      // payload: {
      //   products: updatedCart
      // }
    });
  };

  const value = {
    // total: state.total,
    // products: state.products,
    stop: state.stop,
    tooltip: state.tooltip,
    line: state.line,
    updateStop,
    updateTooltip,
    updateLine,
    removeFromState
  };
  return <BSContext.Provider value={value}>{children}</BSContext.Provider>;
};

const useBS = () => {
  const context = useContext(BSContext);

  if (context === undefined) {
    throw new Error("useBS must be used within BSContext");
  }

  return context;
};

export default useBS;
