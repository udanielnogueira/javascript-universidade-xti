//Cálculo do IMC

function calcularIMC()
{
	var formulario;
	var kilos, metros, centimetros;
	var altura;

	var imc;

	//Resgate do Formulário
	formulario = document.getElementById("formulario");

	//Resgate de valores - "+" faz a string virar integer
	kilos = +formulario.kilos.value;
	metros = +formulario.metros.value;
	centimetros = +formulario.centimetros.value;

	altura = metros + centimetros / 100 ;
	imc = ( kilos ) / ( altura * altura );

	//Colocar 
	formulario.imc.value = imc.toFixed(2);
}﻿