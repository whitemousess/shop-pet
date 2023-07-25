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
  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }

    // call Api User
    petService
      .getPet({ page: 1, perPage: 5 })
      .then((data) => {
        setDog((prePet) => [...prePet , ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={cx("wrapper")}>
            <input type="text" className={cx("search-manager")} placeholder="Tìm kiếm ..."/>
      <Link to={config.routes.addPet}><Button blue>Thêm</Button></Link>
      <Items data={dog} token={token}/>
    </div>
  );
}

export default Manager;
