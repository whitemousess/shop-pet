import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
}