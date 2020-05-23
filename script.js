const grid = document.querySelector('.flex-grid');

for(let i = 0; i <= 15; i++) {
        const gridCol = document.createElement('div');
        gridCol.classList.add('grid-col');
        grid.appendChild(gridCol);
}

const cols = Array.from(document.querySelectorAll('.grid-col'));
cols.forEach((col) => {
    for(let j = 0; j <= 15; j++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        col.appendChild(gridSqr);
    }
});