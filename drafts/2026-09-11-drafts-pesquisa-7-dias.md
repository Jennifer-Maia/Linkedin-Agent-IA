# Drafts — 2026-09-11

## IDEA-20260911-01

### Status
pronto para revisão

### Ideia de origem
IDEA-20260911-01

### Pilar
2 — Analytics Engineering → Data Engineering

### Origem
pesquisa/notícia (+ observação)

### Formato
reflexão profissional

### Título provisório
O consumidor da minha camada Gold está mudando

### Ângulo
Não é "Databricks lançou X". É "eu passo o dia preparando dados para consumo — e o consumo está mudando de forma". A perspectiva de quem monta a prateleira, observando que o próximo consumidor dela pode ser um agente de IA, não apenas um dashboard.

### Post

Parte considerável do meu trabalho é deixar dados prontos para consumo. A camada Gold existe para isso: quem chega até ela não deveria precisar entender como o dado foi parar lá — só que ele está certo, modelado e documentado o suficiente para responder às perguntas que vão fazer.

Essa semana, a Databricks anunciou um modelo de busca próprio para os agentes de dados da plataforma: o Adaptive Instructed-Retriever. Não vou entrar na parte técnica — os benchmarks divulgados são da própria Databricks, e não foi isso que me chamou atenção. O que me pegou foi o alvo do investimento: ajudar agentes a encontrar tabelas, notebooks e dashboards dentro do workspace.

E é aí que o meu trabalho entra na conversa.

Se o próximo consumidor da camada Gold for um agente de IA, ele vai consultar a minha tabela do mesmo jeito que um analista consulta. A diferença é que ele não me pergunta nada — ele interpreta o que encontrar.

Comentários e tags no Unity Catalog fazem parte da minha rotina. Sempre encarei isso como organização e documentação. Agora estou começando a ver de outro jeito: é a interface que os próximos consumidores vão usar.

Não sei quanto tempo leva até um agente consultar uma tabela que eu modelei. Mas quando isso acontecer, quero que ele entenda o que encontrar.

### Hashtags sugeridas
#Databricks #AnalyticsEngineering #DataEngineering

### Observações para revisão
- A "mudança de percepção" (organização → interface de consumo) é a tese editorial proposta — validar com a usuária se reflete o que ela pensa.
- A menção a comentários e tags no Unity Catalog é baseada na experiência documentada; nenhum detalhe novo foi adicionado.
- Não há alegação de uso de Genie ou do retriever. O texto trata a novidade como observação do ecossistema.

### Pendências
Nenhuma

### Base utilizada
- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md

## IDEA-20260911-02

### Status
precisa de contexto

### Ideia de origem
IDEA-20260911-02

### Pilar
1 — Databricks & Lakehouse na prática

### Origem
combinação (pesquisa/notícia + experiência profissional)

### Formato
aprendizado técnico

### Título provisório
time_bucket: uma função nova no meu SQL de todo dia

### Ângulo
Comparação prática nascida de um teste real: onde ela usaria `date_trunc` e onde `time_bucket` resolve melhor — a partir da experiência de testar, não de um resumo de release note.

### Post
Não gerado — a ideia está marcada como "Pronta para Draft: não" e a Draft Skill não contorna pendências inventando informações. Ver Pendências.

### Hashtags sugeridas
— (a sugerir quando o post for gerado)

### Observações para revisão
Nenhuma ainda — o post não foi escrito.

### Pendências
- Falta o teste real da função `time_bucket` no ambiente da usuária. A narrativa depende de uma descoberta real do teste; sem isso, qualquer texto inventaria experiência.
- [A CONFIRMAR] disponibilidade da função na versão/runtime do workspace dela (a release note de 08/09 não informa versão).

### Base utilizada
- context/technical-profile.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md

## IDEA-20260911-03

### Status
pronto para revisão

### Ideia de origem
IDEA-20260911-03

### Pilar
4 — IA no meu fluxo de dados e desenvolvimento

### Origem
pesquisa/notícia

### Formato
reflexão (texto curto)

### Título provisório
Quando a plataforma do meu trabalho passou a falar a língua dos meus estudos

### Ângulo
Duas realidades dela que sempre viveram separadas — Databricks (trabalho) e MCP/Claude Code (estudos e projetos) — com data prevista de se encontrarem. A reflexão é sobre o encontro e o que ele significa para o fluxo dela, não sobre a feature.

### Post

Tem duas partes da minha rotina que nunca conversaram entre si.

De um lado, o Databricks — onde eu trabalho, modelando dados na camada Gold e organizando o Unity Catalog. Do outro, o Claude Code com Skills e MCP, que eu uso nos meus estudos e projetos pessoais.

Essa semana, lendo a documentação oficial da Databricks, vi que o Unity Gateway está previsto para GA "em breve" — e a lista de capacidades planejadas inclui MCP services. Também estão chegando Databricks MCP Services para Slack, GitHub, Atlassian e Google Drive, com leitura e escrita habilitadas por padrão.

Nada disso está disponível ainda. Roadmap é roadmap.

Mas foi a primeira vez que vi a plataforma do meu trabalho apontando na direção das ferramentas dos meus estudos — e isso me deixou curiosa sobre o que vem por aí.

Se avançar, meu fluxo de estudo e meu fluxo de trabalho podem passar a falar a mesma língua. Por enquanto, fico acompanhando.

### Hashtags sugeridas
#Databricks #MCP #ClaudeCode

### Observações para revisão
- O trecho sobre o uso de Claude Code/Skills/MCP é genérico de propósito: só usa o que está documentado no contexto. A usuária pode adicionar os detalhes reais do fluxo dela.
- "Isso me deixou curiosa" é uma reação pessoal proposta — validar se reflete o que ela sente.
- O status de roadmap está explícito no texto ("Nada disso está disponível ainda"), conforme as regras da Research.

### Pendências
Nenhuma

### Base utilizada
- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md

## IDEA-20260911-04

### Status
pronto para revisão

### Ideia de origem
IDEA-20260911-04

### Pilar
4 — IA no meu fluxo de dados e desenvolvimento

### Origem
pesquisa/notícia

### Formato
notícia contextualizada

### Título provisório
Um kit que transforma o Claude Code em ambiente de dados

### Ângulo
"Encontrei um kit open-source que faz algo que eu nem sabia que queria: tratar o editor que já uso como ambiente de dados." Descoberta honesta de quem usa Claude Code com Skills e estuda Airflow — sem avaliação de especialista e sem precisar de conta GCP para a reflexão (só o deploy exige).

### Post

O Google Cloud publicou essa semana um post sobre um projeto open-source que me deixou pensando: o Data Agent Kit, que instala skills de dados direto em IDEs e CLIs — incluindo o Claude Code, que eu uso nos meus estudos e projetos.

A ideia central: em vez de sair do editor para criar um DAG de Airflow, você descreve o pipeline em YAML declarativo e uma skill agentica gera, publica e ajuda a diagnosticar o DAG. O deploy vai para o Managed Airflow do Google — ou seja, o uso completo pede conta GCP.

Não instalei, não testei. Então isso aqui não é avaliação — é curiosidade registrada.

O que me chamou a atenção não foi o Google em si. Foi o padrão: skills + YAML + orquestração entrando no fluxo de quem já estuda com o Claude Code aberto. Estou estudando Airflow agora, e ver DAG tratado como artefato declarativo — em vez do boilerplate Python que estou aprendendo a escrever — me fez pensar sobre o que de fato vou precisar entender de verdade.

Não sei se um dia vou usar o kit. Mas ele me serviu como uma boa pergunta de estudo. Se alguém aqui já testou algo parecido no próprio fluxo, quero muito ouvir como foi.

### Hashtags sugeridas
#Airflow #ClaudeCode #DataEngineering

### Observações para revisão
- "Não instalei, não testei" é uma afirmação de não-uso — segura, mas a usuária pode confirmar.
- O CTA final é opcional; mantê-lo depende do interesse dela na conversa.
- Nenhuma avaliação do kit foi feita — o texto registra a descoberta e o padrão, não o produto.
- Correção aplicada após a Review de 11/09: abertura reescrita para não sugerir lançamento nesta semana (o kit foi anunciado na NEXT '26; o post do blog é de 10/09).

### Pendências
Nenhuma

### Base utilizada
- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md

## IDEA-20260911-05

### Status
pronto para revisão

### Ideia de origem
IDEA-20260911-05

### Pilar
5 — Aprendendo em público

### Origem
aprendizado (+ pesquisa/notícia como gatilho)

### Formato
aprendizado técnico (texto curto)

### Título provisório
Estudando Airflow, esbarrei na plataforma do meu trabalho

### Ângulo
A descoberta de que o orquestrador que ela está estudando fala com a plataforma que ela já usa todo dia — e o que esse cruzamento revela sobre o caminho Analytics Engineering → Data Engineering.

### Post

Estou estudando Airflow e, no meio das leituras, esbarrei numa release note da Databricks desta semana: o DatabricksSubmitRunOperator passou a suportar o performance mode padrão para execuções pontuais.

A release note em si é pequena. O que me pegou foi o contexto.

Estou começando a entender como o Airflow conversa com as ferramentas que ele orquestra — nesse caso, via operadores que falam com a Jobs API do Databricks. A mesma plataforma que eu uso no meu dia a dia de trabalho.

Não é sempre que um assunto de estudo aponta direto para uma ferramenta que eu já conheço da prática. Estudar ficou bem mais concreto depois disso.

### Hashtags sugeridas
#Airflow #Databricks

### Observações para revisão
- Airflow aparece estritamente como estudo ("estou estudando", "começando a entender") — nenhuma alegação de uso profissional de orquestração ou da Jobs API.
- "Estudar ficou bem mais concreto" é a percepção proposta — validar se reflete a experiência real de estudo dela.
- Correção aplicada após a Review de 11/09: "foi a primeira vez" → "não é sempre" (afirmação de trajetória sem base documental) e "todos os dias" → "no meu dia a dia" (frequência não documentada).
- A ação "esbarrei numa release note" atribui a leitura à usuária — confirmar familiaridade com a fonte antes de publicar.

### Pendências
Nenhuma

### Base utilizada
- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md

## IDEA-20260911-06

### Status
pronto para revisão

### Ideia de origem
IDEA-20260911-06

### Pilar
5 — Aprendendo em público

### Origem
pesquisa/notícia + aprendizado

### Formato
aprendizado/reflexão (texto curto)

### Título provisório
Comecei a estudar dbt e a engine mudou

### Ângulo
"Escolhi uma ferramenta para estudar e ela está mudando de engine embaixo de mim." O desafio — e a graça — de estudar um ecossistema em movimento. Sem autoridade, sem tutorial, sem "dica de estudo" genérica.

### Post

Comecei a estudar dbt e descobri que a ferramenta está mudando de engine embaixo de mim.

No começo do mês saiu o primeiro release candidate do dbt Core v2, reescrito em Rust e com a engine relicenciada como Apache 2.0. E a partir do dia 14, o `pip install dbt` passa a instalar a versão nova — quem não fixar versão recebe a v2, que ainda não tem comandos como `dbt cancel` e `dbt sqlfluff`.

Para quem está começando, isso é uma aula de contexto: as ferramentas que a gente estuda não ficam paradas esperando a gente alcançar.

Não vou fingir que entendo as implicações da engine nova — não entendo. Agora é torcer para eu alcançar a v2 antes da v3.

### Hashtags sugeridas
#dbt #AnalyticsEngineering

### Observações para revisão
- dbt aparece estritamente como estudo — sem aula, sem autoridade, sem afirmar domínio.
- O texto NÃO afirma que a usuária instala dbt via pip nem que ela é afetada pela migração do dia 14 ([A CONFIRMAR] permanece em aberto — a informação não é essencial para o post, então foi omitida).
- O fecho ("alcançar a v2 antes da v3") é leve e humorado — validar se o tom combina com ela.

### Pendências
Nenhuma

### Base utilizada
- context/about-me.md
- context/career.md
- context/technical-profile.md
- context/content-pillars.md
- context/linkedin-voice.md
- ideas/2026-09-11-ideias-pesquisa-7-dias.md
- research/2026-09-11-novidades-7-dias.md
