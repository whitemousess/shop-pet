import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import Items from "./Items";
import config from "~/config";
import Button from "~/components/Button";
import styles from "./Manager.module.scss";
import * as petService from "~/services/petService";

const cx = classNames.bind(styles);

function Manager() {
  const [dog, setDog] = useState([]);
  const token = window.localStorage.token;

  const page = 1;
  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }

    // call Api User
    petService
      .getPet({ page, perPage: 5 })
      .then((data) => {
        setDog((prePet) => [...prePet, ...data]);
      })
      .catch((error) => console.log(error));
  }, [token]);



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
      <Items data={dog} token={token} />
    </div>
  );
}

export default Manager;
