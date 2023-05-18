import React, { useEffect, useState } from 'react'
import s from "./WorkPlace.module.css";



const WorkPlace = () => {
  
  const [BlocksData, setBlocksData] = useState([{}])
  useEffect(() => {
    fetch("/api/div", {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setBlocksData(data)
      }
    )
  }, []) 

  function ToRgba(color, opacity) {
    return "rgba( " + (HexToDec(color[1]) * 16 + HexToDec(color[2])) + ", " + 
    (HexToDec(color[3]) * 16 + HexToDec(color[4])) + ", " + 
    (HexToDec(color[5]) * 16 + HexToDec(color[6])) + ", " + opacity + " )"
  }

  function HexToDec(letter) {
    if (letter === "f") {
      return 15
    } else if (letter === "e") {
      return 14
    } else if (letter === "d") {
      return 13
    } else if (letter === "c") {
      return 12
    } else if (letter === "b") {
      return 11
    } else if (letter === "a") {
      return 10
    } else if (letter < 10 && letter > -1) {
      return letter
    } else {
      return 0
    }
  }

  return (
    <div id="Blocks" className={s.background}>
      {(typeof BlocksData[0] === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        BlocksData.map((item, index) => (
          <div key={index} id={item.id} style={{
            dataName: item.block_name,
            
            height: !!item.height && (item.height[item.height.length - 1] === "%")?(item.height):(item.height + "px"),
            width: !!item.width && (item.width[item.width.length - 1] === "%")?(item.width):(item.width + "px"),
            
            opacity: !!item.opacity1 && item.opacity1,
            boxShadow: (item.spread || item.blur) && (item.shadow_marginx + "px " + item.shadow_marginy + "px " + item.blur + "px " + item.spread + "px " + ToRgba(item.shadow_color, item.shadow_opacity)),

            background: (item.color1 !== undefined && item.color2 !== undefined) 
            ? (item.radial === false ? ("linear-gradient(" + item.direction + "deg, " + ToRgba(item.color1, item.opacity1) + ", " + ToRgba(item.color2, item.opacity2) + " 100%)")
            : ("radial-gradient(" + ToRgba(item.color1, item.opacity1) + ", " + ToRgba(item.color2, item.opacity2) + " 100%)")) 
            : (!!item.color && item.color),
            
            zIndex: item.layer,
            position: "absolute",
            left: item.marginx + "px",
            top: item.marginy + "px",
            transform: "rotate(" + item.rotation + "deg)",

            borderRadius: item.radius1 + "px " + item.radius2 + "px " + item.radius3 + "px " + item.radius4 + "px",
            border: item.in_width + "px " + item.in_type + " " + item.in_color + " ",
            outline: item.out_width + "px " + item.out_type + " " + item.out_color,
            outlineOffset: !!item.out_margin && item.out_margin,

            textAlign: !!item.text_horizontal_align && item.text_horizontal_align,
            textDecoration: !!item.text_decoration && item.text_decoration,
            textShadow:!!item.text_shadow && item.text_shadow,
            textTransform:!!item.text_transform && item.text_transform,
            fontSize: item.font_size + "px",
            fontFamily: item.font_family,
            fontWeight: item.font_weight,
          }}>
            {item.in_text}{}
          </div>
        ))
      )}
    </div>
  );
};

export default WorkPlace;
