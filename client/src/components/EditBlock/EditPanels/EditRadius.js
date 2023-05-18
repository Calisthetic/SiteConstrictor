import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";
import ImgNorthWest from "../../../icons/EditRadius/north_west.png";
import ImgNorthEast from "../../../icons/EditRadius/north_east.png";
import ImgSouthWest from "../../../icons/EditRadius/south_west.png";
import ImgSouthEast from "../../../icons/EditRadius/south_east.png";
// import {ReactComponent as IconSouthWest} from "../../../icons/south_west.svg"

const EditRadius = () => {
  const editRadiusRangeRef1 = useRef();
  const editRadiusRangeRef2 = useRef();
  const editRadiusRangeRef3 = useRef();
  const editRadiusRangeRef4 = useRef();
  const editRadiusTextRef1 = useRef();
  const editRadiusTextRef2 = useRef();
  const editRadiusTextRef3 = useRef();
  const editRadiusTextRef4 = useRef();
  const editRadiusCheckRef = useRef();

  function EditRadiusOpen() {
    if (OpenEditors.radius === true) {
      document.getElementById("EditRadiusDetect").style.opacity = "0";
      document.getElementById("EditRadiusDetect").style.height = "0px";
      OpenEditors.radius = false;
    } else {
      document.getElementById("EditRadiusDetect").style.opacity = "1";
      document.getElementById("EditRadiusDetect").style.height = "auto";
      OpenEditors.radius = true;
    }
  }

  function EditRadiusInputRange(event) {
    if (editRadiusCheckRef.current.checked) {
      editRadiusTextRef1.current.value = event.target.value;
      editRadiusTextRef2.current.value = event.target.value;
      editRadiusTextRef3.current.value = event.target.value;
      editRadiusTextRef4.current.value = event.target.value;
      editRadiusRangeRef1.current.value = event.target.value;
      editRadiusRangeRef2.current.value = event.target.value;
      editRadiusRangeRef3.current.value = event.target.value;
      editRadiusRangeRef4.current.value = event.target.value;
    } else {
      editRadiusTextRef1.current.value = editRadiusRangeRef1.current.value;
      editRadiusTextRef2.current.value = editRadiusRangeRef2.current.value;
      editRadiusTextRef3.current.value = editRadiusRangeRef3.current.value;
      editRadiusTextRef4.current.value = editRadiusRangeRef4.current.value;
    }
    EditRadius()
  }
  function EditRadiusInputText(event) {
    if (editRadiusCheckRef.current.checked) {
      editRadiusTextRef1.current.value = event.target.value;
      editRadiusTextRef2.current.value = event.target.value;
      editRadiusTextRef3.current.value = event.target.value;
      editRadiusTextRef4.current.value = event.target.value;
      editRadiusRangeRef1.current.value = event.target.value;
      editRadiusRangeRef2.current.value = event.target.value;
      editRadiusRangeRef3.current.value = event.target.value;
      editRadiusRangeRef4.current.value = event.target.value;
    } else {
      editRadiusRangeRef1.current.value = editRadiusTextRef1.current.value;
      editRadiusRangeRef2.current.value = editRadiusTextRef2.current.value;
      editRadiusRangeRef3.current.value = editRadiusTextRef3.current.value;
      editRadiusRangeRef4.current.value = editRadiusTextRef4.current.value;
    }
    EditRadius()
  }
  function EditRadius() {
    document.getElementById(SelectedElem).style.borderRadius = editRadiusTextRef1.current.value + 'px ' + 
      editRadiusTextRef2.current.value + 'px ' + editRadiusTextRef4.current.value + 'px ' + editRadiusTextRef3.current.value + 'px'
  }

  return (
    <div id="EditRadius" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditRadiusOpen}>
        Закругление
      </div>
      <div id="EditRadiusDetect" className={s.detector}>
        <div className={s.container}>
          <div className={s.container}>
            <div className={s.container2}>
              <img src={ImgNorthWest} className={s.NorthWest} alt="nw" />
              <input
                type="range"
                min="0"
                max="50"
                defaultValue="0"
                ref={editRadiusRangeRef1}
                className={s.vertical_range}
                onInput={EditRadiusInputRange}
              ></input>
              <input
                type="text"
                maxLength="3"
                defaultValue="0"
                ref={editRadiusTextRef1}
                className={s.text}
                onInput={EditRadiusInputText}
              ></input>
            </div>
            <div className={s.container2}>
              <img src={ImgNorthEast} className={s.NorthEast} alt="ne" />
              <input
                type="range"
                min="0"
                max="50"
                defaultValue="0"
                ref={editRadiusRangeRef2}
                className={s.vertical_range}
                onInput={EditRadiusInputRange}
              ></input>
              <input
                type="text"
                maxLength="3"
                defaultValue="0"
                ref={editRadiusTextRef2}
                className={s.text}
                onInput={EditRadiusInputText}
              ></input>
            </div>
          </div>
          <div className={s.container}>
            <div className={s.container2}>
              <img src={ImgSouthWest} className={s.SouthWest} alt="sw" />
              <input
                type="range"
                min="0"
                max="50"
                defaultValue="0"
                ref={editRadiusRangeRef3}
                className={s.vertical_range}
                onInput={EditRadiusInputRange}
              ></input>
              <input
                type="text"
                maxLength="3"
                defaultValue="0"
                ref={editRadiusTextRef3}
                className={s.text}
                onInput={EditRadiusInputText}
              ></input>
            </div>
            <div className={s.container2}>
              <img src={ImgSouthEast} className={s.SouthEast} alt="se" />
              <input
                type="range"
                min="0"
                max="50"
                defaultValue="0"
                ref={editRadiusRangeRef4}
                className={s.vertical_range}
                onInput={EditRadiusInputRange}
              ></input>
              <input
                type="text"
                maxLength="3"
                defaultValue="0"
                ref={editRadiusTextRef4}
                className={s.text}
                onInput={EditRadiusInputText}
              ></input>
            </div>
          </div>
        </div>
        <div className={s.container}>
          <input
            ref={editRadiusCheckRef}
            type="checkbox"
            defaultChecked
          ></input>
          <div>Объединить</div>
        </div>
      </div>
    </div>
  );
};

export default EditRadius;
