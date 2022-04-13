import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontSize: 60,
        }}
      >
        <p>Hello Ega</p>
      </div>
    </Layout>
  );
}
