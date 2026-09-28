export function configurarCadastro() {
    console.log("CONFIGURAR CADASTRO FOI CHAMADO!");
    const form = document.querySelector("#cadastro-form");
    if (!form) {
        return;
    }
    form.noValidated = true;
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("SUBMIT FOI ACIONADO!");
        if (!form.checkValidity()) {
            console.log("FORMULÁRIO INVÁLIDO!");
        Swal.fire({
            title: "Atenção!",
            text: "Preencha todos os campos obrigatórios.",
            icon: "warning"
        });
        return;
    }
        const nome = document.querySelector("#nome");
        const cpf = document.querySelector("#cpf");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        const cep = document.querySelector("#cep");
        let formularioValido = true;
        // Validação do nome
        if (nome.value.trim() === "") {
            nome.classList.add("erro");
            nome.classList.remove("sucesso");
            formularioValido = false;
        } else {
            nome.classList.add("sucesso");
            nome.classList.remove("erro");
        }
        // Validação do CPF
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf.value)) {
            cpf.classList.add("erro");
            cpf.classList.remove("sucesso");
            formularioValido = false;
        } else {
            cpf.classList.add("sucesso");
            cpf.classList.remove("erro");
        }
        // Validação do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.classList.add("erro");
            email.classList.remove("sucesso");
            formularioValido = false;
        } else {
            email.classList.add("sucesso");
            email.classList.remove("erro");
        }
        // Validação do telefone
        const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        if (!telefoneRegex.test(telefone.value)) {
            telefone.classList.add("erro");
            telefone.classList.remove("sucesso");
            formularioValido = false;
        } else {
            telefone.classList.add("sucesso");
            telefone.classList.remove("erro");
        }
        // Validação do CEP
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(cep.value)) {
            cep.classList.add("erro");
            cep.classList.remove("sucesso");
            formularioValido = false;
        } else {
            cep.classList.add("sucesso");
            cep.classList.remove("erro");
        }
        if (formularioValido) {
            const dadosCadastro = {
                nome: nome.value,
                cpf: cpf.value,
                email: email.value,
                telefone: telefone.value,
                cep: cep.value
            };
            localStorage.setItem(
                "cadastro",
                JSON.stringify(dadosCadastro)
            );
            Swal.fire({
                title: "Cadastro realizado!",
                text: "Seu cadastro foi realizado com sucesso.",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Atenção!",
                text: "Verifique os campos destacados.",
                icon: "warning"
            });
            return;
        }
    });
    const cadastroSalvo = localStorage.getItem("cadastro");
    if (cadastroSalvo) {
        const dadosCadastro = JSON.parse(cadastroSalvo);
        console.log("Cadastro recuperado:", dadosCadastro);
    }
}