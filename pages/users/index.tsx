import Layout from "../../components/Layout";

function Users({ dataUsers }: any) {
  console.log(dataUsers);
  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user: any) => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        );
      })}
    </Layout>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
