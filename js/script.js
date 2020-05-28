const grid = document.getElementById('grid');

//Resize Button
document.querySelector('.resize').addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach((cell) => grid.removeChild(cell));
    createGrid();
});

//Reset Button
const reset = document.querySelector('.reset');
reset.addEventListener('mouseover', () => document.querySelector('audio').play());
reset.addEventListener('click', resetGrid);

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

    document.querySelectorAll('.cell').forEach((cell) => {
        cell.addEventListener('mouseenter', () => cell.classList.add('cellON'));
    });
};

function resetGrid() {
    document.querySelectorAll('.cell').forEach((cell) => cell.classList.remove('cellON'));
};