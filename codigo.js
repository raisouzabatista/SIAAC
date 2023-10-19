function CalcularAreaPerdida() {
  var x = document.getElementById("Raio").value;

  var raio = parseFloat(x);
  var resultado = document.getElementById("area");
  var resultado2 = document.getElementById("area3");


  if (raio !== null && !isNaN(raio)) {
      var d = 2 * raio;
      var area = (d * d) * 0.214;

      var areaPivo = 3.14 *(raio *raio);

      var numero = area.toFixed(2);
      resultado.innerText = "A área não utilizada é: " + numero + " m²";
      resultado2.innerText = "A área total desse pivô é: "+ areaPivo +"m²" 
  } else {
      resultado2.innerText = "Insira um valor válido para o raio."; 
      resultado.innerText = "";

  }
}

var somaTotal = 0;

function CalcularArea(){
    var xa = parseFloat(document.getElementById('Xm').value);
    var ya = parseFloat(document.getElementById('Ym').value);
    var xb = parseFloat(document.getElementById('Xn').value);
    var yb = parseFloat(document.getElementById('Yn').value);
    var xc = parseFloat(document.getElementById('Xp').value);
    var yc = parseFloat(document.getElementById('Yp').value);

    var area1 = calcularAreaTriangulo(xa, ya, xb, yb, xc, yc); 

    if(area1 == 0){
        alert("Não foi possível verificar");
    } else{
        somaTotal += area1; // Adiciona a área ao total
        document.getElementById("area2").innerText = "A área formada pelos pontos até agora dão: "+somaTotal+ " u. A";
    }
}

function AdicionarMais(){
    CalcularArea(); // Chama a função CalcularArea para atualizar a somaTotal
}

function calcularAreaTriangulo(x1, y1, x2, y2, x3, y3) {
    return Math.abs((1 / 2) * ((x1 * y2 + x2 * y3 + x3 * y1) - (y1 * x2 + y2 * x3 + y3 * x1)));
}

function Limpar2() {
    somaTotal = 0; // Reseta a somaTotal para 0
    document.getElementById("area2").innerText = " ";
}

function Limpar1() {
  var x = document.getElementById("area").innerText = " ";

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