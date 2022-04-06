import Link from "next/link";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </header>
  );
}
