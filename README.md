# Desafio React – Muralis

**Autor:** Iago da Silva Lima

## Descrição do Projeto

O projeto consiste em um formulário de cadastro onde o usuário insere os dados solicitados, como nome, curso, estado e cidade. Este documento fornece uma visão geral do projeto e explica os métodos e ferramentas utilizados em seu desenvolvimento.

## Ferramentas Utilizadas

- **Visual Studio Code:** Editor de código-fonte utilizado durante o desenvolvimento.
- **ViteJS:** Ferramenta de instalação da Biblioteca React, escolhida com o modelo TypeScript.

## Estrutura do Projeto

O projeto é composto por 3 páginas, cada uma desempenhando uma função específica, e faz uso do hook `useNavigate` do `react-router-dom` para permitir a transição entre essas páginas.

### Tela 1 - Página de Boas-Vindas

![Tela 1](https://github.com/Iagoolima/Desafio_Muralis/assets/110433346/11886d2d-e3bf-4a55-ac75-f9782b114703)

**Local:** `src/pages/welcome`

1. Ao clicar no botão "Seguir", é chamada uma arrow function que encaminha o usuário para a próxima página localizada no caminho `https://localhost:porta/form`.
2. Foi instalada a biblioteca `react-icons` para a utilização do ícone de "seta" no botão.
3. O texto com o botão está em um componente separado.

### Tela 2 - Formulário de Cadastro

![Tela 2](https://github.com/Iagoolima/Desafio_Muralis/assets/110433346/0aa2bceb-e298-4d4a-892c-e37aa2d46859)

**Local:** `src/pages/app`

1. Neste formulário, utilizei o Hook `useState` para alterar e armazenar os valores inseridos nos campos de input.
2. Na opção da cidade, que muda de acordo com o estado escolhido, utilizei uma função que verifica o valor inserido no estado e exibe as cidades correspondentes. Essa função está em um componente separado.
3. Quando clicado em "Gravar", uma função é chamada para verificar se os inputs estão preenchidos, e caso não estejam, ele retorna um modal informando que precisam ser preenchidos. Quando todos os campos estiverem preenchidos, ele encaminha esses valores para a próxima tela utilizando o `navigate` para o caminho `https://localhost:porta/success`.
4. O formulário está em um componente a parte.

### Tela 3 - Página de Sucesso

![Tela 3](https://github.com/Iagoolima/Desafio_Muralis/assets/110433346/aaed2dea-cfa3-4bd0-9e63-6e471d772d5f)

**Local:** `src/pages/success`

1. Neste campo, ele puxa os valores da tela anterior enviados por rota utilizando o Hook `useLocation`, assim armazenados em um objeto para serem utilizados nas caixas de texto abaixo.
2. Inseri o botão do GitHub para facilitar o acesso ao código novamente.


## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório do GitHub:
2. Navegue até o diretório do projeto:
3. Instale as dependências do projeto usando o seguinte comando:
npm install

4.Para iniciar o projeto, utilize o seguinte comando:
npm run dev

Isso iniciará o servidor de desenvolvimento

