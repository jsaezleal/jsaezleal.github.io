//2016 07 29 esto es un experimento para aprender p5
// se ocupa "camelCase" porque se escribe la primera palabra con minus y la siguiente en Mayúscula
// las variables de declaran diciendo var= XXXX y luego se DEFINEN poniendo XXXX = parámetro
// las variabes tb se declaran así 
//function nombreFuncion(){ }

var caca;
caca = 1
function setup() {
  //se pueden usar estas cosas para ayudar a la memoria como lo siguiente
  //createCanvas (dimHor, dimVer)
  createCanvas(400, 300);
  background(31, 94, 0);
}

//function draw () se ejecuta después de setup. 60 veces por segundo
function draw() {
    ellipse(mouseX, mouseY, caca, caca);
  caca = caca + 2
  //definamos el pincel
  //tamaño borde
}

function estilo1 () {
  strokeWeight(2);
  //color del borde
  stroke (20,35,200);
  //color relleno
  fill(255,222,0);
  //ellipse (posX, posY, width, height) 
  //dibuja una elipse
  background(31, 94, 0);
}

estilo1();

ellipse(400, 150, caca, caca)