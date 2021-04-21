const characterAmountRange = document.getElementById("character-amount-range");
const characterAmountNumber = document.getElementById("character-amount-number");

const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

const passwordGenerator = document.getElementById('passwordGenerator');
const passwordDisplay = document.getElementById('password-display');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47);


characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e){
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

passwordGenerator.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.innerText = password;
    
    


});


function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    // https://www.petefreitag.com/cheatsheets/ascii-codes/
    // String.fromCharCode(65) = "A";

    let charCodes = LOWERCASE_CHAR_CODES;

    if (includeUppercase){
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    };
    if (includeNumbers){
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    };
    if (includeSymbols){
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    };
    const passwordCharacters=[];
    for (let i=0; i<characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}
function arrayFromLowToHigh(low, high){
    const array = [];
    for (let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}