import classNames from "classnames/bind";
import styles from "./SideBarManager.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SideBarManager() {
  return (
    <div className={cx("wrapper")}>
      <Link>Chó Cảnh</Link>
      <Link>Mèo Cảnh</Link>
    </div>
  );
}

export default SideBarManager;
