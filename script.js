let dimensions = 16;

generateButtons();
generateGrid(dimensions);

function generateButtons() {
    const buttonPanel = document.querySelector('.button-panel');
    const clearButton = document.createElement('button');
    clearButton.innerHTML = "Clear Grid";
    clearButton.addEventListener("click", clearGrid, false);
    buttonPanel.appendChild(clearButton);
}

function generateGrid(dimensions) {

    console.log(`The resulting grid will be ${dimensions} * ${dimensions} = ${dimensions * dimensions} squares.`);

    const grid = document.querySelector('.flex-grid');

    for (let i = 0; i < dimensions; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
    }

    const rows = Array.from(document.querySelectorAll('.grid-row'));
    rows.forEach((row) => {
    for (let i = 0; i < dimensions; i++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        row.appendChild(gridSqr);
    }
    });

    const squares = Array.from(document.querySelectorAll('.grid-sqr'));
    squares.forEach((square) => {
        for(let i = 0; i < (dimensions * dimensions); i++) {
            square.addEventListener("mouseover", onMouseOver, false);
        }
    });
}

function onMouseOver() {
    this.style.backgroundColor = "black";
}

function clearGrid() {
    const squares = Array.from(document.querySelectorAll('.grid-sqr'));
    squares.forEach((square) => {
        for (let i = 0; i < (dimensions * dimensions); i++) {
            square.style.backgroundColor = "white";
        }
    });
    resizeGrid();
}

function resizeGrid() {
    let newDimensions = prompt("Enter the new size of the grid (1 - 100): ");
    if(!isNaN(newDimensions)) {
        console.log(`${newDimensions} is a number!`)
        newDimensions = parseInt(newDimensions);
        if (newDimensions > 100 || newDimensions < 1) {
            alert("Please try again; enter values within range (1 - 100): ");
            resizeGrid();
        } else {
            const grid = document.querySelector('.flex-grid');
            while (grid.lastElementChild) {
                grid.removeChild(grid.lastElementChild);
            }
            console.log(`Grid clear!`);
            generateGrid(newDimensions);
        }
    } else {
        console.log(`${newDimensions} is not a number!`)
        alert("Please try again; enter values within range (1 - 100): ");
        resizeGrid();
    }
}