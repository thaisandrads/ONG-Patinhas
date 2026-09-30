function inicializarFormulario() {

    const formCadastro = document.querySelector("#formCadastro");

    if (!formCadastro) {
        return;
    }

    const nome = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");
    const email = document.querySelector("#email");

    const mensagem = document.querySelector("#mensagem");

    const erroNome = document.querySelector("#erroNome");
    const erroCpf = document.querySelector("#erroCpf");
    const erroTelefone = document.querySelector("#erroTelefone");
    const erroCep = document.querySelector("#erroCep");
    const erroEmail = document.querySelector("#erroEmail");

const salvo = localStorage.getItem("cadastroPatinhas");

if (salvo) {
    try {
        const dados = JSON.parse(salvo);
        nome.value = dados.nome;
        email.value = dados.email;
    } catch (erro) {
        localStorage.removeItem("cadastroPatinhas");
    }
}


    formCadastro.addEventListener("submit", (evento) => {

        evento.preventDefault();


        if (!nome.validity.valid) {
            erroNome.textContent = "Digite seu nome completo.";
        } else {
            erroNome.textContent = "";
            nome.removeAttribute("aria-invalid");
        }


        if (!cpf.validity.valid) {
            erroCpf.textContent =
                "Digite um CPF válido. Exemplo: 123.456.789-00";
            cpf.setAttribute("aria-invalid", "true");
        } else {
            erroCpf.textContent = "";
            cpf.removeAttribute("aria-invalid");
        }


        if (!telefone.validity.valid) {
            erroTelefone.textContent =
                "Digite um telefone válido. Exemplo: (21)99999-9999";
        } else {
            erroTelefone.textContent = "";
            telefone.removeAttribute("aria-invalid");
        }


        if (!cep.validity.valid) {
            erroCep.textContent =
                "Digite um CEP válido. Exemplo: 20000-000";
            cep.setAttribute("aria-invalid", "true");
        } else {
            erroCep.textContent = "";
            cep.removeAttribute("aria-invalid");
        }


        if (!email.validity.valid) {
            erroEmail.textContent = "Digite um e-mail válido.";
            email.setAttribute("aria-invalid", "true");
        } else {
            erroEmail.textContent = "";
            email.removeAttribute("aria-invalid");
        }


        if (formCadastro.checkValidity()) {

            const dadosCadastro = {
                nome: nome.value,
                cpf: cpf.value,
                telefone: telefone.value,
                cep: cep.value,
                email: email.value
            };


            localStorage.setItem(
                "cadastroPatinhas",
                JSON.stringify(dadosCadastro)
            );


            console.log(dadosCadastro);


            mensagem.textContent =
                "✅ Cadastro realizado com sucesso!";

            mensagem.classList.add("sucesso");
            mensagem.classList.remove("erro");


            formCadastro.reset();


        } else {

            mensagem.textContent =
                "❌ Verifique os dados informados.";

            mensagem.classList.add("erro");
            mensagem.classList.remove("sucesso");
        }

    });
}