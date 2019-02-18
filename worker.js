let result;
let firstVal;
let operator;
let secondVal;

addEventListener('message', e => {
    let mesg = e.data;
    operator = mesg.operator;
    firstVal = mesg.firstVal ? mesg.firstVal : 1;
    secondVal = mesg.secondVal ? mesg.secondVal : 1;

    if (operator == 'add') {
        result = firstVal + secondVal;
    } else if (operator == 'subtract') {
        result = firstVal - secondVal;
    } else if (operator == 'divide') {
        result = firstVal / secondVal;
    } else if (operator == 'multiply') {
        result = firstVal * secondVal;
    }

    postMessage(result);

})