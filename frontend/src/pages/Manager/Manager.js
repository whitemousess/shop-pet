import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Items from "./Items";
import config from "~/config";
import Button from "~/components/Button";
import styles from "./Manager.module.scss";

const cx = classNames.bind(styles);

function Manager() {
  const [search, setSearch] = useState("");

  function handle(e) {
    const newData = { ...search };
    newData[e.target.name] = e.target.value;
    setSearch(newData);
  }

  function submitSearch(e) {
    window.location = `/manager/pets?q=${search.data}`
  }
  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search")}>
        <input
          className={cx("search-input")}
          value={search.data || ""}
          onChange={(e) => handle(e)}
          name="data"
          placeholder="Search..."
        />

        <span className={cx("search-btn")}  onClick={submitSearch}>
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faMagnifyingGlass}
          />
        </span>
      </div>
      <Link to={config.routes.addPet}>
        <Button blue>Thêm</Button>
      </Link>
      <Items />
    </div>
  );
}

export default Manager;
