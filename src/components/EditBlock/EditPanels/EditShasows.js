import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";

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

function EditShadowInputText() {
  document.getElementById("EditShadowInputRange").value =
    document.getElementById("EditShadowInputText").value;
}
function EditShadowInputRange() {
  document.getElementById("EditShadowInputText").value =
    document.getElementById("EditShadowInputRange").value;
}

const EditShasows = () => {
  return (
    <div id="EditShadow" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditShadowOpen}>
        Редактирование теней
      </div>
      <div id="EditShadowDetect" className={s.detector}>
        <div className={s.title}>Отступ по x</div>
        <div className={s.container}>
          <input
            id="EditShadowInputRange"
            type="range"
            min="-10"
            max="10"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            id="EditShadowInputText"
            value="0"
            type="text"
            maxLength="2"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Отступ по y</div>
        <div className={s.container}>
          <input
            id="EditShadowInputRange"
            type="range"
            min="-10"
            max="10"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            id="EditShadowInputText"
            value="0"
            type="text"
            maxLength="2"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Размытие</div>
        <div className={s.container}>
          <input
            id="EditShadowInputRange"
            type="range"
            min="-10"
            max="10"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            id="EditShadowInputText"
            value="0"
            type="text"
            maxLength="2"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.title}>Насыщенность</div>
        <div className={s.container}>
          <input
            id="EditShadowInputRange"
            type="range"
            min="-10"
            max="10"
            className={s.range}
            onChange={EditShadowInputRange}
          ></input>
          <input
            id="EditShadowInputText"
            value="0"
            type="text"
            maxLength="2"
            className={s.text}
            onChange={EditShadowInputText}
          ></input>
        </div>
        <div className={s.container}>
          <input
            id="EditShadowInputInner"
            type="checkbox"
            className={s.radio}
            // onChange={EditShadowInputRange}
          ></input>
          <div>Внутренняя тень</div>
        </div>
      </div>
    </div>
  );
};

export default EditShasows;
