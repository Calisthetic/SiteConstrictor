import React from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";

const EditImage = () => {
  function EditOpen() {
    if (OpenEditors.image === true) {
      document.getElementById("EditImageDetect").style.opacity = "0";
      document.getElementById("EditImageDetect").style.height = "0px";
      OpenEditors.image = false;
    } else {
      document.getElementById("EditImageDetect").style.opacity = "1";
      document.getElementById("EditImageDetect").style.height = "auto";
      OpenEditors.image = true;
    }
  }

  return (
    <div id="EditImage" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditOpen}>
        Фото
      </div>
      <div id="EditImageDetect" className={s.detector}>
        <div className={s.title}>Картинка</div>
        <div className={s.container}>
          <input type="file" accept="image/png, image/jpeg, image/jpg"></input>
        </div>
      </div>
    </div>
  );
};

export default EditImage;
