import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Register.module.scss";
import Button from "~/components/Button/Button";
import { EyePassword } from "~/components/Icons";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function Register() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <header className={cx("header")}>Đăng ký</header>
        <p className={cx("title")}>Tài khoản</p>
        <div className={cx("form-group")}>
          <input
            type="text"
            className={cx("input-login")}
            placeholder="Tài khoản ..."
            required
          />
        </div>
        <p className={cx("title")}>Mật khẩu</p>
        <div className={cx("form-group")}>
          <input
            type={passwordShown ? "text" : "password"}
            className={cx("input-login")}
            id="Password"
            placeholder="Nhập mật khẩu..."
            required
          />
          <button className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </button>
        </div>
        <p className={cx("title")}>Nhập lại mật khẩu</p>
        <div className={cx("form-group")}>
          <input
            type={passwordShown ? "text" : "password"}
            className={cx("input-login")}
            id="Password"
            placeholder="Nhập lại mật khẩu ..."
            required
          />
          <button className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </button>
        </div>
        <p className={cx("title")}>Email</p>
        <div className={cx("form-group")}>
          <input
            type="email"
            className={cx("input-login")}
            placeholder="Nhập email ..."
            required
          />
        </div>
        <Button blue className={cx("btn-login")}>
          Đăng ký
        </Button>
        <span className={cx("login")}>
          <Link to={config.routes.login} >Đã có tài khoản</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
