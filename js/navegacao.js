export function configurarNavegacao(aoNavegar) {
    const conteudo = document.querySelector("main");
    const paginaInicial = conteudo.innerHTML;
    const paginas = {};

    document.querySelectorAll("nav a").forEach(link => {
        const destino = link.getAttribute("href");
        const elemento = document.querySelector(destino);

        if (elemento) {
            paginas[destino] = elemento.outerHTML;
        }
    });

    function navegarPara(secao) {
            if (secao === "#inicio") {
                conteudo.innerHTML = paginaInicial;
            if (aoNavegar) {
                aoNavegar();
            }
            return;
        }
        if (paginas[secao]) {
            conteudo.innerHTML = paginas[secao];
            if (aoNavegar) {
                aoNavegar();
            }
        }
    }
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const destino = this.getAttribute("href");
            navegarPara(destino);
        });
    });
}