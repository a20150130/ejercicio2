alert("Bienvenido a la pagina de Javascrip, completa el cuestionario");
var nom = prompt("Ingresa tu nombre y apellido");
var res1 = prompt("¿Como se llama el primer dia de la primavera?\nA:Primer dia de la Primavera\nB:Equinoccio de Primaver\nC:Equinoccio de Invierno")
if(res1=="B"){ res1 = 25;}else{res1=0;}

var res2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA:6 meses de luz diurna ininterrumpida\nB:6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad")
if(res2=="A"){ res2 = 25;}else{res2=0;}

var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB:Junio○\nC:Marzo")
if(res3=="C"){ res3 = 25;}else{res3=0;}

var res4 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA:La Navidad\nB:El Año Nuevo\nC:Fiestas Patrias de China")
if(res4=="B"){ res4 = 25;}else{res4=0;}


var total = res1 + res2 + res3 + res4
document.write("<h1>Cuestionarios</h1>");
document.write("<h2>Resultados</h2>");
document.write("hola " + nom + " tus resultados son:<br>");
document.write("Porcentajes en aciertos es: " + total + "% <br>");
if(total<25){document.write("Lo puedes hacer mejor");} else{document.write("Felicidades sabes mucho de la primavera")}

