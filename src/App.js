import "./styles/global.scss";
import { Layout } from "./components/templates/layout/Layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content="a pair of interactive images" />
        <meta name="author" content="Yasmin Pessoa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </Layout>
  );
}

export default App;
