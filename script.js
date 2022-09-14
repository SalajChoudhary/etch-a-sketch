//Assigning elements variable name.
const containerDiv = document.getElementById('containerDiv');
const optionContainer = document.getElementById('optionContainer');
const gridColor = document.getElementById('color');
const gridSize = document.getElementById('grid-size');
const gridSizeLabel = document.getElementById('grid-size-label');
const gridLinesBtn = document.querySelector('.grid-lines');
const clearBtn = document.querySelector('.clear');
const drawBtn = document.querySelector('.draw');

//Creating grid container 4x4
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
containerDiv.appendChild(gridContainer);
gridContainer.style = `
    display:grid;
    grid-template-columns:repeat(4, 1fr); 
    grid-template-rows:repeat(4, 1fr); 
    background:white; 
    width:700px; 
    height:700px; 
    border:1px solid red;
    `;

containerDiv.insertBefore(gridContainer, optionContainer);




gridSize.addEventListener('input', makeGridBoxes);
function makeGridBoxes(){
    restartGrid();
    let gridCol = gridSize.value;
    let gridRow = gridSize.value;
    
    gridContainer.style.gridTemplateColumns = `repeat(${gridCol}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRow}, 1fr)`;
    gridSizeLabel.textContent = `${gridSize.value} x ${gridSize.value}`;
    
    for(let i = 0; i < gridRow*gridCol; i++) {
        
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-box');
        gridElement.style.backgroundColor = 'white';
        gridElement.style.border = '1px solid black';
        gridContainer.appendChild(gridElement);


        gridElement.addEventListener('mouseover', () => {
        gridElement.style.backgroundColor = `${gridColor.value}`;


         });


    }

}

function gridline(){
    let allDivs = gridContainer.querySelectorAll('div');
        allDivs.forEach(allDiv => 
        {
            if(allDiv.style.border == '1px solid black'){
                allDiv.style.border = '';
                gridLinesBtn.textContent = 'Gridlines: Off';
            }
            else{
                allDiv.style.border = '1px solid black';
                gridLinesBtn.textContent = 'Gridlines: On';
            }
        });
 }


function clear(){
    let allDivs = gridContainer.querySelectorAll('div');
    allDivs.forEach(allDiv => allDiv.style.backgroundColor = 'white');
}


gridLinesBtn.addEventListener('click', gridline);
clearBtn.addEventListener('click', clear);



function restartGrid() {
    while(gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }


makeGridBoxes();
