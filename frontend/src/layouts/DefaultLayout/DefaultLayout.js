import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const token = window.localStorage.token
    if (token) {
        setCurrentUser(true)
    }else{
        setCurrentUser(false)
    }
}, [])

  return (
    <div className={cx("wrapper")}>
      <Header currentUser={currentUser}/>
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}