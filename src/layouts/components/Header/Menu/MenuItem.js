import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);
function MenuItem() {
  return (
    <div className={cx("item")}>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ HUSKY</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ SHIBA</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ AKITA</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ ALABAI</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ BASENJI</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ BẮC HÀ</Link>
      <Link to={config.routes.do} className={cx('item-info')}>CHÓ BECGIE</Link>
    </div>
  );
}

export default MenuItem;
