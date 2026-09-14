# ADR-003: Renderização determinística como padrão

## Status
Aprovado — 2026-09-14

## Contexto
Gerar peças inteiras via IA generativa de imagem mostrou-se caro
em tokens, inconsistente entre execuções e propenso a erros de
texto, ortografia e composição.

## Decisão
A composição final das peças visuais (carrossel, imagem única,
diagrama) deve ser feita por renderização determinística
(HTML/CSS/SVG → PNG), e não por geração de imagem via IA.

IA generativa de imagem é reservada para elementos pontuais
(ilustração abstrata, textura), quando não for viável construir
via SVG/CSS.

## Consequências
- Templates devem ser implementados como código, não como prompts.
- Textos são sempre renderizados via HTML/CSS/SVG, nunca gerados
  dentro da imagem por IA.
- Reduz consumo de tokens em produção recorrente de conteúdo.