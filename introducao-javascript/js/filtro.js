var campoFiltro = document.querySelector(".filtro");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(paciente => {
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var conteudoFiltro = new RegExp(this.value, "i");
        if (!nome.match(conteudoFiltro)) {
            paciente.classList.add("invisivel"); 
        } else {
            paciente.classList.remove("invisivel");
        }
    })
})