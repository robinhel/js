const secretNumber = 7;

const input = document.getElementById("guess")
const button = document.getElementById("btn")
const result = document.getElementById("result")


button.addEventListener("click", () => {
    const userGuess = Number(input.value);

    if (userGuess == secretNumber) {
        result.textContent = "Rätt gissat!";
    }
    else {
        result.textContent = "Fel gissat!"
    }

});