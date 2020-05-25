var titulo = document.querySelector(".titulo"); 	
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach (paciente => {
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido!";
    } else if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura inválida!";
    } else {
        var imc = peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
});
