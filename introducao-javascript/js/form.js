var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);

    var validatePaciente = validaPacienteForm(paciente);

    if (validatePaciente.isValid) {
        
        adicionarNaTabela(paciente);
        document.querySelector(".mensagens-erro").innerHTML = "";
        form.reset();
    } else {
        exibeMensagensDeErro(validatePaciente.errors);
    }

});

function adicionarNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

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
        errors: []
    }

    var peso = validaPeso(paciente.peso);
    var altura = validaAltura(paciente.altura);

    if (paciente.nome == "" || paciente.peso == "" || paciente.altura == "" || paciente.gordura == "") {
        data.errors[0] = "Todos os campos são obrigatórios!"
    } else {
        if (peso.isValid && altura.isValid) {
            data.isValid = true;
        } else {
            data.errors[0] = peso.error;
            data.errors[1] = altura.error;
        }
    }
    return data;
}

function exibeMensagensDeErro(errors) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    errors.forEach(error => {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

}