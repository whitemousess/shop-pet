import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";

const cx = classNames.bind(styles);

function PetItems() {
  return (
    <div className={cx("Item")}>
      <img className={cx("img-pet")} src="https://dogily.vn/wp-content/uploads/2021/07/cho-akita-inu-nhap-khau-nga-4-thang-tuoi-1-400x400.jpg" alt="dgs" />
      <p className={cx("label")}>CHÓ AKITA INU</p>
    </div>
  );
}

export default PetItems;
