import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "This is done!" },
  { id: "q2", author: "Mo", text: "This is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;
