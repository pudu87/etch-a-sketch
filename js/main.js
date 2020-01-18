let gridNum = 16;
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

createGrid(gridNum);

//INSTALL BLACK AS DEFAULT COLOR
squares = Array.from(document.querySelectorAll('.square'));
squares.forEach((square) => {
    square.addEventListener('mouseenter', makeBlack);
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        squares = Array.from(document.querySelectorAll('.square'));
        squares.forEach((square) => {
            square.removeEventListener('mouseenter', makeBlack);
            square.removeEventListener('mouseenter', makeShades);
            square.removeEventListener('mouseenter', makeRainbow);
            switch (button.id){
                case 'clear':
                    container.removeChild(square);
                    break;
                case 'black':
                    square.addEventListener('mouseenter', makeBlack);
                    break;
                case 'shades':
                    square.addEventListener('mouseenter', makeShades);
                    break;
                case 'rainbow':
                    square.addEventListener('mouseenter', makeRainbow);
                    break;
                default:
                    alert('Where did you find this button?');
            }
        });
        //CREATE GRID AFTER CLEARING
        if(button.id == 'clear'){
            promptGridNum();
            createGrid(gridNum);
        }
    });
});

function makeBlack(){
    this.style.backgroundColor = 'rgb(0,0,0)';
};

function makeShades(){
    let color = this.style.backgroundColor;
    color = color.slice(4);
    color = color.slice(-color.length,-1);
    color = color.split(',');
    let r = color[0]-Math.floor(color[0]/10);
    let g = color[1]-Math.floor(color[1]/10);
    let b = color[2]-Math.floor(color[2]/10);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
};

function makeRainbow(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
};

function createGrid(gridNum){
    container.style.gridTemplateColumns = `repeat(${gridNum},1fr)`;
    for (let i=0; i<Math.pow(gridNum,2); i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = "rgb(255,255,255)"
        container.appendChild(square);
        
        //INSTALL BLACK AS DEFAULT COLOR
        square.addEventListener('mouseenter', makeBlack);
    };
};

function promptGridNum() {
    gridNum = prompt('How many squares per side do you want?');
    return gridNum;
};