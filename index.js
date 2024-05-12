/*
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById('input-el');
const convertEl = document.getElementById('convert-el');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el')



convertEl.addEventListener("click", function () {
    convertLength();

});

function convertLength (userInput) {
   userInput = inputEl.value;

   if (userInput === "" || isNaN(Number(userInput))){
    alert(`please enter a number`);
   } else {
    const conversionLengthFactor = 3.281;
    const conversionVolumeFactor = 0.264;
    const conversionMassFactor = 2.204;

    let resultLength = `${userInput} meters = ${(userInput * conversionLengthFactor).toFixed(3)} feet | ${userInput} feet = ${(userInput / conversionLengthFactor).toFixed(3)} meters`;
    lengthEl.textContent = resultLength;

    let resultVolume = `${userInput} liters = ${(userInput * conversionVolumeFactor).toFixed(3)} gallons | ${userInput} gallons = ${(userInput / conversionVolumeFactor).toFixed(3)} liters`;
    volumeEl.textContent = resultVolume;
   
    let resultMass = `${userInput} kilograms = ${(userInput * conversionMassFactor).toFixed(3)} pounds | ${userInput} pounds = ${(userInput / conversionMassFactor).toFixed(3)} kilos`;
    massEl.textContent = resultMass;
   }

   
}




