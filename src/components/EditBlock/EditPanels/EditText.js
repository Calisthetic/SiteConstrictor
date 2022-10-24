import React from "react";
import s from "../EditBlock.module.css";
import { SelectedElem } from "../EditBlock.js";
import { OpenEditors } from "../EditBlock.js";

function EditTextOpen() {
  if (OpenEditors.text === true) {
    document.getElementById("EditTextDetect").style.opacity = "0";
    document.getElementById("EditTextDetect").style.height = "0px";
    OpenEditors.text = false;
  } else {
    document.getElementById("EditTextDetect").style.opacity = "1";
    document.getElementById("EditTextDetect").style.height = "auto";
    OpenEditors.text = true;
  }
}

function EditSizeInputText() {
  document.getElementById("EditSizeInputRange").value =
    document.getElementById("EditSizeInputText").value;
}
function EditSizeInputRange() {
  document.getElementById("EditSizeInputText").value =
    document.getElementById("EditSizeInputRange").value;
}

const EditSize = () => {
  return (
    <div id="EditSize" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditSizeOpen}>
        Текст блока
      </div>
      <div id="EditSizeDetect" className={s.detector}>
        <div className={s.title}>Ширина</div>
        <div className={s.container}>
          <input
            id="EditSizeInputRange"
            type="range"
            min="1"
            max="256"
            className={s.range}
            onChange={EditSizeInputRange}
          ></input>
          <input
            id="EditSizeInputText"
            type="text"
            maxLength="3"
            className={s.text}
            onChange={EditSizeInputText}
          ></input>
        </div>
        <div className={s.title}>Длина</div>
        <div className={s.container}>
          <input
            id="EditSizeInputRange"
            type="range"
            min="1"
            max="256"
            className={s.range}
            onChange={EditSizeInputRange}
          ></input>
          <input
            id="EditSizeInputText"
            type="text"
            maxLength="3"
            className={s.text}
            onChange={EditSizeInputText}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditSize;
