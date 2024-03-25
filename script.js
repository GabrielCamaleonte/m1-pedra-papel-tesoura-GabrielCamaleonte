function playRockPaperScissor(player1, player2) {
    if (player1 == "Pedra" && player2 == "Pedra" || player1 == "Papel" && player2 == "Papel" || player1 == "Tesoura" && player2 == "Tesoura") {
        const resultTest1 = "Empate!";
        return resultTest1;
    }
    if (player1 == "Pedra" && player2 == "Tesoura" || player1 == "Papel" && player2 == "Pedra" || player1 == "Tesoura" && player2 == "Papel") {
        const resultTest2 = "Jogador 1 venceu!";
        return resultTest2;
    }
    if (player1 == "Pedra" && player2 == "Papel" || player1 == "Papel" && player2 == "Tesoura" || player1 == "Tesoura" && player2 == "Pedra") {
        const resultTest3 = "Jogador 2 venceu!";
        return resultTest3;
    }
}

console.log(playRockPaperScissor);
