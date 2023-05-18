import s from "./EditBlock.module.css";
//import { BlockCounter } from "../AddBlock/AddBlock";
import React, { useEffect, useRef, useState } from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditBorder";
import EditRadius from "./EditPanels/EditRadius";
import EditText from "./EditPanels/EditText";
import EditImage from "./EditPanels/EditImage";
import EditEffects from "./EditPanels/EditEffects";
import Barrier from "./Barrier.js";

// ! CSS: appearance

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
  color: false,
  position: false,
  border: false,
  radius: false,
  text: false,
  image: false,
  effects: false,
  textShadow: false,
};

const EditBlock = () => {
  const editBorderList = useRef();

  const [BlocksData, setBlocksData] = useState([{}])
  useEffect(() => {
    fetch("/api/div", {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setBlocksData(data)
        SelectedElem = data[0].id;
      }
    )
  }, []) 

  function OnSelectionChange() {
    SelectedElem = editBorderList.current.value;
    console.log(editBorderList.current.value);
  }
  !!document.getElementById("SaveButton") && (document.getElementById("SaveButton").onmouseover = () => {document.getElementById("SaveButton").style.border = "2px solid white";})
  !!document.getElementById("SaveButton") && (document.getElementById("SaveButton").onmouseleave = () => {document.getElementById("SaveButton").style.border = "2px solid red";})
  
  function ToHex(text) {
    let rgbs = text.split(" ");
    if (text.slice(0, 4) === "rgba") {
      let result = new[4]();
      result[0] = rgbs[0].slice(rgbs[0].length - 16, rgbs[0].length - 16 - 4)
    } else {
      rgbs[0] = DecToHex(rgbs[0].slice(4, rgbs[0].length - 5))
      rgbs[1] = DecToHex(rgbs[1].slice(0, rgbs[1].length - 1))
      rgbs[2] = DecToHex(rgbs[2].slice(0, rgbs[2].length - 1))
      return "#" + rgbs.join("");
    }
  }
  function DecToHex(num) {
    let result;
    if (Math.floor(num / 16) === 15) {
      result = "f"
    } else if (Math.floor(num / 16) === 14) {
      result = "e"
    }else if (Math.floor(num / 16) === 13) {
      result = "d"
    }else if (Math.floor(num / 16) === 12) {
      result = "c"
    }else if (Math.floor(num / 16) === 11) {
      result = "b"
    }else if (Math.floor(num / 16) === 10) {
      result = "a"
    } else {
      result = Math.floor(num / 16)
    }
    result += ""
    if (num % 16 === 15) {
      result += "f"
    } else if (num % 16 === 14) {
      result += "e"
    }else if (num % 16 === 13) {
      result += "d"
    }else if (num % 16 === 12) {
      result += "c"
    }else if (num % 16 === 11) {
      result += "b"
    }else if (num % 16 === 10) {
      result += "a"
    } else {
      result += num % 16
    }
    return result
  }
  
  function SaveClick() {
    BlocksData.map(async (item, index) => {
      console.log(!!document.getElementById(item.id) && document.getElementById(item.id).style.top);
      let block = {
        id: item.id,
        block_name: item.block_name,
        project_id: item.project_id,
        //! shadow
        marginx: item.marginx,
        marginy: item.marginy,
        blur: item.blur,
        spread: item.spread,
        shadow_opacity: item.shadow_opacity,
        type_inner: item.type_inner,
        shadow_color: item.shadow_color,
        // size
        width: !!document.getElementById(item.id) && (document.getElementById(item.id).style.width[document.getElementById(item.id).style.width.length - 1] === "%")
          ? document.getElementById(item.id).style.width.slice(0, document.getElementById(item.id).style.width.length - 1)
          : document.getElementById(item.id).style.width.slice(0, document.getElementById(item.id).style.width.length - 2),
        height: !!document.getElementById(item.id) && (document.getElementById(item.id).style.height[document.getElementById(item.id).style.height.length - 1] === "%")
          ? document.getElementById(item.id).style.height.slice(0, document.getElementById(item.id).style.height.length - 1)
          : document.getElementById(item.id).style.height.slice(0, document.getElementById(item.id).style.height.length - 2),
        layer: !!document.getElementById(item.id) && document.getElementById(item.id).style.zIndex,
        // color
        color: !!document.getElementById(item.id) && (document.getElementById(item.id).style.background.slice(0, 3) === "rgb" ? ToHex(document.getElementById(item.id).style.background) : null),
        opacity: !!document.getElementById(item.id) && document.getElementById(item.id).style.opacity,
        // gradient
        gradient: !!document.getElementById(item.id) && (document.getElementById(item.id).style.background.slice(0, 3) === "rgb" ? false : true),
        radial: !!document.getElementById(item.id) && (document.getElementById(item.id).style.background.slice(0, 6) === "linear" ? false : (document.getElementById(item.id).style.background.slice(0, 6) === "radial" ? true : null)),
        direction: !!document.getElementById(item.id) && (document.getElementById(item.id).style.background.slice(0, 6) === "linear" 
          ? (document.getElementById(item.id).style.background.split(' ')[0].slice(16, (document.getElementById(item.id).style.background.split(' ')[0].length - 4))) : null),
        color1: 0,
        color2: 0,
        opacity1: 1,
        opacity2: 1,
        // position
        pos_marginx: !!document.getElementById(item.id) && (document.getElementById(item.id).style.left.slice(0, document.getElementById(item.id).style.left.length - 2)),
        pos_marginy: !!document.getElementById(item.id) && (document.getElementById(item.id).style.top.slice(0, document.getElementById(item.id).style.top.length - 2)),
        rotation: !!document.getElementById(item.id) && (document.getElementById(item.id).style.transform.length > 11 
          ? document.getElementById(item.id).style.transform.slice(7, document.getElementById(item.id).style.transform.length - 4) : 0),
        // borders
        in_width: 0,
        in_color: 0,
        in_type: 0,
        out_width: 0,
        out_margin: 0,
        out_color: 0,
        out_type: 0,
        // border-radius
        radius1: 0,
        radius2: 0,
        radius3: 0,
        radius4: 0,
        // text
        // text-shadow
      }
      console.log(block.pos_marginx);
      // let response = await fetch('/api/div', {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify(block)
      // });
    })
    document.getElementById("SaveButton").style.border = "2px solid lime";
    setTimeout(() => {
      document.getElementById("SaveButton").style.border = "2px solid red";
    }, 600);
  }

  return (
    <div className={s.background}>
      <div className={s.editors}>
        <div className={s.blocks_list}>
          <div className={s.edit_btn}>Список</div>
          <div className={s.list}>
            <select className={s.select_list} ref={editBorderList} onChange={OnSelectionChange}>
              {(typeof BlocksData[0] === undefined) ? (
                <p>Loading...</p>
              ) : (
                BlocksData.map((item, index) => (
                  <option defaultValue={index === 0 ? true : false} key={index} id={item.id} value={item.id}>
                    {item.block_name}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <Barrier />
        <EditShasows />
        <Barrier />
        <EditSize />
        <Barrier />
        <EditColor />
        <Barrier />
        <EditPosition />
        <Barrier />
        <EditBorder />
        <Barrier />
        <EditRadius />
        <Barrier />
        <EditText />
        <Barrier />
        {/* <EditImage />
        <Barrier /> */}
        <EditEffects />
        <div id="SaveButton" className={s.save_button} onClick={SaveClick}>Сохранить</div>
      </div>
      <div className={s.style_list}> </div>
    </div>
  );
};

export default EditBlock;
