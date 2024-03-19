/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
    if(player1 == "Pedra" && player2 == "Tesoura" || player1 == "Tesoura" && player2 == "Papel" || player1 == "Papel" && player2 == "Pedra"){
        console.log("jogador 1 venceu!")
    }
}
console.log(playRockPaperScissor(Pedra, Pedra));