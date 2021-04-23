'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('sweden');
// getCountryAndNeighbour('norway');
// getCountryAndNeighbour('thailand');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//console.log(request);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

// getCountryData('australia');

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) throw new Error('Couldnt find data');
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country.toLowerCase());
//     })
//     .catch(err => console.log(`Something went wrong ${err}`));
// };
// whereAmI(52.508, 13.381);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'));
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('test end');

// const lotteryPromoise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lotteryPromoise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .wait(1)
//   .then(() => console.log('I waited for 1 second'));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// //const createImage = function(imgPath)

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
  }
};
whereAmI('portugal');
console.log('FIRST');

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const mylocation = await whereAmI();
