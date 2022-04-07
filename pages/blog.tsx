import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

type Blog = {
  id: number;
  title: string;
  body: string;
};

type BlogProps = {
  dataBlog: Blog[];
};

function Blog(props: BlogProps) {
  const { dataBlog } = props;

  useEffect(() => {
    console.log("fetch");
  }, []);

  return (
    <Layout pageTitle="Blog">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export default Blog;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
