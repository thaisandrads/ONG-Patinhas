# ONG Patinhas

Site publicado: https://thaisandrads.github.io/ONG-Patinhas/

Site institucional de uma ONG de resgate animal, com página inicial, formulário de cadastro de doadores e página de projetos.

## Tecnologias

- HTML5, CSS3 e JavaScript (sem frameworks ou bibliotecas)
- Git e GitHub para versionamento

## Funcionalidades

- SPA com roteamento por hash (#inicio, #cadastro, #projetos)
- Menu responsivo
- Formulário com validação e mensagens de erro
- Dados do cadastro salvos no localStorage

## Estrutura do projeto

   ONG-Patinhas/
    ├── index.html
    ├── cadastro.html
    ├── projetos.html
    ├── style.css
    ├── style.min.css
    ├── js/
    │   ├── main.js
    │   ├── main.min.js
    │   ├── form.js
    │   └── form.min.js
    └── imagens/

Os arquivos `.min` são as versões otimizadas usadas em produção. Os
originais são mantidos para edição.

## Como executar

1. Clone o repositório ou baixe os arquivos.
2. Abra a pasta no VS Code.
3. Abra o `index.html` com a extensão Live Server.

## Acessibilidade

O projeto foi revisado com base na WCAG 2.1 (nível AA):
navegação por teclado, link para pular ao conteúdo, foco visível,
atributos ARIA no menu e no formulário, título atualizado a cada
página e contraste de cores verificado. Pontuação no Lighthouse
(acessibilidade): 100.

## Otimização

Imagens com carregamento lazy e CSS/JS minificados.

## Versionamento

- Branch `main`: versão estável, publicada no GitHub Pages.
- Branches por tarefa (`feature/acessibilidade`, `feature/otimizacao`, `docs/...`), incorporadas à `main` depois de testadas.
- Mensagens de commit no padrão `feat:`, `fix:`, `perf:` e `docs:`.
- Versionamento semântico (MAJOR.MINOR.PATCH) com tags de `v0.1.0` a `v1.0.0`.
- Histórico das versões no arquivo `CHANGELOG.md`.

## Autora

Thaís