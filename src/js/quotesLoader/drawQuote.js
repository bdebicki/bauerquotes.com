import quotes from '../../../data/quotes.json';

function drawQuote() {
  const quotesLength = quotes.length;
  const drawQuoteIndex = Math.floor(Math.random() * (quotesLength));

  return quotes[drawQuoteIndex];
}

export default drawQuote;
