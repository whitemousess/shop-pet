import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./EditUser.module.scss";
import Button from "~/components/Button";
import * as userService from "~/services/userService";

const cx = classNames.bind(styles);

function EditUser() {
    const [user , setUser] = useState({})
    const token = window.localStorage.token;

  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }

    userService
          .getUser()
          .then((data) => {
            setUser(data);
          })
          .catch((error) => console.log(error));
  }, []);

  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:1407/api/account/current/edit`, {
        email: user.email,
        username: user.username,
        avatar: user.avatar,
        description: user.description,
      },
      {
        headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        window.location = "/user/profile";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handle(e) {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;
    setUser(newData);
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-manager")} onSubmit={(e) => submit(e)}>
        <h1>Thêm vật nuôi</h1>
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={user.email || ""}
          name="email"
          placeholder="Nhập email ..."
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={user.username || ""}
          name="name"
          placeholder="Nhập username ..."
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={user.avatar || ""}
          name="image"
          placeholder="Nhập địa chỉ ảnh ..."
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={user.description || ""}
          name="description"
          placeholder="Nhập mô tả ..."
        />
       
        <Button blue className={cx("btn-add")}>
          Sửa
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
