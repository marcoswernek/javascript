var lista = ['Laranja','Maçã','Pera','Jaca','Limão','Melancia','Banana'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');

    var texttoli = document.createTextNode(lista[i]);

    liFor.appendChild(texttoli);

    listaNoBody[0].appendChild(liFor);
}
