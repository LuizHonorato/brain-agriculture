Sumário
=======

<!--ts-->
   * [Introdução](#Introdução)
   * [Pré-requisitos](#Pré-requisitos)
   * [Build](#Build)
   * [Instalação e execução](#Instalação_e_execução)
   * [Produção](#Produção)
   * [Collection](#Collection)
   * [Testes](#Testes)
   * [Documentação](#Documentação)
<!--te-->

Introdução
==========

Brain Agriculture - Aplicação para gerenciar o cadastro de produtores rurais, fazendas, safras e plantaçôes.

Pré-requisitos
==============

- NodeJS 22+
- Docker
- docker-compose

Build
=====

Este serviço foi criado com a utilização das seguintes ferramentas:

- NestJS 11
- Typescript
- Jest
- Docker
- docker-compose
- Arquitetura Hexagonal
- Railway (deploy em produção)

Instalação e execução
==========

Para instalar as dependências e executar a aplicação, execute os seguintes comandos:

```
docker-compose build --no-cache
```

```
docker-compose up -d
```

Após a finalização do build e execução da imagem, a aplicação estará disponível no endereço abaixo:

`http://localhost/api`

Produção
========

Esta aplicação foi disponibilizada em produção através do Railway (https://railway.com/) e está disponível através do endereço:

`https://brain-agriculture-production-cd5a.up.railway.app/`

Collection
=========

Nos arquivos do projeto está disponível uma collection do Insomnia configurada tanto para testes locais quanto para testes em produção. O nome do arquivo é:

`Insomnia_2025-06-08.yaml`


Testes
======

Para esta aplicação foram criados testes unitários e de integração. Para executar os testes execute o seguinte comando:


```
yarn test

ou

npm run test
```

Documentação
======

A documentação foi elaborada utilizando Swagger e está disponível no endereço abaixo:

`GET http://localhost/docs`
