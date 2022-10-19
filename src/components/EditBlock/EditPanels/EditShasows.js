import s from '../EditBlock.module.css'
import {OpenEditors} from '../EditBlock.js'

function EditShadowOpen() {
  if (OpenEditors.shadow === true) {
    document.getElementById("EditShadowDetect").style.display = "none";
    OpenEditors.shadow = false;
  } else {
    document.getElementById("EditShadowDetect").style.display = "block";
    OpenEditors.shadow = true;
  }
}

function EditShadowInputText() {
  document.getElementById("EditShadowInputRange").value = document.getElementById("EditShadowInputText").value;
}
function EditShadowInputRange() {
  document.getElementById("EditShadowInputText").value = document.getElementById("EditShadowInputRange").value;
}

const EditShasows = () => {
  
  return (
    <div id="EditShadow" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditShadowOpen}>Редактирование теней</div>
      <ul id="EditShadowDetect">
        <li>
          <div className={s.title}>Отступ по x</div>
          <div className={s.container}>
            <input id='EditShadowInputRange' type="range" min='-10' max='10' className={s.range} onChange={EditShadowInputRange}></input>
            <input id='EditShadowInputText' type="text" maxLength='2' className={s.text} onChange={EditShadowInputText}></input>
          </div>
        </li>
        <li>
          <div className={s.title}>Отступ по y</div>
          <div className={s.container}>
            <input id='EditShadowInputRange' type="range" min='-10' max='10' className={s.range} onChange={EditShadowInputRange}></input>
            <input id='EditShadowInputText' type="text" maxLength='2' className={s.text} onChange={EditShadowInputText}></input>
          </div>
        </li><li>
          <div className={s.title}>Размытие</div>
          <div className={s.container}>
            <input id='EditShadowInputRange' type="range" min='-10' max='10' className={s.range} onChange={EditShadowInputRange}></input>
            <input id='EditShadowInputText' type="text" maxLength='2' className={s.text} onChange={EditShadowInputText}></input>
          </div>
        </li><li>
          <div className={s.title}>Насыщенность</div>
          <div className={s.container}>
            <input id='EditShadowInputRange' type="range" min='-10' max='10' className={s.range} onChange={EditShadowInputRange}></input>
            <input id='EditShadowInputText' type="text" maxLength='2' className={s.text} onChange={EditShadowInputText}></input>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default EditShasows;