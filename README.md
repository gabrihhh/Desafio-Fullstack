# Desafio FullStack
Este desafio é composto por duas etapas: Back-End e Front-End. O objetivo é
avaliar sua capacidade de desenvolver uma solução completa, integrando APIs
externas, persistência de dados e construção de uma interface amigável.
# Desafio Back-End
## Objetivo:
- Construir uma API RESTful utilizando Node.js, com integração entre as
plataformas Pipedrive e Bling.
## Requisitos:
- Criar contas nas plataformas Pipedrive e Bling;
- Implementar uma integração entre Pipedrive e Bling:
- Buscar oportunidades com status "ganho" no Pipedrive;
- Inserir essas oportunidades como pedidos no Bling;
- Utilizar MongoDB para persistência dos dados;
- Criar uma coleção que agregue as oportunidades inseridas no Bling por dia
e valor total;
- Criar um endpoint que retorne os dados consolidados do banco.
# Desafio Front-End
## Objetivo:
- Desenvolver uma interface utilizando Angular.
##Requisitos:
- Listar as oportunidades persistidas via integração construída no back-end;
- Implementar paginação na listagem de oportunidades;
- Apresentar mensagens amigáveis de sucesso ou erro nas operações
realizadas.

## Criação do banco MongoDB via docker

- Entrar no site oficial do docker e intalar ele para sua respectiva arquitetura.
- Após configurar o docker é necessário instalar a imagem do mongoBD.
```bash
docker pull mongo
```
- Ao termino da intalação é necessário configurar o acesso.
```bash
docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=[nome_usuario] -e MONGO_INITDB_ROOT_PASSWORD=[senha] mongo
```
## Criação da estrutura do banco de dados
- É necessário utilizar do script localizado na "database/collections/resetcollections.ts":
```bash
npx ts-node database/collections/resetcollections.ts
```
- para entrar no banco de dados via terminal do docker pode utilizar(apenas para validação):
```bash
docker exec -it mongodb mongosh -u [usuario] -p [senha] --authenticationDatabase admin
```
- dentro do terminal do mongo pode utilizar para vrificar o banco já criado:
```bash
show dbs
```
