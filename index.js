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

   let metric = userInput;
   let imperial = userInput;
   const conversionLengthFactor = 3.281;
   const conversionVolumeFactor = 0.264;
   const conversionMassFactor = 2.204;

   let resultLength = `${metric} meters = ${(metric * conversionLengthFactor).toFixed(3)} feet | ${imperial} feet = ${(metric / conversionLengthFactor).toFixed(3)} meters`;
   lengthEl.textContent = resultLength;

   let resultVolume = `${metric} liters = ${(metric * conversionVolumeFactor).toFixed(3)} gallons | ${imperial} gallons = ${(metric / conversionVolumeFactor).toFixed(3)} liters`;
   volumeEl.textContent = resultVolume;
   
   let resultMass = `${metric} kilograms = ${(metric * conversionMassFactor).toFixed(3)} pounds | ${imperial} pounds = ${(metric / conversionMassFactor).toFixed(3)} kilogramms`;
   massEl.textContent = resultMass;
}




