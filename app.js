let container = document.querySelector('#container');
let reset = document.querySelector('#reset');
let gridStorage = document.querySelector('#gridStorage')
let random = document.querySelector('#random')
let rainbow = document.querySelector('#rainbow')
let black = document.querySelector('#black')
let newSize = 144;
let auto = 'auto '
let color = 'black'
console.log(newSize)

console.log(reset)
function createGrid(newSize=12) {
    if (newSize > 100) {
        newSize = 100;
    }
    console.log(newSize);
    let gridSize = auto.repeat(newSize)
    gridSize = gridSize.slice(0, gridSize.length - 1)
    newSize = newSize * newSize;
    for (let i = 1; i <= newSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        //grid.textContent = i;
        grid.style.display = "inline-block";
        grid.style.color = 'black'
        gridStorage.appendChild(grid)
        container.appendChild(gridStorage);
    }
    gridStorage.style.gridTemplateColumns = `${gridSize}`;
    return 'complete'
}

createGrid();
black.addEventListener('click', () => {
    color = rgbGenerator();
    gridStorage.addEventListener('mouseover', (e) => {
        if (e.target.className === 'grid')
        e.target.style.backgroundColor = color;
    })});

random.addEventListener('click', () => {
        gridStorage.addEventListener('mouseover', (e) => {
            if (e.target.className === 'grid')
            e.target.style.backgroundColor = 'black';
        })});

gridStorage.addEventListener('mouseover', (e) => {
    if (e.target.className === 'grid')
    e.target.style.backgroundColor = color;
})

reset.addEventListener('click', () => {
    while(gridStorage.firstChild){
        gridStorage.removeChild(gridStorage.firstChild);
    }    
    newSize = prompt('How big would you like the new grid?');
    createGrid(newSize);
})

function rgbGenerator() {
    let red = Math.floor(Math.random() * 256 );
    let green = Math.floor(Math.random() * 256 );
    let blue = Math.floor(Math.random() * 256 );
    let rgbColor = 'rgb(' +  red + ',' +  green + ',' +  blue + ')';
    return rgbColor;
}

rainbow.addEventListener('click', () => {
    gridStorage.addEventListener('mouseover', (e) => {
        if (e.target.className === 'grid')
        e.target.style.backgroundColor = rgbGenerator();
    })
})