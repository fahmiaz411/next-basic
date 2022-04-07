import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

export type User = {
  id: number;
  name: string;
  email: string;
};

type UserProps = {
  dataUsers: User[];
};

function Users({ dataUsers }: UserProps) {
  const router = useRouter();
  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user, index: number) => {
        return (
          <div
            className={styles.card}
            key={index}
            onClick={() => router.push("/users/" + user.id)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
