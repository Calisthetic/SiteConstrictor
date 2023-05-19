import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";

// ! height, width, z-index

const EditSize = () => {
  const editSizeRangeRef1 = useRef();
  const editSizeRangeRef2 = useRef();
  const editSizeRangeRef3 = useRef();
  const editSizeTextRef1 = useRef();
  const editSizeTextRef2 = useRef();
  const editSizeTextRef3 = useRef();

  function EditSizeOpen() {
    if (OpenEditors.size === true) {
      document.getElementById("EditSizeDetect").style.opacity = "0";
      document.getElementById("EditSizeDetect").style.height = "0px";
      OpenEditors.size = false;
    } else {
      document.getElementById("EditSizeDetect").style.opacity = "1";
      document.getElementById("EditSizeDetect").style.height = "auto";
      OpenEditors.size = true;
    }
  }

  function EditSizeInputText() {
    editSizeRangeRef1.current.value = editSizeTextRef1.current.value;
    editSizeRangeRef2.current.value = editSizeTextRef2.current.value;
    editSizeRangeRef3.current.value = editSizeTextRef3.current.value;
    EditSize();
  }
  function EditSizeInputRange() {
    !!(editSizeTextRef1.current.value[editSizeTextRef1.current.value.length - 1] !== "%" && parseInt(editSizeTextRef1.current.value) < 257) && (editSizeTextRef1.current.value = editSizeRangeRef1.current.value);
    !!(editSizeTextRef2.current.value[editSizeTextRef2.current.value.length - 1] !== "%" && parseInt(editSizeTextRef2.current.value) < 257) && (editSizeTextRef2.current.value = editSizeRangeRef2.current.value);
    editSizeTextRef3.current.value = editSizeRangeRef3.current.value;
    EditSize();
  }

  function EditSize() {
    document.getElementById(SelectedElem).style.width = (editSizeTextRef1.current.value[editSizeTextRef1.current.value.length - 1] === "%") 
    ? editSizeTextRef1.current.value : editSizeTextRef1.current.value + "px"
    document.getElementById(SelectedElem).style.height = (editSizeTextRef2.current.value[editSizeTextRef2.current.value.length - 1] === "%") 
      ? editSizeTextRef2.current.value : editSizeTextRef2.current.value + "px"
    document.getElementById(SelectedElem).style.zIndex = editSizeTextRef3.current.value
  }

  return (
    <div id="EditSize" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditSizeOpen}>
        Размер
      </div>
      <div id="EditSizeDetect" className={s.detector}>
        <div className={s.title}>Ширина</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="256"
            defaultValue="100"
            ref={editSizeRangeRef1}
            className={s.range}
            onChange={EditSizeInputRange}
          ></input>
          <input
            type="text"
            maxLength="4"
            defaultValue="100"
            ref={editSizeTextRef1}
            className={s.text}
            onChange={EditSizeInputText}
          ></input>
        </div>
        <div className={s.title}>Высота</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="256"
            defaultValue="100"
            ref={editSizeRangeRef2}
            className={s.range}
            onChange={EditSizeInputRange}
          ></input>
          <input
            type="text"
            maxLength="4"
            defaultValue="100"
            ref={editSizeTextRef2}
            className={s.text}
            onChange={EditSizeInputText}
          ></input>
        </div>
        <div className={s.title}>Слой</div>
        <div className={s.container}>
          <input
            type="range"
            min="-4"
            max="12"
            defaultValue="1"
            ref={editSizeRangeRef3}
            className={s.range}
            onChange={EditSizeInputRange}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="1"
            ref={editSizeTextRef3}
            className={s.text}
            onChange={EditSizeInputText}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditSize;
