function CalcularAreaPerdida() {
  var x = document.getElementById("Raio").value;

  var raio = parseFloat(x);

  var d = 2 * raio;
  var area = (d * d) * 0.214;

  var numero = area.toFixed(2);
  var area = document.getElementById("area").innerText = "A área não utilizada é: " + numero + " m²"

}


function CalcularPonto() {
  // Pegar as coordenadas dos pontos do HTML e convertê-las para float
  var xa = parseFloat(document.getElementById('Xm').value);
  var ya = parseFloat(document.getElementById('Ym').value);
  var xb = parseFloat(document.getElementById('Xn').value);
  var yb = parseFloat(document.getElementById('Yn').value);
  var xc = parseFloat(document.getElementById('Xp').value);
  var yc = parseFloat(document.getElementById('Yp').value);
  var xd = parseFloat(document.getElementById('Xd').value);
  var yd = parseFloat(document.getElementById('Yd').value);
  var xe = parseFloat(document.getElementById('Xe').value);
  var ye = parseFloat(document.getElementById('Ye').value);
  var xf = parseFloat(document.getElementById('Xf').value);
  var yf = parseFloat(document.getElementById('Yf').value);
  var xg = parseFloat(document.getElementById('Xg').value);
  var yg = parseFloat(document.getElementById('Yg').value);
  var xh = parseFloat(document.getElementById('Xh').value);
  var yh = parseFloat(document.getElementById('Yh').value);
  var xi = parseFloat(document.getElementById('Xi').value);
  var yi = parseFloat(document.getElementById('Yi').value);

  var area1 = calcularAreaTriangulo(xa, ya, xb, yb, xi, yi); // ABI
  var area2 = calcularAreaTriangulo(xb, yb, xi, yi, xh, yh); // BIH
  var area3 = calcularAreaTriangulo(xb, yb, xh, yh, xc, yc); // BHC
  var area4 = calcularAreaTriangulo(xc, yc, xh, yh, xd, yd); // CHD
  var area5 = calcularAreaTriangulo(xd, yd, xh, yh, xe, ye); // DHE
  var area6 = calcularAreaTriangulo(xe, ye, xh, yh, xf, yf); // EHF
  var area7 = calcularAreaTriangulo(xf, yf, xh, yh, xg, yg); // FHG

  var resultado = area1 + area2 + area3 + area4 + area5 + area6 + area7;

  var x = document.getElementById("area2").innerText = "A área dos pontos deu:  " + resultado;


}

function calcularAreaTriangulo(x1, y1, x2, y2, x3, y3) {
  return Math.abs((1 / 2) * ((x1 * y2 + x2 * y3 + x3 * y1) - (y1 * x2 + y2 * x3 + y3 * x1)));
}
function Limpar1() {
  var x = document.getElementById("area").innerText = " ";

}
function Limpar2() {
  var x = document.getElementById("area2").innerText = " ";

}
function BotarValor(){
  var xa = (document.getElementById('Xm').value = "50");
  var ya = (document.getElementById('Ym').value = "180");
  var xb = (document.getElementById('Xn').value = "52");
  var yb = (document.getElementById('Yn').value = "53");
  var xc = (document.getElementById('Xp').value = "62");
  var yc = (document.getElementById('Yp').value = "40");
  var xd = (document.getElementById('Xd').value = "110");
  var yd = (document.getElementById('Yd').value = "17");
  var xe = (document.getElementById('Xe').value = "155");
  var ye = (document.getElementById('Ye').value = "23");
  var xf = (document.getElementById('Xf').value = "223");
  var yf = (document.getElementById('Yf').value = "53");
  var xg = (document.getElementById('Xg').value = "227");
  var yg = (document.getElementById('Yg').value = "58");
  var xh = (document.getElementById('Xh').value = "220");
  var yh = (document.getElementById('Yh').value = "170");
  var xi = (document.getElementById('Xi').value = "193");
  var yi = (document.getElementById('Yi').value = "187");
}