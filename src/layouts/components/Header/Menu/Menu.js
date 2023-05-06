import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import config from "~/config";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const renderMenuItem = (props) => {
  return (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <MenuItem />
      </PopperWrapper>
    </div>
  );
};

function Menu() {
  return (
    <div className={cx("wrapper")}>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        render={renderMenuItem}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.dogs}>
          CHÓ <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        render={renderMenuItem}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.cats}>
          MÈO <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        render={renderMenuItem}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemdogs}>
          ĐỒ CHO CHÓ <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        render={renderMenuItem}
        placement={"bottom"}
      >
        <Link className={cx("link")} to={config.routes.itemcats}>
          ĐỒ CHO MÈO <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </Tippy>
      <span></span>
      <Tippy
        interactive
        delay={[0, 0]}
        offset={[-20, 0]}
        render={renderMenuItem}
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
