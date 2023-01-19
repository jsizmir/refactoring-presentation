const attendees = require("./attendees");
const printWinner = require("./extra");

function giveaway(names) {
  var winner = "";
  for (var i = 0; i < names.length; i++) {
    winner = names[Math.floor(Math.random() * names.length)];
  }
  return winner;
}

function main() {
  const winner = giveaway(attendees);
  printWinner(winner);
}

main();
