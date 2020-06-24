function getElementByData(dataName) {
  return document.querySelector(`[data-js-handler=${dataName}]`);
}

export default getElementByData;
