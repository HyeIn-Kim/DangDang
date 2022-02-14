import Head from "next/head";
import { connect } from "react-redux";
import { setUserInfo, setIsLogin } from "../store/actions/userAction";
import { getUserInfo } from "../api/user";
import { useEffect, useState } from "react";
import styles from "../scss/layout/layout.module.scss";
import NavBar from "./Navbar";
import Footer from "./layout/footer";
import { useRouter } from "next/router";

function mapStateToProps({ userReducer }) {
  return {
    user: userReducer.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
    setIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

function Layout({ children, user, setUserInfo, setIsLogin }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>당당 | 당당하게 면접보자!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bodyWrapper}>
        {
          router.pathname === "/" || 
          router.pathname.slice(0, 16) === "/web-conference/" || 
          router.pathname.slice(0, 15) === "/self-practice/"
          ? null : <NavBar /> 
        }
        <div className={styles.mainContainer}>{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
}
