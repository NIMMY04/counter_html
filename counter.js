let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.querySelector('#clear');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    if(counter==0){
        console.log("Error cannot go below 0")
    }
    else{
    counter--;
    counterValue.innerHTML = counter;}
});

// To reset the counter to zero
clearBtn.addEventListener('click', reset);

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}