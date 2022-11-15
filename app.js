

// Tengo que evitar que al apretar algún botón la <forma> me lleve a otra página. 
const triangleForm = document.querySelector('#triangleForm');
triangleForm.addEventListener('submit', function (e) {
    e.preventDefault();
})

const circleForm = document.querySelector('#circleForm');
circleForm.addEventListener('submit', function (e) {
    e.preventDefault();
})

// AREA Y PERÍMETRO DEL TRIANGULO

// Calculo el area del triangulo
var setAreaT = document.getElementById("areaT"); // selecciono el campo donde imprimir el area
document.getElementById('areaTriangulo').onclick = printAreaT; // selecciono el botón para calcular el area
function printAreaT(clicked) {
    const ladoA = parseFloat(document.querySelector('#ladoA').value); // selecciono los valores de los campos y los paso a Float (originalmente son textos - string)
    const ladoB = parseFloat(document.querySelector('#ladoB').value);
    const ladoC = parseFloat(document.querySelector('#ladoC').value);
    let area = areaHeron(ladoA, ladoB, ladoC);
    console.log('El area es: ' + area);
    setAreaT.setAttribute('value', area); // envío el valor del area al campo asignado
}

// Calculo el perimetro del triangulo
var setPerimetroT = document.getElementById("perimT"); //selecciono el campo donde imprimir el perímetro
document.getElementById('perimTriangulo').onclick = printPerimT; // selecciono el botón para calcular el perímetro
function printPerimT(clicked) {
    const ladoA = parseInt(document.querySelector('#ladoA').value);  // selecciono los valores de los campos y los paso a Int (originalmente son textos - string)
    const ladoB = parseInt(document.querySelector('#ladoB').value);
    const ladoC = parseInt(document.querySelector('#ladoC').value);
    let perimetro = ladoA + ladoB + ladoC;
    console.log('El perimetro es: ' + perimetro);
    setPerimetroT.setAttribute('value', perimetro); // envío el valor del perimetro al campo asignado
}

// Es un triangulo?
document.getElementById('esTriangulo').onclick = esTrian; // selecciono el botón para verificar si es un triangulo
function esTrian(clicked){
    const ladoA = parseInt(document.querySelector('#ladoA').value);  // selecciono los valores de los campos y los paso a Int (originalmente son textos - string)
    const ladoB = parseInt(document.querySelector('#ladoB').value);
    const ladoC = parseInt(document.querySelector('#ladoC').value);
    if (esTriangulo(ladoA , ladoB , ladoC)){
        alert('Los lados ingresados forman un triangulo!')
    }
    else{
        alert('Los lados NO forman un triangulo!')
    }
}


// función para calcular el area de un triangulo dados los valores de los lados (Formula de Heron)
function areaHeron(ladoA, ladoB, ladoC) {
    semiPerimetro = (ladoA + ladoB + ladoC) / 2;
    area = Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoC));
    return area;
}

// función para determinar si los valores de los lados conforman un triangulo
function esTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a){
            return 0;}
    else{
            return 1;}
}


// AREA Y PERÍMETRO DE LA CIRCUNFERENCIA

// Calculo el area de la circunferencia:  
var setAreaC = document.getElementById("areaC"); // selecciono el campo donde imprimir el area
document.getElementById('areaCircunf').onclick = printAreaC; // selecciono el botón para calcular el area
function printAreaC(clicked) {
    const radioC = parseFloat(document.querySelector('#radio').value);
    let area = radioC * radioC * Math.PI;
    console.log('El area de la circunferencia es: ' + area);
    setAreaC.setAttribute('value', area); // envío el valor del area al campo asignado
}

var setPerimC = document.getElementById("perimC"); // selecciono el campo donde imprimir el area
document.getElementById('perimCircunf').onclick = printPerimC; // selecciono el botón para calcular el area
function printPerimC(clicked) {
    const radioC = parseFloat(document.querySelector('#radio').value);
    let perimetro = radioC * 2 * Math.PI;
    console.log('El perimetro de la circunferencia es: ' + perimetro);
    setPerimC.setAttribute('value', perimetro); // envío el valor del perimetro al campo asignado
}



