import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";
import WorkPlace, { Refresh } from "../WorkPlace/WorkPlace";
import { useState } from "react";

export let BlockCounter = 1;
export let mustUpdate = false;

const AddBlock = () => {

  const [isUpdate, setIsUpdate] = useState(false);
  async function AddElemClick() {
    let block = {
      project_id: 1,
      color: "#ff0000",
      block_name: "new block",
      height: 100,
      width: 100,
      color: "ff0000",
      marginx: 700,
      marginy: 100,
    }
    let response = await fetch('/api/div', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(block)
    });
    BlockCounter += 1;
    setIsUpdate(!isUpdate);
    mustUpdate = !mustUpdate;
  }

  return (
    <div id="AddBlock" className={s.background}>
      <div
        id="block1"
        className={s.add_element}
        onClick={() => {
          AddElemClick();
          AddBlockClick();
        }}
      >
        Usual &lt;div&gt;
      </div>
      <div className={s.add_element}>circle</div>
      <div className={s.add_element}>label</div>
      <div className={s.add_element}>message</div>
      <div className={s.add_element}>button</div>
      <div className={s.add_element}>button</div>
      <div className={s.add_element}></div>
      <div className={s.add_element}></div>
    </div>
  );
};

export default AddBlock;
