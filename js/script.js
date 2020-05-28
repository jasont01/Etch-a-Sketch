const grid = document.getElementById('grid');

createGrid();

function createGrid() {
    let gridSize = document.querySelector('#drop-down-value').value;
    let cellSize = (480 / gridSize);
    for (i = 0; i < (gridSize * gridSize); i++) {
        let newcell = document.createElement('div');
        newcell.classList.add('cell');
        newcell.style.width = `${cellSize}px`;
        newcell.style.height = `${cellSize}px`;
        grid.appendChild(newcell);
    };
};
