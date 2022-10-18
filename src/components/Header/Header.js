import s from'./Header.module.css'

let IsAddBlockActive = false;
function AddBlockClick() {
    if (IsAddBlockActive) {
        document.getElementById('p1').style.transform = 'rotate(0deg)';
        document.getElementById('p2').style.transform = 'rotate(0deg)';
        IsAddBlockActive = false;
    }
    else {
        document.getElementById('p1').style.transform = 'rotate(45deg)';
        document.getElementById('p2').style.transform = 'rotate(45deg)';
        IsAddBlockActive = true;
    }
}


const Header = () => {
    return (
        <div className={s.background}>
            <div className={s.add_block} onClick={AddBlockClick}>
                <div id='p1' className={s.p1}></div>
                <div id='p2' className={s.p2}></div>
            </div>
            <div className={s.container}>
                <div className={s.guide}>&#9660;&#9650; Создатели ▼▲</div>
                <div className={s.creators}>
                    <div onclick="myFunction()" class="dropbtn">Dropdown</div>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;