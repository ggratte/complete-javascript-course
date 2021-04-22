// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();

function calcTempAmplitude(temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(minTemp);
  console.log(maxTemp);
  return maxTemp - minTemp;
}

const amplitude = calcTempAmplitude();
console.log(calcTempAmplitude([20, 10, -4, -2]));
 */

/* function calcTempAmplitude(t1, t2) {
  const temps = t1.concat(t2);
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(minTemp);
  console.log(maxTemp);
  return maxTemp - minTemp;
}

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude); */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); */

/* function calcTempAmplitudeBug(t1, t2) {
  const temps = t1.concat(t2);
  let maxTemp = 0;
  let minTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(minTemp);
  console.log(maxTemp);
  return maxTemp - minTemp;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug); */

const printForecast = function (arr) {
  let text = '';
  for (let i = 0; i < arr.length; i++) {
    text += `... ${arr[i]}*C in ${i + 1} days `;
  }
  text += '...';
  console.log(text);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
