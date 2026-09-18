# Carrossel Gold — MVP determinístico

Template de arquitetura/fluxo para o conteúdo aprovado `IDEA-20260911-01`.

## Saída

O renderer gera cinco PNGs em `output/`, todos com `1080 × 1350 px` (4:5):

- `01-01.png` — abertura
- `02-02.png` — função da camada Gold
- `03-03.png` — fluxo para analista e agente de IA
- `04-04.png` — comentários e tags como interface
- `05-05.png` — fechamento

## Reproduzir

Pré-requisitos: Node.js 18+ e Microsoft Edge ou Chrome instalado.

```bash
node brand/visual/carrossel-gold/render.mjs
```

O renderer procura automaticamente o Edge/Chrome nos caminhos padrão do Windows. Para indicar outro executável:

```bash
node brand/visual/carrossel-gold/render.mjs --browser "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
```

Use `--keep-temp` para preservar os HTMLs intermediários durante diagnóstico:

```bash
node brand/visual/carrossel-gold/render.mjs --keep-temp
```

## Contrato de entrada

O arquivo JSON informado por `--input` deve ser um objeto com esta estrutura:

```json
{
  "canvas": {
    "width": 1080,
    "height": 1350
  },
  "theme": "dark",
  "brand": {
    "name": "J",
    "descriptor": "DADOS / ARQUITETURA"
  },
  "slides": [
    {
      "id": "01",
      "variant": "cover",
      "label": "TRABALHO · ARQUITETURA",
      "title": "Título do slide",
      "lede": "Texto de abertura",
      "callout": "Texto de destaque",
      "footnote": "Referência do slide"
    }
  ]
}
```

- `canvas.width` e `canvas.height` são obrigatórios, inteiros e positivos; definem a janela do navegador e as dimensões esperadas de cada PNG.
- `theme` é obrigatório e não pode estar vazio.
- `slides` é obrigatório e deve ser um array não vazio.
- Para o template Gold, cada slide precisa de `id`, `variant`, `label`, `title`, `lede` e `footnote`. As variantes `cover` e `closing` usam `callout`; `stack` e `interface` usam `cards`; `flow` usa `flow`.
- `brand.name` e `brand.descriptor` são obrigatórios para o template Gold. Os itens de `cards` precisam de `index`, `title` e `text`; `flow` precisa de `origin.label`, `origin.meta`, `connections[].target` e `connections[].meta`.
- O renderer informa o campo inválido e o arquivo de entrada quando a validação falha. JSON malformado também é reportado com o caminho do arquivo.

Os caminhos `--input`, `--template`, `--output` e `--browser` são configuráveis. A saída mantém o nome `NN-ID.png` e valida cada PNG contra as dimensões declaradas em `canvas`.

## Decisão visual

- **Modo:** dark/core. A sequência trata de arquitetura, fluxo e documentação da camada Gold; o dark foi escolhido para presença editorial, leitura técnica e continuidade com a âncora visual da marca.
- **Light:** os tokens light estão implementados no template como direção de primeira classe, conforme ADR-001, mas a saída deste MVP segue o modo solicitado pela SPEC-001.
- **Âncora:** a referência ao banner dark orienta tom e disciplina visual; o carrossel não copia o banner.
- **Renderização:** HTML/CSS/SVG → PNG por browser headless, sem geração de imagem por IA e sem dependência de rede.
- **Determinismo:** canvas fixo, escala de dispositivo `1`, perfil sRGB, dados estruturados em `carousel.json` e dimensões validadas pelo renderer.

## Escopo de conteúdo

O texto foi condensado a partir do conteúdo aprovado, sem acrescentar experiência, resultado, vínculo ou conhecimento não documentado. Os rótulos `TRABALHO` indicam o contexto profissional documentado no material de entrada. A menção ao agente de IA é apresentada como cenário observado/possível, não como uso já comprovado pela usuária.

## Validação

O renderer valida o cabeçalho PNG e exige as dimensões declaradas em `canvas.width` e `canvas.height` para cada arquivo. A composição usa margem segura de `96 px`, grid de oito colunas, no máximo três blocos por slide, uma ênfase coral por composição, numeração e paginação no rodapé.
