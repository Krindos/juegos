/*
    El juego consiste en colocar fichas para tratar de que queden
tres alineadas, ya sea verticalmente, horizontalmente o en diagonal
    Si ningun jugador logra el objetivo se debe comenzar nuevamente
*/

function iniciarTateti(){
    generarTablero();

}

function generarTablero(){
    
    var contenedor=document.getElementById("juego");

    //genero el tablero que contendrá las casillas
    var tablero= document.createElement("div");
    tablero.id="tablero";
    tablero.style.height="300px";
    tablero.style.width="300px";
    
    //genero las casillas para jugar
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var casilla=document.createElement("div");
            casilla.id="casilla"+i+j;
            casilla.className="casilla";
            casilla.style.display="flex";
            casilla.style.float="left";
            casilla.style.height="33%";
            casilla.style.width="33%";
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