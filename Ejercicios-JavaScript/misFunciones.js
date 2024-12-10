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