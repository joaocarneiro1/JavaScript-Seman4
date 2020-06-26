
 //Criar Array
 var exemplo = ["cadeira", "banco", "mesa"];

function criarArray(){
	alert(exemplo);
}

//Acrescentar ao Array
var exemplo2 = ["cadeira", "banco", "mesa"];
exemplo2.push("secretaria");

function aumentarArray(){
	alert(exemplo2);
}

//Remover um Item
var exemplo3 = ["cadeira", "banco", "mesa"];
exemplo3.pop();

function removerArray(){
	alert(exemplo3);
}

//Adicionar um item no início
var exemplo4 = ["cadeira", "banco", "mesa"];
exemplo4.unshift('cama');

function adicionarInicioArray(){
	alert(exemplo4);
}

//Remover um item no início
var exemplo5 = ["cama", "cadeira", "banco", "mesa"];
exemplo5.shift();
 
function removerInicioArray(){
	alert(exemplo5);
}

//Copiar uma Array
var exemplo7 = ["cadeira", "banco", "mesa"];
exemplo7.slice();

function copiarArray(){
	alert(exemplo7);
}

//Remover um item pela posição
var exemplo6 = ["cadeira", "banco", "mesa"];
exemplo6.splice(1,1);

function removerPosicaoArray(){
	alert(exemplo6);
}

//Ordem Crescente
var exemplo7 = ["cadeira", "banco", "mesa"];
exemplo7.sort();

function crescente(){
	alert(exemplo7);
}

//Ordem Decrescente
var exemplo8 = ["cadeira", "banco", "mesa"];
exemplo8.reverse()

function decrescente(){
	alert(exemplo8);
}

//Ordena E Adiciona
var exemplo9 = ["1", "2", "3"];
exemplo9.reverse().push("4");

function OrdenaEadiciona(){
	alert(exemplo9);
}

//Ordena e Remove
var exemplo10 = ["1", "2", "3", "4"];
exemplo10.reverse().splice(1,1);

function {
	alert(exemplo10);
}