import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Blog from "../components/Blog";
export default function IndexPage() {
  return (
    <Layout>
      <PageHeading title="Home Page"></PageHeading>
      <Blog />
    </Layout>
  );
}
