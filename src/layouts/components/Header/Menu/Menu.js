import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("wrapper")}>
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
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemDogs}>
          ĐỒ CHO CHÓ
        </Link>
      </Tippy>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemCats}>
          ĐỒ CHO MÈO
        </Link>
      </Tippy>
    </div>
  );
}

export default Menu;
