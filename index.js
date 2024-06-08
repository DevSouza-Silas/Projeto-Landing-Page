
var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById("bruna");
var setaDireita = document.getElementById("seta-direita");
var setaEsquerda = document.getElementById("seta-esquerda");

function rolarParaDireita(){

    bruna.style = 'display:flex';
    samantha.style = 'display:none';
    setaDireita.style = 'display:none; margin-top: 55%';
    setaEsquerda.style = 'display:flex';
}

function rolarParaEsquerda(){

    bruna.style = 'display:none';
    samantha.style = 'display:flex';
    setaDireita.style = 'display:flex';
    setaEsquerda.style = 'display:none; margin-top: 55%'; 
}