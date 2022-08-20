const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola?'));
console.log(reg1.test('nao tem'));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test('Tem bola?'));
console.log(reg2.test('nao tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("31515215215"));

