function convert() {
  const inputValue = document.getElementById('inputValue').value.trim();
  const unit = document.getElementById('unit').value;
  let result;

  if (inputValue === '' || !/^\d*\.?\d+$/.test(inputValue)) {
    alert('Wprowadź poprawną liczbę do konwersji.');
    return;
  }

  let numericValue = parseFloat(inputValue);

  if (numericValue === 0) {
    alert('Nie można przekonwertować z wartości zero.');
    return;
  }

  if (unit === 'cm') {
    result = numericValue * 0.393701;
    saveResult(numericValue + ' cm = ' + result.toFixed(2) + ' in');
  } else if (unit === 'in') {
    result = numericValue * 2.54;
    saveResult(numericValue + ' in = ' + result.toFixed(2) + ' cm');
  } 
  document.getElementById('inputValue').value = '';
}

function saveResult(result) {
  const resultList = document.getElementById('results');
  const listItem = document.createElement('li');
  listItem.textContent = result;
  resultList.appendChild(listItem);
}

function clearResults() {
  const resultList = document.getElementById('results');
  resultList.innerHTML = '';
}
