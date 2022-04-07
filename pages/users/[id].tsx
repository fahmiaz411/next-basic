import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="Detail">
      <div>Detail {id}</div>
    </Layout>
  );
}

export default Detail;
