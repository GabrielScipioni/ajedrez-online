//constantes globales
//el tamaño del tablero
const WIDTH =800;
const HEIGHT=800; 
//el tamaño de las casillas
const FILES = 8;
const RANKS = 8;
//---------------
const cell_width= WIDTH/FILES;
const cell_height= HEIGHT/RANKS;
//variables de color
const theme={
    light: '#eeeed2',
    dark: '#769656',
}
const piecetheme={
    light: '#ffffff',
    dark: '#000000',
}
//Variables de piezas       ♔♕♖♗♘♙♚♛♜♝
const piece_offset=cell_height*0.1;
const pieces={
    rey:'♚',
    reina:'♛',
    alfil:'♝',
    torre:'♜',
    caballo:'♞',
    peon:'♙',
}
//------------------

//creo el canvas y le doy forma y color
const $canvas =document.createElement('canvas');
const ctx =$canvas.getContext('2d');
$canvas.width=WIDTH;
$canvas.height=HEIGHT;

document.body.appendChild($canvas);
document.body.style.display='grid';
document.body.style.placeItems='center';
document.body.style.alignItems='center';
document.body.style.height='100%'
document.body.parentElement.style.height='100%'
document.body.style.backgroundColor='#333333'

    const renderboard =()=>{
        for (let x = 0; x < FILES; x += 1) {
        for (let y = 0; y < RANKS; y += 1) {
            let retcolor=theme.light;
            let textcolor=theme.dark;
    
            if ((x+y) % 2) {
                retcolor=theme.dark;
                textcolor=theme.light;
            }
            //color de los casilleros
            ctx.fillStyle=retcolor;
            ctx.fillRect(x * cell_width ,y * cell_height,cell_width,cell_height);
    
            //dibujar la posicion
            ctx.fillStyle=textcolor;
            ctx.textBaseline='top';
            ctx.textAlign='start';     
            ctx.font ='8px Arial';
            ctx.fillText([`${x};${y}`],x*cell_width+10,y * cell_height+10);
            
            //dibujar la pieza
            const piece=boardMatrix[x][y];
            if (piece) {
                ctx.fillStyle=piece.color;
                ctx.textBaseline='middle';
                ctx.textAlign='center';            
                ctx.font ='72px Arial';
                ctx.fillText(piece.type , x*cell_width+cell_height/2, y * cell_height+cell_height/2+piece_offset);
            }
        }        
    }
    }
    
//inicializar tablero
const boardMatrix = [];
for (let x = 0; x < FILES; x += 1) {
        boardMatrix[x] = [];
    for (let y = 0; y < RANKS; y += 1) {
        boardMatrix[x][y]=null;
    }        
}
//ubicar piezas
for (let i = 0; i < RANKS; i+=1) {

    boardMatrix[i][1]={
        type:pieces.peon,
        color:piecetheme.dark,
    }
    boardMatrix[i][6]={
        type:pieces.peon,
        color:piecetheme.light,
    }    
}
//torre
boardMatrix[0][0]={
    type:pieces.torre,
    color:piecetheme.dark,
}
boardMatrix[7][0]={
    type:pieces.torre,
    color:piecetheme.dark,
}    
boardMatrix[0][7]={
    type:pieces.torre,
    color:piecetheme.light,
}
boardMatrix[7][7]={
    type:pieces.torre,
    color:piecetheme.light,
}    
//alfil
boardMatrix[2][0]={
    type:pieces.alfil,
    color:piecetheme.dark,
}
boardMatrix[5][0]={
    type:pieces.alfil,
    color:piecetheme.dark,
}    
boardMatrix[2][7]={
    type:pieces.alfil,
    color:piecetheme.light,
}
boardMatrix[5][7]={
    type:pieces.alfil,
    color:piecetheme.light,
}
//caballos
boardMatrix[1][0]={
    type:pieces.caballo,
    color:piecetheme.dark,
}
boardMatrix[6][0]={
    type:pieces.caballo,
    color:piecetheme.dark,
}    
boardMatrix[1][7]={
    type:pieces.caballo,
    color:piecetheme.light,
}
boardMatrix[6][7]={
    type:pieces.caballo,
    color:piecetheme.light,
}//rey
boardMatrix[4][0]={
    type:pieces.rey,
    color:piecetheme.dark,
}
boardMatrix[3][7]={
    type:pieces.rey,
    color:piecetheme.light,
}    
//reina
boardMatrix[3][0]={
    type:pieces.reina,
    color:piecetheme.dark,
}
boardMatrix[4][7]={
    type:pieces.reina,
    color:piecetheme.light,
}

renderboard();

