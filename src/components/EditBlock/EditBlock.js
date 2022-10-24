import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditText";
import EditText from "./EditPanels/EditBorder";
import Barrier from "./Barrier.js";

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
  color: false,
  position: false,
  border: false,
  text: false,
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
      <EditText />
      <Barrier />
      <Barrier />
      <Barrier />
      <Barrier />
    </div>
  );
};

export default EditBlock;
