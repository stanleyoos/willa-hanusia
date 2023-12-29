import styles from "./logo.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.png" width={200} height={100} alt="Hanusia logo" />
    </div>
  );
};

export default Logo;
