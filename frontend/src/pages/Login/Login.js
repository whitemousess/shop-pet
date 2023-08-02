import axios from "axios";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Login.module.scss";
import Button from "~/components/Button/Button";
import { EyePassword } from "~/components/Icons";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = window.localStorage.token;
    if (token) {
      window.location = "/";
    }
  }, []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:1407/api/account/login`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res?.data?.token) {
          window.localStorage.setItem("token", res.data.token);
          window.location = "/";
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Tài khoản hoặc mật khẩu không chính xác");
      });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <header className={cx("header")}>Đăng nhập</header>
        {error ? (
          <div className={cx("error-login")}>{error}</div>
        ) : null}
        <p className={cx("title")}>Tài khoản</p>
        <div className={cx("form-group")}>
          <input
            type="text"
            className={cx("input-login")}
            placeholder="Tài khoản"
            name="username"
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
            id="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </span>
        </div>
        <Button blue className={cx("btn-login")} onClick={handleSubmit}>
          Đăng nhập
        </Button>
        <span className={cx("btn-register")}>
          <Link to={config.routes.register}>Chưa có tài khoản?</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
