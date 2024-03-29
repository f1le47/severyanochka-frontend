import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { useState } from 'react'
import s from './MainMap.module.scss'

const MainMap = () => {

  const [activeMap, setActiveMap] = useState(1)
  const screenWidth = window.screen.width
  let mapWidth = 1208
  if (screenWidth < 1240) {
    mapWidth = screenWidth - 32
  }
  // else if (screenWidth > 992 && screenWidth < 1218) {
  //   mapWidth = screenWidth - 32
  // } else if (screenWidth < 768) {
  //   mapWidth = screenWidth - 32
  // }

  return (
    <div className={s.map}>
      <div className={s.tabs}>
        <button className={activeMap === 1 ? `${s.tab} ${s.tab_active}` : s.tab} onClick={() => setActiveMap(1)}>п. Щельяюр</button>
        <button className={activeMap === 2 ? `${s.tab} ${s.tab_active}` : s.tab} onClick={() => setActiveMap(2)}>д. Вертеп</button>
        <button className={activeMap === 3 ? `${s.tab} ${s.tab_active}` : s.tab} onClick={() => setActiveMap(3)}>с. Краснобор</button>
        <button className={activeMap === 4 ? `${s.tab} ${s.tab_active}` : s.tab} onClick={() => setActiveMap(4)}>д. Диюр</button>
      </div>
      <YMaps>
        {activeMap === 1 && 
          <Map 
            className={s.ymap}
            width={`${mapWidth}px`}
            height="354px"
            defaultState={{center: [65.325797, 53.423439], zoom: 16}} 
          >
            <Placemark geometry={[65.325797, 53.423439]} />
          </Map>
        }
        {activeMap === 2 &&
          <Map 
            className={s.ymap}
            width="1208px"
            height="354px"
            defaultState={{center: [65.299879, 53.204600], zoom: 16}} 
          >
            <Placemark geometry={[65.299879, 53.204600]} />
          </Map>
        }
        {activeMap === 3 &&
          <Map 
            className={s.ymap}
            width="1208px"
            height="354px"
            defaultState={{center: [65.294462, 53.286104], zoom: 16}} 
          >
            <Placemark geometry={[65.294462, 53.286104]} />
          </Map>
        }
        {activeMap === 4 &&
          <Map 
            className={s.ymap}
            width="1208px"
            height="354px"
            defaultState={{center: [65.277579, 53.358940], zoom: 16}} 
          >
            <Placemark geometry={[65.277579, 53.358940]} />
          </Map>
        }
      </YMaps>
    </div>
  )
}

export default MainMap