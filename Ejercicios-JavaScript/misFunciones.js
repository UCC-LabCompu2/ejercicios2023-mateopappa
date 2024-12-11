/**
 * Convierte unidades entre metros pies, pulgadas
 * @method convertirUnidades
 *  @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */
convertirUnidades = (id,valor) =>
{
    let met,pul,pie,yar;

    if (isNaN ( valor))
    {
        alert("El valor ingresado es incorrecto")
        yar=" ";
        pie=" ";
        met=" ";
        pul=" ";
    } else if(id==="metro"){
        met=valor
        pul= valor*39.3701
        pie= valor*3.28084
        yar= valor*1.09361
    }  else if (id==="pulgada"){
        pul=pul
        met= valor*0.0254
        pie= valor*0.0833333
        yar= valor*0.0277778
    } else if (id==="yarda") {
        yar= valor
        met = valor * 0.9144
        pie = valor * 3
        pul = valor * 36.0000288
    } else if (id==="pie") {

        /* aca va la parte de pie etc */
    }
    document.lasUnidades.unid_pie.value = pie
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100
    document.lasUnidades.unid_yarda.value = yar.toFixed(2)
    document.lasUnidades.unid_pulgada.value = pul
}

/**
 * Convierte grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id- Id del elemento input del html
 */


 convertirGR= (id) => {
     let gr, rad;
    if (id==="grados") {

         gr = document.getElementById("grados").value;
         if (isNaN(gr)){ gr= " "}
        document.getElementById("radianes").value = (gr * Math.PI) / 180;
    }if (id==="radianes"){
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)){ rad= " ";
        }

    document.getElementById("grados").value= (gr*180)/Math.PI

    }


}

/**
 * muestra u oculta el div segun el radiobutton
 * @param {string} id - id del input del html
 * @method mostrar_ocultar
 */

let mostrar_ocultar = (id) => {
     if (id==="mostrarDiv") {
         document.getElementsByName("unDiv")[0].style.display = 'block';
     }
         else {
             document.getElementsByName("unDiv")[0].style.display="none";

         }



}

/** genera url para pasar a una segunda pagina, concatenando la distancia y la unidad ingresada
 * @method generarurl
 *
 *
 */

let generarurl = () => {
    const dist = document.getElementById("distancia").value
    const uni = document.getElementsByName("unidades") [0].value

    const urlCompl = `segundaWeb.html#${dist}#${uni}`
    window.open(urlCompl);


}

let cargarvalor = () => {
     let urlCompl = window.location.href
    console.log(urlCompl)
    urlCompl = urlCompl.split("#");
     const distancia = urlCompl[1];
     const unidad = urlCompl[2]
    document.getElementById("dist").value = `${distancia} ${unidad}`
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value
    const uni = document.getElementsByName("unidades") [0].value
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open()


}
let dibujarcirculocuadrado = () => {
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")
    let xmax = canvas.width
    let ymax = canvas.height

    ctx.fillStyle = "#333";
    ctx.arc(xmax/2,ymax/2 ,100 , 0 , 2 * Math.PI)
    ctx.stroke();


}


const mostrarDiv = (divId) => {
    const divSimular = document.getElementById("div-simular");
    const divCalcular = document.getElementById("div-calcular");
    const divRange = document.getElementById("input-constante");
    const divlabelrange = document.getElementById("input-cons");
    const spanunidadcons = document.getElementById("unidades-cons")

    if (divId === "div-simular") {
        divSimular.style.display = "block";
        divCalcular.style.display = "none";
        divRange.style.display = "inline-block";
        divlabelrange.style.display="inline-block"
        spanunidadcons.style.display="inline-block";
    } else if (divId === "div-calcular") {
        divSimular.style.display = "none";
        divCalcular.style.display = "block";
        divRange.style.display = "none";
        divlabelrange.style.display="none";
        spanunidadcons.style.display="none";

    }
};

function dibujarimg(posx,posy){
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");


    console.log(posx,posy);

    var img=new Image();
    img.src="images/auto.png";

    img.onload=function (){
        ctx.drawImage(img,posx,posy);
    }
}

x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100)
    }
    if(x > canvas.width){
        x=0;
    }
    x+=dx;
}
function dibujarcuadriculado(){
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    var alturamax=canvas.height;
    var anchomax=canvas.width;

    ctx.beginPath();
    for(var i=0;i<alturamax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();


    ctx.beginPath();
    for(var i=0;i<anchomax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(0,alturamax/2);
    ctx.lineTo(anchomax, alturamax/2);
    ctx.strokeStyle = "#ff010d";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchomax/2,0);
    ctx.lineTo(anchomax/2, alturamax);
    ctx.strokeStyle = "#ff010d";
    ctx.stroke();
    ctx.closePath();

}

function calcularsuma(){
    var num1,num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML=num1+num2;
}

function calcularresta(){
    var num1,num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML=num1-num2;
}

function calcularproducto() {
    var num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1*num2;
}

function calculardiv() {
    var num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1/num2;
}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasparadibujo");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5,5);
        ctx.fill;
    }
}
function limpiarCanvas(){
    var canvas = document.getElementById("canvasparadibujo");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}