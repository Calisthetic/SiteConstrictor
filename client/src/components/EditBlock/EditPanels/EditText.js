import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { ReactComponent as IconLeft } from "../../../icons/format_align_left.svg";
import { ReactComponent as IconCenter } from "../../../icons/format_align_center.svg";
import { ReactComponent as IconRight } from "../../../icons/format_align_right.svg";
import { ReactComponent as IconBottom } from "../../../icons/vertical_align_bottom.svg";
import { ReactComponent as IconMiddle } from "../../../icons/vertical_align_center.svg";
import { ReactComponent as IconTop } from "../../../icons/vertical_align_top.svg";
import { SelectedElem } from "../EditBlock.js";



const EditText = () => {
  const editTextExampleRef = useRef();
  const editLineTypeRef = useRef();
  const editLineColorRef = useRef();
  const editTextColorRef = useRef();
  const editTextFontFamilyRef = useRef();
  const editTextRangeRef0 = useRef();
  const editTextRangeRef1 = useRef();
  const editTextRangeRef2 = useRef();
  const editTextRangeRef3 = useRef();
  const editTextRangeRef4 = useRef();
  const editTextRangeRef5 = useRef();
  const editTextTextRef0 = useRef();
  const editTextTextRef1 = useRef();
  const editTextTextRef2 = useRef();
  const editTextTextRef3 = useRef();
  const editTextTextRef4 = useRef();
  const editTextTextRef5 = useRef();
  const editTextShadowColorRef = useRef();
  const editTextShadowRangeRef1 = useRef();
  const editTextShadowRangeRef2 = useRef();
  const editTextShadowRangeRef3 = useRef();
  const editTextShadowRangeRef4 = useRef();
  const editTextShadowTextRef1 = useRef();
  const editTextShadowTextRef2 = useRef();
  const editTextShadowTextRef3 = useRef();
  const editTextShadowTextRef4 = useRef();

  function ToRgba(color, opacity) {
    return "rgba( " + (HexToDec(color[1]) * 16 + HexToDec(color[2])) + ", " + 
    (HexToDec(color[3]) * 16 + HexToDec(color[4])) + ", " + 
    (HexToDec(color[5]) * 16 + HexToDec(color[6])) + ", " + opacity + " )"
  }
  function HexToDec(letter) {
    if (letter === "f") {
      return 15
    } else if (letter === "e") {
      return 14
    } else if (letter === "d") {
      return 13
    } else if (letter === "c") {
      return 12
    } else if (letter === "b") {
      return 11
    } else if (letter === "a") {
      return 10
    } else if (letter < 10 && letter > -1) {
      return parseInt(letter)
    } else {
      return 0
    }
  }

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
  function EditTextShadowOpen() {
    if (OpenEditors.textShadow === true) {
      document.getElementById("EditTextShadowDetect").style.opacity = "0";
      document.getElementById("EditTextShadowDetect").style.height = "0px";
      OpenEditors.textShadow = false;
    } else {
      document.getElementById("EditTextShadowDetect").style.opacity = "1";
      document.getElementById("EditTextShadowDetect").style.height = "auto";
      OpenEditors.textShadow = true;
    }
  }
  
  function EditTextInputRange() {
    (parseInt(editTextTextRef0.current.value) < 17) && (editTextTextRef0.current.value = editTextRangeRef0.current.value);
    editTextTextRef1.current.value = editTextRangeRef1.current.value;
    (parseInt(editTextTextRef2.current.value) < 129) && (editTextTextRef2.current.value = editTextRangeRef2.current.value);
    (parseInt(editTextTextRef3.current.value) < 17) && (editTextTextRef3.current.value = editTextRangeRef3.current.value);
    (parseInt(editTextTextRef4.current.value) < 65) && (editTextTextRef4.current.value = editTextRangeRef4.current.value);
    (parseInt(editTextTextRef5.current.value) < 33) && (editTextTextRef5.current.value = editTextRangeRef5.current.value);
  }
  function EditTextInputText() {
    editTextRangeRef0.current.value = editTextTextRef0.current.value;
    editTextRangeRef1.current.value = editTextTextRef1.current.value;
    editTextRangeRef2.current.value = editTextTextRef2.current.value;
    editTextRangeRef3.current.value = editTextTextRef3.current.value;
    editTextRangeRef4.current.value = editTextTextRef4.current.value;
    editTextRangeRef5.current.value = editTextTextRef5.current.value;
  }
  function EditTextShadowInputRange() {
    editTextShadowTextRef1.current.value =
      editTextShadowRangeRef1.current.value;
    editTextShadowTextRef2.current.value =
      editTextShadowRangeRef2.current.value;
    editTextShadowTextRef3.current.value =
      editTextShadowRangeRef3.current.value;
    editTextShadowTextRef4.current.value =
      editTextShadowRangeRef4.current.value;
    EditTextShadow()
  }
  function EditTextShadowInputText() {
    editTextShadowRangeRef1.current.value =
      editTextShadowTextRef1.current.value;
    editTextShadowRangeRef2.current.value =
      editTextShadowTextRef2.current.value;
    editTextShadowRangeRef3.current.value =
      editTextShadowTextRef3.current.value;
    editTextShadowRangeRef4.current.value =
      editTextShadowTextRef4.current.value;
    EditTextShadow()
  }    

  function EditTextShadow() {
    document.getElementById(SelectedElem).style.textShadow = editTextShadowTextRef1.current.value + 'px '
      + editTextShadowTextRef2.current.value + 'px ' + editTextShadowTextRef3.current.value + 'px '
      + ToRgba(editTextShadowColorRef.current.value, editTextShadowTextRef4.current.value)
  }

  return (
    <div id="EditText" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditTextOpen}>
        Текст блока
      </div>
      <div id="EditTextDetect" className={s.detector}>
        <div className={s.container}>
          <textarea ref={editTextExampleRef} className={s.text_area} onChange={() => {!!document.getElementById(SelectedElem) 
            && (document.getElementById(SelectedElem).textContent = editTextExampleRef.current.value)}}></textarea>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Цвет</div>
          <input type="color" ref={editTextColorRef} onChange={() => {!!document.getElementById(SelectedElem) 
            && (document.getElementById(SelectedElem).style.color = editTextColorRef.current.value)}}></input>
        </div>
        <div className={s.container}>
          <IconLeft
            height="20"
            width="20"
            id="textToLeft"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.justifyContent = "left")}}
          ></IconLeft>
          <IconCenter
            height="20"
            width="20"
            id="textToCenter"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.justifyContent = "center")}}
          ></IconCenter>
          <IconRight
            height="20"
            width="20"
            id="textToRight"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.justifyContent = "right")}}
          ></IconRight>
          <IconBottom
            height="20"
            width="20"
            id="textToBottom"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.alignItems = "end")}}
          ></IconBottom>
          <IconMiddle
            height="20"
            width="20"
            id="textToMiddle"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.alignItems = "center")}}
          ></IconMiddle>
          <IconTop
            height="20"
            width="20"
            id="textToTop"
            className={s.icon}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.alignItems = "start")}}
          ></IconTop>
        </div>
        <div className={s.container}>
          <div id="textToBold" className={s.style_button} 
          onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.fontWeight = 700)}}>
            <b>Ж</b>
          </div>
          <div
            id="textToItalic"
            className={s.style_button}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.fontStyle = "italic")}}
          >
            <i>К</i>
          </div>
          <div
            id="textToUnderline"
            className={s.style_button}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.textDecoration = "underline")}}
          >
            <div className={s.underline}>Ч</div>
          </div>
          <div
            id="textToLineThrough"
            className={s.style_button}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.textDecoration = "line-through")}}
          >
            <div className={s.line_through}>Ч</div>
          </div>
          <div
            id="textToOverline"
            className={s.style_button}
            onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.textDecoration = "overline")}}
          >
            <div className={s.overline}>Ч</div>
          </div>
          <div id="textToNone" className={s.style_button} 
          onClick={() => {!!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.fontStyle = "normal");
          !!document.getElementById(SelectedElem) && (document.getElementById(SelectedElem).style.textDecoration = "none")}}>
            <div className={s.clear}>X</div>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Цвет линии</div>
          <input type="color" ref={editLineColorRef} onChange={() => {!!document.getElementById(SelectedElem) 
            && (document.getElementById(SelectedElem).style.textDecorationColor = editLineColorRef.current.value)}}></input>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Тип линии</div>
          <select defaultValue="solid" onChange={() => {!!document.getElementById(SelectedElem) 
            && (document.getElementById(SelectedElem).style.textDecorationStyle = editLineTypeRef.current.value)}} ref={editLineTypeRef}>
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="wavy">wavy</option>
          </select>
        </div>
        <div className={s.title}>Размер линии</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="16"
            defaultValue="1"
            ref={editTextRangeRef0}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.textDecorationThickness = editTextTextRef0.current.value + "px"}}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="1"
            ref={editTextTextRef0}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.textDecorationThickness = editTextTextRef0.current.value + "px"}}
          ></input>
        </div>
        <div className={s.title}>Жирность</div>
        <div className={s.container}>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            defaultValue="400"
            ref={editTextRangeRef1}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.fontWeight = editTextTextRef1.current.value}}
          ></input>
          <input
            type="text"
            maxLength="3"
            defaultValue="400"
            ref={editTextTextRef1}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.fontWeight = editTextTextRef1.current.value}}
          ></input>
        </div>
        <div className={s.title}>Размер текста</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="128"
            defaultValue="16"
            ref={editTextRangeRef2}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.fontSize = editTextTextRef2.current.value + "px"}}
          ></input>
          <input
            type="text"
            maxLength="3"
            defaultValue="16"
            ref={editTextTextRef2}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.fontSize = editTextTextRef2.current.value + "px"}}
          ></input>
        </div>
        <div className={s.title}>Расширение</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="16"
            defaultValue="0"
            ref={editTextRangeRef3}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.letterSpacing = editTextTextRef3.current.value + "px"}}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="0"
            ref={editTextTextRef3}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.letterSpacing = editTextTextRef3.current.value + "px"}}
          ></input>
        </div>
        <div className={s.title}>Высота строки</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="64"
            defaultValue="16"
            ref={editTextRangeRef4}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.lineHeight = editTextTextRef4.current.value + "px"}}></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="16"
            ref={editTextTextRef4}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.lineHeight = editTextTextRef4.current.value + "px"}}></input>
        </div>
        <div className={s.title}>Абзацный отступ</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="32"
            defaultValue="0"
            ref={editTextRangeRef5}
            className={s.range}
            onInput={() => {EditTextInputRange();
              document.getElementById(SelectedElem).style.textIndent = editTextTextRef5.current.value + "px"}}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="0"
            ref={editTextTextRef5}
            className={s.text}
            onInput={() => {EditTextInputText();
              document.getElementById(SelectedElem).style.textIndent = editTextTextRef5.current.value + "px"}}
          ></input>
        </div>
        <div className={s.container}>
          <div className={s.property_label}>Шрифт</div>
          <select ref={editTextFontFamilyRef} onChange={() => {!!document.getElementById(SelectedElem) 
            && (document.getElementById(SelectedElem).style.fontFamily = editTextFontFamilyRef.current.value)}} defaultValue="Arial">
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="Cambria">Cambria</option>
            <option value="Cochin">Cochin</option>
            <option value="Courier New">Courier New</option>
            <option value="Gill Sans">Gill Sans</option>
            <option value="Geneva">Geneva</option>
            <option value="Georgia">Georgia</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Sans">Lucida Sans</option>
            <option value="monospace">monospace</option>
            <option value="Segoe UI">Segoe UI</option>
            <option value="serif">serif</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Verdana">Verdana</option>
            <option value=""></option>
          </select>
        </div>
        <div style={{opacity: 0, height: '50px', width: '100%'}}></div>
        <div className={s.edit_btn} onClick={EditTextShadowOpen}>
          Тень
        </div>
        <div id="EditTextShadowDetect" className={s.detector}>
          <div className={s.title}>Отступ по x</div>
          <div className={s.container}>
            <input
              ref={editTextShadowRangeRef1}
              type="range"
              min="-16"
              max="16"
              defaultValue="0"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef1}
              type="text"
              maxLength="2"
              defaultValue="0"
              className={s.text}
              onInput={EditTextShadowInputText}
            ></input>
          </div>
          <div className={s.title}>Отступ по y</div>
          <div className={s.container}>
            <input
              ref={editTextShadowRangeRef2}
              type="range"
              min="-16"
              max="16"
              defaultValue="0"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef2}
              type="text"
              maxLength="2"
              defaultValue="0"
              className={s.text}
              onInput={EditTextShadowInputText}
            ></input>
          </div>
          <div className={s.title}>Размытие</div>
          <div className={s.container}>
            <input
              ref={editTextShadowRangeRef3}
              type="range"
              min="0"
              max="16"
              defaultValue="0"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef3}
              type="text"
              maxLength="2"
              defaultValue="0"
              className={s.text}
              onInput={EditTextShadowInputText}
            ></input>
          </div>
          <div className={s.title}>Прозрачность</div>
          <div className={s.container}>
            <input
              ref={editTextShadowRangeRef4}
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              defaultValue="0.5"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef4}
              type="text"
              maxLength="3"
              defaultValue="0.5"
              className={s.text}
              onInput={EditTextShadowInputText}
            ></input>
          </div>
          <div className={s.container}>
            <div className={s.property_label}>Цвет тени</div>
            <input
              ref={editTextShadowColorRef}
              type="color"
              className={s.checkbox}
              onChange={EditTextShadow}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditText;
