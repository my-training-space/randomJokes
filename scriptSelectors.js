const randomJokeButton = document.getElementById('newJokeButton');
randomJokeButton.addEventListener('click', fetchNewJoke);


const newJokeDisplay = document.getElementById('newJokeDisplay');
const jokesList = document.getElementById('jokesList');

const offset = jokesList.offsetTop;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
const jokesListHeight = vh - offset - 4*remToPx;
const text = `"${jokesListHeight.toString()}"`;
jokesList.style.height = text;
// jokesList.style.height = `${vh - offset - 4*remToPx}`;

console.log("Inaltimea e ", text)