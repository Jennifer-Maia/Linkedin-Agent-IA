# SPEC-005: Template de imagem única editorial

## Objetivo

Criar o primeiro template adicional do sistema visual: uma imagem única
editorial para conteúdos que possuem uma ideia central forte e não
exigem uma sequência de slides.

O template deve coexistir com o carrossel Gold sem alterar seu
funcionamento, seus arquivos ou seus PNGs versionados.

## Contexto

O sistema já possui:

- uma decisão visual documentada;
- um contrato de especificação visual;
- um renderer determinístico;
- um carrossel Gold como primeiro formato validado.

O próximo passo é testar a reutilização do sistema com uma peça de
imagem única.

## Características do formato

A imagem deve conter:

- uma ideia central;
- uma frase principal;
- contexto editorial curto;
- identificação discreta da marca;
- paginação ou identificação compatível com uma peça única, quando
  aplicável;
- hierarquia adequada para leitura em tela pequena.

O formato deve ser preferencialmente vertical e compatível com a
identidade visual já definida.

## Direção visual

A primeira versão deve utilizar a direção `dark`, já validada no
carrossel Gold.

Deve preservar:

- fundo escuro;
- tipografia clara;
- acento coral pontual;
- grid e margem segura;
- linguagem técnica e editorial;
- ausência de efeitos decorativos excessivos.

Não deve copiar a composição do carrossel Gold. O formato deve ter uma
hierarquia própria para imagem única.

## Contrato de entrada

Conforme a SPEC-003, os campos universais permanecem obrigatórios:

- `canvas.width`;
- `canvas.height`;
- `theme`;
- `brand.name`;
- `brand.descriptor`;
- `slides`: array não vazio, mesmo contendo apenas um item.

Os campos abaixo são específicos deste template (não universais):

- `format` (`"imagem_unica"`);
- `template` (`"editorial-statement"`);
- `context`;
- `source`.

Cada item de `slides` (neste template, contendo exatamente um elemento)
deve possuir:

- `id`;
- `variant` (`"statement"`);
- `label`;
- `title`;
- `lede`;
- `callout` (opcional).

Exemplo conceitual:

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
  "format": "imagem_unica",
  "template": "editorial-statement",
  "context": "aprendizado",
  "source": "EXAMPLE-EDITORIAL-01",
  "slides": [
    {
      "id": "01",
      "variant": "statement",
      "label": "APRENDIZADO · DADOS",
      "title": "A camada Gold não é o fim do dado.",
      "lede": "É o começo de uma consulta bem compreendida.",
      "callout": "Clareza também é parte da arquitetura."
    }
  ]
}
```

## Requisito de despacho no renderer

O renderer deve determinar qual adaptador de preenchimento usar
(Gold ou editorial-statement) a partir do campo `template` presente
no JSON de entrada, sem quebrar o comportamento padrão quando esse
campo estiver ausente (deve assumir Gold como padrão, preservando
retrocompatibilidade total com `carousel.json`).

A validação genérica (`canvas`, `theme`, `slides` como array não
vazio) deve continuar ocorrendo antes do despacho, de forma
compartilhada entre os templates.

## Escopo

- criar a especificação de uma imagem única editorial;
- criar um template HTML/CSS compatível;
- adaptar o renderer somente se necessário;
- criar um JSON de exemplo;
- gerar uma imagem de teste;
- validar dimensões e legibilidade;
- preservar integralmente o carrossel Gold existente.

## Fora de escopo

- alterar `carousel.json`;
- alterar `template.html` do carrossel Gold;
- alterar ou substituir os PNGs existentes;
- criar versão light;
- criar vários templates;
- integrar o Carrosseia;
- usar geração de imagem por IA;
- criar a skill visual;
- implementar decisão visual automática;
- publicar conteúdo;
- alterar a identidade visual;
- criar um sistema completo de temas.

## Arquivos permitidos

Podem ser criados ou alterados somente após aprovação:

- `specs/visual/SPEC-005-template-imagem-unica-editorial.md`;
- arquivos novos em `brand/visual/`;
- `brand/visual/carrossel-gold/render.mjs`, somente se necessário
  para suportar o novo template;
- documentação diretamente relacionada ao novo template.

Não alterar:

- `brand/visual/carrossel-gold/carousel.json`;
- `brand/visual/carrossel-gold/template.html`;
- arquivos PNG existentes;
- ADRs existentes;
- SPECs anteriores;
- conteúdos aprovados.

## Critérios de sucesso

- o carrossel Gold continua funcionando sem alteração;
- a nova imagem é gerada localmente;
- a saída possui exatamente as dimensões declaradas;
- o template não depende de rede;
- o texto permanece legível;
- a peça utiliza a direção visual definida;
- o novo template possui dados separados da apresentação;
- o renderer continua determinístico;
- nenhuma dependência paga ou externa é adicionada;
- os arquivos do novo formato são documentados;
- a peça pode ser reproduzida por comando.

## Processo obrigatório

Antes de implementar:

1. auditar o renderer atual;
2. identificar como selecionar o novo template;
3. propor as mudanças mínimas;
4. confirmar que o Gold não será alterado;
5. aguardar aprovação humana.

## Status

Proposto — 2026-09-19