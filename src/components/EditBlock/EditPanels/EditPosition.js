import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import React, { useRef } from "react";



const EditPosition = () => {
  const editPositionRangeRef1 = useRef();
  const editPositionRangeRef2 = useRef();
  const editPositionRangeRef3 = useRef();
  const editPositionTextRef1 = useRef();
  const editPositionTextRef2 = useRef();
  const editPositionTextRef3 = useRef();

  function EditPositionOpen() {
    if (OpenEditors.position === true) {
      document.getElementById("EditPositionDetect").style.opacity = "0";
      document.getElementById("EditPositionDetect").style.height = "0px";
      OpenEditors.position = false;
    } else {
      document.getElementById("EditPositionDetect").style.opacity = "1";
      document.getElementById("EditPositionDetect").style.height = "auto";
      OpenEditors.position = true;
    }
  }
  
  function EditPositionInputRange() {
    editPositionTextRef1.current.value = editPositionRangeRef1.current.value
    editPositionTextRef2.current.value = editPositionRangeRef2.current.value
    editPositionTextRef3.current.value = editPositionRangeRef3.current.value
  }
  function EditPositionInputText() {
    editPositionRangeRef1.current.value = editPositionTextRef1.current.value
    editPositionRangeRef2.current.value = editPositionTextRef2.current.value
    editPositionRangeRef3.current.value = editPositionTextRef3.current.value
  }

  return (
    <div id="EditPosition" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditPositionOpen}>
        Положение блока
      </div>
      <div id="EditPositionDetect" className={s.detector}>
        <div className={s.title}>Отступ слева</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="512"
            defaultValue="0"
            className={s.range}
            ref={editPositionRangeRef1}
            onInput={EditPositionInputRange}
          ></input>
          <input
            type="text"
            maxLength="4"
            defaultValue="0"
            className={s.text}
            ref={editPositionTextRef1}
            onInput={EditPositionInputText}
          ></input>
        </div>
        <div className={s.title}>Отступ сверху</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="512"
            defaultValue="0"
            className={s.range}
            ref={editPositionRangeRef2}
            onInput={EditPositionInputRange}
          ></input>
          <input
            type="text"
            maxLength="4"
            defaultValue="0"
            className={s.text}
            ref={editPositionTextRef2}
            onInput={EditPositionInputText}
          ></input>
        </div>
        <div className={s.title}>Поворот</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="360"
            step="15"
            defaultValue="0"
            className={s.range}
            ref={editPositionRangeRef3}
            onInput={EditPositionInputRange}
          ></input>
          <input
            type="text"
            maxLength="3"
            defaultValue="0"
            className={s.text}
            ref={editPositionTextRef3}
            onInput={EditPositionInputText}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditPosition;
