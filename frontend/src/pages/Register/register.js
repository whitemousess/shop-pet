import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.scss";
import Button from "~/components/Button/Button";
import { EyePassword } from "~/components/Icons";
import config from "~/config";
import * as userService from "~/services/userService";

const cx = classNames.bind(styles);

function Register() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === rePassword) {
      userService
      .postUser({username: username, password: password, email: email})
      .then((res) => {
        window.location = "/login";
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    }else{
      setError("Các mật khẩu đã nhập không khớp. Hãy thử lại.")
    }
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")} onSubmit={(e) => handleSubmit(e)}>
        <header className={cx("header")}>Đăng ký</header>

        {error ? (
          <div className={cx("error-login")}>{error}</div>
        ) : null}

        <p className={cx("title")}>Tài khoản</p>
        <div className={cx("form-group")}>
          <input
            type="text"
            className={cx("input-login")}
            placeholder="Tài khoản ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <p className={cx("title")}>Mật khẩu</p>
        <div className={cx("form-group")}>
          <input
            type={passwordShown ? "text" : "password"}
            className={cx("input-login")}
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </span>
        </div>

        <p className={cx("title")}>Nhập lại mật khẩu</p>
        <div className={cx("form-group")}>
          <input
            type={passwordShown ? "text" : "password"}
            className={cx("input-login")}
            placeholder="Nhập lại mật khẩu ..."
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
          <span className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </span>
        </div>

        <p className={cx("title")}>Email</p>
        <div className={cx("form-group")}>
          <input
            type="email"
            className={cx("input-login")}
            placeholder="Nhập email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button blue className={cx("btn-login")}>
          Đăng ký
        </Button>

        <span className={cx("login")}>
          <Link to={config.routes.login}>Đã có tài khoản</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
