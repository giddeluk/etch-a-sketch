const mainContainer = document.querySelector("#mainContainer");
const subContainer = document.querySelector("#subContainer");
const newGrid = document.querySelector("#newGrid");

// Grid Size = gridSize x gridSize eg 16 x 16
const gridSize = 16;
let windowWidth = (2/100) * window.innerWidth;
let totalGridWidth = windowWidth * 16;




const createGrid = (size, mainContainer, subContainer) => {
    // Create a Single Grid Row
    for(let i = 0; i < size; i++){
        // Create 16 Grids on a Single Line
        let gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        subContainer.appendChild(gridBox);
        mainContainer.appendChild(subContainer);
    }
    // Duplicates the Rows into Columns to achieve the Number of Grids Vertically
    for(let i = 0; i < size - 1; i++){
        let clonedNode = subContainer.cloneNode(true);
        mainContainer.appendChild(clonedNode);
    }
    addHoverEffect();
    

}

// Prints the Grid on the Webpage
createGrid(gridSize, mainContainer, subContainer);

const createMeasuredGrid = (size, mainContainer, subContainer, individualGridSize) => {
    // Create a Single Grid Row
    for(let i = 0; i < size; i++){
        // Create 16 Grids on a Single Line
        let gridBox = document.createElement("div");
        gridBox.style.width = individualGridSize + 'px';
        gridBox.style.height = individualGridSize + 'px';
        gridBox.classList.add("gridBox");
        subContainer.appendChild(gridBox);
        mainContainer.appendChild(subContainer);
    }
    // Duplicates the Rows into Columns to achieve the Number of Grids Vertically
    for(let i = 0; i < size - 1; i++){
        let clonedNode = subContainer.cloneNode(true);
        mainContainer.appendChild(clonedNode);
    }
    addHoverEffect();

}


newGrid.addEventListener("click", () => {
    let newGridSize = Number(prompt("What size of Grid Do you Want? Enter a Single Number. eg 16 for a 16 x 16 Grid, Numbers Above 100 are NOT Allowed"));
    while(newGridSize > 100){
        newGridSize = Number(prompt("What size of Grid Do you Want? Enter a single Number eg 16 for a 16 x 16 grid"));
    }
    let individualGridSize = totalGridWidth / newGridSize;
    let gridBoxes = document.querySelectorAll(".gridBox");
    for(const gridBox of gridBoxes){
        gridBox.parentElement.removeChild(gridBox);
    }
    createMeasuredGrid(newGridSize, mainContainer, subContainer, individualGridSize);
    

})

// Adds the mouseover event to all gridboxes
function addHoverEffect(){
    let gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", () => {
    gridBox.style.backgroundColor = "black";
    });
})
}