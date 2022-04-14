// import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <span>
        {/* Logo */}
        <div className={styles["btn-pointer"]}>
          <Image
            src={require("../../public/kutech.svg")}
            width={50}
            height={50}
          />
        </div>
        {/* Features */}
        <span className={styles["feature-list"]}>
          <ul>
            <li>Flash Sale</li>
            <li>Kelas</li>
            <li>Bootcamp</li>
            <li>Resources</li>
          </ul>
        </span>
      </span>
      <span>
        {/* Search */}
        <div className={styles["search"] + " " + styles["btn-pointer"]}>
          <Image
            src={require("../../public/search.svg")}
            width={25}
            height={25}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
        <span className={styles["margin-h-sm"]}>Halo, Fahmi</span>
        {/* Profile Pic */}
        <div className={styles["btn-pointer"]}>
          <Image
            src={require("../../public/unnamed.jpg")}
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
      </span>
    </header>
  );
}
