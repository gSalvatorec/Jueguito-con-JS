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
    elementsSize = canvasize/10-2;
    StartGame();
}
function StartGame(){
    console.log('Se ha cargado Correctamente el Load y StartGame')
    game.font=elementsSize+'px Arial';
    game.textAlign = 'end';
    const map = maps[3];
    const mapsRows = map.trim().split('\n');
    const mapSeparate = mapsRows.map(row => row.trim().split(''));
    mapSeparate.forEach((row, rowI)=>{
        row.forEach((col,colI)=>{
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            game.fillText(emoji,posX,posY);
        })
    })

}