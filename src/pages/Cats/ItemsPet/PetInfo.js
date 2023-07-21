import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";

const cx = classNames.bind(styles);

function PetItems({data}) {
  return (
    <div className={cx("Item")}>
      <img className={cx("img-pet")} src={data.image} alt={data.image}  />
      <p className={cx("label")}>{data.name}</p>
    </div>
  );
}

export default PetItems;
