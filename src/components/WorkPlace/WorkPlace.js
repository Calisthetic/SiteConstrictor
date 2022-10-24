import React from 'react'
import s from "./WorkPlace.module.css";



const WorkPlace = () => {
  return (
    <div id="Blocks" className={s.background}>
      <div id="Block0" className={s.block}>
        Блок для редактирования (работает только тень)
      </div>
    </div>
  );
};

export default WorkPlace;
