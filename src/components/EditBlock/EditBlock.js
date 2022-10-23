import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
};

const EditBlock = () => {
  return (
    <div className={s.background}>
      <div className={s.blocks_list}>Список созданных пользователем блоков</div>
      <EditShasows />
      <EditSize />
      <EditColor />
    </div>
  );
};

export default EditBlock;
