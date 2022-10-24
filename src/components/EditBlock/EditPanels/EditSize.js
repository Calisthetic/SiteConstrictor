import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";

const EditSize = () => {
  function EditSizeOpen() {
    if (OpenEditors.size === true) {
      document.getElementById("EditSizeDetect").style.opacity = "0";
      document.getElementById("EditSizeDetect").style.height = "0px";
      OpenEditors.size = false;
    } else {
      document.getElementById("EditSizeDetect").style.opacity = "1";
      document.getElementById("EditSizeDetect").style.height = "auto";
      OpenEditors.size = true;
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

  return (
    <div id="EditSize" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditSizeOpen}>
        Размер
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
