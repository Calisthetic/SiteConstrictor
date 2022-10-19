import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";

function EditSizeOpen() {
  if (OpenEditors.size === true) {
    document.getElementById("EditSizeDetect").style.display = "none";
    OpenEditors.size = false;
  } else {
    document.getElementById("EditSizeDetect").style.display = "block";
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

const EditSize = () => {
  return (
    <div id="EditSize" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditSizeOpen}>
        Редактирование размеров
      </div>
      <ul id="EditSizeDetect">
      <li>
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
        </li>
        <li>
          <div className={s.title}>Длинна</div>
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
        </li>
      </ul>
    </div>
  );
};

export default EditSize;
