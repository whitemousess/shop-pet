import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("wrapper")}>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.dogs}>
          CHÓ
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.cats}>
          MÈO
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemdogs}>
          ĐỒ CHO CHÓ
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemcats}>
          ĐỒ CHO MÈO
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.news}>
          TIN TỨC
        </Link>
      </Tippy>
    </div>
  );
}

export default Menu;
