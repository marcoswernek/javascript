setTimeout

console.log("Antes do setTimeout");

setTimeout(function() {
    console.log("setTimeout em Ação");

}, 2000);

console.log("Depois do setTimeout");

//setInterval

setInterval(function() {
    console.log("Testando setInterval")
}, 10000)


//setTimeout e setInterval e clearTimeout e clearInterval


var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

//clearInterval na praticá

var myInterval = setInterval(function() {
    console.log("Imprimir interval");
}, 500);

setTimeout(function() {
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 2500)