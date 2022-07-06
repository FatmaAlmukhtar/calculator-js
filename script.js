let operators = document.querySelectorAll('.operator');
let numberInput = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let operatorType = '';

let history = document.querySelector('.history');
let result = document.querySelector('.res');

const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');


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
            if (operator.textContent === '=') {
                a = parseFloat(history.textContent.slice(0,-1));
                op = history.textContent.slice(-1);
                b = parseFloat(result.textContent);
                result.textContent = operate(a, op, b).toString();
                history.textContent = '';
            }
            else {
                a = parseFloat(history.textContent.slice(0,-1));
                op = history.textContent.slice(-1);
                b = parseFloat(result.textContent);
                history.textContent = operate(a, op, b).toString() + ' ' + operator.textContent;
                result.textContent = '';
            }
            
        }
        else {
            operatorType = operator.textContent;
            input = result.textContent;
            history.textContent = input + ' ' + operatorType;
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
    return;
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
    
    return res = Math.round((a + Number.EPSILON) * 100) / 100;
}