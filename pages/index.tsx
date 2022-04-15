import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import { useEffect, useRef, useState } from "react";
import { addListener, removeAllListeners, removeListener } from "process";

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  const progressRef = useRef<any>();

  const scroll = (to: string) => {
    const ref = progressRef.current;
    console.log(ref.scrollLeft);
    switch (to) {
      case "left":
        ref.scrollBy({
          top: 0,
          left: -500,
          behavior: "smooth",
        });
        return;
      case "right":
        ref.scrollBy({
          top: 0,
          left: 500,
          behavior: "smooth",
        });
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    // window.addEventListener("pointermove", ({ offsetX, offsetY }) => {
    //   // console.log("pointer", e);
    // });
  }, []);

  return (
    <Layout pageTitle="Beranda">
      <div className={styles["container"]}>
        <section>
          {/* Title */}
          <div className={styles["title"]}>
            <h1>Progress Belajar</h1>
          </div>
          {/* Content */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => scroll("left")}
              className={styles["arrow"]}
              style={{ left: 30 }}
            >
              <Image
                src={require("../public/right-arrow.svg")}
                width={30}
                height={30}
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div ref={progressRef} className={styles["content"]}>
              {[1, 2, 3, 4].map((d, i, a) => (
                <div
                  key={i}
                  className={styles["card"]}
                  style={{
                    marginLeft: i == 0 ? 20 : 10,
                    marginRight: i == a.length - 1 ? 20 : 10,
                  }}
                >
                  {/* Thumbnail */}
                  <div className={styles["thumb"]}>
                    <Image
                      draggable={false}
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
                      justifyContent: "space-between",
                      height: 120,
                      width: 300,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <div className={styles["thumb-title"]}>
                      {"Kelas Fullstack Javascript Developer 2021"}
                    </div>
                    <div className={styles["thumb-category"]}>
                      <div style={{ color: "#ffd70c" }}>Kelas Premium</div> |{" "}
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
            <div
              onClick={() => scroll("right")}
              className={styles["arrow"]}
              style={{ right: 30 }}
            >
              <Image
                src={require("../public/right-arrow.svg")}
                width={30}
                height={30}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
