var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function() {

        if (xhr.status == "200") {
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(paciente => {
                adicionarNaTabela(paciente);
            })
        } else {
            alert("Erro ao buscar pacientes. " + xhr.responseText);
        }
        
    })
});