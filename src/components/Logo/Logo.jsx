import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="./logo.png" alt="logo" />
    </div>
  );
};

export default Logo;
