let jogador, vencedor =  null;
let jogadorSelecionado = document.getElementById('jogador-vez');
let ganhador = document.getElementById('vencedor');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){

    if (vencedor !== null) {
        return
    }

    let quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== "-") {
        return
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    if (jogador === "X") {
        jogador = "O";
    }else if (jogador === "O") {
        jogador = "X"
    }

    mudarJogador(jogador)
    verificaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function verificaVencedor() {
  let quadrado1 = document.getElementById(1);
  let quadrado2 = document.getElementById(2);
  let quadrado3 = document.getElementById(3);

  let quadrado4 = document.getElementById(4);
  let quadrado5 = document.getElementById(5);
  let quadrado6 = document.getElementById(6);
  
  let quadrado7 = document.getElementById(7);
  let quadrado8 = document.getElementById(8);
  let quadrado9 = document.getElementById(9);

    if (verificaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCor(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1);
        return;
    }

    if (verificaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCor(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4);
        return;
    }

    if (verificaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCor(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7);
        return;
    }

    if (verificaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCor(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1);
        return;
    }

    if (verificaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCor(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3);
        return;
    }

    if (verificaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCor(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1);
        return;
    }

    if (verificaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCor(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2);
        return;
    }

    
    if (verificaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCor(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3);
        return;
    }

    
    
}

function mudarCor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "#2E8B57"
    quadrado2.style.background = "#2E8B57"
    quadrado3.style.background = "#2E8B57"
}

function mudarVencedor(ganhou) {
    vencedor = ganhou.innerHTML;
    ganhador.innerHTML = vencedor

}

function verificaSequencia(quadrado1, quadrado2, quadrado3) {
    let igual = false;

    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igual = true;
    }

    return igual;
}

function reiniciar() {
   vencedor = null;
   jogadorSelecionado = "";

   for (let i = 1; i <= 9; i++) {
       let quadrado = document.getElementById(i)
       quadrado.style.background ="#eee"   
       quadrado.style.color = "#eee";  
       quadrado.innerHTML = "-"
    
   }

   mudarJogador("X")

}

