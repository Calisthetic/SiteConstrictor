import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";

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

const EditPosition = () => {
  return (
    <div id="EditPosition" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditPositionOpen}>
        Положение блока
      </div>
      <div id="EditPositionDetect" className={s.detector}>
        <div className={s.title}>Отступ слева</div>
        <div className={s.container}>
          <input
            id="EditPositionInputRange"
            type="range"
            min="1"
            max="512"
            className={s.range}
          ></input>
          <input
            id="EditPositionInputText"
            type="text"
            maxLength="4"
            value="100"
            className={s.text}
          ></input>
        </div>
        <div className={s.title}>Отступ сверху</div>
        <div className={s.container}>
          <input
            id="EditPositionInputRange"
            type="range"
            min="1"
            max="512"
            className={s.range}
          ></input>
          <input
            id="EditPositionInputText"
            type="text"
            maxLength="4"
            value="100"
            className={s.text}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditPosition;
