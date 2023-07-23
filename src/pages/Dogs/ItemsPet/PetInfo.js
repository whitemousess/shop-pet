import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function PetItems({data}) {
  return (
    <Link to={`/pet?id=${data._id}`}>
      <div className={cx("Item")}>
        <img className={cx("img-pet")} src={data.image} alt={data.image}  />
        <p className={cx("label")}>{data.name}</p>
      </div>
    </Link>
  );
}

export default PetItems;
