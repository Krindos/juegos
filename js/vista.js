/*
    El juego consiste en colocar fichas para tratar de que queden
tres alineadas, ya sea verticalmente, horizontalmente o en diagonal
    Si ningun jugador logra el objetivo se debe comenzar nuevamente
*/

function iniciarTateti(){
    borrarElementosPrevios();
    generarTablero(3,3);

}
function iniciarPares(){
    borrarElementosPrevios();
    generarTablero(10,4);

}

// Borra los elementos generados previamente
function borrarElementosPrevios(){
    var contenedor=document.getElementById("juego");
    if (contenedor.childElementCount>1){

        contenedor.childNodes.forEach(element => {
            if(element.id=="tablero"){
                element.remove();
            }
        });
    }
    return;
}

// Genera un tablero con las filas y columnas indicadas
function generarTablero(filas,columnas){
    
    var contenedor=document.getElementById("juego");

    //genero el tablero que contendrá las casillas
    var tablero= document.createElement("div");
    var escala=1/columnas;
    tablero.id="tablero";
    tablero.style.width=(screen.availHeight-100)*escala;
    tablero.style.height=tablero.style.width;
    
    //genero las casillas para jugar
    for(var i=0; i<filas; i++){
        for(var j=0; j<columnas; j++){
            
            //dimension de las casillas
            let dimensionX=100/columnas;
            let dimensionY=dimensionX;

            //creacion de las casillas
            var casilla=document.createElement("div");
            casilla.id="casilla"+i+j;
            casilla.className="casilla";
            casilla.style.display="flex";
            casilla.style.float="left";
            casilla.style.width=dimensionX+"%";
            casilla.style.height=dimensionY+"%";
            casilla.innerText=" ";
            if ((i+j)%2==0){
                casilla.style.background="khaki";
            }else{
                casilla.style.background="lightpink";
            }
            // vinculo las casillas con el tablero
            tablero.appendChild(casilla);
        };
        
    };
    //vinculo el tablero con el contenedor
    contenedor.appendChild(tablero);
    return;
}