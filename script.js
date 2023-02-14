const jokeElement = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

button.addEventListener("click",generateJoke);

generateJoke();

async function generateJoke(){
    const config = {
        headers : {
            "accept" : "application/json"
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config);
    
    const data = await response.json();

    jokeElement.innerHTML = data.joke;
}