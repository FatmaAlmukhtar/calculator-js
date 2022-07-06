let operators = document.querySelectorAll('.operator');
let numberInput = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let operatorType = '';
let temp = [];

const clear = document.querySelector('.clear');

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
	return a / b;
}

function operate(t) {
    for(let i=0; i<t.length; i++) {
        if(typeof t[i] === 'string') {
            switch (t[i]) {
                case '+':
                    t[i+1] = add(t[i-1], t[i+1]);
                    break;

                case '-':
                    t[i+1] = subtract(t[i-1], t[i+1]);
                    break;
                
                case 'x':
                    t[i+1] = multiply(t[i-1], t[i+1]);
                    break;

                case '÷':
                    t[i+1] = divide(t[i-1], t[i+1]);
                    break;
                default:
                    break;
            }
        }
    }
    display.textContent = temp[temp.length - 1];
}

numberInput.forEach(number => {
	number.addEventListener('click', () => {
		display.textContent += number.textContent;
	})
});

operators.forEach(operator => {
	operator.addEventListener('click', () => {
		operatorType = operator.textContent;
		input = display.textContent;
		
        if(operatorType === '=') {
            temp.push(parseInt(display.textContent));
            operate(temp);
        }
        else {
            temp.push(parseInt(input));
            temp.push(operatorType);
            display.textContent = '';
        }
	})  
     
});

clear.addEventListener('click', () => {
    display.textContent = '';
})
