import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8800/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">
          <Header />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
