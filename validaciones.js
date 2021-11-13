function resultadoSumar(){
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;

    var txtResultado= valor = parseInt(num1) + parseInt(num2);
    document.getElementById('R').value = txtResultado;
} 

function resultadoRestar(){
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;

    var txtResultado= valor = parseInt(num1) - parseInt(num2);
    document.getElementById('R').value = txtResultado;
} 
function resultadoMultiplicar(){
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;

    var txtResultado= valor = parseInt(num1) * parseInt(num2);
    document.getElementById('R').value = txtResultado;
} 
function resultadoDividir(){
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;

    var txtResultado= valor = parseInt(num1) / parseInt(num2);
    document.getElementById('R').value = txtResultado;
} 