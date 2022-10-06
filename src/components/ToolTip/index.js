import React from 'react'

import './index.css';

export function ToolTip({ toolTipState }) {
  // console.log({toolTipState})
  // if (toolTipState?.visibility && Object.keys(toolTipState?.data).length !== 0) {
    return (
      <div
      className="toolTip"
        style={{ top: toolTipState?.top + 'px', left: toolTipState?.left + 'px' }}
      >
        <div className="toolTip__inner-wrapper">
          <h3 className="app-teaser__name"><a href={toolTipState?.data?.url}>{toolTipState?.data?.name}</a></h3>
          <div className="app-teaser__content-inner-wrapper">
            {toolTipState.data?.lines?.length >= 1 &&
              <ul className='app-teaser__lines-wrapper'>
                {toolTipState?.data?.lines?.map((line, i) => <li key={i} className={`app-teaser__line ${line}`}>{line}</li>)}
              </ul>
            }
            <h4 className="app-teaser__location">{toolTipState?.data?.location}</h4>
          </div>
          <span className="arrow"></span>
        </div>
      </div>
    )
  // } else {
  //   return null
  // }
}
