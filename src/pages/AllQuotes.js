import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Ruben", text: "Behold, a Son" },
  { id: "q2", author: "Dario", text: "Upholder of the Good" },
  { id: "q3", author: "Martinez", text: "Son of Martin" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
