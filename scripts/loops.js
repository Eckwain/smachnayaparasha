//first example: sum
const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;

}

calculateSumButtonElement.addEventListener("click", calculateSum);


//Second example: highlight-links

const highlightButtonElement = document.getElementById('highlightButton');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlighted');
    }
}


highlightButtonElement.addEventListener('click', highlightLinks);

//Third example: spoiler

const spoilerButton = document.querySelector('#spoiler button');

const myInfo = {
    myName: "Eckwain",
    myAge: 16,
    myDescription: 12
};

function showSpoiler () {
    const sectorSpoiler = document.getElementById("spoiler");

    sectorSpoiler.innerHTML = '';
    
    for (const key in myInfo) {
        const newUserDataElement = document.createElement('li');  
        newUserDataElement.textContent = key.toUpperCase() + ': ' + myInfo[key];
        sectorSpoiler.append(newUserDataElement);
    }

}

spoilerButton.addEventListener('click', showSpoiler);


