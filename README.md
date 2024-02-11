<div align="center">
    <p>
        <img src="https://github.com/Nathan985/MedCof/blob/main/public/logo-name.png" />
    </p>
    <p>
        <img src="https://github.com/Nathan985/MedCof/blob/main/public/screenshot.png" />
    </p>
</div>

# 💻 Link do Porjeto:

Para visualizar o projeto sem ter que executar ele em sua maquina utilize o link dele já em deploy: <a href="https://like-gamers.netlify.app/dashboard" target="_blank" >**Like Gamers**</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/62a7a7cf-1202-4b99-989d-4c42985b018e/deploy-status)](https://app.netlify.com/sites/like-gamers/deploys)

# 📚 Projeto

O **Like Gamers** é um projeto onde você pode pesquisar jogos consumindo a [*API Rawg*](https://api.rawg.io/docs/).

# 🧰 Guia de Instalação

## Clonando o repositório
```bash
git clone https://github.com/Nathan985/MedCof
```

## Configuração do Projeto
Para Iniciar o projeto temos que informar a suas Variaveis de Ambiente, criando assim o arquivo .env na raiz do projeto
```bash
# .env
VITE_API_RAWG_HOST=https://api.rawg.io/api
VITE_API_RAWG_KEY=[API_KEY]
```
Para conseguir sua **API_KEY** Faça cadastro no [**RAWG**](https://rawg.io/apidocs). e consulte sua API Key

## Instalando as dependências
```bash
# Utilizando o NPM
npm install

# Utilizando o yarn
yarn install
```

## Executando o projeto
```bash
# Utilizando o NPM
npm run dev

# Utilizando o yarn
yarn dev
```
