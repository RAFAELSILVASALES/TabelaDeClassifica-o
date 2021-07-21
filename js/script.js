var rafael = {
  nome: "rafael",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0,
}

var ana ={
  nome: "ana",
  vitorias: 4,
  empates: 5,
  derrotas: 2,
  pontos:  0,
}



rafael.pontos = calcularPontos(rafael)
ana.pontos = calcularPontos(ana)

function calcularPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos 
}

var jogadores = [rafael, ana ]
exibirNaTela(jogadores)

function exibirNaTela(jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos  + "</td>"
    html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i +")' >Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
       
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}


function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calcularPontos(jogador)
  exibirNaTela(jogadores)
}


function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calcularPontos(jogador)
  exibirNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirNaTela(jogadores)
  
}