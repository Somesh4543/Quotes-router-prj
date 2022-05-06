import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Routes/AllQuotes";
import NewQuotes from "./Routes/NewQuotes";
import NotFound from "./Routes/NotFound";
import QuoteDetail from "./Routes/QuoteDetail";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuotes />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
