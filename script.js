const operators = document.querySelectorAll('.operator');
const numberInput = document.querySelectorAll('.number');
const history = document.querySelector('.history');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

window.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace') result.textContent = result.textContent.slice(0,-1);
    else if(e.key >=0 && e.key <=9) result.textContent += e.key;
    else if(e.key === '.' && !result.textContent.includes('.')) result.textContent += e.key;
    else if(e.key === '+' || e.key === '-' || e.key === '=')  calculate(e.key);
    else if(e.key === '*')  calculate('x');
    else if(e.key === '/')  calculate('÷');
})

numberInput.forEach(number => {
	number.addEventListener('click', () => {
        if(number.textContent === '.' && result.textContent.includes('.')) return
		result.textContent += number.textContent;
	})
});

operators.forEach(operator => {
	operator.addEventListener('click', () => {
        
        if (result.textContent === '') return
        
        if (history.textContent !== '') {
            calculate(operator.textContent);
        }
        else {
            history.textContent = result.textContent + ' ' + operator.textContent;
            result.textContent = ''
        }
	})  
     
});

clear.addEventListener('click', () => {
    history.textContent = '';
    result.textContent = '';
})

del.addEventListener('click', () => {
    result.textContent = result.textContent.slice(0,-1);
})

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
    if (b !== 0) return a / b;
    alert('cannot divide by zero');
    return a;
}

function operate(a, op, b) {
    
    switch (op) {
        case '+':
            a = add(a, b);
            break;

        case '-':
            a = subtract(a, b);
            break;
        
        case 'x':
            a = multiply(a, b);
            break;

        case '÷':
            a = divide(a, b);
            break;
        default:
            break;
    }
    return res = parseFloat(Math.round(a * 10000) / 10000);
}

function calculate(operatorType) {
    if (history.textContent !== '') {
        if (operatorType === '=') {
            firstNumber = parseFloat(history.textContent.slice(0,-1));
            operation = history.textContent.slice(-1);
            secondNumber = parseFloat(result.textContent);
            result.textContent = operate(firstNumber, operation, secondNumber).toString();
            history.textContent = '';
        }
        else {
            firstNumber = parseFloat(history.textContent.slice(0,-1));
            operation = history.textContent.slice(-1);
            secondNumber = parseFloat(result.textContent);
            history.textContent = operate(firstNumber, operation, secondNumber).toString() + ' ' + operatorType;
            result.textContent = '';
        }
    }
    else {
        history.textContent = result.textContent + ' ' + operatorType;
        result.textContent = ''
    }
}

