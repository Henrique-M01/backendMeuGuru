# Desafio tecnico MeuGuru

# Contexto
Este projeto trata-se de um CRUD de usuarios, salvando-os no banco de dados postgres.
Desafio realizado como desafio tecnico da empresa MeuGuru.

# Frontend

O frontend foi desenvolvido em outro repositorio, [disponivel aqui.](https://github.com/Henrique-M01/frontendMeuGuru)
No README.md do repositorio, voce encontrar mais informcaoes de como prosseguir para visualiza-la.

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, Postgres, ES6, Typescript


## Instalando Dependências

> Backend
```bash
git clone git@github.com:Henrique-M01/backendMeuGuru.git
cd backendMeuGuru/ 
npm install
``` 

## Executando aplicação

* Para rodar o back-end:

  ```
  npm run db:start // Isso ira resetar o banco de dados hospedados no heroku.
  npm start // Isso ira colocar a aplicacao no ar, na porta 3010(Voce pode altera-la no arquivo .env a variavel PORT)

  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm run test
  ```