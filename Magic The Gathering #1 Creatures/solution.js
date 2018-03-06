const battle = (player1, player2) => {
  while (player1.length !== player2.length) {
    (player1.length < player2.length ? player1 : player2).push([0, 0]);
  }
  return {
    player1: player1.filter((item, ind) => item[1] > player2[ind][0]),
    player2: player2.filter((item, ind) => item[1] > player1[ind][0]),
  };
};

module.exports = battle;
