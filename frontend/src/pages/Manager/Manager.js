import { Link } from "react-router-dom";
import { useEffect } from "react";
import classNames from "classnames/bind";

import Items from "./Items";
import config from "~/config";
import Button from "~/components/Button";
import styles from "./Manager.module.scss";

const cx = classNames.bind(styles);

function Manager() {
  return (
    <div className={cx("wrapper")}>
      <input
        type="text"
        className={cx("search-manager")}
        placeholder="Tìm kiếm ..."
      />
      <Link to={config.routes.addPet}>
        <Button blue>Thêm</Button>
      </Link>
      <Items />
    </div>
  );
}

export default Manager;
