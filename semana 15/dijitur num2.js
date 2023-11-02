var turno=['f01','p01','q01','m01','f02','p02'];
var modulo=['01','02','03','04','05','06'];
function tick(){
    let con=1;//longitud
    let ce=0;//vector
    while (con<=6){
        document.getElementById("t"+con).value=turno[ce];
        document.getElementById("m"+con).value=modulo[ce];
        ++ce;
        ++con;
    }
}