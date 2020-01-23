//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-ээр тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Программ эхлэхэд бэлтгий
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  //  1-6 доторхи санамсаргүй 1 тоог гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  //   Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээ ргаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийгн оноог өөрчилнө.
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгонооо.
    switchToNextPlayer();
  }
});

// Hold товчны эвент листийн нэр.
document.querySelector(".btn-hold").addEventListener("click", function() {
  //Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //   Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах.
  if (scores[activePlayer] >= 10) {
    //Ялагч гэсэн тэкстийг нэрнийх нь оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activecPlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activecPlayer + "-panel")
      .classList.remove("active");
  } else {
    //Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
  //Дэлгэц дээрхи оноог өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Ээлжийн оноог нь 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг солино.
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгонооо.
  switchToNextPlayer();
});

// Энэ функц нь тоглох ээлжийг дараачийн тоглогчруу шилжүүлдэг.
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ.

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Улаан цэгийг шилжүүлэх код.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болно.
  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товчний эвент листенр.
document.querySelector(".btn-new").addEventListener('click', function())