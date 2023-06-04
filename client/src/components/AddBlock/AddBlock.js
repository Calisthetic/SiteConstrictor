import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";
import { useRef } from "react";


const AddBlock = () => {
  let blockNameRef = useRef()

  async function AddElemClick(event) {
    let block;
    if (event.target.id === "AddSquare") {
      block = {
        project_id: localStorage.getItem("projectID"),
        color: "#ff0000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "block"),
        height: 100,
        width: 100,
        marginx: 700,
        marginy: 100,
      }
    } else if (event.target.id === "AddCircle") {
      block = {
        project_id: localStorage.getItem("projectID"),
        color: "#ff0000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "circle"),
        height: 100,
        width: 100,
        marginx: 400,
        marginy: 400,
        radius1: 50,
      }
    } else if (event.target.id === "AddLight") {
      block = {
        project_id: localStorage.getItem("projectID"),
        color: "#ffff00",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "light"),
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
        project_id: localStorage.getItem("projectID"),
        color: "#ffffff",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "button"),
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
        in_text: "Click me!",
        text_color:"#ff0000",
        text_decoration:null,
        text_decoration_color:null,
        text_decoration_style:null,
        text_decoration_thickness:"6",
        font_size:26,
        font_family:"Arial",
        font_style:"normal",
        font_weight:700,
        text_vertical_align:"center",
        text_horizontal_align:"center",
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
        project_id: localStorage.getItem("projectID"),
        color: "#444444",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "header"),
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
        project_id: localStorage.getItem("projectID"),
        color: "#000000",
        block_name: (blockNameRef.current.value.length > 0 ? blockNameRef.current.value : "square"),
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
      <div id="AddCircle" className={s.add_element} onClick={AddElemClick}>Круг</div>
      <div id="AddLight" className={s.add_element} onClick={AddElemClick}>Свечение</div>
      <div id="AddButton" className={s.add_element} onClick={AddElemClick}>Кнопка</div>
      <div id="AddHeader" className={s.add_element} onClick={AddElemClick}>Шапка</div>
    </div>
  );
};

export default AddBlock;
