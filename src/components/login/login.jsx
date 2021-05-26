import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService // login 된 유저가 있으면 바로 실행화면으로
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};
export default Login;
