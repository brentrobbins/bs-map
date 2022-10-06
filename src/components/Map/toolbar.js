import React from 'react'

export const ToolBar = ({
  handleZoomIn,
  handleZoomOut,
  fitToViewer
}) => (
  <div className="app-map__zoom-wrapper">
        <button onClick={() => handleZoomIn()} className="app-map__button-zoom-in">+</button>
        <button onClick={() => fitToViewer()} className="app-map__button-zoom-reset">Reset</button>
        <button onClick={() => handleZoomOut()} className="app-map__button-zoom-out">-</button>
      </div>
);