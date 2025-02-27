function getConvertedInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}
function getConvertedInnerText(id) {
  const value = parseFloat(document.getElementById(id).innerText);
  return value;
}

function getInnerText(id) {
  const value = document.getElementById(id).innerText;
  return value;
}
function getInputValue(id) {
  const value = document.getElementById(id).value;
  return value;
}
function setInnerTextById(id, value) {
  document.getElementById(id).innerText = value;
}
