const trendingUrl = 'http://api.giphy.com/v1/gifs/trending';
const searchUrl = 'http://api.giphy.com/v1/gifs/search';

const gifContainer = document.querySelector('#gif-container');
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('change', event => {
	searchValue = event.target.value;
	if (searchValue === '') {
		gifContainer.innerHTML = '';
		showGifs();
	} else {
		showSearchResult(searchValue);
	}
});

async function showGifs() {
	let response = await fetch(`${trendingUrl}?api_key=iAtVcjJv5Qc0puBQOOpfykxToWoRn3cN&limit=40`);
	let data = await response.json();
	let gifs = await data.data;

	gifs.map(el => {
		const url = el.images.preview_gif.url;
		const gif = document.createElement('img');
		gif.className = 'gif-image';
		gif.src = url;
		gifContainer.appendChild(gif);
	});
}

async function showSearchResult(searchValue) {
	gifContainer.innerHTML = '';
	let response = await fetch(
		`${searchUrl}?q=${searchValue}&api_key=iAtVcjJv5Qc0puBQOOpfykxToWoRn3cN&limit=20`
	);
	let data = await response.json();
	let gifs = await data.data;
	gifs.map(el => {
		const url = el.images.preview_gif.url;
		const gif = document.createElement('img');
		gif.className = 'gif-image';
		gif.src = url;
		gifContainer.appendChild(gif);
	});
}

showGifs();
