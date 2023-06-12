const canvas = null || document.querySelector('#game');
const game = null || canvas.getContext('2d');
let canvasize;
let elementsSize;
window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);

function setCanvasSize(){
    console.group('CanvasSize');
    if(window.innerHeight > window.innerWidth){
        canvasize = window.innerWidth * 0.8;
    }else{
        canvasize=window.innerHeight * 0.8;
    }
    canvas.setAttribute('width', canvasize);
    canvas.setAttribute('height',canvasize);
    //Calculando el Grid de nuestro canvas
    
    console.log({
        canvasize,
        elementsSize
    });
    console.groupEnd('CanvasSize');
    elementsSize = canvasize/10;
    StartGame();
}
function StartGame(){
    console.log('Se ha cargado Correctamente el Load y StartGame')
    game.font=elementsSize+'px Arial';
    game.textAlign = 'end';
    for(let i = 1 ; i<=10;i++){
        game.fillText(emojis['X'],elementsSize*i,elementsSize);
    }
    
}