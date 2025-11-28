document.getElementById("btnBuscar").addEventListener("click", function () {
    const filme = document.getElementById("inputFilme").value;

    if (filme.trim() === "") {
        alert("Digite o nome de um filme!");
        return;
    }

    // Redireciona para a página de resultados
    window.location.href = "mostrar_filme_input.html?filme=" + encodeURIComponent(filme);
});
