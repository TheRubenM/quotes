import { Route, Switch } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import AddNewQuote from "./pages/AddNewQuote";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/quotes/add">
        <AddNewQuote />
      </Route>
    </Switch>
  );
}

export default App;
