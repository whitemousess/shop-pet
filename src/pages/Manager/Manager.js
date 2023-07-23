import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Manager.module.scss";
import * as petService from "~/services/petService";
import Items from "./Items";

const cx = classNames.bind(styles);

function Manager() {
  const [dog, setDog] = useState([]);
  const page = 1;
  useEffect(() => {
    const token = window.localStorage.token;
    if (!token) {
      window.location = "/login";
      return;
    }

    // call Api User
    petService
      .getPet({page, perPage: 5 , type: "dog" })
      .then((data) => {
        setDog((prePet) => [...prePet, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className={cx("wrapper")}>
       <Items data={dog}/>
    </div>
  );
}

export default Manager;
