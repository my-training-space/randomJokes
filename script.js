
const fetchNewJoke = async ()=> {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response);

    const randomJoke = response.data.joke;
    console.log(randomJoke);

    renderNewJoke(randomJoke);
    addToJokesList(randomJoke);
}

function renderNewJoke(newJoke){
    newJokeDisplay.textContent = newJoke;
}

function addToJokesList(newJoke){
    const newLi = document.createElement('li');
    newLi.append(newJoke); 
    jokesList.append(newLi);
    jokesList.scrollTop = jokesList.scrollHeight;
}