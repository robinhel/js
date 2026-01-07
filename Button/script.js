

const title = document.getElementById("title")
const button = document.getElementById("btn")


button.addEventListener("click", () => {
    title.textContent = "du klickade!"
    console.log("knappen trycktes")
});

