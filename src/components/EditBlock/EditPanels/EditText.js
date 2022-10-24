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

const EditText = () => {
  return (
    <div id="EditText" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditTextOpen}>
        Текст блока
      </div>
      <div id="EditTextDetect" className={s.detector}>
        <div className={s.title}>Ширина</div>
        <div className={s.container}>
          <input type="range" min="1" max="256" className={s.range}></input>
          <input type="text" maxLength="3" className={s.text}></input>
        </div>
        <div className={s.title}>Длина</div>
        <div className={s.container}>
          <input type="range" min="1" max="256" className={s.range}></input>
          <input type="text" maxLength="3" className={s.text}></input>
        </div>
      </div>
    </div>
  );
};

export default EditText;
