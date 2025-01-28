const tileContainer = document.querySelector("#tile-container");
const slider = document.querySelector(".slider");
let gridSize = slider.value;

addEventListener("load", (event) => {
    populateGrid(gridSize);
});

addEventListener("input", (event) => {
    gridSize = slider.value;
    console.log(gridSize);
    tileContainer.innerHTML = '';
    populateGrid();
});


function populateGrid() {
    for (let i = 0; i < gridSize / 2; i++) {
        const tileRow = document.createElement("div");
        tileRow.classList.add("tile-row");
        for (let j = 0; j < gridSize / 2; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.addEventListener("mouseover", (event) => {
                changeColor(tile);
            });
            tileRow.append(tile);
        }
        tileContainer.appendChild(tileRow);
    }
};

function changeColor(element) {
    element.style.backgroundColor = getRandomColor();

}

function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color = color.concat(characters.charAt(index));
    }
    return color;
}