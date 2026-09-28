import { projetos } from "./projetos.js";
import { configurarNavegacao } from "./navegacao.js";
import { configurarCadastro } from "./cadastro.js";
const listaProjetos = document.querySelector("#lista-projetos");
if (listaProjetos) {
    listaProjetos.innerHTML = projetos.map(projeto => `
    <li>
        <strong>${projeto.titulo}:</strong>
        ${projeto.descricao}
    </li>
    `).join("");
}
console.log("JavaScript conectado com sucesso!");
function esconderFormularioDoacao() {
    const form = document.querySelector("#form-doacao");
    if (form) {
        form.style.display = "none";
    }
}
configurarNavegacao(() => {
console.log("CALLBACK DE CADASTRO FOI CHAMADO!");
configurarCadastro();
esconderFormularioDoacao();
});
document.addEventListener("click", function (event) {
    const botao = event.target.closest("#botao-doacao");
    if (!botao) {
        return;
    }
    const formDoacao = document.querySelector("#form-doacao");
    if (formDoacao) {
        formDoacao.style.display = "block";
    }
});
document.addEventListener("submit", function (event) {
    const form = event.target.closest("#form-doacao");
    if (!form) {
        return;
    }
    event.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Doação registrada com sucesso.",
        confirmButtonText: "Fechar"
    });
    form.reset();
});