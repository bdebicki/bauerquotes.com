import getElementByData from '../helpers/getElementByData';
import { QUOTES_CONTAINER } from '../enums/jsHandlers';
import drawQuote from './drawQuote';

function updateQuote() {
  const quotesContainer = getElementByData(QUOTES_CONTAINER);

  quotesContainer.textContent = drawQuote();
}

export default updateQuote;
