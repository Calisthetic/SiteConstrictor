import s from "./Header.module.css";

const Developers = {
    Dasha: "Бусыгина Дарья",
    Yan: "Винокурос Ян",
    Vladimir: "Калашников Владимир",
    Ivan: "Огурцов Иван",
    Kristina: "Панюкова Кристина"
}
const DevLinks = {
    Dasha: "http://localhost:3000/",
    Yan: "https://github.com/PiF-0-PaF",
    Vladimir: "https://github.com/Calisthetic",
    Ivan: "http://localhost:3000/",
    Kristina: "http://localhost:3000/",
}

let IsAddBlockActive = false;

export const AddBlockClick = () => {
  if (IsAddBlockActive) { // off
    document.getElementById("p1").style.transform = "rotate(0deg)";
    document.getElementById("p2").style.transform = "rotate(0deg)";
    document.getElementById("AddBlockButton").style.left = "0px";
    document.getElementById("AddBlock").style.left = "-264px";
    IsAddBlockActive = false;
  } else { // on
    document.getElementById("AddBlockButton").style.left = "204px";
    document.getElementById("AddBlock").style.left = "0px";
    document.getElementById("p1").style.transform = "rotate(135deg)";
    document.getElementById("p2").style.transform = "rotate(135deg)";
    IsAddBlockActive = true;
  }
}
const Header = () => {
  return (
    <div className={s.background}>
      <div title="Добавить элемент" id="AddBlockButton" className={s.add_block} onClick={AddBlockClick}>
        <div id="p1" className={s.p1}></div>
        <div id="p2" className={s.p2}></div>
      </div>
      <div className={s.container}>
        <div className={s.dropdown}>
          <div className={s.dropbtn}>Разработчики</div>
          <div className={s.dropdowncontent}>
            <a href={DevLinks.Dasha}>{Developers.Dasha}</a>
            <a href={DevLinks.Yan}>{Developers.Yan}</a>
            <a href={DevLinks.Vladimir}>{Developers.Vladimir}</a>
            <a href={DevLinks.Ivan}>{Developers.Ivan}</a>
            <a href={DevLinks.Kristina}>{Developers.Kristina}</a>
          </div>
        </div>
        <div className={s.download_btn}>Скачать</div>
      </div>
    </div>
  );
};

export default Header;
