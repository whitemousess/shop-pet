import axios from "axios";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import Button from "~/components/Button";
import styles from "./EditUser.module.scss";
import { EyePassword } from "~/components/Icons";
import * as userService from "~/services/userService";
import config from "~/config";

const cx = classNames.bind(styles);

function EditUser() {
  const [error, setError] = useState(false);
  const [image, setImage] = useState({ preview: "", data: "" });
  const [user, setUser] = useState({});
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
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

  const submit = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      let formData = new FormData();

      formData.append("avatar", image.data);
      formData.append("email", user.email);
      formData.append("username", user.username);
      formData.append("password", user.password);
      const response = await fetch(
        "http://localhost:1407/api/account/current/edit",
        {
          method: "PUT",
          headers: {
            authorization: "Bearer " + token,
          },
          body: formData,
          email: user.email,
          username: user.username,
          password: password,
        }
      )
        .then((response) => {
          window.location = "/user/profile"
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("Các mật khẩu đã nhập không khớp. Hãy thử lại.");
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  function handle(e) {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;
    setUser(newData);
    setPassword(newData.password);
    setRePassword(newData.rePassword);
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-manager")}>
        <h1 className={cx("header")}>Thông tin cá nhân</h1>
        {image.preview && (
          <img src={image.preview} alt="avatar" className={cx("avatar")} />
        )}

        <input type="file"  name="avatar" onChange={handleFileChange}></input>

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
          name="username"
          placeholder="Nhập username ..."
        />

        <input
          type="password"
          className={cx("text-form")}
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => handle(e)}
          name="password"
          required
        />

        <input
          type="password"
          className={cx("text-form")}
          placeholder="Nhập lại mật khẩu ..."
          name="rePassword"
          onChange={(e) => handle(e)}
          required
        />

        {error ? <div className={cx("error-login")}>{error}</div> : null}

        <Button blue onClick={submit} className={cx("btn-submit")}>
          Sửa
        </Button>
        <Button to={config.routes.user} yellow className={cx("btn-submit")}>
          Hủy
        </Button>
      </div>
    </div>
  );
}

export default EditUser;
