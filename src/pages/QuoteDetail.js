import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Ruben", text: "Behold, a Son" },
  { id: "q2", author: "Dario", text: "Upholder of the Good" },
  { id: "q3", author: "Martinez", text: "Son of Martin" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          {/*Used match.url instead of match.path because unlike a <Route> with parameters,
          a <Link> must have an ACTUAL value, not just a placeholder*/}
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
