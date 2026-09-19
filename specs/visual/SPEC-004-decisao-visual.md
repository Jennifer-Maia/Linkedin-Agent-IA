# SPEC-004: Decisão visual

## Objetivo

Definir um processo consistente para decidir se um conteúdo aprovado
deve receber um recurso visual e qual formato é mais adequado.

A decisão visual deve acontecer antes da criação de qualquer peça.

## Princípio central

Nem todo conteúdo deve se tornar um carrossel.

O sistema deve preferir:

- clareza;
- adequação ao conteúdo;
- legibilidade;
- esforço proporcional;
- autenticidade;
- reutilização responsável.

Um visual só deve ser criado quando melhorar a compreensão, a retenção
ou a organização da ideia.

## Formatos possíveis

A decisão pode indicar um dos seguintes formatos:

- `sem_visual`;
- `imagem_unica`;
- `carrossel`;
- `diagrama`;
- `comparacao`.

## Critérios de decisão

### `sem_visual`

Usar quando:

- o conteúdo é curto e autossuficiente;
- a ideia depende mais de narrativa do que de estrutura;
- um visual acrescentaria decoração, mas não entendimento;
- a mensagem funciona melhor como texto.

### `imagem_unica`

Usar quando:

- existe uma ideia central forte;
- há uma frase, princípio ou síntese que pode ser destacada;
- o conteúdo não exige sequência;
- a peça pode funcionar como âncora editorial.

### `carrossel`

Usar quando:

- existem várias ideias relacionadas;
- há uma sequência de raciocínio;
- o conteúdo exige introdução, desenvolvimento e fechamento;
- a divisão em cards melhora a leitura;
- há mais de uma unidade relevante de informação.

### `diagrama`

Usar quando:

- relações, etapas ou fluxos são essenciais;
- a estrutura visual explica melhor que um texto corrido;
- existem entidades e conexões claras;
- o diagrama pode ser construído sem inventar dados.

### `comparacao`

Usar quando:

- existem duas ou mais alternativas explícitas;
- as diferenças são relevantes para a compreensão;
- a comparação não é artificial;
- os critérios usados são verificáveis.

## Critérios de recusa

A decisão deve indicar `sem_visual` quando:

- o visual seria apenas decorativo;
- não há conteúdo suficiente para sustentar a peça;
- seria necessário inventar dados;
- seria necessário usar autoridade, logo ou certificação como atalho;
- o formato visual distorceria a experiência relatada;
- a peça exigiria elementos difíceis de validar;
- o conteúdo ainda não está aprovado.

## Contexto do conteúdo

A decisão deve preservar a distinção entre:

- `trabalho`;
- `estudo`;
- `projeto_pessoal`;
- `aprendizado`;
- `opiniao`;
- `observacao`.

O contexto não determina sozinho o formato visual, mas deve orientar
tom, nível de afirmação e escolha de elementos.

## Saída da decisão

A decisão deve produzir uma estrutura equivalente a:

```json
{
  "visual_needed": true,
  "format": "carrossel",
  "template": "architecture-flow",
  "theme": "dark",
  "context": "trabalho",
  "reason": "O conteúdo apresenta uma sequência de ideias e relações entre consumidores.",
  "confidence": "high",
  "human_review_required": true
}
```

Quando não houver necessidade de visual:

```json
{
  "visual_needed": false,
  "format": "sem_visual",
  "template": null,
  "theme": null,
  "context": "aprendizado",
  "reason": "A ideia é curta e funciona melhor como narrativa textual.",
  "confidence": "high",
  "human_review_required": true
}
```

## Requisitos

- a decisão deve ser explicável;
- `reason` é obrigatório;
- `human_review_required` deve ser sempre `true`;
- a decisão não cria a peça automaticamente;
- a decisão não publica conteúdo;
- o formato deve ser compatível com o conteúdo;
- a escolha do template deve acontecer somente quando houver visual;
- `confidence` deve ser `low`, `medium` ou `high`;
- decisões de baixa confiança devem ser revisadas humanamente antes de continuar.

## Fora de escopo

- implementar código;
- criar um classificador automático;
- criar novos templates;
- alterar o renderer;
- gerar imagens;
- alterar o carrossel Gold;
- criar a `skills/visual/SKILL.md`;
- publicar conteúdo;
- definir regras de copywriting.

## Critérios de sucesso

- o documento diferencia claramente formato e template;
- explica quando não criar visual;
- define uma saída estruturada;
- mantém revisão humana obrigatória;
- preserva o contexto do conteúdo;
- serve como base para uma futura implementação;
- não altera nenhum arquivo de código.

## Status

Proposto — 2026-09-18