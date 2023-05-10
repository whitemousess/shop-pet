import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";

import PetInfo from "./PetInfo";

const cx = classNames.bind(styles);

function Items() {
  return (
    <div className={cx("wrapper")}>
      <PetInfo />
      <PetInfo />
      <PetInfo />
      <PetInfo />
    </div>
  );
}

export default Items;
