import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search")}>
        <input className={cx('search-input')} placeholder="Search..." />
        <span className={cx('search-btn')}><FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} /></span>
      </div>
    </div>
  );
}

export default Search;
