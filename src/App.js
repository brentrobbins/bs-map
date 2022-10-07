import { useState } from 'react'
import { BSProvider } from "./context/bsContext";
import './App.css';

import { SideBar } from './components/SideBar'
import { Map } from './components/Map'

import { data } from './data'

function App() {
  const [sideBarShow, setSideBarShow] = useState(true)
  const [selectedLine, setSelectedLine] = useState(null)
  const [selectedStop, setSelectedStop] = useState(null)

  const handleSidebar = () => {
    setSideBarShow(sideBarShow => !sideBarShow);
  }
  // console.log({sideBarShow, selectedLine, selectedStop})
  return (
    <BSProvider>
      <div className="app__wrapper">
        <SideBar sideBarShow={sideBarShow} setSelectedLine={setSelectedLine} selectedLine={selectedLine} selectedStop={selectedStop} setSelectedStop={setSelectedStop} data={data} />
        <Map handleSidebar={handleSidebar} sideBarShow={sideBarShow} selectedStop={selectedStop} setSelectedStop={setSelectedStop} data={data} />
      </div>
    </BSProvider>
  );
}

export default App;
