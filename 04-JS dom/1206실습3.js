const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const operator = document.querySelector('#operator');
const result = document.querySelector('#result');
let resultValue = 0;

function cal() {
    const val1 = parseFloat(value1.value); // value1 입력값을 숫자로 변환
    const val2 = parseFloat(value2.value); // value2 입력값을 숫자로 변환
    const op = operator.value.trim(); // operator 값 가져오기 (공백 제거)

    switch (op) {
        case '+':
            resultValue = val1 + val2;
            break;
        case '-':
            resultValue = val1 - val2;
            break;
        case '*':
            resultValue = val1 * val2;
            break;
        case '/':
            resultValue = val1 / val2;
            break;
    }
    result.value = resultValue;
}

function resetInput() {
    value1.value = '';
    value2.value = '';
    operator.value = '';
    result.value = '';
}
