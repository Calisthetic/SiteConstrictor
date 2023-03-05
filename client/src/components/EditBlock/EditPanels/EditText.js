import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { ReactComponent as IconLeft } from "../../../icons/format_align_left.svg";
import { ReactComponent as IconCenter } from "../../../icons/format_align_center.svg";
import { ReactComponent as IconRight } from "../../../icons/format_align_right.svg";
import { ReactComponent as IconBottom } from "../../../icons/vertical_align_bottom.svg";
import { ReactComponent as IconMiddle } from "../../../icons/vertical_align_center.svg";
import { ReactComponent as IconTop } from "../../../icons/vertical_align_top.svg";

const EditText = () => {
  const editTextExampleRef = useRef();
  const editTextColorRef = useRef();
  const editTextTAlignRef1 = useRef();
  const editTextTAlignRef2 = useRef();
  const editTextTAlignRef3 = useRef();
  const editTextVAlignRef1 = useRef();
  const editTextVAlignRef2 = useRef();
  const editTextVAlignRef3 = useRef();
  const editTextStyleRef1 = useRef();
  const editTextStyleRef2 = useRef();
  const editTextStyleRef3 = useRef();
  const editTextRangeRef1 = useRef();
  const editTextRangeRef2 = useRef();
  const editTextRangeRef3 = useRef();
  const editTextTextRef1 = useRef();
  const editTextTextRef2 = useRef();
  const editTextTextRef3 = useRef();
  const editTextShadowColorRef = useRef();
  const editTextShadowRangeRef1 = useRef();
  const editTextShadowRangeRef2 = useRef();
  const editTextShadowRangeRef3 = useRef();
  const editTextShadowRangeRef4 = useRef();
  const editTextShadowRangeRef5 = useRef();
  const editTextShadowTextRef1 = useRef();
  const editTextShadowTextRef2 = useRef();
  const editTextShadowTextRef3 = useRef();
  const editTextShadowTextRef4 = useRef();
  const editTextShadowTextRef5 = useRef();

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
  function ChangeText() {
    editTextExampleRef.current.value = "e";
  }
  function ChangeStyle(event) {}
  function EditTextInputRange() {
    editTextTextRef1.current.value = editTextRangeRef1.current.value;
    editTextTextRef2.current.value = editTextRangeRef2.current.value;
    editTextTextRef3.current.value = editTextRangeRef3.current.value;
  }
  function EditTextInputText() {
    editTextRangeRef1.current.value = editTextTextRef1.current.value;
    editTextRangeRef2.current.value = editTextTextRef2.current.value;
    editTextRangeRef3.current.value = editTextTextRef3.current.value;
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
    editTextShadowTextRef5.current.value =
      editTextShadowRangeRef5.current.value;
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
    editTextShadowRangeRef5.current.value =
      editTextShadowTextRef5.current.value;
  }

  return (
    <div id="EditText" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditTextOpen}>
        Текст блока
      </div>
      <div id="EditTextDetect" className={s.detector}>
        <div className={s.container}>
          <textarea ref={editTextExampleRef} className={s.text_area}></textarea>
        </div>
        <div className={s.container}>
          <div>Цвет</div>
          <input type="color"></input>
        </div>
        <div className={s.container}>
          <div>Цвет фона</div>
          <input type="color"></input>
        </div>
        <div className={s.container}>
          <IconLeft
            height="20"
            width="20"
            id="textToLeft"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconLeft>
          <IconCenter
            height="20"
            width="20"
            id="textToCenter"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconCenter>
          <IconRight
            height="20"
            width="20"
            id="textToRight"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconRight>
          <IconBottom
            height="20"
            width="20"
            id="textToBottom"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconBottom>
          <IconMiddle
            height="20"
            width="20"
            id="textToMiddle"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconMiddle>
          <IconTop
            height="20"
            width="20"
            id="textToTop"
            className={s.icon}
            onClick={ChangeStyle}
          ></IconTop>
        </div>
        <div className={s.container}>
          <div id="textToBold" className={s.style_button} onClick={ChangeStyle}>
            <b>Ж</b>
          </div>
          <div
            id="textToItalic"
            className={s.style_button}
            onClick={ChangeStyle}
          >
            <i>К</i>
          </div>
          <div
            id="textToUnderline"
            className={s.style_button}
            onClick={ChangeStyle}
          >
            <div className={s.underline}>Ч</div>
          </div>
          <div
            id="textToLineThrough"
            className={s.style_button}
            onClick={ChangeStyle}
          >
            <div className={s.line_through}>Ч</div>
          </div>
          <div
            id="textToOverline"
            className={s.style_button}
            onClick={ChangeStyle}
          >
            <div className={s.overline}>Ч</div>
          </div>
          <div id="textToNone" className={s.style_button} onClick={ChangeStyle}>
            <div className={s.clear}>X</div>
          </div>
        </div>
        <div className={s.container}>
          <div>Цвет линии</div>
          <input type="color"></input>
        </div>
        <div className={s.title}>Жирность</div>
        <div className={s.container}>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            defaultValue="100"
            ref={editTextRangeRef1}
            className={s.range}
            onInput={EditTextInputRange}
          ></input>
          <input
            type="text"
            maxLength="3"
            defaultValue="100"
            ref={editTextTextRef1}
            className={s.text}
            onInput={EditTextInputText}
          ></input>
        </div>
        <div className={s.title}>Размер</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="32"
            defaultValue="16"
            ref={editTextRangeRef2}
            className={s.range}
            onInput={EditTextInputRange}
          ></input>
          <input
            type="text"
            maxLength="2"
            defaultValue="16"
            ref={editTextTextRef2}
            className={s.text}
            onInput={EditTextInputText}
          ></input>
        </div>
        <div className={s.title}>Расширение</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="9"
            defaultValue="5"
            ref={editTextRangeRef3}
            className={s.range}
            onInput={EditTextInputRange}
          ></input>
          <input
            type="text"
            maxLength="1"
            defaultValue="5"
            ref={editTextTextRef3}
            className={s.text}
            onInput={EditTextInputText}
          ></input>
        </div>
        <select defaultValue="Arial">
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
        </select>
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
          <div className={s.title}>Насыщенность</div>
          <div className={s.container}>
            <input
              ref={editTextShadowRangeRef4}
              type="range"
              min="0"
              max="16"
              defaultValue="0"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef4}
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
              ref={editTextShadowRangeRef5}
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              defaultValue="0.5"
              className={s.range}
              onInput={EditTextShadowInputRange}
            ></input>
            <input
              ref={editTextShadowTextRef5}
              type="text"
              maxLength="3"
              defaultValue="0.5"
              className={s.text}
              onInput={EditTextShadowInputText}
            ></input>
          </div>
          <div className={s.container}>
            <input
              ref={editTextShadowColorRef}
              type="color"
              className={s.checkbox}
            ></input>
            <div>Цвет тени</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditText;
