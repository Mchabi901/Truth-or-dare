let players = [];
let currentPlayer = "";

const truths = [
  "What's your biggest fear?",
  "Have you ever lied to your best friend?",
  "What's the most embarrassing thing you've ever done?",
  "Who do you secretly like?",
  "Have you ever cheated in a game?"
];

const dares = [
  "Do 10 jumping jacks!",
  "Sing your favorite song!",
  "Act like a cat for 10 seconds!",
  "Show the last photo in your gallery.",
  "Do a silly dance for 15 seconds."
];

function startGame() {
  const input = document.getElementById("nameInput").value;
  players = input.split(",").map(name => name.trim()).filter(Boolean);
  if (players.length < 2) {
    alert("Enter at least 2 names.");
    return;
  }
  document.getElementById("gameArea").style.display = "block";
  nextPlayer();
}

function nextPlayer() {
  const randIndex = Math.floor(Math.random() * players.length);
  currentPlayer = players[randIndex];
  document.getElementById("playerName").textContent = `🎯 ${currentPlayer}, your turn!`;
  document.getElementById("question").textContent = "";
}

function choose(choice) {
  const list = choice === 'truth' ? truths : dares;
  const rand = list[Math.floor(Math.random() * list.length)];
  document.getElementById("question").textContent = rand;
  setTimeout(nextPlayer, 8000); // auto-next after 8 seconds
}
