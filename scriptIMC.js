function calcularIMC() {
  var estatura = document.getElementById("estatura").value;
  var masa = document.getElementById("masa").value;
  var IMC = (masa / (estatura * estatura)).toFixed(2);

  document.getElementById("numeroIMC").innerHTML = IMC
if (IMC <= 18.5) {
  document.getElementById("numeroIMC").style.color = "blue";
  document.getElementById("explicacion").innerHTML = "Estás bajo de peso";
  document.getElementById("fotoIMC").src = "unnamed.jpg";
  } else if (IMC > 18.5 && IMC < 25) {
    document.getElementById("numeroIMC").style.color = "lightgreen";
    document.getElementById("explicacion").innerHTML = "Tienes un peso saludable";
  } else if (IMC >= 25 && IMC < 30) {
    document.getElementById("numeroIMC").style.color = "orange";
    document.getElementById("explicacion").innerHTML = "Tienes sobrepeso";
  } else if (IMC >= 30 && IMC < 35) {
    document.getElementById("numeroIMC").style.color = "red";
    document.getElementById("explicacion").innerHTML = "Tienes obesidad de grado 1";
  } else if (IMC >= 35 && IMC < 40) {
    document.getElementById("numeroIMC").style.color = "crimson";
    document.getElementById("explicacion").innerHTML = "Tienes obesidad de grado 2";
  } else {
    document.getElementById("numeroIMC").style.color = "darkred";
    document.getElementById("explicacion").innerHTML = "Tienes obesidad mórbida";
  }
}