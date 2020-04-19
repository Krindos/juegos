/*
    El juego consiste en ir dando vuelta las imagenes para encontrar todos los pares identicos
    Al seleccioar 2 imagenes estas se dan vuela, se muestran por unos segundos para poder 
    memorizarlas y vuelven a quedar ocultas

    Se puede seleccionar entre 1 y 3 jugadores. en caso de seleccionarse un jugador solamente 
    se mide el tiempo hasta que se logran juntar todos los pares.En el caso de jugar mas de uno,
    gana quien haya encontrado la mayor cantidad de pares
*/

function iniciarPares(){
    var contenedor=document.getElementById("juego");
    var tablero=createElement("div");

    //creo 40  cartas para el juego
    for (var i=0; i<40;i++){
        var carta=createElement("div");
        carta.attribute("id")="carta"+i;
        tablero.appendChild(carta);
    }
    var carta=createElement("div");

}