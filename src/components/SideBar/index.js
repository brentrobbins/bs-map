import React from 'react'
import { Teaser } from '../Teaser'

import './index.css';

export function SideBar({sideBarShow, setSelectedLine, selectedLine, selectedStop, setSelectedStop, data}) {

  const filteredList = (selectedLine !== '' && selectedLine !== null) ? data.filter(item => item.lines.includes(selectedLine)) : data;
  // console.log({selectedLine})

  const handelChange = (value) => {
    setSelectedLine(value);
    setSelectedStop({});
  }

  return (
    <div className={`app-sidebar__wrapper ${sideBarShow ? 'show' : 'hide' }`}>

    <select name="cars" id="selectLine"
    onChange={({ target: { value } }) => handelChange(value)}>
      <option value="">Select a line...</option>
      <option value="rd">RD</option>
      <option value="sv">SV</option>
      <option value="or">OR</option>
      <option value="bl">BL</option>
      <option value="gr">GR</option>
      <option value="yl">YL</option>
    </select>
    <ul className="app-list_wrapper">
      {filteredList.map(item => <Teaser key={item.id} data={item} selectedStop={selectedStop} setSelectedStop={setSelectedStop} />)}
    </ul>

    </div>
  )
}
