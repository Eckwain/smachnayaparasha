const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

function updateRemainingCharacters(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length; 

    let remainingCharacters = 60 - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.add('warning');
    }
    else{
        productNameInputElement.classList.remove('warning');
        remainingCharsElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);


