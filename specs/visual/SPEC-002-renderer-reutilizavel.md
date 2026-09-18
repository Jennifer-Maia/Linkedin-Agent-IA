# SPEC-002: Renderer visual reutilizável

## Objetivo

Evoluir o renderer criado no carrossel Gold para uma estrutura
reutilizável por diferentes conteúdos visuais, preservando o
funcionamento atual.

## Contexto

O renderer atual:

- recebe dados estruturados em JSON;
- utiliza template HTML/CSS/SVG;
- gera PNGs por browser headless;
- valida a saída em 1080 × 1350 px;
- possui parâmetros de entrada, template, saída e navegador.

A implementação precisa ser auditada para identificar quais partes
são reutilizáveis e quais ainda estão específicas da camada Gold.

## Escopo

- auditar o renderer atual;
- preservar o funcionamento do carrossel Gold;
- manter os parâmetros de execução existentes;
- melhorar apenas o que for necessário para reutilização;
- manter a renderização determinística;
- manter a validação das dimensões;
- documentar alterações necessárias no README do renderer.

## Requisitos

- não utilizar geração de imagem por IA;
- não depender de rede;
- não instalar dependências novas;
- preservar a saída em 1080 × 1350 px;
- aceitar caminhos configuráveis de entrada, template e saída;
- produzir erros claros para arquivos inexistentes;
- produzir erros claros para JSON inválido;
- manter o comando atual funcionando;
- manter o tempo de execução curto.

## Fora de escopo

- criar novos templates;
- criar template light;
- criar imagem única;
- criar novos carrosséis;
- criar a `skills/visual/SKILL.md`;
- implementar decisão automática de formato;
- alterar a identidade visual;
- alterar `carousel.json`;
- alterar `template.html`;
- alterar os PNGs existentes;
- alterar ADRs ou outras SPECs;
- publicar conteúdo.

## Arquivos permitidos

Pode alterar somente:

- `brand/visual/carrossel-gold/render.mjs`;
- `brand/visual/carrossel-gold/README.md`, se necessário.

Não criar arquivos adicionais sem justificar previamente.

## Critérios de sucesso

- o comando atual continua funcionando;
- os cinco PNGs continuam sendo gerados;
- todos permanecem em 1080 × 1350 px;
- os parâmetros configuráveis continuam funcionando;
- entradas inválidas produzem mensagens claras;
- nenhum arquivo fora do escopo é alterado;
- a execução permanece próxima do tempo atual.

## Contrato de entrada (adicionado após auditoria)

O renderer deve validar explicitamente, antes de renderizar:

- existência de `canvas.width` e `canvas.height` no JSON de entrada;
- existência de `theme`;
- existência de `slides` como array não vazio;
- em cada slide: `id` e `variant`.

Se `canvas` estiver presente no JSON, o renderer deve usá-lo para
definir as dimensões de saída, em vez de valores fixos no código,
desde que isso não altere a saída atual do carrossel Gold
(que já declara 1080 × 1350 no seu `canvas.json`).

A lógica específica de preenchimento do template Gold
(`brand`, `label`, `title`, `lede`, `callout`, `cards`, `flow`)
deve ser isolada em uma função separada, permitindo que futuros
templates definam seu próprio adaptador sem exigir alterações
no núcleo do renderer (parse de args, busca de browser, execução
headless, validação de PNG).

Mensagens de erro devem indicar claramente qual campo está ausente
ou inválido, incluindo o caminho do arquivo problemático.

## Status

Proposto — 2026-09-18