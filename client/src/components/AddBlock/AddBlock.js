import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";
import { useRef } from "react";


const AddBlock = () => {
  let blockNameRef = useRef()

  async function AddElemClick() {
    let block = {
      project_id: 1,
      color: "#ff0000",
      block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
      height: 100,
      width: 100,
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
    console.log(response.status)
  }

  return (
    <div id="AddBlock" className={s.background}>
      <input type="text" placeholder="Название элемента" ref={blockNameRef} className={s.name_input}></input>
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
