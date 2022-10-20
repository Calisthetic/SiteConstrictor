import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";

export let BlockCouner = 1;

function AddElemClick(key) {
  BlockCouner += 1;
}

const AddBlock = () => {
  return (
    <div id="AddBlock" className={s.background}>
      <div
        id="block1"
        className={s.add_element}
        onClick={() => {
          AddElemClick(1);
          AddBlockClick();
        }}
      >
        Usual &lt;div&gt;
      </div>
      <div className={s.add_element}>Num1</div>
      <div className={s.add_element}>Num1</div>
    </div>
  );
};

export default AddBlock;
