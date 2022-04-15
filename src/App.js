import { Route, Switch } from "react-router-dom";
import AllQuotes from "./Routes/AllQuotes";
import NewQuotes from "./Routes/NewQuotes";
import QuoteDetail from "./Routes/QuoteDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
