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
    let res = [];
    res[0] = DecToHex(rgbs[0].slice(0, rgbs[0].length - 1))
    res[1] = DecToHex(rgbs[1].slice(0, rgbs[1].length - 1))
    res[2] = DecToHex(rgbs[2].slice(0, rgbs[2].length - 1))
    return "#" + res.join("");
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
      if (!!document.getElementById(item.id)) {
        console.log(!!document.getElementById(item.id) && document.getElementById(item.id).style.outline);
        let block = {
          id: item.id,
          block_name: item.block_name,
          project_id: item.project_id,
          //! shadow
          shadow_marginx: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[0]
          .slice(0, document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[0].length - 2) : null,
          shadow_marginy: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[1]
          .slice(0, document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[1].length - 2) : null,
          blur: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[2]
          .slice(0, document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[2].length - 2) : null,
          spread: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[3]
          .slice(0, document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf(")") + 2, document.getElementById(item.id).style.boxShadow.length).split(" ")[3].length - 2) : null,
          shadow_opacity: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf("(") + 1, document.getElementById(item.id).style.boxShadow.indexOf(")")).split(" ").length > 3 
            ? document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf("(") + 1, document.getElementById(item.id).style.boxShadow.indexOf(")")).split(" ")[3] : 1 : null,
          type_inner: document.getElementById(item.id).style.boxShadow.length > 0 ? document.getElementById(item.id).style.boxShadow.indexOf("inset") >= 0 ? true : false : null,
          shadow_color: document.getElementById(item.id).style.boxShadow.length > 0 ? ToHex(document.getElementById(item.id).style.boxShadow.slice(document.getElementById(item.id).style.boxShadow.indexOf("(") + 1, document.getElementById(item.id).style.boxShadow.indexOf(")"))) : null,
          // size
          width: (document.getElementById(item.id).style.width[document.getElementById(item.id).style.width.length - 1] === "%")
            ? document.getElementById(item.id).style.width.slice(0, document.getElementById(item.id).style.width.length - 1)
            : document.getElementById(item.id).style.width.slice(0, document.getElementById(item.id).style.width.length - 2),
          height: (document.getElementById(item.id).style.height[document.getElementById(item.id).style.height.length - 1] === "%")
            ? document.getElementById(item.id).style.height.slice(0, document.getElementById(item.id).style.height.length - 1)
            : document.getElementById(item.id).style.height.slice(0, document.getElementById(item.id).style.height.length - 2),
          layer: document.getElementById(item.id).style.zIndex,
          // color
          color: document.getElementById(item.id).style.background.slice(0, 3) === "rgb" 
            ? ToHex(document.getElementById(item.id).style.background.slice(4, document.getElementById(item.id).style.background.length - 1)) : null,
          opacity: document.getElementById(item.id).style.opacity,
          // gradient
          gradient: document.getElementById(item.id).style.background.slice(0, 3) === "rgb" ? false : true,
          radial: document.getElementById(item.id).style.background.slice(0, 6) === "linear" ? false : (document.getElementById(item.id).style.background.slice(0, 6) === "radial" ? true : null),
          direction: document.getElementById(item.id).style.background.slice(0, 6) === "linear" 
            ? (document.getElementById(item.id).style.background.split(' ')[0].slice(16, (document.getElementById(item.id).style.background.split(' ')[0].length - 4))) : null,
          color1: document.getElementById(item.id).style.background.length > 17 
            ? document.getElementById(item.id).style.background.slice(0, 6) === "linear"
              ? ToHex(document.getElementById(item.id).style.background.slice(document.getElementById(item.id).style.background.indexOf('g, rgb(') + 7, document.getElementById(item.id).style.background.indexOf('),')))
              : ToHex(document.getElementById(item.id).style.background.slice(document.getElementById(item.id).style.background.indexOf('(rgb(') + 5, document.getElementById(item.id).style.background.indexOf('),'))) 
            : null,
          color2: document.getElementById(item.id).style.background.length > 17 
            ? document.getElementById(item.id).style.background.slice(0, 6) === "linear"
              ? ToHex(document.getElementById(item.id).style.background.slice(document.getElementById(item.id).style.background.indexOf('), rgb(') + 7, document.getElementById(item.id).style.background.indexOf(') ')))
              : ToHex(document.getElementById(item.id).style.background.slice(document.getElementById(item.id).style.background.indexOf(' rgb(') + 5, document.getElementById(item.id).style.background.indexOf(') '))) 
            : null,
          // position
          marginx: document.getElementById(item.id).style.left.slice(0, document.getElementById(item.id).style.left.length - 2),
          marginy: document.getElementById(item.id).style.top.slice(0, document.getElementById(item.id).style.top.length - 2),
          rotation: document.getElementById(item.id).style.transform.length > 11 
            ? document.getElementById(item.id).style.transform.slice(7, document.getElementById(item.id).style.transform.length - 4) : 0,
          // borders +
          in_width: document.getElementById(item.id).style.border !== "none" && document.getElementById(item.id).style.border.split(' ')[0].slice(0, document.getElementById(item.id).style.border.split(' ')[0].length - 2),
          in_color: document.getElementById(item.id).style.border !== "none" && 
          ToHex(document.getElementById(item.id).style.border.slice(document.getElementById(item.id).style.border.indexOf('(') + 1, document.getElementById(item.id).style.border.indexOf(')'))),
          in_type: document.getElementById(item.id).style.border !== "none" && document.getElementById(item.id).style.border.split(' ')[1],
          out_width: document.getElementById(item.id).style.outline !== "none" && 
            document.getElementById(item.id).style.outline.split(' ')[4].slice(0, document.getElementById(item.id).style.outline.split(' ')[4].length - 2),
          out_margin: document.getElementById(item.id).style.outlineOffset !== "none" && document.getElementById(item.id).style.outlineOffset.slice(0, document.getElementById(item.id).style.outlineOffset.length - 2),
          out_color: document.getElementById(item.id).style.outline !== "none" && 
            ToHex(document.getElementById(item.id).style.outline.slice(document.getElementById(item.id).style.outline.indexOf('(') + 1, document.getElementById(item.id).style.outline.indexOf(')'))),
          out_type: document.getElementById(item.id).style.outline.split(' ')[3],
          // border-radius
          radius1: document.getElementById(item.id).style.borderRadius.split(' ').length > 0 
            ? document.getElementById(item.id).style.borderRadius.split(' ')[0].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[0].length - 2) : null,
          radius2: document.getElementById(item.id).style.borderRadius.split(' ').length === 1 
            ? document.getElementById(item.id).style.borderRadius.split(' ')[0].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[0].length - 2) 
            : document.getElementById(item.id).style.borderRadius.split(' ').length > 1
              ? document.getElementById(item.id).style.borderRadius.split(' ')[1].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[1].length - 2) : null,
          radius3: (document.getElementById(item.id).style.borderRadius.split(' ').length === 1 || document.getElementById(item.id).style.borderRadius.split(' ').length === 2) 
            ? document.getElementById(item.id).style.borderRadius.split(' ')[0].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[0].length - 2) 
            : document.getElementById(item.id).style.borderRadius.split(' ').length > 2
              ? document.getElementById(item.id).style.borderRadius.split(' ')[2].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[2].length - 2) : null,
          radius4: document.getElementById(item.id).style.borderRadius.split(' ').length === 1
            ? document.getElementById(item.id).style.borderRadius.split(' ')[0].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[0].length - 2) 
            : (document.getElementById(item.id).style.borderRadius.split(' ').length === 2 || document.getElementById(item.id).style.borderRadius.split(' ').length === 3)
              ? document.getElementById(item.id).style.borderRadius.split(' ')[1].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[1].length - 2) 
              : document.getElementById(item.id).style.borderRadius.split(' ').length > 3 
                ? document.getElementById(item.id).style.borderRadius.split(' ')[3].slice(0, document.getElementById(item.id).style.borderRadius.split(' ')[3].length - 2) : null,
          // text
          // text-shadow
        }
        // console.log(block.radius1);
        // console.log(block.radius2);
        // console.log(block.radius3);
        // console.log(block.rotation);
        let response = await fetch('/api/div', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(block)
        });
        console.log(JSON.stringify(block));
      }
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
