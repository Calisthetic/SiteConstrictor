import s from "./Header.module.css";
import React from "react";
import { SelectedElem } from "../EditBlock/EditBlock";

let IsAddBlockActive = false;
let IsCopyButtonActive = false;

export function AddBlockClick() {
  if (IsAddBlockActive) {
    // off
    document.getElementById("AddBlockButton").style.transform = "rotate(0deg)";
    document.getElementById("AddBlock").style.left = "-264px";
    IsAddBlockActive = false;
  } else {
    // on
    document.getElementById("AddBlock").style.left = "0px";
    document.getElementById("AddBlockButton").style.transform = "rotate(135deg)";
    IsAddBlockActive = true;
  }
}

const Header = () => {
  const Developers = {
    Vladimir: "Калашников Владимир"
  };
  const DevLinks = {
    Vladimir: "https://github.com/Calisthetic",
  };

  const CopyCSS = async () => {
    let text
    if (!!document.getElementById(SelectedElem)) {
      text = "." + document.getElementById(SelectedElem).dataset.name + " {";
      let block = document.getElementById(SelectedElem);
      text += block.style.height.length > 0 ? ("\n  height: " + block.style.height + ";") : ""
      text += block.style.width.length > 0 ? ("\n  width: " + block.style.width + ";") : ""
      text += block.style.opacity.length > 0 ? ("\n  opacity: " + block.style.opacity + ";") : ""
      text += block.style.boxShadow.length > 0 ? ("\n  box-shadow: " + block.style.boxShadow + ";") : ""
      text += block.style.background.length > 0 ? ("\n  background: " + block.style.background + ";") : ""
      text += block.style.zIndex.length > 0 ? ("\n  z-index: " + block.style.zIndex + ";") : ""
      text += block.style.position.length > 0 ? ("\n  position: " + block.style.position + ";") : ""
      text += block.style.left.length > 0 ? ("\n  left: " + block.style.left + ";") : ""
      text += block.style.top.length > 0 ? ("\n  top: " + block.style.top + ";") : ""
      text += block.style.transform.length > 0 ? ("\n  transform: " + block.style.transform + ";") : ""
      text += block.style.borderRadius.length > 0 ? ("\n  border-radius: " + block.style.borderRadius + ";") : ""
      text += block.style.border.length > 0 ? ("\n  border: " + block.style.border + ";") : ""
      text += block.style.outline.length > 0 ? ("\n  outline: " + block.style.outline + ";") : ""
      text += block.style.outlineOffset.length > 0 ? ("\n  outline-offset: " + block.style.outlineOffset + ";") : ""
      text += block.style.color.length > 0 ? ("\n  color: " + block.style.color + ";") : ""
      text += block.style.textDecorationLine.length > 0 ? ("\n  text-decoration-line: " + block.style.textDecorationLine + ";") : ""
      text += block.style.textDecorationColor.length > 0 ? ("\n  text-decoration-color: " + block.style.textDecorationColor + ";") : ""
      text += block.style.textDecorationStyle.length > 0 ? ("\n  text-decoration-style: " + block.style.textDecorationStyle + ";") : ""
      text += block.style.textDecorationThickness.length > 0 ? ("\n  text-decoration-thickness: " + block.style.textDecorationThickness + ";") : ""
      text += block.style.fontSize.length > 0 ? ("\n  font-size: " + block.style.fontSize + ";") : ""
      text += block.style.fontFamily.length > 0 ? ("\n  font-family: " + block.style.fontFamily + ";") : ""
      text += block.style.fontStyle.length > 0 ? ("\n  font-style: " + block.style.fontStyle + ";") : ""
      text += block.style.fontWeight.length > 0 ? ("\n  font-weight: " + block.style.fontWeight + ";") : ""
      text += block.style.display.length > 0 ? ("\n  display: " + block.style.display + ";") : ""
      text += block.style.alignItems.length > 0 ? ("\n  align-items: " + block.style.alignItems + ";") : ""
      text += block.style.justifyContent.length > 0 ? ("\n  justify-content: " + block.style.justifyContent + ";") : ""
      text += block.style.letterSpacing.length > 0 ? ("\n  letter-spacing: " + block.style.letterSpacing + ";") : ""
      text += block.style.lineHeight.length > 0 ? ("\n  line-height: " + block.style.lineHeight + ";") : ""
      text += block.style.textIndent.length > 0 ? ("\n  text-indent: " + block.style.textIndent + ";") : ""
      text += block.style.textShadow.length > 0 ? ("\n  text-shadow: " + block.style.textShadow + ";") : ""
      text += block.style.overflow.length > 0 ? ("\n  overflow: " + block.style.overflow + ";") : ""
      text += block.style.transition.length > 0 ? ("\n  transition: " + block.style.transition + ";") : ""
      text += "\n}"
    } else {
      text = "Не удалось найти выбранный элемент"
    }
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyCSSButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyCSSButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyAllCSS = async () => {
    let text = "";
    if (document.getElementById("Blocks").children.length > 0) {
      for (let i = 0; i < document.getElementById("Blocks").children.length; i++) {
        text += "." + document.getElementById("Blocks").children[i].dataset.name + " {";
        let block = document.getElementById("Blocks").children[i];
        text += block.style.height.length > 0 ? ("\n  height: " + block.style.height + ";") : ""
        text += block.style.width.length > 0 ? ("\n  width: " + block.style.width + ";") : ""
        text += block.style.opacity.length > 0 ? ("\n  opacity: " + block.style.opacity + ";") : ""
        text += block.style.boxShadow.length > 0 ? ("\n  box-shadow: " + block.style.boxShadow + ";") : ""
        text += block.style.background.length > 0 ? ("\n  background: " + block.style.background + ";") : ""
        text += block.style.zIndex.length > 0 ? ("\n  z-index: " + block.style.zIndex + ";") : ""
        text += block.style.position.length > 0 ? ("\n  position: " + block.style.position + ";") : ""
        text += block.style.left.length > 0 ? ("\n  left: " + block.style.left + ";") : ""
        text += block.style.top.length > 0 ? ("\n  top: " + block.style.top + ";") : ""
        text += block.style.transform.length > 0 ? ("\n  transform: " + block.style.transform + ";") : ""
        text += block.style.borderRadius.length > 0 ? ("\n  border-radius: " + block.style.borderRadius + ";") : ""
        text += block.style.border.length > 0 ? ("\n  border: " + block.style.border + ";") : ""
        text += block.style.outline.length > 0 ? ("\n  outline: " + block.style.outline + ";") : ""
        text += block.style.outlineOffset.length > 0 ? ("\n  outline-offset: " + block.style.outlineOffset + ";") : ""
        text += block.style.color.length > 0 ? ("\n  color: " + block.style.color + ";") : ""
        text += block.style.textDecorationLine.length > 0 ? ("\n  text-decoration-line: " + block.style.textDecorationLine + ";") : ""
        text += block.style.textDecorationColor.length > 0 ? ("\n  text-decoration-color: " + block.style.textDecorationColor + ";") : ""
        text += block.style.textDecorationStyle.length > 0 ? ("\n  text-decoration-style: " + block.style.textDecorationStyle + ";") : ""
        text += block.style.textDecorationThickness.length > 0 ? ("\n  text-decoration-thickness: " + block.style.textDecorationThickness + ";") : ""
        text += block.style.fontSize.length > 0 ? ("\n  font-size: " + block.style.fontSize + ";") : ""
        text += block.style.fontFamily.length > 0 ? ("\n  font-family: " + block.style.fontFamily + ";") : ""
        text += block.style.fontStyle.length > 0 ? ("\n  font-style: " + block.style.fontStyle + ";") : ""
        text += block.style.fontWeight.length > 0 ? ("\n  font-weight: " + block.style.fontWeight + ";") : ""
        text += block.style.display.length > 0 ? ("\n  display: " + block.style.display + ";") : ""
        text += block.style.alignItems.length > 0 ? ("\n  align-items: " + block.style.alignItems + ";") : ""
        text += block.style.justifyContent.length > 0 ? ("\n  justify-content: " + block.style.justifyContent + ";") : ""
        text += block.style.letterSpacing.length > 0 ? ("\n  letter-spacing: " + block.style.letterSpacing + ";") : ""
        text += block.style.lineHeight.length > 0 ? ("\n  line-height: " + block.style.lineHeight + ";") : ""
        text += block.style.textIndent.length > 0 ? ("\n  text-indent: " + block.style.textIndent + ";") : ""
        text += block.style.textShadow.length > 0 ? ("\n  text-shadow: " + block.style.textShadow + ";") : ""
        text += block.style.overflow.length > 0 ? ("\n  overflow: " + block.style.overflow + ";") : ""
        text += block.style.transition.length > 0 ? ("\n  transition: " + block.style.transition + ";") : ""
        text += "\n}"
        if (i !== document.getElementById("Blocks").children.length - 1) {
          text += "\n"
        }
      }
    } else {
      text = "Не удалось найти выбранный элемент"
    }
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyAllCSSButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyAllCSSButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyHTML = async () => {
    let text
    if (!!document.getElementById(SelectedElem)) {
      text = "<div class=\"" + document.getElementById(SelectedElem).dataset.name + "\" style=\"";
      let block = document.getElementById(SelectedElem);
      text += block.style.height.length > 0 ? (" height: " + block.style.height + ";") : ""
      text += block.style.width.length > 0 ? (" width: " + block.style.width + ";") : ""
      text += block.style.opacity.length > 0 ? (" opacity: " + block.style.opacity + ";") : ""
      text += block.style.boxShadow.length > 0 ? (" box-shadow: " + block.style.boxShadow + ";") : ""
      text += block.style.background.length > 0 ? (" background: " + block.style.background + ";") : ""
      text += block.style.zIndex.length > 0 ? (" z-index: " + block.style.zIndex + ";") : ""
      text += block.style.position.length > 0 ? (" position: " + block.style.position + ";") : ""
      text += block.style.left.length > 0 ? (" left: " + block.style.left + ";") : ""
      text += block.style.top.length > 0 ? (" top: " + block.style.top + ";") : ""
      text += block.style.transform.length > 0 ? (" transform: " + block.style.transform + ";") : ""
      text += block.style.borderRadius.length > 0 ? (" border-radius: " + block.style.borderRadius + ";") : ""
      text += block.style.border.length > 0 ? (" border: " + block.style.border + ";") : ""
      text += block.style.outline.length > 0 ? (" outline: " + block.style.outline + ";") : ""
      text += block.style.outlineOffset.length > 0 ? (" outline-offset: " + block.style.outlineOffset + ";") : ""
      text += block.style.color.length > 0 ? (" color: " + block.style.color + ";") : ""
      text += block.style.textDecorationLine.length > 0 ? (" text-decoration-line: " + block.style.textDecorationLine + ";") : ""
      text += block.style.textDecorationColor.length > 0 ? (" text-decoration-color: " + block.style.textDecorationColor + ";") : ""
      text += block.style.textDecorationStyle.length > 0 ? (" text-decoration-style: " + block.style.textDecorationStyle + ";") : ""
      text += block.style.textDecorationThickness.length > 0 ? (" text-decoration-thickness: " + block.style.textDecorationThickness + ";") : ""
      text += block.style.fontSize.length > 0 ? (" font-size: " + block.style.fontSize + ";") : ""
      text += block.style.fontFamily.length > 0 ? (" font-family: " + block.style.fontFamily + ";") : ""
      text += block.style.fontStyle.length > 0 ? (" font-style: " + block.style.fontStyle + ";") : ""
      text += block.style.fontWeight.length > 0 ? (" font-weight: " + block.style.fontWeight + ";") : ""
      text += block.style.display.length > 0 ? (" display: " + block.style.display + ";") : ""
      text += block.style.alignItems.length > 0 ? (" align-items: " + block.style.alignItems + ";") : ""
      text += block.style.justifyContent.length > 0 ? (" justify-content: " + block.style.justifyContent + ";") : ""
      text += block.style.letterSpacing.length > 0 ? (" letter-spacing: " + block.style.letterSpacing + ";") : ""
      text += block.style.lineHeight.length > 0 ? (" line-height: " + block.style.lineHeight + ";") : ""
      text += block.style.textIndent.length > 0 ? (" text-indent: " + block.style.textIndent + ";") : ""
      text += block.style.textShadow.length > 0 ? (" text-shadow: " + block.style.textShadow + ";") : ""
      text += block.style.overflow.length > 0 ? (" overflow: " + block.style.overflow + ";") : ""
      text += block.style.transition.length > 0 ? (" transition: " + block.style.transition + ";") : ""
      text += "\">" + document.getElementById(SelectedElem).textContent + "</div>"
      console.log(block.style.color )
    } else {
      text = "Не удалось найти выбранный элемент"
    }
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyHTMLButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyHTMLButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyAllHTML = async () => {
    let text = ""
    let htmlText = ""
    let cssText = ""
    if (document.getElementById("Blocks").children.length > 0) {
      for (let i = 0; i < document.getElementById("Blocks").children.length; i++) {
        let block = document.getElementById("Blocks").children[i]
        htmlText += "\n  <div id=\"block" + block.dataset.id + "\" data-name=\"" + block.dataset.name + "\">" + block.textContent + "</div>"

        cssText += "\n  #block" + block.dataset.id + " {"
        cssText += block.style.height.length > 0 ? ("\n    height: " + block.style.height + ";") : ""
        cssText += block.style.width.length > 0 ? ("\n    width: " + block.style.width + ";") : ""
        cssText += block.style.opacity.length > 0 ? ("\n    opacity: " + block.style.opacity + ";") : ""
        cssText += block.style.boxShadow.length > 0 ? ("\n    box-shadow: " + block.style.boxShadow + ";") : ""
        cssText += block.style.background.length > 0 ? ("\n    background: " + block.style.background + ";") : ""
        cssText += block.style.zIndex.length > 0 ? ("\n    z-index: " + block.style.zIndex + ";") : ""
        cssText += "\n    position: absolute;"
        cssText += block.style.left.length > 0 ? ("\n    left: " + block.style.left + ";") : ""
        cssText += block.style.top.length > 0 ? ("\n    top: " + block.style.top + ";") : ""
        cssText += block.style.transform.length > 0 ? ("\n    transform: " + block.style.transform + ";") : ""
        cssText += block.style.borderRadius.length > 0 ? ("\n    border-radius: " + block.style.borderRadius + ";") : ""
        cssText += block.style.border.length > 0 ? ("\n    border: " + block.style.border + ";") : ""
        cssText += block.style.outline.length > 0 ? ("\n    outline: " + block.style.outline + ";") : ""
        cssText += block.style.outlineOffset.length > 0 ? ("\n    outline-offset: " + block.style.outlineOffset + ";") : ""
        cssText += block.style.color.length > 0 ? ("\n    color: " + block.style.color + ";") : ""
        cssText += block.style.textDecorationLine.length > 0 ? ("\n    text-decoration-line: " + block.style.textDecorationLine + ";") : ""
        cssText += block.style.textDecorationColor.length > 0 ? ("\n    text-decoration-color: " + block.style.textDecorationColor + ";") : ""
        cssText += block.style.textDecorationStyle.length > 0 ? ("\n    text-decoration-style: " + block.style.textDecorationStyle + ";") : ""
        cssText += block.style.textDecorationThickness.length > 0 ? ("\n    text-decoration-thickness: " + block.style.textDecorationThickness + ";") : ""
        cssText += block.style.fontSize.length > 0 ? ("\n    font-size: " + block.style.fontSize + ";") : ""
        cssText += block.style.fontFamily.length > 0 ? ("\n    font-family: " + block.style.fontFamily + ";") : ""
        cssText += block.style.fontStyle.length > 0 ? ("\n    font-style: " + block.style.fontStyle + ";") : ""
        cssText += block.style.fontWeight.length > 0 ? ("\n    font-weight: " + block.style.fontWeight + ";") : ""
        cssText += "\n    display: flex;"
        cssText += block.style.alignItems.length > 0 ? ("\n    align-items: " + block.style.alignItems + ";") : ""
        cssText += block.style.justifyContent.length > 0 ? ("\n    justify-content: " + block.style.justifyContent + ";") : ""
        cssText += block.style.justifyContent.length > 0 ? ("\n    text-align: " + block.style.justifyContent + ";") : ""
        cssText += block.style.letterSpacing.length > 0 ? ("\n    letter-spacing: " + block.style.letterSpacing + ";") : ""
        cssText += block.style.lineHeight.length > 0 ? ("\n    line-height: " + block.style.lineHeight + ";") : ""
        cssText += block.style.textIndent.length > 0 ? ("\n    text-indent: " + block.style.textIndent + ";") : ""
        cssText += block.style.textShadow.length > 0 ? ("\n    text-shadow: " + block.style.textShadow + ";") : ""
        cssText += "\n    overflow: hidden;"
        cssText += block.style.transition.length > 0 ? ("\n    transition: " + block.style.transition + ";") : ""
        cssText += "\n  }"
      }
      text += "<!DOCTYPE html>" +
      "\n<html lang=\"en\">" +
      "\n<head>" +
      "\n  <meta charset=\"UTF-8\">" +
      "\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
      "\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
      "\n  <title>Document</title>" +
      "\n</head>" +
      "\n<body>" + htmlText +
      "\n</body>" +
      "\n<style>" +
      "\n  html, body {" +
      "\n    padding: 0px;" +
      "\n    margin: 0px;" +
      "\n    width: max-content;" +
      "\n    height: max-content;" +
      "\n  }" + cssText +
      "\n</style>" +
      "\n</html>"
    } else {
      text = "Не удалось получить элементы"
    }
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyAllHTMLButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyAllHTMLButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  return (
    <div className={s.background}>
      <div
        title="Добавить элемент"
        id="AddBlockButton"
        className={s.add_block}
        onClick={AddBlockClick}
      >
        <div id="p1" className={s.p1}></div>
        <div id="p2" className={s.p2}></div>
      </div>
      <div className={s.container}>
        <div className={s.dropdown}>
          <div className={s.btn }>Разработчики</div>
          <div className={s.dropdowncontent}>
            <a href={DevLinks.Vladimir}>{Developers.Vladimir}</a>
            {/* <a href={DevLinks.Dasha}>{Developers.Dasha}</a>
            <a href={DevLinks.Yan}>{Developers.Yan}</a>
            <a href={DevLinks.Ivan}>{Developers.Ivan}</a>
            <a href={DevLinks.Kristina}>{Developers.Kristina}</a> */}
          </div>
        </div>
        <div className={s.btn}>Инструкция</div>
        <div className={s.dropdown}>
          <div className={s.btn}>Код</div>
          <div className={s.dropdowncontent}>
            <div id="CopyCSSButton" className={s.code_button} onClick={CopyCSS}>
              Скопировать блок в css
            </div>
            <div id="CopyAllCSSButton" className={s.code_button} onClick={CopyAllCSS} >
              Скопировать всё в css
            </div>
            <div id="CopyHTMLButton" className={s.code_button} onClick={CopyHTML} >
              Скопировать блок в html
            </div>
            <div id="CopyAllHTMLButton" className={s.code_button} onClick={CopyAllHTML} >
              Скопировать всё в html
            </div>
          </div>
        </div>
        <div className={s.btn}>Связаться с нами</div>
      </div>
    </div>
  );
};

export default Header;
