const menuToggle = document.querySelector(".menu-toggle"); /* Crie uma constante chamada menuToggle e guarde nela o elemento HTML que possui a classe menu-toggle */
/* const = cria uma constante, vai guardar alguma coisa que encontrarmos na página */
/* document = documento html que tá aberto no navegador */
/* .querySelector = método usado para encontrar um elemento html */
/* # = procura por um id e . procura por uma classe */

const menuLinks = document.querySelector(".menu-links");
const app = document.querySelector("#app");

if (menuToggle && menuLinks) {

    menuToggle.addEventListener("click", () => {
        /* "Quando acontecer um click no menuToggle, execute o código que está aqui dentro." */

        menuLinks.classList.toggle("aberto");
        /* toggle = alterna. se a classe existe, remove, se não existe, adiciona. */

        if (menuLinks.classList.contains("aberto")) {
            menuToggle.setAttribute("aria-label", "Fechar menu");
            /* Se o menu estiver aberto → coloque "Fechar menu" */

        } else {
            menuToggle.setAttribute("aria-label", "Abrir menu");
            /* Senão → coloque "Abrir menu" */
        }
        menuToggle.setAttribute(
             "aria-expanded",
         menuLinks.classList.contains("aberto")
);
    });
}

/* () => { } é uma arrow function */

/* DOM + evento + classe CSS foram usados desde o começo */

/* =========================
   TEMPLATES DA APLICAÇÃO
========================= */

const templates = {

    inicio: `
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                Nossa missão é <em>resgatar animais abandonados e vítimas
                de maus-tratos</em>, oferecendo cuidados até encontrarem
                um lar amoroso e responsável.
            </p>
        </section>

        <section>
            <h2>Como ser um colaborador da Patinhas</h2>

            <p>Para ser um doador, você pode:</p>

            <ul>
                <li>
                    Ser padrinho/madrinha de um dos nossos animais,
                    colaborando mensalmente com uma quantia.
                </li>

                <li>
                    Fazer doações de ração, medicamentos ou materiais
                    de higiene diretamente para a ONG.
                </li>

                <li>
                    Fazer doações de qualquer valor através do nosso
                    Pix: <strong>ajudepatinhas@org.com</strong>
                </li>
            </ul>
        </section>
    `,


    cadastro: `
        <form id="formCadastro" novalidate>

            <fieldset>

                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>

                <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    autocomplete="name"
                    aria-describedby="erroNome"
                    placeholder=" "
                >
                <p id="erroNome" class="erro-campo" aria-live="polite"></p>

                <label for="cpf">CPF:</label>

                <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    required
                    pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                    aria-describedby="erroCpf"
                    placeholder=" "
                >

                <p id="erroCpf" class="erro-campo" aria-live="polite"></p> 


                <label for="telefone">Telefone:</label>

                <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    required
                    pattern="\\(\\d{2}\\)\\d{5}-\\d{4}"
                    autocomplete="tel"
                    aria-describedby="erroTelefone"
                    placeholder=" "
                >

                <p id="erroTelefone" class="erro-campo" aria-live="polite"></p>


                <label for="cep">CEP:</label>

                <input
                    type="text"
                    name="cep"
                    id="cep"
                    required
                    pattern="\\d{5}-\\d{3}"
                    autocomplete="postal-code"
                    aria-describedby="erroCep" 
                    placeholder=" "
                >

                <p id="erroCep" class="erro-campo" aria-live="polite"></p>


                <label for="email">E-mail:</label>

                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autocomplete="email"
                    aria-describedby="erroEmail"
                    placeholder=" "
                >

                <p id="erroEmail" class="erro-campo" aria-live="polite"></p>

            </fieldset>

            <input type="submit" value="Enviar">

            <p id="mensagem" role="status"></p>

        </form>
    `,


   projetos: `
    <section>
        <h2>Projetos da ONG</h2>

        <div class="projetos-grid">

            <article>
                <img src="imagens/cachorros-edit.png" alt="Cães resgatados pela ONG">

                <h2>Resgate Animal</h2>

                <p>
                    Resgatamos animais abandonados ou vítimas de
                    maus-tratos, oferecendo atendimento e cuidados
                    necessários.
                </p>
            </article>


            <article>
                <img src="imagens/gatos-edit.png" alt="Gatos resgatados pela ONG">

                <h2>Lar Temporário</h2>

                <p>
                    Oferecemos acolhimento temporário aos animais
                    enquanto buscamos famílias responsáveis para adoção.
                </p>
            </article>


            <article>
                <img src="imagens/adocao.jpeg" alt="Mulher adotando cão na campanha de adoção">
                <h2>Campanha de Adoção</h2>

                <p>
                    Promovemos campanhas para encontrar lares
                    amorosos e responsáveis para nossos animais.
                </p>
            </article>

        </div>
    </section>
`,
};


/* =========================
   NAVEGAÇÃO SPA
========================= */

const titulos = {
    inicio: "Início | ONG Patinhas",
    cadastro: "Cadastro | ONG Patinhas",
    projetos: "Projetos | ONG Patinhas",
};

function carregarPagina() {

    let rota = window.location.hash.replace("#", "");

    if (rota === "") {
        rota = "inicio";
    }

    if (!templates[rota]) {
        rota = "inicio";
    }

    app.innerHTML = templates[rota];

    document.title = titulos[rota];

    if (rota === "cadastro") {
        inicializarFormulario();
    }

    if (menuLinks) {
        menuLinks.classList.remove("aberto");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
    menuToggle.setAttribute("aria-expanded", "false");
}


/* =========================
   NAVEGAÇÃO
========================= */

window.addEventListener("hashchange", () => {
    carregarPagina();
    app.focus();
});

carregarPagina();