function playRockPaperScissor(player1, player2) {
    if (player1 == "Pedra" && player2 == "Pedra") {
        const resultTest1 = "Empate!";
        return resultTest1;
    }
    if (player1 == "Pedra" && player2 == "Tesoura") {
        const resultTest2 = "Jogador 1 venceu!";
        return resultTest2;
    }
    if (player1 == "Pedra" && player2 == "Papel") {
        const resultTest3 = "Jogador 2 venceu!";
        return resultTest3;
    }
    if (player1 == "Papel" && player2 == "Papel") {
        const resultTest4 = "Empate!";
        return resultTest4;
    }
    if (player1 == "Papel" && player2 == "Pedra") {
        const resultTest5 = "Jogador 1 venceu!";
        return resultTest5;
    }
    if (player1 == "Papel" && player2 == "Tesoura") {
        const resultTest6 = "Jogador 2 venceu!";
        return resultTest6;
    }
    if (player1 == "Tesoura" && player2 == "Tesoura") {
        const resultTest7 = "Empate!";
        return resultTest7;
    }
    if (player1 == "Tesoura" && player2 == "Papel") {
        const resultTest8 = "Jogador 1 venceu!";
        return resultTest8;
    }
    if (player1 == "Tesoura" && player2 == "Pedra") {
        const resultTest9 = "Jogador 2 venceu!";
        return resultTest9;
    }

}

console.log(playRockPaperScissor);