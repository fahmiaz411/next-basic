// import Link from "next/link";
import { CSSProperties } from "react";

type Style = {
  container: CSSProperties;
};

const styles: Style = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#0094fe",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
};

export default function Header() {
  return (
    <header style={styles.container}>
      <span>Left</span>
      <span>Right</span>
    </header>
  );
}
