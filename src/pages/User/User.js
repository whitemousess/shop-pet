import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

import config from "~/config";
import styles from "./User.module.scss"
import * as userService from "~/services/userService";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles)

function User() {
    const [user , setUser] = useState({});
    const token = window.localStorage.token;

    useEffect(() => {
      window.scrollTo(0, 0);
  
      if (!token) {
        window.location = "/login";
        return;
      }
      
        // call Api User
        userService
          .getUser()
          .then((data) => {
            setUser(data);
          })
          .catch((error) => console.log(error));
      }, []);

    return ( <div className={cx("wrapper")}>
        <h1 className={cx("header")}>Thông tin cá nhân</h1>
        <img  className={cx("avatar")} src={user.avatar} alt={user.username} />
        <h2 className={cx("username")} >{user.username}</h2>
        <Link to={config.routes.EditUser}><Button yellow >Sửa thông tin</Button></Link>
        </div>);
}

export default User;