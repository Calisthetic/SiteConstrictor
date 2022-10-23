import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";

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

const EditBorder = () => {
  const borderRadiusRef = useRef();
  function EditBorderRadius() {
    document.getElementById("Block" + SelectedElem).style.borderRadius =
      borderRadiusRef.current.value + "px";
  }

  return (
    <div id="EditBorder" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditBorderOpen}>
        Рамка и закругление
      </div>
      <div id="EditBorderDetect" className={s.detector}>
        <div className={s.title}>Ширина рамки</div>
        <div className={s.container}>
          <input
            id="EditBorderInputRange"
            type="range"
            min="1"
            max="256"
            className={s.range}
          ></input>
          <input
            id="EditBorderInputText"
            type="text"
            maxLength="3"
            value="50"
            className={s.text}
          ></input>
        </div>
        <div className={s.container}>
          <div className={s.title}>Цвет рамки</div>
          <div className={s.container}>
            <input type="color"></input>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.title}>Тип рамки</div>
          <select>
            <option selected value="solid">
              solid
            </option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
        <div className={s.title}>Закругление</div>
        <div className={s.container}>
          <input
            id="EditBorderInputRange"
            type="range"
            min="1"
            max="256"
            className={s.range}
          ></input>
          <input
            ref={borderRadiusRef}
            type="number"
            maxLength="3"
            onChange={EditBorderRadius}
            className={s.text}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditBorder;
