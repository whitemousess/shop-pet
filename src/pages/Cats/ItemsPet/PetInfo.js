import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from "./ItemPet.module.scss";
import { Link } from "react-router-dom";
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function PetItems({data}) {
  return (
    <Link to={`/pet/${data._id}`}>
      <div className={cx("Item")}>
        <Image className={cx("img-pet")} src={data.image} alt={data.image}  />
        <p className={cx("label")}>{data.name}</p>
      </div>
    </Link>
  );
}

export default PetItems;

PetItems.propTypes = {
  data : PropTypes.object.isRequired
}