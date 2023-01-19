async function printWinner(winner) {
  for (let i = 5; i > 0; i--) {
    await new Promise((resolve) => setTimeout(resolve, (6 - i) * 1000));
    console.log(i + " seconds left.");
  }

  for (let i = 0; i < winner.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, i * 20));
    process.stdout.write(winner[i]);
  }
  console.log("\n🎉 Congratulations " + winner + "! 🎉");
}

module.exports = printWinner;
