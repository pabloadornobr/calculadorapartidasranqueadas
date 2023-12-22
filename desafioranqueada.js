let vitorias
let derrotas

function calcularNivel(vitorias, derrotas){
  let nivel;

    if(vitorias<11){
        nivel="Ferro"
    }
    if(vitorias>=11 && vitorias<=20){
        nivel="Bronze"
    }
    if(vitorias>=21 && vitorias<=50){
        nivel="Prata"
    }
    if(vitorias>=51 && vitorias<=80){
        nivel="Ouro"
    }
    if(vitorias>=81 && vitorias<=90){
        nivel="Diamante"
    }
    if(vitorias>=91 && vitorias<=100){
        nivel="Lendário"
    }
    if(vitorias>=101){
        nivel="Imortal"
}

saldoVitorias=vitorias-derrotas;
console.log("O Herói tem de saldo de " + saldoVitorias+ " vitórias e está no nível de "+ nivel);
}
calcularNivel(100,2);// 100 o número de vitórias e 2 de derrotas

