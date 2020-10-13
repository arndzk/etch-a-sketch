let numOfRows = 16;

const grid = document.querySelector('.flex-grid');

for(let i = 0; i < numOfRows; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
}

const rows = Array.from(document.querySelectorAll('.grid-row'));
rows.forEach((row) => {
    for(let j = 0; j < numOfRows; j++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        row.appendChild(gridSqr);
    }
});