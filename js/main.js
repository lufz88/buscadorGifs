const trendingUrl = 'http://api.giphy.com/v1/gifs/trending';
const searchUrl = 'http://api.giphy.com/v1/gifs/search';

const gifContainer = document.querySelector('#gif-container');
const searchInput = document.querySelector('#search-input');

let gifs;

searchInput.addEventListener('input', event => {
	searchValue = event.target.value;

	showGifs(searchValue);
});

async function showGifs(searchValue) {
	gifContainer.innerHTML = '';

	if (searchValue) {
		let response = await fetch(
			`${searchUrl}?q=${searchValue}&api_key=iAtVcjJv5Qc0puBQOOpfykxToWoRn3cN&limit=20`
		);
		let data = await response.json();
		gifs = await data.data;
	} else {
		let response = await fetch(
			`${trendingUrl}?api_key=iAtVcjJv5Qc0puBQOOpfykxToWoRn3cN&limit=40`
		);
		let data = await response.json();
		gifs = await data.data;
	}

	gifs.map(el => {
		const url = el.images.preview_gif.url;
		const gif = document.createElement('img');
		gif.className = 'gif-image';
		gif.src = url;
		gifContainer.appendChild(gif);
	});
}

showGifs();
