import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`Website ${pageTitle}`} />
      </Head>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
}
