
let calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');
let keys = calculator.querySelector('.keys');

keys.addEventListener("click", click => {
  if (click.target.matches('button')) {
    let key = click.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;
    let displayedNum = display.textContent;
    let previousKeyType = calculator.dataset.previousKeyType;

    let calculate = (n1, operator, n2) => {
      let result = '';
      if (operator == 'add') {
        result = parseFloat(n1) + parseFloat(n2);
      }
      if (operator == 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
      }
      if (operator == 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
      }
      if (operator == 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
      }
      return result;
    }

    if (!action) {
      if (displayedNum == '0' || previousKeyType == 'operator') {
        display.textContent = keyContent;

      }
      if (displayedNum != '0' && previousKeyType != 'operator') {
        display.textContent = display.textContent.concat(keyContent);
      }

    }

    if (action == 'add') {
        console.log('add key!');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstNum = displayedNum;
        calculator.dataset.operator = action;
      }

    if (action == 'subtract') {
        console.log('subtract key!');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstNum = displayedNum;
        calculator.dataset.operator = action;
      }
    if (action == 'multiply') {
        console.log('multiply key!');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstNum = displayedNum;
        calculator.dataset.operator = action;
      }
    if (action == 'divide') {
        console.log('divide key!');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstNum = displayedNum;
        calculator.dataset.operator = action;
      }
    if (action == 'decimal' && display.textContent.includes('.') == false) {
      display.textContent = display.textContent.concat(keyContent);
      }
    if (action == 'clear') {
        console.log('clear key!');
      }
    if (action == 'calculate') {
        console.log('calculate key!');
        let firstNum = calculator.dataset.firstNum;
        let operator = calculator.dataset.operator;
        let secondNum = displayedNum;

        display.textContent = calculate(firstNum, operator, secondNum);
      }

  }

})
