import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";

// ! outline (outline-offset) and border

const EditBorder = () => {
  const editBorderRangeRef1 = useRef();
  const editBorderRangeRef2 = useRef();
  const editBorderRangeRef3 = useRef();
  const editBorderTextRef1 = useRef();
  const editBorderTextRef2 = useRef();
  const editBorderTextRef3 = useRef();
  const editBorderColorRef1 = useRef();
  const editBorderColorRef2 = useRef();
  const editBorderTypeRef1 = useRef();
  const editBorderTypeRef2 = useRef();

  function EditBorderOpen() {
    if (OpenEditors.border === true) {
      document.getElementById("EditBorderDetect").style.opacity = "0";
      document.getElementById("EditBorderDetect").style.height = "0px";
      OpenEditors.border = false;
    } else {
      document.getElementById("EditBorderDetect").style.opacity = "1";
      document.getElementById("EditBorderDetect").style.height = "auto";
      OpenEditors.border = true;
    }
  }

  function EditBorderInputRange() {
    editBorderTextRef1.current.value = editBorderRangeRef1.current.value
    editBorderTextRef2.current.value = editBorderRangeRef2.current.value
    editBorderTextRef3.current.value = editBorderRangeRef3.current.value
  }
  function EditBorderInputText() {
    editBorderRangeRef1.current.value = editBorderTextRef1.current.value
    editBorderRangeRef2.current.value = editBorderTextRef2.current.value
    editBorderRangeRef3.current.value = editBorderTextRef3.current.value
  }

  function EditBorder() {
    document.getElementById(SelectedElem).style.border = (editBorderTextRef1.current.value === '0' ? "" : editBorderTextRef1.current.value) + "px " + editBorderTypeRef1.current.value + " " + editBorderColorRef1.current.value
  }
  function EditOutline() {
    document.getElementById(SelectedElem).style.outline = (editBorderTextRef2.current.value === '0' ? "" : editBorderTextRef2.current.value) + "px " + editBorderTypeRef2.current.value + " " + editBorderColorRef2.current.value
    document.getElementById(SelectedElem).style.outlineOffset = editBorderTextRef3.current.value + "px"
  }


  return (
    <div id="EditBorder" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditBorderOpen}>
        Рамка
      </div>
      <div id="EditBorderDetect" className={s.detector}>
        <div className={s.title}>Внутренняя рамка</div>
        <div className={s.title}>Ширина</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            ref={editBorderRangeRef1}
            className={s.range}
            onInput={() => {EditBorderInputRange(); EditBorder()}}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="0"
            ref={editBorderTextRef1}
            className={s.text}
            onInput={() => {EditBorderInputText(); EditBorder()}}
          ></input>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Цвет</div>
          <input ref={editBorderColorRef1} type="color" onChange={EditBorder}></input>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Тип</div>
          <select defaultValue="solid" ref={editBorderTypeRef1} onChange={EditBorder}>
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
        <div className={s.title}>Внешняя рамка</div>
        <div className={s.title}>Ширина</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            ref={editBorderRangeRef2}
            className={s.range}
            onInput={() => {EditBorderInputRange(); EditOutline()}}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="0"
            ref={editBorderTextRef2}
            className={s.text}
            onInput={() => {EditBorderInputText(); EditOutline()}}
          ></input>
        </div>
        <div className={s.title}>Отступ от блока</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            ref={editBorderRangeRef3}
            className={s.range}
            onInput={() => {EditBorderInputRange(); EditOutline()}} 
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="0"
            ref={editBorderTextRef3}
            className={s.text}
            onInput={() => {EditBorderInputText(); EditOutline()}}
          ></input>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Цвет</div>
          <div className={s.container}>
            <input ref={editBorderColorRef2} type="color" onChange={EditOutline}></input>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Тип</div>
          <select defaultValue="solid" ref={editBorderTypeRef2} onChange={EditOutline}>
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditBorder;
