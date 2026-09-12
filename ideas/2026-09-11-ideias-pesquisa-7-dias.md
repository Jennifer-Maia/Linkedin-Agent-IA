# Ideias de conteúdo — 2026-09-11

> Sessão de ideias baseada em `research/2026-09-11-novidades-7-dias.md` / Contexto: arquivos em `context/` / Histórico: `ideas/`, `drafts/`, `approved/` e `published/` ainda não existem — primeira sessão de ideias, nada a evitar por repetição / Status: pronta para revisão da usuária

Ideias selecionadas: 6 (3 de força alta, 3 de força média). Candidatos descartados: 8, com motivos no fim do arquivo.

---

# O consumidor da minha camada Gold está mudando

**ID:** IDEA-20260911-01
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 2 — Analytics Engineering → Data Engineering
- **Origem:** pesquisa/notícia (+ observação)
- **Força da ideia:** alta
- **Conexão com o perfil:** forte
- **Recência:** notícia recente (09/09)
- **Formato sugerido:** reflexão profissional (post textual)
- **Complexidade estimada:** baixa

## Assunto

O anúncio do Adaptive Instructed-Retriever da Databricks — o modelo de busca que dá aos agentes Genie a capacidade de localizar tabelas, notebooks, dashboards e documentos em workspaces grandes — como ponto de partida para refletir sobre quem consome os dados que ela modela.

## Ângulo

Não é "Databricks lançou X". É "eu passo o dia preparando dados para consumo — e o consumo está mudando de forma". A perspectiva de quem monta a prateleira, observando que o próximo consumidor dela pode ser um agente de IA, não apenas um dashboard.

## Por que faz sentido para o perfil

Databricks no dia a dia (nível 1), Analytics Engineering com experiência real na camada Gold (nível 1) e IA aplicada a dados em estudo (nível 4). A novidade não muda o stack dela, mas dialoga diretamente com o trabalho de entrega de dados para consumo.

## Ponto central

Modelar dados para consumo vai além de deixar o dado pronto para o BI: é deixar o dado encontrável e interpretável para consumidores que ainda não fazem parte do fluxo — e que podem não ser humanos.

## Possíveis pontos de desenvolvimento

- O que a camada Gold entrega hoje e para quem (experiência real, sem números inventados)
- O anúncio em 1–2 linhas, com fonte oficial, sem avaliação técnica do modelo
- A pergunta central: se um agente consultar a minha tabela, ele vai entender o que ela significa? (comentários, tags e organização no Unity Catalog — experiência real)
- Fechamento: documentação e governança deixam de ser "burocracia" e passam a ser infraestrutura de consumo

## Base necessária

- Link do blog oficial da Databricks (na pesquisa)
- Experiência real com comentários/tags/organização no Unity Catalog (documentada)
- NÃO alegar uso de Genie ou do retriever — [A CONFIRMAR] se ela já usou Genie em algum contexto

## Riscos ou cuidados

- Parecer especialista em retrieval/agentes de IA — mitigar com tom de observadora: o post é sobre o trabalho dela, não sobre o modelo
- Não avaliar tecnicamente o modelo (benchmarks são da própria Databricks, sem verificação independente)

## Relação com histórico

Nenhum conteúdo anterior (pastas `ideas/`, `drafts/`, `approved/` e `published/` ainda não existem). Sem similar.

## Próxima etapa

- **Pronta para Draft:** sim

---

# time_bucket: uma função nova no meu SQL de todo dia

**ID:** IDEA-20260911-02
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 1 — Databricks & Lakehouse na prática
- **Origem:** combinação (pesquisa/notícia + experiência profissional)
- **Força da ideia:** alta
- **Conexão com o perfil:** forte
- **Recência:** notícia recente (08/09)
- **Formato sugerido:** aprendizado técnico (post textual; snippet curto de SQL só se agregar)
- **Complexidade estimada:** média

## Assunto

A função `time_bucket` do Databricks SQL — agregação temporal em intervalos de largura fixa com origem configurável, apresentada nas release notes como alternativa a `date_trunc` — testada no ambiente real dela.

## Ângulo

Comparação prática nascida de um teste real: onde ela hoje usaria `date_trunc` e onde `time_bucket` resolve melhor — a partir da experiência de testar, não de um resumo de release note.

## Por que faz sentido para o perfil

SQL e Databricks em nível de experiência prática forte (uso diário). Feature pequena, concreta e testável — conteúdo de quem executa, com risco de posicionamento praticamente nulo.

## Ponto central

A origem do intervalo muda o resultado da agregação temporal — e `time_bucket` torna essa escolha explícita em vez de implícita.

## Possíveis pontos de desenvolvimento

- O caso de agregação temporal que motivou o teste (caso real dela, sem números inventados)
- `date_trunc` × `time_bucket` com exemplo mínimo e comentado
- O que a documentação diz (release notes de 08/09)
- O que ela descobriu testando (resultado real do teste)

## Base necessária

- Teste real no ambiente dela
- [A CONFIRMAR] disponibilidade na versão/runtime do workspace dela (a release note não informa versão)
- Código curto e comentado, apenas se contribuir para a ideia

## Riscos ou cuidados

- Não virar tutorial genérico: a experiência real de testar é o centro, não a documentação da função
- Não afirmar que a função está disponível antes de confirmar no ambiente

## Relação com histórico

Nenhum conteúdo anterior. Sem similar.

## Próxima etapa

- **Pronta para Draft:** não — depende do teste no ambiente e da confirmação de disponibilidade [A CONFIRMAR]

---

# Quando a plataforma do meu trabalho passou a falar a língua dos meus estudos

**ID:** IDEA-20260911-03
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 4 — IA no meu fluxo de dados e desenvolvimento
- **Origem:** pesquisa/notícia
- **Força da ideia:** alta
- **Conexão com o perfil:** forte
- **Recência:** anúncio de roadmap (futuro) — GA "em breve", sem data [A CONFIRMAR]
- **Formato sugerido:** reflexão (post textual curto)
- **Complexidade estimada:** baixa

## Assunto

O roadmap oficial da Databricks indicando Unity Gateway em GA "em breve" — com capacidades de MCP services — e Databricks MCP Services para Slack, GitHub, Atlassian e Google Drive também "em breve", com leitura e escrita habilitadas por padrão.

## Ângulo

Duas realidades dela que sempre viveram separadas — Databricks (trabalho) e MCP/Claude Code (estudos e projetos) — com data prevista de se encontrarem. A reflexão é sobre o encontro e o que ele significa para o fluxo dela, não sobre a feature.

## Por que faz sentido para o perfil

Databricks (nível 1) + MCP com Claude Code, Skills e automações (prática pessoal documentada). Interseção rara: pouca gente da bolha AE/DE dela fala de MCP com base em prática real.

## Ponto central

O fluxo de trabalho e o fluxo de estudo estão convergindo — e quem trabalha com dados vai sentir essa convergência antes de conseguir nomeá-la.

## Possíveis pontos de desenvolvimento

- O que ela já faz hoje com MCP/Skills (detalhes reais fornecidos por ela — não inventar)
- O fato do roadmap em 2–3 linhas, com fonte oficial, deixando claro que NÃO está disponível
- O que mudaria no fluxo dela se/quando chegar (especulação declarada, não certeza)
- Sem compromisso de uso futuro — apenas o que o roadmap provoca agora

## Base necessária

- Página oficial "What's coming" da Databricks (na pesquisa)
- Detalhes reais do uso atual de MCP/Skills dela (perguntar a ela antes de escrever)

## Riscos ou cuidados

- Tratar roadmap como funcionalidade disponível — mitigar deixando o status explícito no texto
- Hype: tom curioso, sem promessas (regra de novidade da voz)

## Relação com histórico

Nenhum conteúdo anterior. Sem similar.

## Próxima etapa

- **Pronta para Draft:** sim (a reflexão pode ser iniciada; os detalhes do uso de MCP vêm dela)

---

# Um kit que transforma o Claude Code em ambiente de dados

**ID:** IDEA-20260911-04
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 4 — IA no meu fluxo de dados e desenvolvimento
- **Origem:** pesquisa/notícia
- **Força da ideia:** média
- **Conexão com o perfil:** moderada
- **Recência:** notícia recente (10/09)
- **Formato sugerido:** notícia contextualizada (post textual)
- **Complexidade estimada:** média

## Assunto

O Data Agent Kit do Google Cloud — coleção open-source que instala skills agenticas no Claude Code, Gemini CLI e Codex e cria/implanta DAGs de Airflow a partir de YAML declarativo (deploy para Managed Airflow).

## Ângulo

"Encontrei um kit open-source que faz algo que eu nem sabia que queria: tratar o editor que já uso como ambiente de dados." Descoberta honesta de quem usa Claude Code com Skills e estuda Airflow — sem avaliação de especialista e sem precisar de conta GCP para a reflexão (só o deploy exige).

## Por que faz sentido para o perfil

Claude Code/Skills (prática pessoal real), Airflow (estudo) e IA aplicada a dados (estudo). O que importa não é o GCP — é o padrão: skills + YAML declarativo + orquestração entrando no fluxo de desenvolvimento.

## Ponto central

A próxima camada das ferramentas de dados talvez não seja um produto novo — seja transformar as ferramentas que a gente já usa (editor/CLI) em ambiente de dados.

## Possíveis pontos de desenvolvimento

- O que é o kit em 2–3 linhas (fatos, fontes oficiais Google Cloud)
- Por que chamou a atenção dela: ela já usa Claude Code com Skills (real)
- A conexão com o estudo de Airflow: DAG por YAML declarativo vs boilerplate Python (estudo, não experiência)
- Possível próximo passo: explorar o plugin no Claude Code (opcional, se ela quiser)

## Base necessária

- Documentação oficial + blog do Google Cloud (na pesquisa)
- Experiência real dela com Claude Code/Skills
- NÃO afirmar uso do kit — deixar claro que é descoberta, não experiência

## Riscos ou cuidados

- Parecer especialista em GCP/agentes — mitigar como exploração; não avaliar o que não testou
- Não confundir com a IDEA-20260911-03: lá é roadmap da plataforma de trabalho; aqui é ferramenta externa descoberta — ângulos e objetos diferentes

## Relação com histórico

Nenhum conteúdo anterior. Temática próxima da IDEA-20260911-03 (IA no fluxo), mas diferenciada por origem (ferramenta externa open-source vs roadmap Databricks) e por ângulo (descoberta vs convergência).

## Próxima etapa

- **Pronta para Draft:** sim

---

# Estudando Airflow, esbarrei na plataforma do meu trabalho

**ID:** IDEA-20260911-05
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 5 — Aprendendo em público
- **Origem:** aprendizado (+ pesquisa/notícia como gatilho)
- **Força da ideia:** média
- **Conexão com o perfil:** moderada
- **Recência:** notícia recente (11/09)
- **Formato sugerido:** aprendizado técnico (post textual curto)
- **Complexidade estimada:** baixa

## Assunto

O suporte ao performance mode padrão no `DatabricksSubmitRunOperator` (release notes de 11/09) como gatilho para um post sobre o cruzamento entre o estudo de Airflow e o uso diário de Databricks.

## Ângulo

A descoberta de que o orquestrador que ela está estudando fala com a plataforma que ela já usa todo dia — e o que esse cruzamento revela sobre o caminho Analytics Engineering → Data Engineering.

## Por que faz sentido para o perfil

Airflow em estudo (nível 4) + Databricks no trabalho (nível 1). Os pilares valorizam explicitamente conectar o que está em estudo com o que já é vivenciado.

## Ponto central

Estudar orquestração ficou mais concreto no dia em que o conteúdo do estudo começou a apontar para as ferramentas do meu trabalho.

## Possíveis pontos de desenvolvimento

- O gatilho: a release note em 1–2 linhas (fato)
- O que ela entendeu sobre o papel do operador (estudo, não experiência)
- O que isso mudou na motivação/rota de estudo (real, sem exageros)

## Base necessária

- Release notes oficiais de setembro (na pesquisa)
- Contexto real do estudo de Airflow dela
- NÃO apresentar estudo como experiência profissional; NÃO afirmar uso profissional de orquestração/Jobs API

## Riscos ou cuidados

- Transformar estudo em experiência — mitigar com linguagem de estudo ("estou estudando", "comecei a entender")
- Inventar uso de jobs no trabalho — proibido; o Databricks entra como trabalho real, o Airflow como estudo

## Relação com histórico

Nenhum conteúdo anterior. Sem similar.

## Próxima etapa

- **Pronta para Draft:** sim

---

# Comecei a estudar dbt e a engine mudou

**ID:** IDEA-20260911-06
**Data da geração:** 2026-09-11

## Classificação

- **Pilar:** 5 — Aprendendo em público
- **Origem:** pesquisa/notícia + aprendizado
- **Força da ideia:** média
- **Conexão com o perfil:** moderada
- **Recência:** próximo da janela (02/09) com gatilho iminente (migração do PyPI em 14/09)
- **Formato sugerido:** aprendizado/reflexão (post textual curto)
- **Complexidade estimada:** baixa

## Assunto

O dbt Core v2.0.0-rc.1 (engine Rust, relicenciado Apache 2.0) e a mudança no `pip install dbt` a partir de 14/09 — como espelho da fase de aprendizado dela com dbt.

## Ângulo

"Escolhi uma ferramenta para estudar e ela está mudando de engine embaixo de mim." O desafio — e a graça — de estudar um ecossistema em movimento. Sem autoridade, sem tutorial, sem "dica de estudo" genérica.

## Por que faz sentido para o perfil

dbt em estudo (nível 4). O gatilho iminente (migração do PyPI em 14/09) torna o assunto oportuno sem depender de expertise — a perspectiva é de quem está começando.

## Ponto central

Estudar tecnologia em movimento é diferente de estudar tecnologia parada — e o plano de estudo precisa conviver com isso.

## Possíveis pontos de desenvolvimento

- O fato em 2–3 linhas: RC do v2, engine nova, mudança no pip (fontes oficiais)
- O que isso provocou no plano/rotina de estudo dela (real — perguntar a ela)
- Por que mudanças assim são boas ou más notícias para quem está começando (opinião dela, se existir)

## Base necessária

- GitHub oficial do dbt-labs + docs.getdbt.com (fontes na pesquisa)
- O plano/rotina de estudo de dbt dela (perguntar)
- [A CONFIRMAR] se ela instala dbt via pip — a migração a afeta de fato?

## Riscos ou cuidados

- Transformar estudo em autoridade — mitigar: sem aula de dbt, sem afirmar domínio
- Parecer afetada pela migração sem sê-lo — mitigar confirmando com ela antes

## Relação com histórico

Nenhum conteúdo anterior. Sem similar.

## Próxima etapa

- **Pronta para Draft:** sim

---

# Candidatos avaliados e descartados

Registro para auditoria da seleção (a skill permite apresentar descartes quando ajudam a explicar a seleção).

- **OpenAI Data Agent no ChatGPT Work** (pesquisa, aderência média) — proximidade temática com IDEA-20260911-01: seria uma variação da mesma pauta ("agentes consumindo dados"). Pode voltar quando houver ângulo próprio (governança/semântica) ou se a IDEA-01 não avançar.
- **Governança UC — external secrets, ABAC DENY, OpenSharing** (pesquisa, aderência média) — conhecimento acima do nível documentado (administração avançada de governança); exigiria inventar interesse ou estudo que não existe no contexto.
- **GPT-6 Astra, `ai_search` citations, MWAA 3.3.1, Excel Add-in, maintenance windows, conectores Lakeflow** (pesquisa, aderência baixa) — sem conexão editorial suficiente com o perfil.
