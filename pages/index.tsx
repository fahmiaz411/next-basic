import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout pageTitle="Beranda">
      <div className={styles["container"]}>
        <section>
          {/* Title */}
          <div className={styles["title"]}>
            <h4>{"Let's Keep Moving"}</h4>
            <h1>Progress Belajar</h1>
          </div>
          {/* Content */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles["arrow"]}>{"<"}</div>
            <div className={styles["content"]}>
              {[1, 2, 3, 4].map((d, i) => (
                <div key={i} className={styles["card"]}>
                  {/* Thumbnail */}
                  <div className={styles["thumb"]}>
                    <Image
                      src={require("../public/thumb.png")}
                      objectFit={"cover"}
                      width={150}
                      height={120}
                    />
                  </div>
                  {/* Detail */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: 300,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <div className={styles["thumb-title"]}>
                      {"Kelas Fullstack Javascript Developer 2021"}
                    </div>
                    <div className={styles["thumb-category"]}>
                      <div style={{ color: "green" }}>Kelas Premium</div> |{" "}
                      {`${0}/${160}`}
                    </div>
                    {/* Progress */}
                    <div className={styles["thumb-progress"]}>
                      <div
                        className={styles["thumb-progress-bar"]}
                        style={{ width: `${70}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["arrow"]}>{">"}</div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
