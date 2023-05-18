import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React, { useEffect, useRef, useState } from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditBorder";
import EditRadius from "./EditPanels/EditRadius";
import EditText from "./EditPanels/EditText";
import EditImage from "./EditPanels/EditImage";
import EditEffects from "./EditPanels/EditEffects";
import Barrier from "./Barrier.js";

// ! CSS: appearance

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
  color: false,
  position: false,
  border: false,
  radius: false,
  text: false,
  image: false,
  effects: false,
  textShadow: false,
};

const EditBlock = () => {
  const editBorderList = useRef();

  const [BlocksData, setBlocksData] = useState([{}])
  useEffect(() => {
    fetch("/api/div", {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setBlocksData(data)
      }
    )
  }, []) 

  function OnSelectionChange() {
    SelectedElem = editBorderList.current.value;
    console.log(editBorderList.current.value);
  }

  return (
    <div className={s.background}>
      <div className={s.editors}>
        <div className={s.blocks_list}>
          <div className={s.edit_btn}>Список</div>
          <div className={s.list}>
            <select className={s.select_list} ref={editBorderList} onChange={OnSelectionChange}>
              {(typeof BlocksData[0] === undefined) ? (
                <p>Loading...</p>
              ) : (
                BlocksData.map(item => (
                  <option key={item} id={item.id} value={item.id}>
                    {item.block_name}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <Barrier />
        <EditShasows />
        <Barrier />
        <EditSize />
        <Barrier />
        <EditColor />
        <Barrier />
        <EditPosition />
        <Barrier />
        <EditBorder />
        <Barrier />
        <EditRadius />
        <Barrier />
        <EditText />
        <Barrier />
        <EditImage />
        <Barrier />
        <EditEffects />
        <Barrier />
      </div>
      <div className={s.style_list}></div>
    </div>
  );
};

export default EditBlock;
