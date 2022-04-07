import { GetStaticPropsContext } from "next";
import { User } from ".";
import Layout from "../../components/Layout";

type UserDetailProps = {
  user: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };
};

function Detail(props: UserDetailProps) {
  const { user } = props;

  return (
    <Layout pageTitle="Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export default Detail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await res.json();

  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<any, any>) {
  const { id } = context.params;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
}
