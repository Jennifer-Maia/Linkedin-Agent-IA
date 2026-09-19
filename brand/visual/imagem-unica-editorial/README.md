# Imagem única editorial

Template `editorial-statement` para uma ideia central apresentada em uma
peça vertical de 1080 × 1350 px. A composição usa a direção `dark`, com
hierarquia editorial própria e sem dependência de rede.

## Contrato de entrada

Além dos campos universais (`canvas`, `theme`, `brand` e `slides`), este
template exige:

- `format`: `"imagem_unica"`;
- `template`: `"editorial-statement"`;
- `context`: texto curto que identifica o contexto editorial;
- `source`: identificador ou referência da ideia;
- `slides`: array com exatamente um item;
- no slide: `id`, `variant: "statement"`, `label`, `title`, `lede` e,
  opcionalmente, `callout`.

O renderer valida os campos universais antes de selecionar o adaptador. O
campo `template` seleciona o adaptador; quando ele está ausente, o renderer
mantém o comportamento Gold (`architecture-flow`).

## Reproduzir

A partir da raiz do projeto:

```bash
node brand/visual/carrossel-gold/render.mjs \
  --input brand/visual/imagem-unica-editorial/editorial-statement.json \
  --output brand/visual/imagem-unica-editorial/output
```

O caminho do HTML pode ser sobrescrito com `--template`, mas o adaptador
continua sendo escolhido pelo campo `template` do JSON. A saída esperada é
um PNG nomeado `01-01.png`, com 1080 × 1350 px.
