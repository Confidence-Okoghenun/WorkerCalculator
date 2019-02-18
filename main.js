const $button = document.querySelector('button');
const $operator = document.querySelector('select');
const $display = document.querySelector('.output-display');
const $firstInput = document.querySelector('.first-input');
const $secondInput = document.querySelector('.second-input');

let mesObj = {
    operator: null,
    firstVal: null,
    secondVal: null
}

$button.addEventListener('click', () => {
    mesObj.operator = $operator.value;
    mesObj.firstVal = Number($firstInput.value);
    mesObj.secondVal = Number($secondInput.value);

    if (window.Worker) {
        const calcWorker = new Worker('worker.js');
        calcWorker.postMessage(mesObj);
        calcWorker.addEventListener('message', (e) => {
            $display.textContent = e.data;
        });
    } else {

        //Write some fall back code if workers are not supported in browser

    }
});