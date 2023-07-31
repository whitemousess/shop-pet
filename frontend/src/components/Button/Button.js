import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  yellow = false,
  blue = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
    // dung thẻ to để thay cho link mạng
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    yellow,
    blue,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
export default Button;

Button.propTypes = {
  to: PropTypes.string ,
  href: PropTypes.string ,
  yellow: PropTypes.string ,
  blue: PropTypes.bool ,
  children: PropTypes.bool ,
  className: PropTypes.string ,
  leftIcon: PropTypes.node ,
  rightIcon: PropTypes.node ,
  onClick: PropTypes.func ,
};