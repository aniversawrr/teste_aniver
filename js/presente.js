
var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mais');

botao.onclick = function(){

    if(conteudo.className == "open"){
        conteudo.className = "";
        botao.innerHTML = "Mostrar mais";
    }
    else{
        conteudo.className = "open";
        botao.innerHTML = "Mostrar menos";
    }
}