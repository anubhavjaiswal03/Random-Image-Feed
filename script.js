const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;

// async function getResponse() {
// 	const response = await fetch(unsplashURL);
// 	// const data = await response.json();
// 	const imgurl = response.url;
// 	console.log(response.url);
// 	return imgurl;
// }

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img');
	img.src = `${unsplashURL}${getRandomSize()}`;
	container.appendChild(img);
}

// console.log(getRandomSize());

function getRandomSize() {
	return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
	return Math.floor(Math.random() * 10) + 300;
}
