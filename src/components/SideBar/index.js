import React from 'react'
import { Teaser } from '../Teaser'
import useBS from "../../context/bsContext";
import './index.css';

export function SideBar({ sideBarShow, setSelectedLine, selectedLine, selectedStop, setSelectedStop, data }) {
  // removeFromState
  const { updateLine, line } = useBS();

  const filteredList = (selectedLine !== '' && selectedLine !== null) ? data.filter(item => item.lines.includes(selectedLine)) : data;

  const handelChange = (value) => {
    ;
    updateLine(value);
  }
  console.log({ line })
  return (
    <div className={`app-sidebar__wrapper ${sideBarShow ? 'show' : 'hide'}`}>

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
        {filteredList.map(item => <Teaser key={item.id} data={item} selectedStop={selectedStop} />)}
      </ul>
    </div>
  )
}
