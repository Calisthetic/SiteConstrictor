import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";
import { useRef } from "react";


const AddBlock = () => {
  let blockNameRef = useRef()

  async function AddElemClick(event) {
    let block;
    console.log(event.target.id)
    if (event.target.id === "AddSquare") {
      block = {
        project_id: 1,
        color: "#ff0000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 100,
        width: 100,
        marginx: 700,
        marginy: 100,
      }
    } else if (event.target.id === "AddCircle") {
      block = {
        project_id: 1,
        color: "#ff0000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 100,
        width: 100,
        marginx: 400,
        marginy: 400,
        radius1: 10,
        radius2: 10,
        radius3: 10,
        radius4: 10,
      }
    } else if (event.target.id === "AddLabel") {
      
    } else if (event.target.id === "AddLight") {
      block = {
        project_id: 1,
        color: "#ffff00",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 10,
        width: 10,
        marginx: 400,
        marginy: 400,
        shadow_marginx: 0,
        shadow_marginy: 0,
        blur: 16,
        spread: 16,
        shadow_opacity: 1,
        type_inner: false,
        shadow_color: "#ffff00",
        radius1: 10,
        radius2: 10,
        radius3: 10,
        radius4: 10,
      }
    } else if (event.target.id === "AddButton") {
      block = {
        project_id: 1,
        color: "#ffffff",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 40,
        width: 150,
        marginx: 400,
        marginy: 400,
        shadow_marginx: 2,
        shadow_marginy: 2,
        blur: 5,
        spread: 2,
        shadow_opacity: 0.4,
        type_inner: false,
        shadow_color: "#444444",
        in_width: 4,
        in_color: "#000000",
        in_type: "outset",
        radius1: 10,
        radius2: 10,
        radius3: 10,
        radius4: 10,
      }
    } else if (event.target.id === "AddHeader") {
      block = {
        project_id: 1,
        color: "#444444",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 54,
        width: "100%",
        marginx: 0,
        marginy: 0,
        shadow_marginx: 0,
        shadow_marginy: 0,
        blur: 7,
        spread: 2,
        shadow_opacity: 0.4,
        type_inner: false,
        shadow_color: "#444444"
      }
    } else { // black square
      block = {
        project_id: 1,
        color: "#000000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 100,
        width: 100,
        marginx: 400,
        marginy: 400,
      }
    }
    let response = await fetch('/api/div', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(block)
    });
    console.log(response.status)
    AddBlockClick();
  }

  return (
    <div id="AddBlock" className={s.background}>
      <input type="text" placeholder="Название элемента" ref={blockNameRef} className={s.name_input}></input>
      <div id="AddSquare" className={s.add_element} onClick={AddElemClick}> Квадрат </div>
      <div id="AddCircle" className={s.add_element}>Круг</div>
      <div id="AddLabel" className={s.add_element}>Текст</div>
      <div id="AddLight" className={s.add_element}>Свечение</div>
      <div id="AddButton" className={s.add_element}>Кнопка</div>
      <div id="AddHeader" className={s.add_element}>Шапка</div>
    </div>
  );
};

export default AddBlock;
