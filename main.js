// Heron's Formula Calculator
document.getElementById("btn").addEventListener("click", calc);

let output = document.getElementById("output");

function calc() {
  // INPUT
  let a = +document.getElementById("sidea-in").value;
  let b = +document.getElementById("sideb-in").value;
  let c = +document.getElementById("sidec-in").value;

  // PROCESS
  let s = (a + b + c) / 2;
  console.log(s);
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);

  // OUTPUT
  output.innerHTML = area;
}
