import getElementByData from './helpers/getElementByData';
import { REFREST_BTN } from './enums/jsHandlers';
import updateQuote from './quotesLoader/updateQuote';

window.addEventListener('load', updateQuote);
getElementByData(REFREST_BTN).addEventListener('click', updateQuote);
