let mass = 0;
let volume = 0;

window.onload = draw;

function MassChange(value) {
  if (value < 0) {
    alert("Masa nie może być ujemna!");
  } else {
    mass = value;
  }
}

function VolumeChange(value) {
  if (value < 0) {
    alert("Objętość nie może być ujemna!");
  } else {
    volume = value;
  }
}

function CheckDensity() {
  if (mass && volume && volume != 0) {
    let result = (mass / volume).toFixed(3);
    let verdict = "";
    if (result >= 3.0 && result <= 3.7) {
      verdict = "To może być meteoryt kamienny!";
    } else if (result >= 4.25 && result <= 4.89) {
      verdict = "To może być meteoryt żelazno-kamienny!";
    } else if (result >= 7 && result <= 8) {
      verdict = "To może być meteoryt żelazny!";
    } else {
      verdict = "To raczej nie jest meteoryt.";
    }
    draw(result);
    document.getElementById("result-verdict").innerHTML = verdict;
    document.getElementById("result-value").innerHTML = result;
  } else {
    alert("Upewnij się, że wprowadzone dane są poprawne!");
  }
}

function draw(densityResult) {
  let canvas = document.getElementById("graph");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(20, 10, 2, 380);
    ctx.fillRect(20, 10, 250, 2);
    let i;
    for (i = 50; i < 380; i += 40) {
      ctx.fillRect(20, i, 10, 2);
    }
    ctx.font = "20px arial";
    let txt = 1;
    for (i = 58; i < 380; i += 40) {
      ctx.fillText(txt, 1, i);
      txt++;
    }

    ctx.fillStyle = "#0066ff";
    ctx.fillRect(35, 130, 200, 28);
    //kamienne
    ctx.fillRect(35, 180, 200, 20);
    //zelazno kamienne
    ctx.fillRect(35, 290, 200, 50);
    //żelazne
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "16px arial";
    ctx.fillText("Kamienne", 40, 150);
    ctx.fillText("Żelazno-kamienne", 40, 196);
    ctx.fillText("Żelazne", 40, 320);
    if (densityResult && densityResult < 9) {
      ctx.fillStyle = "firebrick";
      let resultPosition = densityResult * 40 + 10;
      ctx.fillRect(230, resultPosition - 2, 30, 4);
    }
  }
}
