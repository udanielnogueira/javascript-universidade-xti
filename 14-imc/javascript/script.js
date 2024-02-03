function calcularIMC() {
	var imc;
	var altura;
	var formulario;
	var kilos, metros, centimetros;
	
	// Resgate do formulário
	formulario = document.getElementById("formulario");

	// Resgate de valores 
	// O + converta string para integer
	kilos = +formulario.kilos.value;
	metros = +formulario.metros.value;
	centimetros = +formulario.centimetros.value;

	altura = metros + centimetros / 100 ;
	imc = ( kilos ) / ( altura * altura );

	// Colocar 
	formulario.imc.value = imc.toFixed(2);
}