---
name: draft
description: Transforma ideias editoriais selecionadas em rascunhos autênticos para LinkedIn, respeitando a experiência, o nível técnico, a voz e o histórico de conteúdo da usuária, sem inventar informações e sem aprovar ou publicar automaticamente.
---

# Draft Skill

## Objetivo

A Draft Skill é a ponte entre:

IDEAS → DRAFT

Ela transforma uma ideia editorial em um rascunho de post para LinkedIn que:

- desenvolva a ideia central;
- tenha uma perspectiva clara;
- seja coerente com o perfil real da usuária;
- respeite seu nível técnico;
- reflita sua voz;
- evite aparência de texto genérico ou artificial;
- não invente informações;
- varie estrutura e ritmo;
- fique pronto para revisão humana.

Prioridade:

autenticidade > performance artificial > fórmula de LinkedIn

A Draft Skill não deve tentar maximizar artificialmente métricas de LinkedIn às custas da autenticidade.

## Antes de gerar um Draft

Antes de escrever, leia:

### Contexto obrigatório

- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md

### Entrada editorial

A ideia correspondente em:

- ideas/

### Histórico, quando existir

- research/
- ideas/
- drafts/
- approved/
- published/

O histórico deve ser usado principalmente para identificar:

- assuntos recentes;
- ângulos já utilizados;
- estruturas repetidas;
- linguagem repetitiva;
- conclusões semelhantes;
- posts muito próximos entre si.

Não modificar esses arquivos durante a execução da Draft Skill, salvo quando a própria saída da Skill precisar ser salva em drafts/, conforme as regras desta Skill.

## Entrada principal

A entrada esperada é uma ideia gerada pela Ideas Skill.

A ideia deve fornecer contexto suficiente para identificar, quando disponível:

- assunto;
- ângulo;
- origem;
- conexão com o perfil;
- ponto central;
- possíveis pontos de desenvolvimento;
- formato;
- riscos;
- pendências.

Se a ideia estiver marcada:

Pronta para Draft: não

não tentar contornar a pendência inventando informações.

Nesse caso, registrar claramente o que está faltando e não forçar a geração de um post completo.

## Matriz de validação antes da escrita

Antes de escrever, validar:

| Validação | Pergunta |
|---|---|
| Ideia | Existe uma ideia central clara? |
| Contexto | Há material suficiente para desenvolvê-la? |
| Experiência | A origem está corretamente identificada? |
| Técnico | O nível está coerente com technical-profile.md? |
| Voz | Existe material suficiente para escrever naturalmente? |
| Factual | Existem informações externas que precisam ser verificadas? |
| [A CONFIRMAR] | Existe alguma informação incerta necessária? |
| Histórico | O tema/ângulo está excessivamente repetido? |
| Estrutura | Existe uma forma adequada de desenvolver essa ideia? |
| Autenticidade | O texto pode ser escrito sem inventar nada? |

Se uma validação crítica falhar, não forçar a geração.

Registrar o motivo no status, nas pendências ou nas observações de revisão.

## Hierarquia de fontes

Quando houver conflito, priorizar:

1. Contexto aprovado pela usuária
2. Ideia selecionada
3. Research / fontes factuais
4. Histórico editorial
5. Inferência mínima

Inferência nunca pode criar fatos pessoais.

Não inferir experiências, sentimentos, opiniões, decisões técnicas, dificuldades ou resultados que não estejam documentados.

## Regra de não invenção

Nunca inventar:

- experiência profissional;
- projetos;
- resultados;
- números;
- opiniões;
- sentimentos;
- decisões técnicas;
- dificuldades;
- conversas;
- situações vividas;
- ferramentas utilizadas profissionalmente;
- conhecimento técnico que não esteja documentado.

Exemplo:

Se a ideia propõe contar sobre um problema de performance no Databricks, mas não existe uma situação real documentada, não inventar o problema.

Nesse caso, registrar:

Status: precisa de contexto

Pendência:
- Falta uma situação profissional real que sustente a narrativa proposta.

## Regra de [A CONFIRMAR]

Se a ideia ou Research possuir informação marcada como:

[A CONFIRMAR]

a Draft deve preservar essa incerteza.

Se a informação for essencial para o post:

Status:
precisa de validação factual

Se não for essencial:

- omitir a informação;
- ou reformular o texto para não depender dela.

Nunca transformar [A CONFIRMAR] em:

- fato confirmado;
- experiência profissional;
- disponibilidade de tecnologia;
- resultado;
- opinião da usuária.

Roadmap e funcionalidades futuras devem continuar seguindo as regras estabelecidas pela Research Skill.

## Experiência profissional × trajetória × aprendizado × projeto

A Draft deve respeitar a origem da ideia.

### Experiência profissional

Pode utilizar construções como:

- "No meu trabalho..."
- "Uma coisa que percebi trabalhando com..."
- "Na prática, trabalhando com..."

Somente quando houver base documental.

### Trajetória profissional

Pode utilizar construções como:

- "Quando comecei minha transição para dados..."
- "Ao longo da minha mudança de área..."
- "Uma coisa que fui percebendo nessa trajetória..."

Somente quando sustentado pelo contexto.

### Aprendizado

Preferir:

- "Estou estudando..."
- "Enquanto estudava..."
- "Uma coisa que comecei a entender melhor..."
- "Estou me aprofundando em..."

Nunca transformar estudo em experiência profissional.

### Projeto pessoal

Preferir:

- "No meu projeto..."
- "Enquanto construo o Nexum Sales Assistant..."
- "Nesse projeto de estudo..."

Nunca apresentar projeto pessoal como experiência profissional.

## Estrutura do post

Não existe fórmula obrigatória.

A Draft deve escolher a estrutura mais adequada à ideia.

Possibilidades incluem:

- narrativa;
- descoberta;
- reflexão;
- comparação;
- explicação;
- problema → descoberta;
- antes → depois;
- experiência → aprendizado;
- notícia → perspectiva pessoal;
- bastidor de projeto;
- texto curto;
- lista;
- pergunta/provocação.

A estrutura deve servir à ideia, não o contrário.

Não usar a mesma estrutura por padrão.

## Abertura

Evitar hooks genéricos, exagerados ou artificiais.

Não utilizar automaticamente estruturas como:

- "Você já parou para pensar...?"
- "No mundo dos dados..."
- "A tecnologia está revolucionando..."
- "5 dicas..."
- "O segredo para..."
- "Se você trabalha com dados, precisa..."

Preferir, quando adequado:

- situações concretas;
- descobertas;
- contradições;
- observações pessoais;
- perguntas genuínas;
- mudanças de percepção;
- acontecimentos reais.

Exemplos servem apenas como direção e não devem ser repetidos mecanicamente.

## Desenvolvimento

Desenvolver uma ideia principal.

Pode haver pontos secundários, mas o post não deve se transformar em documentação técnica.

Regra:

Explicar o suficiente para o leitor entender a ideia, mas não tudo que existe sobre o assunto.

Conteúdo técnico deve priorizar:

- contexto;
- decisão;
- descoberta;
- dificuldade;
- comparação;
- consequência;
- aprendizado;

quando esses elementos estiverem realmente disponíveis.

## Nível técnico

Respeitar rigorosamente context/technical-profile.md.

Exemplos:

### Databricks
Pode ser tratado com segurança quando relacionado à experiência profissional real da usuária.

### Spark/PySpark
Pode abordar uso profissional real + aprofundamento, sem posicionamento como especialista avançada.

### Airflow
Deve ser tratado principalmente como estudo/aprendizado enquanto não houver experiência profissional documentada.

### ML/RAG
Tratar como estudo/conhecimento em construção, conforme technical-profile.md.

Nunca elevar o nível técnico apenas porque uma tecnologia aparece no contexto.

## Voz

Usar linkedin-voice.md como guia central de linguagem e personalidade.

A voz orienta:

- como a usuária fala;
- como ela explica;
- como demonstra curiosidade;
- como apresenta dificuldades;
- como fala sobre aprendizado;
- como apresenta opiniões.

A voz NÃO deve ser transformada em fórmula estrutural.

Não utilizar sempre:

Hook → problema → lista → aprendizado → CTA.

Variar naturalmente:

- abertura;
- comprimento;
- estrutura;
- ritmo;
- conclusão;
- CTA;
- quantidade de detalhes.

## Linguagem

Usar português brasileiro natural, em primeira pessoa.

Priorizar:

- linguagem profissional sem corporativês;
- informalidade moderada;
- termos técnicos usados naturalmente;
- frases e parágrafos com ritmo variado;
- clareza sem simplificação excessiva.

Expressões naturais como "a gente", "pra", "travar", "destravar" e "apanhar" podem aparecer quando forem coerentes com o contexto e com a voz.

Não transformar informalidade em caricatura.

## Anti-texto de IA

Antes de finalizar, verificar sinais como:

- introdução genérica;
- excesso de frases de efeito;
- moral artificial;
- estrutura previsível;
- excesso de adjetivos como "transformador", "revolucionário", "poderoso";
- listas artificiais;
- repetição de construções;
- excesso de emojis;
- CTA obrigatório;
- conclusão genérica;
- linguagem corporativa/artificial;
- afirmações excessivamente categóricas.

Se o texto parecer excessivamente "perfeito" ou genérico para LinkedIn, simplificar e aproximar da voz real da usuária.

## Tamanho

Não estabelecer limite rígido de caracteres.

Escolher entre texto curto, médio ou longo de acordo com a complexidade da ideia.

Não aumentar o texto apenas para parecer mais completo.

Evitar repetição e preenchimento.

## Emojis

São opcionais.

A quantidade deve variar conforme o contexto.

Pode haver:

- nenhum;
- um;
- alguns;

mas nunca utilizar emojis apenas como decoração ou seguir uma quantidade fixa.

## Hashtags

São opcionais.

Quando sugeridas:

- usar poucas;
- manter relevância temática;
- evitar listas extensas.

A ausência de hashtags também é válida.

## CTA

CTA é opcional.

Só utilizar quando existir um convite ou pergunta realmente natural.

Não adicionar CTA automaticamente.

Não terminar todos os posts com pergunta.

## Anti-repetição

Consultar histórico recente quando disponível.

Comparar:

- tema;
- ângulo;
- estrutura;
- abertura;
- ritmo;
- conclusão;
- CTA;
- exemplos;
- perspectiva;
- linguagem.

Repetição não é automaticamente proibida.

Um tema pode voltar quando existir:

- novo ângulo;
- nova experiência;
- nova descoberta;
- novo contexto;
- nova perspectiva.

Evitar produzir uma simples variação superficial de um post recente.

## Revisão interna

Antes de salvar o Draft, realizar uma revisão interna.

### Autenticidade
Foi inventada alguma experiência, pensamento ou opinião?

### Precisão
Existe algum fato externo sem base suficiente?

### Nível técnico
A usuária está sendo apresentada como mais experiente do que realmente é?

### Voz
Isso poderia realmente ser escrito pela usuária?

### Repetição
O post está muito parecido com conteúdos anteriores?

### Clareza
Existe uma ideia central clara?

### Excesso
Existe alguma parte que só está aumentando o tamanho do texto sem agregar?

Corrigir problemas encontrados antes de salvar.

## Status do Draft

Utilizar exatamente um dos seguintes estados:

### pronto para revisão

Existe contexto suficiente, não há pendência crítica e o texto foi produzido.

### precisa de contexto

Falta informação pessoal, profissional ou técnica necessária para escrever corretamente.

### precisa de validação factual

Existe informação externa ou factual que precisa ser confirmada antes de considerar o Draft confiável.

### precisa de revisão de voz

O conteúdo pode ser desenvolvido, mas a execução ainda precisa de ajuste significativo para ficar natural e coerente com a voz.

Nenhum desses estados significa aprovação.

A Draft Skill nunca aprova o próprio conteúdo.

Existe apenas um `Status` por Draft, mas pode haver múltiplas pendências.

Quando mais de um status se aplicar ao mesmo Draft, utilizar como `Status` o bloqueio principal que impede a geração ou a confiabilidade do conteúdo. As demais questões devem ser registradas detalhadamente em `### Pendências`.

Exemplos:

- se falta uma situação pessoal/profissional necessária para escrever o post e também existe uma informação factual [A CONFIRMAR], usar `precisa de contexto` como status principal e registrar a validação factual também em `Pendências`;
- se o texto pode ser escrito, mas depende de confirmar um fato externo essencial, usar `precisa de validação factual`;
- nunca omitir uma pendência apenas porque outra foi escolhida como status principal.

## Arquivo de saída

A sessão deve ser salva em:

drafts/YYYY-MM-DD-<slug>.md

Manter o padrão de um arquivo por sessão.

O arquivo deve conter os Drafts gerados naquela execução.

Não criar um arquivo separado para cada post.

## Template de saída

Usar esta estrutura:

# Drafts — YYYY-MM-DD

## IDEA-YYYYMMDD-01

### Status
pronto para revisão

### Ideia de origem
IDEA-YYYYMMDD-01

### Pilar
...

### Origem
...

### Formato
...

### Título provisório
...

### Ângulo
...

### Post

[texto]

### Hashtags sugeridas
...

### Observações para revisão
...

### Pendências
Nenhuma

### Base utilizada
- context/...
- context/...
- ideas/...
- research/...

Quando houver pendências, descrevê-las explicitamente.

Quando o post não for gerado porque a ideia está bloqueada ou falta contexto/validação necessária:
- manter a seção `### Post`;
- preencher com exatamente: `Não gerado — ver Pendências`;
- omitir a seção `### Hashtags sugeridas`.

## Relação entre Draft e aprovação

A Draft Skill apenas gera o conteúdo.

Fluxo:

RESEARCH
↓
IDEAS
↓
DRAFT
↓
REVISÃO HUMANA
↓
APROVAÇÃO OU ALTERAÇÕES
↓
APPROVED

A Draft Skill:

- não aprova;
- não publica;
- não move conteúdo automaticamente para approved/;
- não publica no LinkedIn.

A decisão final sempre pertence à usuária.

## O que a Draft Skill NÃO faz

Não:

- pesquisar novos assuntos;
- criar ideias editoriais;
- inventar informações;
- inventar experiências;
- inventar opiniões;
- inventar resultados;
- transformar estudo em experiência;
- transformar projeto pessoal em experiência profissional;
- decidir publicação;
- publicar;
- gerar automaticamente imagens;
- gerar automaticamente carrosséis;
- substituir a revisão humana;
- tratar informação [A CONFIRMAR] como fato.

## Princípio central

"Um bom Draft não é o texto mais elaborado que a IA consegue produzir. É o texto mais autêntico que consegue ser construído a partir do que realmente sabemos sobre a usuária."
