function getValues() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  return {a, b};
}

function add() {
  const {a, b} = getValues();
  document.getElementById('result').innerText = 'Результат: ' + (a + b);
}
function sub() {
  const {a, b} = getValues();
  document.getElementById('result').innerText = 'Результат: ' + (a - b);
}
function mul() {
  const {a, b} = getValues();
  document.getElementById('result').innerText = 'Результат: ' + (a * b);
}
function div() {
  const {a, b} = getValues();
  if (b === 0) {
    document.getElementById('result').innerText = 'Ділення на нуль неможливе';
  } else {
    document.getElementById('result').innerText = 'Результат: ' + (a / b);
  }
}
