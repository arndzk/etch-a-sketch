const grid = document.querySelector('#grid');

for(let i = 0; i <= 16; i++) {
    for(let j = 0; j <= 16; j++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        grid.appendChild(gridBox);
    }
}