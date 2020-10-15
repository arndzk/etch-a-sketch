let dimensions = 16;
let color = 'black';

generateButtons();
generateGrid(dimensions);

function generateButtons() {
    const buttonPanel = document.querySelector('.button-panel');
    const clearButton = document.createElement('button');
    const resizeButton = document.createElement('button');
    const blackButton = document.createElement('button');
    const rgbButton = document.createElement('button');
    const gradientButton = document.createElement('button');
    clearButton.innerHTML = "Clear Grid";
    resizeButton.innerHTML = "Resize Grid";
    blackButton.innerHTML = "Black";
    rgbButton.innerHTML = "Random RGB Value";
    gradientButton.innerHTML = "Gradient";
    clearButton.addEventListener("click", clearGrid, false);
    resizeButton.addEventListener("click", resizeGrid, false);
    blackButton.addEventListener("click", setColorToBlack, false);
    rgbButton.addEventListener("click", setColorToRgb, false);
    gradientButton.addEventListener("click", setColorToGradient, false);
    buttonPanel.appendChild(clearButton);
    buttonPanel.appendChild(resizeButton);
    buttonPanel.appendChild(blackButton);
    buttonPanel.appendChild(rgbButton);
    buttonPanel.appendChild(gradientButton);
}
function generateGrid(dimensions) {
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
    if(color == 'black') {
        let black = `rgba(0,0,0,1)`;
        this.style.backgroundColor = black;
    }
    if(color == 'rgb') {
        let randomRgb = generateRandomRgb();
        this.style.backgroundColor = randomRgb;
    }
    if(color == 'gradient') {
        let currentRgb = getComputedStyle(this).getPropertyValue('background-color');
        const values = currentRgb.match(/[\d.]+/g);
        if (values.length === 3) {
            values.push(1);
        }
        if(values[0] != 0 && values[1] != 0 && values[2] != 0 && values[3] == 1) {
            let rgba = `rgba(0,0,0,0.1)`
            this.style.backgroundColor = rgba;
        } else if (values[3] < 1){
            let currentAlpha = parseFloat(values[3]);
            values[3] = currentAlpha + 0.1;
            let rgba = `rgba(0,0,0,${values[3]})`;
            this.style.backgroundColor = rgba;
        }
    }
}
function clearGrid() {
    const squares = Array.from(document.querySelectorAll('.grid-sqr'));
    squares.forEach((square) => {
        for (let i = 0; i < (dimensions * dimensions); i++) {
            square.style.backgroundColor = "#ffffff";
        }
    });
}
function resizeGrid() {
    let newDimensions = prompt("Enter the new size of the grid (1 - 100): ");
    if(!isNaN(newDimensions)) {
        newDimensions = parseInt(newDimensions);
        if (newDimensions > 100 || newDimensions < 1) {
            alert("Please try again; enter values within range (1 - 100): ");
            resizeGrid();
        } else {
            const grid = document.querySelector('.flex-grid');
            while (grid.lastElementChild) {
                grid.removeChild(grid.lastElementChild);
            }
            generateGrid(newDimensions);
        }
    } else {
        alert("Please try again; enter values within range (1 - 100): ");
        resizeGrid();
    }
}
function setColorToBlack() {
    color = 'black';
}
function setColorToRgb() {
    color = 'rgb';
}
function setColorToGradient() {
    color = 'gradient';
}
function generateRandomRgb() {
    const randomValue = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomValue(0, 255);
    const g = randomValue(0, 255);
    const b = randomValue(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}