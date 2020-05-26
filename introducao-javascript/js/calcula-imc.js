var titulo = document.querySelector(".titulo"); 	
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach (paciente => {
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValidate = validaPeso(peso);
    var alturaValidate = validaAltura(altura);

    if (!pesoValidate.isValid) {
        tdImc.textContent = pesoValidate.error;
        paciente.classList.add("paciente-invalido");

    } else if (!alturaValidate.isValid) {
        tdImc.textContent = alturaValidate.error;
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

function validaPeso(peso) {

    var data = {
        isValid: false,
        error: ""
    }

    if (peso > 0 && peso < 1000) {
        data.isValid = true;
    } else {
        data.error = "Peso inválido!";
    }

    return data;    
}

function validaAltura(altura) {

    var data = {
        isValid: false,
        error: ""
    }

    if (altura > 0 && altura < 3.00) {
        data.isValid = true;
    } else {
        data.error = "Altura inválida!";
    }
    
    return data;
}