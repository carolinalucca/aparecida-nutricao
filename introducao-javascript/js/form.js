var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);

    var validatePaciente = validaPacienteForm(paciente);

    if (validatePaciente.isValid) {
        var pacienteTr = montaTr(paciente);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

        form.reset();
    } else {
        alert(validatePaciente.error);
    }

});

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(valor, classe) {
    var td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);

    return td;
}

function validaPacienteForm(paciente) {

    var data = {
        isValid: false,
        error: ""
    }

    var peso = validaPeso(paciente.peso);
    var altura = validaAltura(paciente.altura);
    
    if (peso.isValid && altura.isValid) {
        data.isValid = true;
    } else if (!peso.isValid) {
        data.error = peso.error;
    } else {
        data.error = altura.error;
    }
    return data;
}