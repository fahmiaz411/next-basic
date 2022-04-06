import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
}
