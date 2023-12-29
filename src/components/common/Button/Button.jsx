import Link from "next/link";
import styles from "./button.module.scss";

const Button = ({ name, href }) => {
  return (
    <Link href={href} className={`${styles.btn} ${styles.btnbackgroundslide}`}>
      {name}
    </Link>
    // <button >
    //   Background Slide
    // </button>
  );
};
// btn btn-background-slide
export default Button;
