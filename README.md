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

## Criação do banco MongoDB via WSL ubuntu (caso linux não necessário instalação do wsl)

- Instalar o wsl e posteriormente a distribuição ubuntu:
```powershell
wsl --install
wsl --install -d Ubuntu
```
- Após iss é necessário reiniciar o computador.
- configurar o acesso linux
- após a instalação necessário rodar a atualização do linux, instalação de algumas dependências para instalação da chave que verifica a oficialidade do docker:
```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release
```
