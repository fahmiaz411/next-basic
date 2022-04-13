import Link from "next/link";
import { CSSProperties } from "react";

type Style = {
  container: CSSProperties;
};

const styles: Style = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
  },
};

export default function Header() {
  return (
    <header style={styles.container}>
      <span>Test</span>
      <span>Test</span>
    </header>
  );
}
