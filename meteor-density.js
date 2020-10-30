let mass = 0;
let volume = 0;

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
  if (mass && volume) {
    document.getElementById("result-value").innerHTML = (mass / volume).toFixed(
      3
    );
  } else {
    alert("Upewnij się, że wprowadzone dane są poprawne!");
  }
}
