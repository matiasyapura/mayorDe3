let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

rotulo.innerHTML = "Ingrese numero 1 ";
rotulo2.innerHTML = "Ingrese numero 2 ";
rotulo3.innerHTML = "Ingrese numero 3 ";

btnEnviar.addEventListener("click", () => {
  let num1: number = Number(dato.value);
  let num2: number = Number(dato2.value);
  let num3: number = Number(dato3.value);

  if (num1 > num2 && num1 > num3) {
    console.log("es mayor num1");
  } else {
    if (num2 > num1 && num2 > num3) {
      console.log("es mayor num 2");
    } else {
      if (num3 > num1 && num3 > num2) {
        console.log("es mayor num3");
      }
    }
  }
});
