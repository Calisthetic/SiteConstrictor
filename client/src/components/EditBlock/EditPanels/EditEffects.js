import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";
import React, { useRef } from "react";
// import ImageCursorDefault from "../../../images/cursor/default.png"
// import ImageCursorPointer from "../../../images/cursor/pointer.png"
// import ImageCursorCrosshair from "../../../images/cursor/crosshair.png"
// import ImageCursorText from "../../../images/cursor/text.png"
// import ImageCursorVertical_text from "../../../images/cursor/vertical-text.png"
// import ImageCursorHelp from "../../../images/cursor/help.png"
// import ImageCursorWait from "../../../images/cursor/wait.png"
// import ImageCursorProgress from "../../../images/cursor/progress.png"
// import ImageCursorCell from "../../../images/cursor/cell.png"
// import ImageCursorMove from "../../../images/cursor/move.png"
// import ImageCursorNot_allowed from "../../../images/cursor/not-allowed.png"

const EditEffects = () => {
  const editEffectsRangeRef = useRef();
  const editEffectsTextRef = useRef();

  function EditEffectsOpen() {
    if (OpenEditors.effects === true) {
      document.getElementById("EditEffectsDetect").style.opacity = "0";
      document.getElementById("EditEffectsDetect").style.height = "0px";
      OpenEditors.effects = false;
    } else {
      document.getElementById("EditEffectsDetect").style.opacity = "1";
      document.getElementById("EditEffectsDetect").style.height = "auto";
      OpenEditors.effects = true;
    }
  }
  function EditEffectsInputRange() {
    editEffectsTextRef.current.value = editEffectsRangeRef.current.value;
  }
  function EditEffectsInputText() {
    editEffectsRangeRef.current.value = editEffectsTextRef.current.value;
  }

  return (
    <div id="EditEffects" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditEffectsOpen}>
        Эффекты
      </div>
      <div id="EditEffectsDetect" className={s.detector}>
        <div className={s.title}>Мышь при наведении</div>
        <div className={s.container}>
          <select defaultValue="auto">
            <option value="auto">auto</option>
            <option className={s.cursor_default} value="default">
              default
            </option>
            <option value="pointer">pointer</option>
            <option value="crosshair">crosshair</option>
            <option value="text">text</option>
            <option value="vertical-text">vertical-text</option>
            <option value="help">help</option>
            <option value="wait">wait</option>
            <option value="progress">progress</option>
            <option value="cell">cell</option>
            <option value="move">move</option>
            <option value="not-allowed">not-allowed</option>
          </select>
        </div>
        <div className={s.title}>Задержка</div>
        <div className={s.container}>
          <input
            type="range"
            min="0"
            max="1.6"
            step="0.1"
            defaultValue="0"
            ref={editEffectsRangeRef}
            className={s.range}
            onInput={EditEffectsInputRange}
          ></input>
          <input
            type="text"
            maxLength="4"
            defaultValue="0"
            ref={editEffectsTextRef}
            className={s.text}
            onInput={EditEffectsInputText}
          ></input>
        </div>
        <div className={s.title}>Тип задержки</div>
        <div className={s.container}>
          <select defaultValue="linear">
            <option value="linear">linear</option>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out  ">ease-in-out</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditEffects;
