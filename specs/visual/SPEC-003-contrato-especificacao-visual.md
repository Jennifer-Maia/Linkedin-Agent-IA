# SPEC-003: Contrato de especificação visual

## Objetivo

Definir a estrutura mínima e neutra que qualquer especificação visual
gerada pelo sistema deve conter, independentemente do formato final
(carrossel, imagem única, diagrama) ou do template escolhido.

## Contexto

O renderer (SPEC-002) já valida `canvas`, `theme` e `slides` de forma
genérica. O `carousel.json` atual é uma implementação concreta desse
contrato, específica do template `architecture-flow` da camada Gold.

Precisamos documentar formalmente quais campos são universais e
obrigatórios, e quais são específicos de cada template, para que
futuras especificações visuais sejam produzidas de forma consistente.

## Escopo

- documentar os campos universais de uma especificação visual;
- documentar os campos que dependem do template escolhido;
- não implementar código nesta etapa;
- não criar templates novos;
- não criar a decisão visual automática;
- servir como referência para a Fase 3 (decisão visual) e para
  futuros templates.

## Campos universais (obrigatórios em qualquer especificação)

- `canvas.width` e `canvas.height`;
- `theme` (`dark` ou `light`);
- `brand.name` e `brand.descriptor`;
- `slides`: array não vazio;
- em cada slide: `id` e `variant`.

## Campos específicos por template

Cada `variant` pode exigir campos adicionais próprios, documentados
no README do respectivo template. Exemplos observados no template
`architecture-flow`:

- `label`, `title`, `lede`, `callout`, `footnote`;
- `cards` (variantes `stack` e `interface`);
- `flow.origin` e `flow.connections` (variante `flow`).

## Requisitos

- o contrato não deve exigir campos que um formato futuro (ex.: imagem
  única) não possa fornecer;
- o contrato deve ser documentado em linguagem natural e em exemplo
  JSON, sem introduzir um schema formal (JSON Schema) nesta etapa;
- a documentação deve viver em `specs/visual/` e ser referenciada pelo
  README de cada template.

## Fora de escopo

- implementar validação de schema no renderer;
- criar novos templates;
- criar a decisão visual automática;
- criar a `skills/visual/SKILL.md`;
- alterar o renderer ou o carrossel Gold existente.

## Critérios de sucesso

- documento claro, sem ambiguidade, sobre o que é universal e o que
  é específico de template;
- nenhum código alterado;
- nenhum template novo criado;
- serve de base direta para a Fase 3.

## Status

Proposto — 2026-09-18