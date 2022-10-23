import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditBorder";

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
  color: false,
  position: false,
  border: false,
};

const EditBlock = () => {
  return (
    <div className={s.background}>
      <div className={s.blocks_list}>
        <div>Список созданных пользователем блоков</div>
        <div className={s.list}></div>
      </div>
      <EditShasows />
      <EditSize />
      <EditColor />
      <EditPosition />
      <EditBorder />
    </div>
  );
};

export default EditBlock;
