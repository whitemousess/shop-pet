import classNames from "classnames/bind";
import { useState , useEffect } from "react";

import styles from "./Login.module.scss";
import Button from "~/components/Button/Button";
import { EyePassword } from "~/components/Icons";
import { Link } from "react-router-dom";
import * as petSevice from "~/services/petService";
import config from "~/config";

const cx = classNames.bind(styles);

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    // call Api User
    petSevice
    .postPet()
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error));
}, []);

  return (
    <form method="post" className={cx("wrapper")}>
      <div className={cx("container")}>
        <header className={cx("header")}>Đăng nhập</header>
        <p className={cx("title")}>Tài khoản</p>
        <div className={cx("form-group")}>
          <input
            type="text"
            className={cx("input-login")}
            placeholder="Tài khoản"
            name="username"
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
            required
          />
          <button className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </button>
        </div>
        <Button blue className={cx("btn-login")}>
          Đăng nhập
        </Button>
        <span className={cx("btn-register")}>
          <Link to={config.routes.register} >Chưa có tài khoản?</Link>
        </span>
      </div>
    </form>
  );
}

export default Login;
