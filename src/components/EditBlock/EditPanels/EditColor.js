import s from "../EditBlock.module.css";
import { SelectedElem } from "../EditBlock.js";

export default function EditColor() {
  function ChangeColor() {
    document.getElementById("Block" + SelectedElem).style.backgroundColor =
      document.getElementById("inputColor").value;
  }
  return (
    <div className={s.edit_color}>
      <div>Цвет</div>
      <input id="inputColor" type="color" onChange={ChangeColor}></input>
    </div>
  );
}
