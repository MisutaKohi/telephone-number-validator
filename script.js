const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('output-display');
const input = document.getElementById('text-input');

let pastQueries = []

function validateInput() {
    if (input.value === '') {
        alert('Please provide a phone number');
    }

}

function clearQueries() {
    pastQueries = [];
    output.innerHTML = ``;
}

checkButton.addEventListener('click', validateInput);

clearButton.addEventListener('click', clearQueries);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        validateInput();
    }
});




