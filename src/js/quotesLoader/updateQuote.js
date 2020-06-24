import getElementByData from '../helpers/getElementByData';
import { QUOTES_CONTAINER } from '../enums/jsHandlers';
import { drawNewQuoteIndex, getNewQuote } from './drawQuote';

function updateQuote() {
  const quotesContainer = getElementByData(QUOTES_CONTAINER);
  const newQuoteIndex = drawNewQuoteIndex();

  quotesContainer.dataset.index = newQuoteIndex;
  quotesContainer.textContent = getNewQuote(newQuoteIndex);
}

export default updateQuote;
