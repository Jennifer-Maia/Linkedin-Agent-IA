# SPEC-001: MVP de carrossel determinístico — camada Gold

## Objetivo
Produzir uma primeira peça visual real (carrossel) a partir de um
conteúdo já aprovado, usando renderização determinística, validando
o sistema visual (tokens, grid, decisão dark/light).

## Entrada
- Conteúdo aprovado sobre mudança de consumidor da camada Gold
  (arquivo em approved/).
- brand/visual-system.md
- brand/tokens.md
- brand/grid-and-layout.md
- brand/visual-decision-rules.md
- brand/qa-checklist.md

## Saída esperada
- Um template determinístico (código), reutilizável.
- Um renderer (script) que gera PNG a partir de dados estruturados.
- Uma especificação de conteúdo (dados do carrossel).
- PNGs finais em 1080 × 1350 px.
- Um README explicando como reproduzir a renderização.

## Escopo permitido
- Criar apenas os arquivos necessários para este MVP.
- Usar dark/core como paleta (âncora conforme ADR-002).
- Usar apenas o template de arquitetura/fluxo.

## Fora de escopo
- Criar outros templates.
- Criar novas paletas.
- Alterar conteúdos em approved/.
- Criar skills/visual/SKILL.md.
- Publicar qualquer conteúdo.
- Gerar texto de imagem via IA.

## Critério de sucesso
- PNG gerado com dimensões corretas.
- Texto legível, sem erro ortográfico.
- Sem aparência de dashboard ou SaaS.
- Processo reproduzível via comando único.
- QA (qa-checklist.md) aprovado.

## Referência visual complementar
Usar como inspiração de composição (cards funcionais, numeração,
paginação, rótulo técnico) as referências fornecidas pela usuária
em 2026-09-14, sem copiar texto, handle ou identidade de terceiros.

## Status
Proposto — 2026-09-14