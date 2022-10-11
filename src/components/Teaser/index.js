import React from 'react'
import { useStyleMediaQuery } from '../../hooks/useStyleMediaQuery'
import useBS from "../../context/bsContext";

import './index.css';

export function Teaser({ data }) {
  const { id, name, location, lines, thumbnail, url } = data;
  const { stop, updateStop } = useBS();

  const { matches: imDesktop } = useStyleMediaQuery({ mixOrMax: 'min', widthOrHeight: 'width', value: 1260 });

  const handleClick = () => {
    updateStop({ ...data })
  };

  return (
    <li className={`app-teaser__wrapper ${stop?.id === id ? 'active' : ''}`}>

      <div className="app-teaser__content-wrapper">
        <h3 className="app-teaser__name">
          {imDesktop ? (
            <button onClick={() => handleClick(id)}>{name}</button>
          ) : (
            <a href={url}>{name}</a>
          )}

        </h3>
        <div className="app-teaser__content-inner-wrapper">
          {lines?.length >= 1 &&
            <ul className='app-teaser__lines-wrapper'>
              {lines.map((line, i) => <li key={i} className={`app-teaser__line ${line}`}>{line}</li>)}
            </ul>
          }
          <h4 className="app-teaser__location">{location}</h4>
        </div>
      </div>

      {thumbnail && <div className="app-teaser__image-wrapper">
        <img src={thumbnail} alt={name} />
      </div>
      }
    </li>
  )
}
