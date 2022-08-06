function exibir(num){
    console.log("A operação resultou em:"+ num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);   
}

function multi(a, b, cb){
    var op = a * b;
    cb(op);   
}

soma(20,10, exibir);

multi(3,5, exibir);

