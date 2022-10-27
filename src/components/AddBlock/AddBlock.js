import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";

export let BlockCouner = 1;

function AddElemClick() {
  BlockCouner += 1;
}

const AddBlock = () => {
  return (
    <div id="AddBlock" className={s.background}>
      <div
        id="block1"
        className={s.add_element}
        onClick={() => {
          AddElemClick();
          AddBlockClick();
        }}
      >
        Usual &lt;div&gt;
      </div>
      <div className={s.add_element}>div black 100x100</div>
      <div className={s.add_element}>oval</div>
      <div className={s.add_element}>some radius</div>
      <div className={s.add_element}>random text</div>
      <div className={s.add_element}>button</div>
      <div className={s.add_element}></div>
      <div className={s.add_element}></div>
    </div>
  );
};

export default AddBlock;
