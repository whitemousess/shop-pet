import PropTypes from "prop-types";
import classNames from "classnames/bind";

import PetInfo from "./PetInfo";
import styles from "./ItemPet.module.scss";

const cx = classNames.bind(styles);

function Items({ data = [] }) {
  return (
    <div className={cx("wrapper")}>
      {data.map((cat) => (
        <PetInfo key={cat._id} data={cat} />
      ))}
    </div>
  );
}

export default Items;

Items.propTypes = {
  data: PropTypes.array,
};
