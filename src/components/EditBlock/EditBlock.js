import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";

export let SelectedElem = document.getElementById("Block0");
export let OpenEditors = {
  shadow: false,
  size: false,
}

const EditBlock = () => {

  return (
    <div className={s.background}>
      <div className={s.blocks_list}>
        Список созданных пользователем блоков
      </div>
      <EditShasows />
      <EditSize />
    </div>
  );
};

export default EditBlock;
