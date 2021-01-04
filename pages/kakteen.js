import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

export default function KakteenPage() {
  return (
    <Layout>
      <PageHeading title="Kakteen"></PageHeading>
      <span classNames="p-2 m-2 text-gray-600">Hallo Welt</span>
      <img
        style={{ width: "320px" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fnew-york-17.jpg&f=1&nofb=1"
      ></img>
    </Layout>
  );
}
