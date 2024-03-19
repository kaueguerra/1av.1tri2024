const botoes  = document.querySelectorAll(".botoes");

for (let i = i < botoes.length; j++;){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
    botoes[i].classList.add("ativo");
    }
}