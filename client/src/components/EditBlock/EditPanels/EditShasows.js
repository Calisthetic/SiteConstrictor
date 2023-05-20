import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";



const EditShasows = () => {
  const editShadowRangeRef1 = useRef();
  const editShadowRangeRef2 = useRef();
  const editShadowRangeRef3 = useRef();
  const editShadowRangeRef4 = useRef();
  const editShadowTextRef1 = useRef();
  const editShadowTextRef2 = useRef();
  const editShadowTextRef3 = useRef();
  const editShadowTextRef4 = useRef();
  const editShadowInnerRef = useRef();
  const editShadowRangeOpacityRef = useRef();
  const editShadowTextOpacityRef = useRef();
  const editShadowColorRef = useRef();

  function EditShadowOpen() {
  if (OpenEditors.shadow === true) {
    document.getElementById("EditShadowDetect").style.opacity = "0";
    document.getElementById("EditShadowDetect").style.height = "0px";
    OpenEditors.shadow = false;
  } else {
    document.getElementById("EditShadowDetect").style.opacity = "1";
    document.getElementById("EditShadowDetect").style.height = "auto";
    OpenEditors.shadow = true;
  }
}

function ColorConverter(color) {
  let red = HexConverter(color.charAt(1) + color.charAt(2));
  let green = HexConverter(color.charAt(3) + color.charAt(4));
  let blue = HexConverter(color.charAt(5) + color.charAt(6));
  return red + ", " + green + ", " + blue;
}
function HexConverter(num) {
  let result = 0;
  if (num.charAt(0) === "a") {
    result += 16 * 10;
  } else if (num.charAt(0) === "b") {
    result += 16 * 11;
  } else if (num.charAt(0) === "c") {
    result += 16 * 12;
  } else if (num.charAt(0) === "d") {
    result += 16 * 13;
  } else if (num.charAt(0) === "e") {
    result += 16 * 14;
  } else if (num.charAt(0) === "f") {
    result += 16 * 15;
  } else {
    result += 16 * num.charAt(0);
  }
  if (num[1] === "a") {
    result += 10;
  } else if (num.charAt(1) === "b") {
    result += 11;
  } else if (num.charAt(1) === "c") {
    result += 12;
  } else if (num.charAt(1) === "d") {
    result += 13;
  } else if (num.charAt(1) === "e") {
    result += 14;
  } else if (num.charAt(1) === "f") {
    result += 15;
  } else {
    result += parseInt(num.charAt(1));
  }
  return result;
}
  


  function EditShadowInputRange() {
    editShadowTextRef1.current.value = editShadowRangeRef1.current.value;
    editShadowTextRef2.current.value = editShadowRangeRef2.current.value;
    editShadowTextRef3.current.value = editShadowRangeRef3.current.value;
    editShadowTextRef4.current.value = editShadowRangeRef4.current.value;
    editShadowTextOpacityRef.current.value =
      editShadowRangeOpacityRef.current.value;
    EditShadow();
  }
  function EditShadowInputText() {
    editShadowRangeRef1.current.value = editShadowTextRef1.current.value;
    editShadowRangeRef2.current.value = editShadowTextRef2.current.value;
    editShadowRangeRef3.current.value = editShadowTextRef3.current.value;
    editShadowRangeRef4.current.value = editShadowTextRef4.current.value;
    editShadowRangeOpacityRef.current.value =
      editShadowTextOpacityRef.current.value;
    EditShadow();
  }

  function EditShadow() {
    if (
      editShadowTextRef1.current.value !== "" &&
      editShadowTextRef2.current.value !== "" &&
      editShadowTextRef3.current.value !== "" &&
      editShadowTextRef4.current.value !== "" &&
      editShadowTextOpacityRef.current.value !== ""
    ) {
      if (editShadowInnerRef.current.checked === false) {
        document.getElementById(SelectedElem).style.boxShadow =
          editShadowTextRef1.current.value +
          "px " +
          editShadowTextRef2.current.value +
          "px " +
          editShadowTextRef3.current.value +
          "px " +
          editShadowTextRef4.current.value +
          "px " +
          "rgba(" +
          ColorConverter(editShadowColorRef.current.value) +
          ", " +
          editShadowTextOpacityRef.current.value +
          ")";
      } else {
        document.getElementById(SelectedElem).style.boxShadow =
          editShadowTextRef1.current.value +
          "px " +
          editShadowTextRef2.current.value +
          "px " +
          editShadowTextRef3.current.value +
          "px " +
          editShadowTextRef4.current.value +
          "px " +
          "rgba(" +
          ColorConverter(editShadowColorRef.current.value) +
          ", " +
          editShadowTextOpacityRef.current.value +
          ") inset";
      }
    } else {
      document.getElementById(SelectedElem).style.boxShadow = "none";
    }
  }

  return (
    <div id="EditShadow" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditShadowOpen}>
        Тень
      </div>
      <div id="EditShadowDetect" className={s.detector}>
        <div className={s.title}>Отступ по x</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeRef1}
            type="range"
            min="-16"
            max="16"
            defaultValue="0"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            ref={editShadowTextRef1}
            type="text"
            maxLength="2"
            defaultValue="0"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Отступ по y</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeRef2}
            type="range"
            min="-16"
            max="16"
            defaultValue="0"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            ref={editShadowTextRef2}
            type="text"
            maxLength="2"
            defaultValue="0"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Размытие</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeRef3}
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            ref={editShadowTextRef3}
            type="text"
            maxLength="2"
            defaultValue="0"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Насыщенность</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeRef4}
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            ref={editShadowTextRef4}
            type="text"
            maxLength="2"
            defaultValue="0"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Прозрачность</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeOpacityRef}
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            defaultValue="0.5"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            ref={editShadowTextOpacityRef}
            type="text"
            maxLength="3"
            defaultValue="0.5"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.container}>
          <input
            ref={editShadowInnerRef}
            type="checkbox"
            className={s.checkbox}
            onChange={EditShadow}
          ></input>
          <div>Внутренняя тень</div>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Цвет тени</div>
          <input
            ref={editShadowColorRef}
            type="color"
            className={s.checkbox}
            onChange={EditShadow}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditShasows;
