import "./styles/global.scss";
import { Layout } from "./components/templates/layout/Layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang : "en" }}>
        <meta charset="UTF-8" />
        <title>then + onwards</title>
        <link rel="icon" href="images/favicon/favicon-32.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/images/favicon/favicon-152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="167x167"
          href="/images/favicon/favicon-167.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/images/favicon/favicon-180.png"
        />
        <meta name="description" content="a pair of interactive images" />
        <meta name="author" content="Yasmin Pessoa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </Layout>
  );
}

export default App;
