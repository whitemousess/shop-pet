import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";

import PetInfo from "./PetInfo";

const cx = classNames.bind(styles);

function Items({data = []}) {
  return (
    <div className={cx("wrapper")}>
      {data.map((cat) => (
        <PetInfo key={cat._id} data={cat}/>
      ))}
    </div>
  );
}

export default Items;
