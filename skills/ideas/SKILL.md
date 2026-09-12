---
name: ideas
description: Transforma pesquisas e contexto do perfil em ideias de conteúdo relevantes, autênticas e não repetitivas para LinkedIn, definindo pauta, ângulo e formato sem escrever o post final.
---

# Ideas Skill

## Objetivo

Transformar informações de pesquisa, contexto profissional e histórico de conteúdo em ideias concretas de posts para LinkedIn.

A responsabilidade desta skill é fazer a ponte entre:

Research → contexto da pessoa → oportunidade editorial → ideia de conteúdo

A skill deve identificar quais assuntos têm potencial real para serem transformados em conteúdo para o perfil, definir o melhor ângulo editorial e propor formatos adequados.

A skill NÃO deve escrever o post final.

A skill NÃO deve inventar experiências, opiniões, resultados, conhecimentos ou histórias pessoais.

A qualidade e a autenticidade da ideia são mais importantes do que a quantidade de ideias produzidas.


# Antes de gerar ideias

Antes de trabalhar nas ideias, ler obrigatoriamente:

- `context/about-me.md`
- `context/career.md`
- `context/technical-profile.md`
- `context/content-pillars.md`
- `context/linkedin-voice.md`

Também consultar, quando existirem:

- `research/`
- `ideas/`
- `drafts/`
- `approved/`
- `published/`

O histórico deve ser usado principalmente para:

- evitar repetição;
- identificar assuntos já explorados;
- identificar ângulos já utilizados;
- entender padrões recentes de conteúdo;
- identificar oportunidades de evolução de temas já abordados.

Não presumir que um assunto é novo apenas porque a formulação é diferente.


# Entrada principal

A principal entrada da skill pode ser:

1. Uma pesquisa recente em `research/`;
2. Uma solicitação explícita do usuário para gerar ideias sobre determinado assunto;
3. Uma combinação de pesquisa + contexto do perfil;
4. Um assunto ou acontecimento específico fornecido pelo usuário.

Quando houver pesquisa disponível, utilizá-la como fonte factual principal para novidades e acontecimentos recentes.

Quando a ideia depender de informação factual externa, não inventar informações ausentes na pesquisa.

### Herança de [A CONFIRMAR] da Research

- Se uma informação da Research estiver marcada como [A CONFIRMAR], a Ideas preserva essa incerteza — não a transforma em fato confirmado
- Registrar a pendência em `Base necessária` e/ou `Pendências para Draft`
- Se a ideia depender dessa informação para ser escrita corretamente, `Pronta para Draft` deve ser `não`
- Nunca transformar uma informação [A CONFIRMAR] em fato confirmado, experiência profissional ou disponibilidade de tecnologia
- Roadmap/futuro continua seguindo as regras já definidas na Research (não tratar como funcionalidade disponível)


# Definir o escopo editorial

As ideias devem respeitar os pilares definidos em `context/content-pillars.md`.

Os pilares são uma orientação editorial, não uma obrigação de distribuição.

Não criar ideias artificiais apenas para preencher um pilar.

Priorizar:

1. relevância para o perfil;
2. conexão com experiência real ou aprendizado real;
3. potencial de gerar uma perspectiva própria;
4. novidade ou evolução do assunto;
5. utilidade/interesse para a audiência;
6. autenticidade;
7. variedade em relação ao conteúdo recente.

Databricks é um diferencial importante do perfil, mas não deve dominar artificialmente todas as ideias.

O agente deve buscar equilíbrio entre:

- experiência técnica real;
- evolução para Data Engineering;
- aprendizado;
- arquitetura;
- IA aplicada a dados;
- projetos pessoais;
- carreira.


# O que torna uma ideia válida

Uma ideia deve responder claramente:

- Sobre o que seria o conteúdo?
- Por que esse assunto faz sentido para este perfil?
- Qual é a perspectiva própria?
- O que existe de concreto para dizer?
- Em qual pilar ela se encaixa?
- O conteúdo seria baseado em experiência, aprendizado, projeto, observação, notícia ou combinação desses elementos?
- Qual seria o formato mais adequado?
- Existe material suficiente para desenvolver o conteúdo sem inventar?

Uma ideia fraca normalmente é apenas:

"Falar sobre X"

Uma ideia melhor é:

"Explorar X a partir de Y, porque isso se conecta com Z que já foi vivido/estudado pela autora."

A ideia deve ser suficientemente concreta para que a etapa de Draft consiga escrever o conteúdo sem precisar descobrir novamente qual é a pauta.


# Identificar a origem da ideia

Cada ideia deve indicar sua origem.

Classificações possíveis:

- `experiência profissional`
- `trajetória profissional`
- `aprendizado`
- `projeto pessoal`
- `pesquisa/notícia`
- `observação`
- `combinação`

Exemplos:

### Experiência profissional

Uma situação real envolvendo Gold, Databricks, Unity Catalog ou modelagem.

### Trajetória profissional

Conteúdo derivado da evolução profissional, transições de carreira, mudanças
de função ou reflexões sobre o próprio percurso (ex.: a transição do suporte
para dados, a descoberta da Analytics Engineering).

### Aprendizado

Algo que está sendo estudado, como Airflow, cloud ou arquitetura de dados.

Deve ser apresentado como aprendizado, nunca como experiência profissional.

### Projeto pessoal

Algo desenvolvido no Projeto TEA ou no Nexum Sales Assistant.

Deve ser claramente identificado como projeto pessoal/estudo, não como trabalho profissional.

### Pesquisa/notícia

Uma novidade do ecossistema de dados que tenha conexão legítima com o perfil.

Não transformar automaticamente toda novidade em conteúdo.

### Observação

Uma percepção própria baseada em experiências ou estudos documentados.

### Combinação

Por exemplo:

novidade do Databricks + experiência prática com Gold + reflexão sobre consumo de dados por agentes.


# Conexão com o perfil

Para cada candidato, avaliar a força da conexão com o perfil.

Classificação:

- `forte`
- `moderada`
- `fraca`

Uma conexão forte ocorre quando existe uma ligação clara entre o assunto e:

- experiência profissional real;
- aprendizado atual relevante;
- projeto pessoal real;
- trajetória profissional;
- interesses técnicos centrais.

Uma conexão fraca não deve ser promovida apenas porque o assunto está em alta.

Quando a conexão for fraca, considerar descartar a ideia.


# Definir o ângulo editorial

O ângulo é responsabilidade desta skill.

A Research pode fornecer um possível ângulo preliminar, mas a Ideas deve transformá-lo em uma proposta editorial concreta.

O ângulo deve responder:

"De que ponto de vista esta pessoa vai falar sobre esse assunto?"

Evitar ângulos genéricos como:

- "o que é X";
- "X explicado";
- "5 coisas sobre X";
- "tudo sobre X";
- "por que X vai revolucionar o mercado".

Preferir ângulos baseados em:

- uma descoberta;
- uma dúvida real;
- uma decisão técnica;
- uma dificuldade;
- uma comparação;
- uma mudança de percepção;
- uma conexão entre conceitos;
- algo que parecia simples e não era;
- algo aprendido na prática;
- algo que ela faria diferente hoje;
- uma novidade vista através da realidade de quem trabalha/aprende com dados.

O ângulo não precisa ser polêmico.

Também não deve criar uma opinião artificial apenas para gerar engajamento.


# Experiência x aprendizado

Esta é uma regra crítica.

Antes de criar cada ideia, determinar qual é o nível de legitimidade do assunto para o perfil.

### Experiência real

Pode utilizar linguagem como:

- "no meu trabalho..."
- "uma coisa que percebi..."
- "quando fizemos..."
- "na prática..."
- "um problema que encontrei..."

Somente quando houver base no contexto ou em informações fornecidas pelo usuário.

### Conhecimento em construção

Utilizar linguagem compatível com:

- "estou estudando..."
- "comecei a entender..."
- "uma coisa que me chamou atenção..."
- "estou testando..."
- "fui estudar X e percebi Y..."

Nunca transformar estudo em autoridade.

### Projeto pessoal

Deixar claro que se trata de:

- projeto pessoal;
- estudo;
- portfólio;
- desafio;
- experimento.

Nunca apresentar como projeto profissional.

### Assunto ainda muito distante

Não criar conteúdo apenas porque é relacionado à área de dados.

Se não houver conexão suficiente, descartar.


# Avaliação dos candidatos

Cada candidato deve ser avaliado considerando:

1. Relevância para o perfil
2. Força da conexão pessoal/profissional
3. Existência de perspectiva própria
4. Legitimidade para falar sobre o assunto
5. Potencial de gerar conteúdo concreto
6. Novidade em relação ao histórico
7. Interesse potencial para a audiência
8. Adequação ao pilar
9. Adequação ao formato
10. Risco de parecer conteúdo genérico ou produzido por IA
11. Necessidade de informações adicionais
12. Potencial de desenvolvimento na etapa de Draft

Não é necessário transformar todos esses critérios em notas numéricas.

O objetivo é raciocinar editorialmente, não criar uma pontuação artificial.


# Classificação da força da ideia

Cada ideia pode receber:

- `alta`
- `média`
- `baixa`

### Alta

Possui forte conexão com o perfil, perspectiva própria clara e material suficiente para desenvolver um conteúdo interessante.

### Média

Possui potencial, mas depende de algum contexto adicional, melhor desenvolvimento do ângulo ou de uma oportunidade futura.

### Baixa

É válida como assunto, mas possui pouca diferenciação, conexão fraca ou risco elevado de gerar conteúdo genérico.

Ideias de baixa força podem ser descartadas em vez de serem salvas.


# Formato do conteúdo

A skill deve sugerir o formato mais adequado para a ideia.

Formatos possíveis:

- `post textual`
- `carrossel`
- `imagem + texto`
- `storytelling técnico`
- `reflexão profissional`
- `aprendizado técnico`
- `comparação`
- `explicação visual`
- `estudo de caso pessoal`

O formato deve nascer da ideia.

Não escolher carrossel apenas porque carrosséis costumam gerar mais engajamento.

Se o assunto funciona melhor em texto, sugerir texto.

Se exige comparação, sequência ou explicação visual, carrossel pode ser melhor.

Se depende de uma única visualização simples, imagem + texto pode ser suficiente.

A geração automática de imagens/carrosséis será tratada por etapas posteriores do projeto.


# Complexidade e esforço

Quando relevante, classificar o esforço estimado para transformar a ideia em conteúdo:

- `baixo`
- `médio`
- `alto`

Considerar:

- quantidade de contexto necessária;
- necessidade de validação factual;
- necessidade de exemplos;
- necessidade de visual;
- complexidade da estrutura;
- dependência de informações ainda não disponíveis.

A complexidade não deve impedir uma boa ideia, mas ajuda a etapa posterior de planejamento.


# Atualidade e timing

Quando uma ideia vier de uma pesquisa, preservar a classificação de recência encontrada na Research.

Exemplos:

- notícia recente;
- próximo da janela;
- recorrente;
- evergreen;
- anúncio de roadmap (futuro);
- antiga que voltou.

Não tratar roadmap como funcionalidade disponível.

Não transformar automaticamente uma notícia recente em pauta.

O fato de algo ser novo é apenas um dos critérios.

Uma notícia antiga pode gerar uma boa ideia se houver:

- novo ângulo;
- nova experiência;
- novo projeto;
- nova aplicação;
- mudança relevante no contexto.


# Anti-repetição

Antes de salvar uma ideia, consultar o histórico recente de:

- `ideas/`
- `drafts/`
- `approved/`
- `published/`

Avaliar não apenas repetição literal, mas também repetição de:

- assunto central;
- ângulo;
- estrutura;
- exemplo;
- conclusão;
- perspectiva.

Como referência:

- evitar que o mesmo assunto seja central novamente em intervalo muito curto;
- evitar mais de duas ideias consecutivas excessivamente semelhantes;
- não repetir um tema apenas porque existe uma nova notícia;
- uma nova abordagem pode justificar revisitar um tema anteriormente explorado.

A regra deve ser flexível quando houver uma oportunidade realmente relevante.


# Diversidade editorial

As ideias geradas em uma mesma sessão devem, quando possível, apresentar variedade.

Evitar gerar cinco ideias que sejam apenas pequenas variações da mesma pauta.

Quando houver vários candidatos válidos, buscar variedade em:

- pilar;
- origem;
- formato;
- profundidade técnica;
- perspectiva;
- tamanho/esforço.

A variedade é desejável, mas não deve superar a qualidade.


# Relação com audiência

A ideia deve considerar quem poderia se interessar pelo conteúdo.

Não é necessário definir uma persona rígida para cada post.

Perguntar:

- Isso é útil para alguém que trabalha com dados?
- Isso pode interessar a pessoas em transição/evolução de carreira em dados?
- Isso pode gerar identificação com quem está aprendendo?
- Existe uma decisão, descoberta ou aprendizado que vale compartilhar?
- O assunto tem utilidade ou perspectiva além de simplesmente anunciar uma tecnologia?

Evitar conteúdo criado exclusivamente para maximizar métricas de vaidade.


# Conteúdo técnico

Para conteúdo técnico:

- priorizar experiência, decisões e aprendizados;
- evitar transformar o post em documentação;
- evitar tutorial excessivamente genérico;
- explicar conceitos quando necessário;
- manter profundidade compatível com o nível real da autora;
- não utilizar jargão apenas para parecer técnico.

Quando houver código, só propor se ele contribuir diretamente para a ideia.


# Conteúdo sobre notícias e novidades

Uma notícia só deve virar ideia quando houver uma conexão editorial legítima.

Possíveis caminhos:

- "o que essa novidade me fez pensar";
- "como isso se relaciona com algo que já vejo no meu trabalho";
- "uma tecnologia que estou estudando e que ganhou uma nova aplicação";
- "uma mudança que pode afetar determinada prática";
- "uma dúvida que essa novidade levantou".

Evitar:

- simplesmente reproduzir o anúncio;
- resumir documentação;
- transformar release notes em post;
- criar opinião que não existe;
- declarar impacto futuro como certeza.

Quando o impacto ainda for especulativo, deixar isso explícito.


# Conteúdo sobre aprendizado

Conteúdo de aprendizado deve mostrar processo, não falsa autoridade.

Bons sinais:

- descoberta;
- dificuldade;
- comparação entre conceitos;
- erro;
- mudança de entendimento;
- aplicação em projeto;
- relação entre teoria e prática.

Evitar:

- "aprenda X em 5 passos";
- resumo superficial da documentação;
- transformar qualquer estudo em grande lição de carreira;
- afirmar domínio que não existe.


# Conteúdo sobre projetos pessoais

Projetos pessoais devem ser avaliados pelo que realmente aconteceu.

Uma ideia pode surgir de:

- decisão de arquitetura;
- construção de pipeline;
- erro;
- dificuldade;
- descoberta;
- modelagem;
- organização do projeto;
- ferramenta utilizada;
- comparação entre abordagens.

Não inventar:

- métricas;
- resultados;
- usuários;
- impacto;
- escala;
- dificuldades que não foram relatadas;
- funcionalidades ainda não construídas.

Usar o nome **Nexum Sales Assistant** quando o projeto for referido pelo nome.


# Conteúdo de carreira

Conteúdos de carreira devem partir da experiência real.

Podem explorar:

- transição profissional;
- descoberta da Analytics Engineering;
- evolução em direção a Data Engineering;
- dificuldades de aprendizado;
- mudanças de perspectiva;
- relação entre trabalho e estudo;
- coisas que gostaria de ter entendido antes.

Evitar:

- frases motivacionais genéricas;
- conselhos universais;
- "5 passos para mudar de carreira";
- discurso de guru;
- transformar uma experiência individual em regra para todos.


# O que descartar

Descartar candidatos quando:

- não existe conexão suficiente com o perfil;
- dependeriam de experiência que não está documentada;
- exigiriam inventar opinião;
- são apenas repetição recente;
- são notícias sem ângulo próprio;
- são genéricos demais;
- dependem de conhecimento muito acima do nível documentado;
- parecem existir apenas para preencher calendário;
- não há material suficiente para desenvolver o conteúdo;
- apresentam risco elevado de parecer conteúdo artificial ou de autoridade falsa.

Quando descartar uma pauta potencialmente interessante, registrar brevemente o motivo quando isso for útil para auditoria.


# Seleção e quantidade de ideias

A skill deve ser seletiva.

Não existe uma quantidade fixa obrigatória de ideias por pesquisa.

Como referência:

- pesquisas com poucos candidatos relevantes podem gerar poucas ideias;
- pesquisas com muitos candidatos relevantes podem gerar mais ideias;
- não criar ideias apenas para atingir uma quantidade mínima.

Quando houver vários candidatos válidos, priorizar as melhores ideias e evitar pequenas variações da mesma pauta.

A skill pode apresentar candidatos descartados ou de baixa força apenas quando isso ajudar a explicar a seleção, mas não deve poluir o arquivo principal de ideias com pautas claramente fracas.


# Saída

A skill deve gerar ideias estruturadas.

### Salvamento

- Salvar a sessão de ideias em `ideas/`, em um arquivo por sessão
- Convenção de nome: `ideas/YYYY-MM-DD-<slug>.md`
- O arquivo contém as ideias selecionadas daquela execução

### ID

- Formato: `IDEA-YYYYMMDD-XX`
- `XX` é sequencial dentro da sessão/arquivo (01, 02, 03...)
- Não criar contador global nem mecanismo adicional de IDs neste momento

Cada ideia deve conter:

## Identificação

- `ID`
- `Título provisório`
- `Data da geração`

## Classificação

- `Pilar`
- `Origem`
- `Força da ideia`
- `Conexão com o perfil`
- `Recência` — quando aplicável
- `Formato sugerido`
- `Complexidade estimada`

## Conteúdo

- `Assunto`
- `Ângulo`
- `Por que faz sentido para o perfil`
- `Ponto central`
- `Possíveis pontos de desenvolvimento`
- `Base necessária`
- `Riscos ou cuidados`

## Relação com histórico

- `Conteúdos/ideias semelhantes encontrados`
- `Como esta ideia se diferencia`

## Próxima etapa

- `Pronta para Draft: sim/não`
- `Pendências para Draft`: quando "não", registrar explicitamente o que falta; quando "sim", registrar `Nenhuma`

"Pronta para Draft" significa apenas que existe contexto suficiente para iniciar a escrita.

Não significa aprovação para publicação.


# Template

Cada ideia salva deve seguir uma estrutura semelhante:

# [Título provisório]

**ID:** IDEA-YYYYMMDD-XX  
**Data da geração:** YYYY-MM-DD

## Classificação

- **Pilar:** 
- **Origem:** 
- **Força da ideia:** alta | média | baixa
- **Conexão com o perfil:** forte | moderada | fraca
- **Recência:** 
- **Formato sugerido:** 
- **Complexidade estimada:** baixa | média | alta

## Assunto

Descrição objetiva da pauta.

## Ângulo

Qual é a perspectiva específica que diferencia esta ideia de um conteúdo genérico sobre o assunto.

## Por que faz sentido para o perfil

Conexão com experiência, aprendizado, projeto ou trajetória documentados.

## Ponto central

A principal mensagem que o conteúdo poderia desenvolver.

## Possíveis pontos de desenvolvimento

- 
- 
- 

## Base necessária

Informações, experiências ou fontes necessárias para escrever o conteúdo sem inventar.

## Riscos ou cuidados

- 
- 

## Relação com histórico

Conteúdos ou ideias semelhantes encontrados e como esta proposta se diferencia.

## Próxima etapa

- **Pronta para Draft:** sim | não
- **Pendências para Draft:** 


# Limites desta skill

Esta skill NÃO deve:

- escrever o post final;
- gerar legenda final;
- gerar hashtags finais;
- criar imagens;
- criar carrosséis;
- publicar conteúdo;
- recomendar publicação automática;
- inventar experiências;
- inventar opiniões;
- inventar resultados;
- transformar estudo em experiência profissional;
- transformar projeto pessoal em experiência profissional;
- transformar a autora em especialista em assuntos que ela está aprendendo;
- decidir sozinha que determinado conteúdo deve ser publicado.

A aprovação humana continua obrigatória.


# Princípio central

A melhor ideia não é necessariamente a mais nova, técnica ou viral.

A melhor ideia é aquela que combina:

**assunto relevante + conexão real com o perfil + perspectiva própria + material suficiente para desenvolver um conteúdo autêntico.**

Quando não houver essa combinação, é melhor não criar uma ideia.
