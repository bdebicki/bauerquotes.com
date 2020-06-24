import quotes from '../../../data/quotes.json';
import getElementByData from '../helpers/getElementByData';
import { QUOTES_CONTAINER } from '../enums/jsHandlers';

function drawNewQuoteIndex() {
  const quotesLength = quotes.length;
  const quotesContainer = getElementByData(QUOTES_CONTAINER);
  const currentIndex = Number(quotesContainer.dataset.index);
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * (quotesLength));
  } while (currentIndex === newIndex);

  return newIndex;
}

function getNewQuote(index) {
  return quotes[index];
}

export {
  drawNewQuoteIndex,
  getNewQuote,
};
