import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";

import config from "~/config";
import styles from "./Header.module.scss";
import MenuHeader from "~/layouts/components/Header/Menu";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Search from "~/layouts/components/Search";
import Button from "~/components/Button/Button";
import * as userService from "~/services/userService";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Header({ currentUser }) {
  const [user, setUser] = useState([]);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  const renderMenuItem = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <p className={cx("headerMenu")}>{user.username}</p>
          <Link className={cx("item")} to={config.routes.user}>
            Thông tin cá nhân
          </Link>
          <Link className={cx("item")} to={config.routes.manager}>
            Quản lý
          </Link>
          <Link className={cx("item")} onClick={logout}>
            Đăng xuất
          </Link>
        </PopperWrapper>
      </div>
    );
  };

  useEffect(() => {
    // call Api User
    userService
      .getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link
          to={config.routes.home}
          onClick={() => config.routes.home.reload()}
        >
          <Image
            className={cx("logo-web")}
            src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png"
            alt=""
          />
        </Link>
        <Search />

        <div className={cx("auth")}>
          {currentUser ? (
            <>
              <Tippy
                interactive
                render={renderMenuItem}
                hideOnClick={true}
                trigger={"click"}
                placement={"bottom"}
                popperOptions={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [-40, 0], // Điều chỉnh giá trị "-20px" để di chuyển sang trái
                      },
                    },
                  ],
                }}
              >
                <Image
                  className={cx("avatar")}
                  src={user.avatar}
                  alt="avatar"
                />
              </Tippy>
            </>
          ) : (
            <>
              <Link to={config.routes.login} className={cx("login")}>
                <Button yellow>Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <MenuHeader />
    </div>
  );
}

export default Header;

Header.propTypes = {
  currentUser: PropTypes.bool,
};
