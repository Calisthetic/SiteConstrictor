import s from "../EditBlock.module.css";
import { SelectedElem } from "../EditBlock.js";
import { OpenEditors } from "../EditBlock.js";

function EditColorOpen() {
  if (OpenEditors.color === true) {
    document.getElementById("EditColorDetect").style.opacity = "0";
    document.getElementById("EditColorDetect").style.height = "0px";
    OpenEditors.color = false;
  } else {
    document.getElementById("EditColorDetect").style.opacity = "1";
    document.getElementById("EditColorDetect").style.height = "auto";
    OpenEditors.color = true;
  }
}

export default function EditColor() {
  function ChangeColor() {
    document.getElementById("Block" + SelectedElem).style.backgroundColor =
      document.getElementById("inputColor").value;
  }

  return (
    <div id="EditColor" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditColorOpen}>
        Цвет
      </div>
      <div id="EditColorDetect" className={s.detector}>
        <div className={s.container}>
          <div>Полная заливка</div>
          <input id="inputColor" type="color" onChange={ChangeColor}></input>
        </div>
      </div>
    </div>
  );
}
