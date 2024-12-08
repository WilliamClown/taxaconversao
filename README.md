**Conversor de Moedas**

**Descrição**

Este projeto é um sistema de conversão de moedas desenvolvido em Angular. Ele permite:

- Visualizar a cotação do dia.
- Usar uma calculadora para conversão de moedas.
- Selecionar moedas de origem e destino para realizar a conversão.
- Registrar e visualizar o histórico de transações realizadas.
- Atualizar a taxa de conversão entre as moedas.

**Funcionalidades implementadas:**
- Criar o projeto ✔️
- Criar o componente de conversão ✔️
- Criar o componente de navegação e menu lateral ✔️
- Alterar o conteúdo com base na navegação ✔️
- Exibir dados mockados da cotação no componente de consulta de taxa ✔️
- Registrar transações e exibi-las no histórico ✔️
- Criar filtros avançados no histórico ✔️
- Exportar dados do histórico para CSV ✔️
- Adicionar casos de testes unitários para os componentes principais ✔️
  
**Requisitos**

Para rodar esta aplicação, você precisará dos seguintes requisitos:

- Angular CLI: versão 19.0.3 
- Node.js: versão 22.12.0 
- Package Manager: npm 10.9.0 


|**Package**                   | **Version**  |
| ---------------------------- | -------------|
|@angular-devkit/architect     |   0.1900.3   |
|@angular-devkit/build-angular |  19.0.3      |
|@angular-devkit/core          |  19.0.3      |
|@angular-devkit/schematics    |  19.0.3      |
|@angular/cdk                  |  19.0.2      |
|@angular/material             |  19.0.2      |
|@schematics/angular           |  19.0.3      |
|rxjs                          |  7.8.1       |
|typescript                    |  5.6.3       |
|zone.js                       |  0.15.0      |

⚠️ Verifique a compatibilidade do Angular com sua versão do Node.js no site oficial: Angular Versions.

**Clonando o Projeto**
Para obter uma cópia local do projeto, siga os passos abaixo:

**Clone o repositório:**
```
git clone https://github.com/WilliamClown/taxaconversao.git
```

**Acesse o diretório do projeto:**
```
cd taxaconversao
```

**Instale as dependências:**
```
npm install
```

**Inicie o servidor de desenvolvimento:**
```
npm start
```

**Navegando pelo Projeto**

Após executar o comando npm start, a aplicação estará disponível no navegador em:

URL Local: http://localhost:4200
**Você poderá navegar pelas seguintes telas:**

**1. Consulta de Taxa:** Veja a cotação atual e atualize-a.

**2. Conversão de Moeda:** Realize a conversão entre as moedas disponíveis.

**3. Registro de Transação:** Registre uma nova transação de conversão.

**4. Histórico de Transações:** Filtre e visualize o histórico de transações realizadas.




**Testes Unitários**

Para executar os testes unitários do projeto, utilize o comando:
```
ng test
```
Os testes são executados utilizando o Karma, o ambiente padrão de testes para Angular.



**Subindo o Projeto para o GitHub**

Caso deseje fazer o primeiro commit no GitHub, siga os comandos abaixo:

**Inicialize o repositório:**
```
git init
```

**Adicione o arquivo README.md:**
```
echo "# taxaconversao" >> README.md
```

**Adicione os arquivos ao repositório:**
```
git add .
```

**Faça o primeiro commit:**
```
git commit -m "Primeiro commit"
```

**Configure a branch principal:**
```
git branch -M main
```

**Adicione o repositório remoto:**
```
git remote add origin https://github.com/WilliamClown/taxaconversao.git
```

**Envie o projeto para o GitHub:**
```
git push -u origin main
```
