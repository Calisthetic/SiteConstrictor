import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditBorder";
import EditRadius from "./EditPanels/EditRadius";
import EditText from "./EditPanels/EditText/EditText";
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
  return (
    <div className={s.background}>
      <div className={s.blocks_list}>
        <div>Список созданных пользователем блоков</div>
        <div className={s.list}></div>
      </div>
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
      <div>События</div>
      <Barrier />
    </div>
  );
};

export default EditBlock;
