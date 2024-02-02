const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('results-div');
const input = document.getElementById('user-input');

const countryCodeRegex = /\d{1} \d{3} \d{3} \d{4}/;
const dashesRegex = /\d{1} \d{3}-\d{3}-\d{4}/;
const parenthesesRegex = /\d{1} (\d{3}) \d{3}-\d{4}/;
const basicNumberRegex = /\d{9}/;
const basicDashesRegex = /\d{3}-\d{3}-\d{4}/;
const basicParenthesesRegex = /(\d{3}) \d{3}-\d{4}/;
const noSpacesRegex = /\d{1}(\d{3})\d{3}-\d{3}/;

const validQueries = [countryCodeRegex, dashesRegex, parenthesesRegex, basicNumberRegex, 
    basicDashesRegex, basicParenthesesRegex, noSpacesRegex]


function validateInput() {
    if (input.value === '') {
        alert('Please provide a phone number');
    }
    
    const isValid = validQueries.some((regex) => regex.test(input.value));
    const validText = isValid ? 'Valid US number:' : 'Invalid US number:';

    let outputHTML = `${validText} ${input.value}`
    input.value = '';
    output.innerHTML += outputHTML + '\n';

}

function clearQueries() {
    output.innerHTML = ``;
}

checkButton.addEventListener('click', validateInput);

clearButton.addEventListener('click', clearQueries);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        validateInput();
    }
});




