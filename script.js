let numOfRows = 16;

const grid = document.querySelector('.flex-grid');

for(let i = 0; i < numOfRows; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
}

const rows = Array.from(document.querySelectorAll('.grid-row'));
rows.forEach((row) => {
    for(let i = 0; i < numOfRows; i++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        row.appendChild(gridSqr);
    }
});

const squares = Array.from(document.querySelectorAll('.grid-sqr'));
squares.forEach((square) => {
    for(let i = 0; i < (numOfRows * numOfRows); i++) {
        square.addEventListener("mouseover", mouseOver, false);
    }
});

function mouseOver() {
    
}