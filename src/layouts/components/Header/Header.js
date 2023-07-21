import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Header.module.scss";
import Menu from "~/layouts/components/Header/Menu";
import Search from "~/layouts/components/Search";
import Button from "~/components/Button/Button";
import routes from "~/config/routes";

const cx = classNames.bind(styles);

function Header() {

  const user = false;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link
          to={config.routes.home}
          onClick={() => config.routes.home.reload()}
        >
          <img
            className={cx("logo-web")}
            src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png"
            alt=""
          />
        </Link>
        <Search />
        <div className={cx("language")}>
          <span>
            <img
              src="//dogily.vn/wp-content/plugins/gtranslate/flags/24/vi.png"
              alt=""
            />
            <p>VI</p>
          </span>
          <span>
            <img
              src="//dogily.vn/wp-content/plugins/gtranslate/flags/24/en.png"
              alt=""
            />
            <p>EN</p>
          </span>
          <span>
            <img
              src="//dogily.vn/wp-content/plugins/gtranslate/flags/24/th.png"
              alt=""
            />
            <p>TH</p>
          </span>
          <span>
            <img
              src="//dogily.vn/wp-content/plugins/gtranslate/flags/24/km.png"
              alt=""
            />
            <p>KM</p>
          </span>
        </div>
        <div className={cx("auth")}>
          <Link to={config.routes.login} className={cx("login")}><Button yellow >Login</Button></Link>
          <Link to={config.routes.register}><Button blue >Register</Button></Link>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
