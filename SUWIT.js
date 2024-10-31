
function play(playerChoice) {
  const choices = ["batu", "kertas", "gunting"];
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;

  if (playerChoice === compChoice) {
    result = "Seri, kalo Seri Main o lagi kocakk!!, Sampek Menang/Kalah";
  } else if (playerChoice === "batu") {
    result =
      compChoice === "gunting"
        ? "Kamu Menang Hoki"
        : "KAMU KALAH, KARENA KAMU KROCO, BOT, DAN TIDAK BISA BERMAIN";
  } else if (playerChoice === "kertas") {
    result =
      compChoice === "batu"
        ? "Kamu Menang Hoki"
        : "KAMU KALAH, KARENA KAMU KROCO, BOT, DAN TIDAK BISA BERMAIN";
  } else if (playerChoice === "gunting") {
    result =
      compChoice === "kertas"
        ? "Kamu Menang Hoki"
        : "KAMU KALAH, KARENA KAMU KROCO, BOT, DAN TIDAK BISA BERMAIN";
  } else {
    result = "Pilihan yang salah.";
  }

  document.getElementById(
    "message"
  ).innerText = `Kamu memilih "${playerChoice}" dan komputer memilih "${compChoice}", maka hasilnya adalah "${result}".`;
  document.getElementById("playAgain").style.display = "block";
}

function resetGame() {
  document.getElementById("message").innerText = "";
  document.getElementById("playAgain").style.display = "none";
}
