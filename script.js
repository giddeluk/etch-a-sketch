const mainContainer = document.querySelector("#mainContainer");
const subContainer = document.querySelector("#subContainer");

// Grid Size = gridSize x gridSize eg 16 x 16
const gridSize = 30;


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

}


// Prints the Grid on the Webpage
createGrid(gridSize,mainContainer, subContainer);

let gridBoxes = document.querySelectorAll(".gridBox");
gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", () => {
    gridBox.style.backgroundColor = "black";
    });
})



