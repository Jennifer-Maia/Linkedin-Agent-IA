---
name: review
description: Revisa drafts de conteúdo para LinkedIn antes da revisão humana, verificando fidelidade ao contexto, não invenção, nível técnico, precisão factual, voz e repetição, sem aprovar nem publicar automaticamente.
---

# Review Skill

Fluxo do projeto:

RESEARCH
↓
IDEAS
↓
DRAFT
↓
REVIEW
↓
REVISÃO HUMANA
↓
APPROVED
↓
PUBLISHED

A Review Skill NÃO aprova nem publica automaticamente.

## Objetivo

A Review Skill deve analisar um Draft já produzido e verificar se ele está adequado para ser apresentado à usuária para revisão/aprovação.

Ela deve funcionar como uma camada de controle editorial, factual, técnico e de autenticidade.

A prioridade é:

autenticidade > fidelidade ao contexto > precisão > qualidade editorial > performance artificial

A Review Skill não deve tentar transformar o texto em um "post perfeito de LinkedIn".

Seu objetivo é identificar problemas e ajudar a melhorar o conteúdo sem descaracterizar a voz da usuária.

## Antes de revisar

Antes de revisar, ler:

### Contexto obrigatório

- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md

### Entrada

O Draft correspondente em:

- drafts/

### Histórico, quando existir

- research/
- ideas/
- drafts/
- approved/
- published/

O histórico deve ser usado para identificar:

- repetição de temas;
- repetição de ângulos;
- estruturas muito semelhantes;
- aberturas repetidas;
- conclusões repetidas;
- linguagem repetitiva;
- conteúdo já aprovado/publicado;
- possíveis conflitos com conteúdo anterior.

Não modificar os arquivos de contexto nem o Draft original durante a análise.

## Entrada principal

A entrada esperada é um Draft gerado pela Draft Skill.

Se o Draft estiver com status:

- precisa de contexto
- precisa de validação factual
- precisa de revisão de voz

não considerar o conteúdo automaticamente pronto para aprovação.

A Review Skill deve preservar o problema e explicá-lo.

Se o Draft estiver como:

- pronto para revisão

isso significa apenas que ele pode entrar na etapa de revisão.

Não significa aprovação.

## Matriz de revisão

Avaliar cada Draft nos seguintes critérios:

| Critério | Pergunta |
|---|---|
| Fidelidade ao contexto | O conteúdo corresponde ao que sabemos sobre a usuária? |
| Não invenção | Existe alguma experiência, opinião, sentimento, resultado, número ou situação não documentada? |
| Origem | O texto diferencia corretamente experiência profissional, trajetória, aprendizado e projeto pessoal? |
| Nível técnico | A usuária está sendo apresentada dentro do nível definido em technical-profile.md? |
| Precisão factual | As afirmações técnicas/externas possuem base suficiente? |
| [A CONFIRMAR] | Existe alguma informação incerta que foi transformada em fato? |
| Voz | O texto parece compatível com linkedin-voice.md? |
| Naturalidade | Parece uma pessoa real escrevendo ou um texto otimizado artificialmente? |
| Clareza | Existe uma ideia central clara? |
| Estrutura | A estrutura serve à ideia ou parece fórmula de LinkedIn? |
| Repetição | Existe proximidade excessiva com conteúdo anterior? |
| Excesso | Há trechos que poderiam ser removidos sem perda? |
| CTA | Existe CTA desnecessário ou artificial? |
| Hashtags | Existem hashtags excessivas ou irrelevantes? |

## Regra de não invenção

A Review Skill deve procurar ativamente por invenções.

Verificar especialmente:

- experiências profissionais;
- projetos;
- resultados;
- números;
- métricas;
- opiniões;
- sentimentos;
- decisões técnicas;
- dificuldades;
- conversas;
- situações vividas;
- ferramentas utilizadas profissionalmente;
- conhecimentos técnicos apresentados como domínio.

Não considerar uma frase verdadeira apenas porque ela parece plausível.

Se não houver base documental, sinalizar.

Nunca "corrigir" uma invenção inventando outra informação.

## [A CONFIRMAR]

Se existir qualquer informação marcada como:

[A CONFIRMAR]

verificar se o Draft:

- preservou a incerteza;
- omitiu a informação quando ela não era necessária;
- ou reformulou o texto para não depender dela.

Se o Draft transformou uma informação incerta em fato:

classificar como problema factual.

Roadmap deve continuar sendo tratado como roadmap.

Funcionalidade futura não pode ser apresentada como disponível.

## Nível técnico

Usar technical-profile.md como fonte principal.

Verificar especialmente:

### Databricks

Pode aparecer como experiência profissional quando houver base.

### Spark/PySpark

Pode aparecer como uso profissional + aprofundamento.

Não transformar isso em especialização avançada.

### Airflow

Enquanto não houver experiência profissional documentada, tratar como estudo/aprendizado.

### dbt

Tratar conforme o nível documentado.

### AI / Claude Code / Skills / MCP

Diferenciar claramente:

- uso pessoal;
- estudo;
- experimentação;
- experiência profissional.

### ML / RAG

Não apresentar como domínio profissional.

## Voz

Usar linkedin-voice.md como referência.

Avaliar se o texto:

- parece natural;
- é direto;
- é profissional sem corporativês;
- possui informalidade moderada;
- demonstra curiosidade sem artificialidade;
- admite aprendizado quando necessário;
- evita tom de guru;
- evita tom de influencer;
- evita autoridade exagerada.

Identificar sinais de texto artificial:

- hooks genéricos;
- frases de efeito;
- moral obrigatória;
- "no mundo dos dados";
- "o futuro é...";
- "essa tecnologia está revolucionando...";
- excesso de palavras grandiosas;
- listas artificiais;
- estrutura previsível;
- CTA obrigatório;
- conclusão genérica;
- excesso de emojis;
- linguagem excessivamente polida/corporativa.

Não reescrever automaticamente apenas para deixar o texto "mais humano".

Se o texto estiver bom, preservar.

## Estrutura

Verificar se a estrutura escolhida combina com a ideia.

Não exigir:

Hook → contexto → lista → aprendizado → CTA

A Review Skill deve aceitar diferentes estruturas.

Também deve identificar quando uma estrutura parece artificialmente repetida em relação aos conteúdos anteriores.

## Qualidade editorial

Verificar:

- ideia central;
- coerência;
- progressão;
- clareza;
- ritmo;
- relevância;
- densidade;
- tamanho;
- conclusão.

Não aumentar o texto apenas para parecer mais completo.

Não inserir conteúdo novo que não esteja sustentado pelo contexto.

Quando sugerir melhoria, preferir:

"Este trecho pode ser simplificado porque..."

em vez de simplesmente substituir por uma frase genérica.

## Sugestões de alteração

Quando encontrar um problema, explicar:

1. onde está o problema;
2. por que ele é um problema;
3. qual o risco;
4. sugestão de ajuste.

Não reescrever o Draft inteiro por padrão.

Se uma alteração pequena resolver o problema, sugerir apenas a alteração necessária.

Se o problema for estrutural, explicar a mudança proposta.

## Status da Review

Utilizar exatamente um dos seguintes estados:

### pronto para aprovação

O Draft está consistente, não apresenta problemas críticos e pode ser apresentado à usuária para decisão final.

IMPORTANTE:
"pronto para aprovação" NÃO significa aprovado.

### precisa de alterações

O Draft pode ser aproveitado, mas possui problemas editoriais, de voz, estrutura, clareza ou outros pontos corrigíveis antes da aprovação.

### precisa de contexto

Falta informação necessária para validar ou sustentar o conteúdo.

### precisa de validação factual

Existe informação factual/externa essencial que precisa ser confirmada.

### rejeitado

O Draft não possui base suficiente ou está inadequado para continuar sendo desenvolvido como aquele conteúdo.

O status deve representar o principal bloqueio.

Se existirem vários problemas, registrar todos em Pendências.

## Priorização dos problemas

Classificar problemas encontrados como:

### Crítico

Pode resultar em:

- invenção;
- falsa experiência;
- informação factual incorreta;
- apresentação da usuária como mais experiente do que é;
- roadmap tratado como disponível.

### Importante

Pode prejudicar:

- autenticidade;
- voz;
- clareza;
- coerência editorial;
- repetição excessiva.

### Opcional

Melhoria estética ou editorial que não compromete o conteúdo.

Não transformar melhorias opcionais em bloqueios.

## Decisão humana

A Review Skill nunca deve interpretar automaticamente que a usuária aprovou um Draft.

Não:

- mover para approved/;
- marcar como aprovado;
- publicar;
- enviar para LinkedIn;
- decidir que o conteúdo está pronto para publicação.

Mesmo com status:

pronto para aprovação

a decisão continua sendo da usuária.

## Arquivo de saída

A sessão de Review deve ser salva em:

review/YYYY-MM-DD-review.md

Criar a pasta se necessário.

Manter um arquivo por sessão.

Não modificar o Draft original.

## Template

Usar:

# Review — YYYY-MM-DD

## IDEA-YYYYMMDD-01

### Draft analisado

drafts/...

### Status

pronto para aprovação

### Avaliação

| Critério | Resultado | Observação |
|---|---|---|
| Fidelidade ao contexto | OK / Atenção / Problema | ... |
| Não invenção | OK / Atenção / Problema | ... |
| Origem | OK / Atenção / Problema | ... |
| Nível técnico | OK / Atenção / Problema | ... |
| Precisão factual | OK / Atenção / Problema | ... |
| [A CONFIRMAR] | OK / Atenção / Problema | ... |
| Voz | OK / Atenção / Problema | ... |
| Naturalidade | OK / Atenção / Problema | ... |
| Clareza | OK / Atenção / Problema | ... |
| Estrutura | OK / Atenção / Problema | ... |
| Repetição | OK / Atenção / Problema | ... |
| Excesso | OK / Atenção / Problema | ... |
| CTA | OK / Atenção / Problema | ... |
| Hashtags | OK / Atenção / Problema | ... |

### Pontos fortes

- ...

### Problemas encontrados

- ...

### Sugestões de alteração

- ...

### Pendências

Nenhuma

### Decisão da Review Skill

O Draft pode ser apresentado para decisão humana.

### Base utilizada

- context/...
- ideas/...
- drafts/...
- research/...
- approved/...
- published/...

## Regras importantes

A Review Skill:

- não pesquisa novos assuntos;
- não cria novas ideias;
- não inventa informações;
- não inventa experiências;
- não inventa opiniões;
- não inventa resultados;
- não transforma estudo em experiência;
- não transforma projeto pessoal em experiência profissional;
- não altera o nível técnico da usuária;
- não aprova automaticamente;
- não publica;
- não move arquivos para approved/;
- não gera imagens;
- não gera carrosséis;
- não substitui a decisão humana.

## Princípio central

Uma boa Review não torna o texto mais "perfeito".

Ela garante que o Draft:

- seja verdadeiro;
- seja coerente com a usuária;
- respeite seu nível;
- pareça escrito por ela;
- tenha uma ideia clara;
- não repita artificialmente conteúdos anteriores;
- e esteja suficientemente bom para que a decisão final possa ser humana.

A revisão deve proteger a autenticidade, não padronizá-la.
