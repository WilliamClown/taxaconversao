Conversor de Moedas
Descrição
Este projeto é um sistema de conversão de moedas desenvolvido em Angular. Ele permite:

Visualizar a cotação do dia.
Usar uma calculadora para conversão de moedas.
Selecionar moedas de origem e destino para realizar a conversão.
Registrar e visualizar o histórico de transações realizadas.
Atualizar a taxa de conversão entre as moedas.
Funcionalidades implementadas:
Criar o projeto ✔️
Criar o componente de conversão ✔️
Criar o componente de navegação e menu lateral ✔️
Alterar o conteúdo com base na navegação ✔️
Exibir dados mockados da cotação no componente de consulta de taxa ✔️
Registrar transações e exibi-las no histórico ✔️
Criar filtros avançados no histórico ✔️
Exportar dados do histórico para CSV ✔️
Adicionar casos de testes unitários para os componentes principais ✔️
Requisitos
Para rodar esta aplicação, você precisará dos seguintes requisitos:

Angular CLI: versão 16.2.0
Node.js: versão 18.10.0
⚠️ Verifique a compatibilidade do Angular com sua versão do Node.js no site oficial: Angular Versions.

Clonando o Projeto
Para obter uma cópia local do projeto, siga os passos abaixo:

Clone o repositório:

bash
Copiar código
git clone https://github.com/seuusuario/conversor-moedas-angular.git
Acesse o diretório do projeto:

bash
Copiar código
cd conversor-moedas-angular
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
Navegando pelo Projeto
Após executar o comando npm start, a aplicação estará disponível no navegador em:

URL Local: http://localhost:4200
Você poderá navegar pelas seguintes telas:

Consulta de Taxa: Veja a cotação atual e atualize-a.
Conversão de Moeda: Realize a conversão entre as moedas disponíveis.
Registro de Transação: Registre uma nova transação de conversão.
Histórico de Transações: Filtre e visualize o histórico de transações realizadas.
Testes Unitários
Para executar os testes unitários do projeto, utilize o comando:

bash
Copiar código
ng test
Os testes são executados utilizando o Karma, o ambiente padrão de testes para Angular.

Subindo o Projeto para o GitHub
Caso deseje fazer o primeiro commit no GitHub, siga os comandos abaixo:

Inicialize o repositório:

bash
Copiar código
git init
Adicione o arquivo README.md:

bash
Copiar código
echo "# conversor-moedas-angular" >> README.md
Adicione os arquivos ao repositório:

bash
Copiar código
git add .
Faça o primeiro commit:

bash
Copiar código
git commit -m "Primeiro commit"
Configure a branch principal:

bash
Copiar código
git branch -M main
Adicione o repositório remoto:

bash
Copiar código
git remote add origin https://github.com/seuusuario/conversor-moedas-angular.git
Envie o projeto para o GitHub:

bash
Copiar código
git push -u origin main