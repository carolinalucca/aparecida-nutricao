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
        paciente.classList.add("paciente-invalido");
    } else if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    } else {
        var imc = calculaImc(peso, altura); 
        tdImc.textContent = imc;
    }
});

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}