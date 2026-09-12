# Pesquisa — novidades dos últimos 7 dias — 2026-09-11

> Data da pesquisa: 2026-09-11 (acesso às fontes nesta data) / Escopo: novidades e assuntos relevantes para o perfil, últimos 7 dias (2026-09-04 a 2026-09-11), com foco em Databricks, Data Engineering, Analytics Engineering, Lakehouse e IA aplicada a dados / Status: pronto para a etapa de ideias

## Resumo executivo

- Aderência alta: 3 | média: 5 | baixa: 6 | descartados: 10
- Destaques: (1) a Databricks anunciou um modelo de retrieval próprio para seus agentes de dados (Genie), com foco em latência e custo; (2) a plataforma lançou melhorias de SQL e jobs diretamente úteis para o dia a dia da usuária (`time_bucket`, performance mode padrão); (3) o roadmap oficial aponta Unity Gateway e MCP Services em GA "em breve" — ponte rara entre o trabalho da usuária (Databricks) e a prática pessoal dela (MCP com Claude Code).
- Fora do ecossistema Databricks, a semana foi dominada por agentes de IA consumindo dados empresariais (OpenAI Data Agent, Google Data Agent Kit) — tema que cruza com o trabalho de camada de consumo e governança da usuária, e com os estudos dela de IA aplicada a dados.
- Janela observada: 2026-09-04 a 2026-09-11. Itens de 01–03/09, fora da janela por poucos dias, foram mantidos com sinalização explícita por relevância — decisão registrada em cada item.
- Interpretações estão marcadas como tal; fatos citam fonte e data. Nenhum item usa redes sociais como fonte factual.

## Itens com aderência alta

### Adaptive Instructed-Retriever — modelo de busca da Databricks para agentes de dados
- **Data**: 2026-09-09 (publicação do blog oficial)
- **Fonte**: tier 1 — Blog oficial da Databricks; cobertura de imprensa: SiliconANGLE e InfoWorld (tier 3, 09/09)
- **URL**: https://www.databricks.com/blog/adaptive-instructed-retriever-frontier-quality-search-2x-lower-latency
- **Classificação de recência**: notícia recente (dentro da janela)
- **Resumo factual**: a Databricks anunciou o Adaptive Instructed-Retriever, modelo próprio de retrieval que combina busca paralela de passo único com busca sequencial multi-passo, com teto fixo de passos por consulta. Treinado com ambientes sintéticos de enterprise e aprendizado por reforço (CISPO). É a camada de retrieval dos agentes de dados da Databricks (Genie Code, Genie One, Genie Agents). A Databricks afirma qualidade comparável a Claude Sonnet 5, GPT-5.6 Luna e DeepSeek-V4-Flash com ~2x menor latência (5,8s em média) em 7 benchmarks — benchmarks da própria Databricks, sem verificação independente. Não foram divulgados parâmetros, preço nem data de GA. Contexto: expansão dos Genie Agents anunciada em 02/09 (fora da janela).
- **Relevância para a usuária** (interpretação): a plataforma onde ela trabalha está apontando agentes de IA como consumidores da camada de dados que ela modela para consumo. Não muda nada no stack dela hoje — mas é um sinal de para onde vai o consumo da "prateleira dos dados".
- **Pilar**: 1 (Databricks & Lakehouse na prática), com sabor do pilar 4
- **Possível ângulo**: "o que muda para quem modela dados para consumo quando o principal consumidor passa a ser um agente de IA" — conectando com o trabalho real na camada Gold, sem alegar uso do Genie
- **Tratamento sugerido**: notícia contextualizada
- **Relação com o contexto**: Databricks (experiência prática forte), IA aplicada a dados (estudo), camada Gold/preparação para consumo (experiência real)
- **Aderência**: alta
- **Risco**: pode parecer especialista em retrieval/agentes de IA — mitigar deixando explícito que é observação da novidade, não experiência com o produto
- **Potencial de conteúdo**: alto
- **Motivo**: novidade central do ecossistema Databricks na janela, com conexão direta com o trabalho real de preparação de dados para consumo
- **Requer validação/estudo**: sim — confirmar com a usuária se quer o tom de observadora externa; [A CONFIRMAR] se ela já usa ou pretende usar Genie em algum contexto

### `time_bucket` — nova função SQL para agregação temporal no Databricks
- **Data**: 2026-09-08 (item das release notes de setembro)
- **Fonte**: tier 1 — Release notes oficiais (Databricks on AWS)
- **URL**: https://docs.databricks.com/aws/en/release-notes/product/2026/september
- **Classificação de recência**: notícia recente (dentro da janela)
- **Resumo factual**: nova função SQL `time_bucket` que retorna o início do intervalo de largura fixa em que um timestamp cai, alinhado a uma origem escolhida; apresentada como alternativa a `date_trunc`. A nota não indica versão de Databricks Runtime — disponibilidade no ambiente da usuária é [A CONFIRMAR].
- **Relevância para a usuária** (interpretação): SQL é ferramenta diária dela. Feature pequena, concreta e testável — formato ideal para post de aprendizado com exemplo real, sem risco de posicionamento.
- **Pilar**: 1 (Databricks & Lakehouse na prática)
- **Possível ângulo**: comparar `date_trunc` × `time_bucket` com um caso real de agregação temporal (sem inventar números) — quando a origem do intervalo faz diferença
- **Tratamento sugerido**: aprendizado / experiência prática (testar no ambiente)
- **Relação com o contexto**: SQL e Databricks em nível de experiência prática forte
- **Aderência**: alta
- **Risco**: nenhum
- **Potencial de conteúdo**: alto
- **Motivo**: item testável na prática pela usuária, sem risco de parecer especialista
- **Requer validação/estudo**: sim — testar no ambiente dela e confirmar a versão/runtime onde está disponível [A CONFIRMAR]

### Unity Gateway em GA "em breve" + Databricks MCP Services — ponte com o fluxo de estudos da usuária
- **Data**: página oficial "What's coming" acessada em 2026-09-11; GA sem data exata ("em breve")
- **Fonte**: tier 1 — Documentação oficial Databricks (What's coming)
- **URL**: https://docs.databricks.com/aws/en/release-notes/whats-coming
- **Classificação de recência**: notícia recente (anúncio de roadmap, ainda não disponível)
- **Resumo factual**: a documentação oficial indica GA do Unity Gateway "em breve", com capacidades planejadas de model services (traffic splitting/fallback), MCP services, model provider services (OpenAI, Anthropic, Amazon Bedrock) e budgets. Databricks-provided MCP Services para Slack, GitHub, Atlassian e Google Drive também entram em GA "em breve", com operações de leitura e escrita habilitadas por padrão.
- **Relevância para a usuária** (interpretação): primeira ponte oficial entre o mundo de trabalho dela (Databricks) e o mundo de estudo/automação (MCP com Claude Code). É item de acompanhamento, não de uso — nada está disponível ainda.
- **Pilar**: 4 (IA no meu fluxo de dados e desenvolvimento), com pilar 1
- **Possível ângulo**: reflexão "o que significa para o meu fluxo de estudo quando a plataforma do meu trabalho passa a falar MCP" — honesta, sem uso, sem hype
- **Tratamento sugerido**: notícia contextualizada / acompanhamento de roadmap
- **Relação com o contexto**: MCP com Claude Code (prática pessoal documentada, estudo), Databricks (experiência prática forte)
- **Aderência**: alta
- **Risco**: nenhum — não alega uso, apenas leitura de roadmap oficial
- **Potencial de conteúdo**: alto
- **Motivo**: interseção rara de duas práticas documentadas da usuária (Databricks + MCP)
- **Requer validação/estudo**: sim — acompanhar a data de GA; confirmar com a usuária o interesse em abordar tema de roadmap

## Itens com aderência média

### Google Cloud Data Agent Kit (2026-09-10)
- **Fonte**: tier 2 — blog oficial Google Cloud + documentação oficial + GitHub (starter pack). URL: https://docs.cloud.google.com/data-agent-kit/overview
- **Recência**: notícia recente (dentro da janela)
- **Resumo factual**: kit open-source (Apache-2.0) de engenharia de dados que integra IDEs/CLIs — VS Code, Claude Code, Gemini CLI e Codex — com skills agenticas e DSL YAML declarativa para criar, implantar e diagnosticar DAGs de Apache Airflow (deploy para Managed Airflow). Instalável via plugin marketplace do Claude Code ou em `.claude/skills/`; setup rápido, mas o uso exige CLI gcloud e conta GCP para deploys reais.
- **Relevância**: cruza três frentes documentadas da usuária: Claude Code/Skills (prática pessoal), Airflow (estudo) e IA aplicada a dados (estudo). A exploração do plugin em si não exige GCP; o deploy de DAGs exige.
- **Pilar**: 4 e 5
- **Ângulo possível**: instalar o plugin no Claude Code, explorar as skills e contar o que aprendeu — "como agentes estão entrando na criação de pipelines"
- **Tratamento sugerido**: experimento + notícia contextualizada
- **Risco**: parecer especialista em GCP/agentes — mitigar como exploração, não como avaliação de especialista
- **Potencial de conteúdo**: médio
- **Requer validação/estudo**: sim — interesse da usuária em explorar; [A CONFIRMAR] se tem/quer conta GCP

### OpenAI Data Agent no ChatGPT Work (2026-09-09/10)
- **Fonte**: tier 3 — VentureBeat e imprensa de tecnologia (09–10/09). URL: https://venturebeat.com/data/openais-new-data-agent-skips-the-one-thing-rivals-like-databricks-are-racing-to-publish-a-benchmark
- **Recência**: notícia recente (dentro da janela)
- **Resumo factual**: agente de análise em linguagem natural no ChatGPT Work que conecta fontes empresariais aprovadas (Databricks entre elas), gera análises e dashboards interativos (Power BI, Tableau etc.), respeita permissões existentes de tabela/linha/coluna e usa definições semânticas de dbt, Snowflake Horizon e Databricks Genie Ontology. A OpenAI não publicou benchmark de acurácia — apontado pela imprensa como diferencial em relação a rivais que publicam benchmarks.
- **Relevância** (interpretação): o agente consome exatamente a camada que a usuária entrega, usando contexto semântico e governança. Fora do stack dela — ela não usa ChatGPT Work.
- **Pilar**: 2 (AE → DE) com 4
- **Ângulo possível**: "o que muda na entrega de dados quando agentes passam a consumi-la" — análise cética, sem experiência de uso
- **Tratamento sugerido**: análise / notícia contextualizada
- **Risco**: parecer usuária/entusiasta do produto — mitigar com tom de observadora (voz: novidade com ceticismo na medida)
- **Potencial de conteúdo**: médio
- **Requer validação/estudo**: não para os fatos (múltiplas fontes); a opinião final é da usuária

### Standard performance mode para one-time runs + DatabricksSubmitRunOperator (2026-09-11)
- **Fonte**: tier 1 — release notes oficiais (Databricks on AWS)
- **Recência**: notícia recente (dentro da janela)
- **Resumo factual**: `performance_target=STANDARD` disponível para execuções únicas via Jobs API, com suporte também no operador Airflow `DatabricksSubmitRunOperator`.
- **Relevância**: ponte entre o que ela estuda (Airflow) e o que ela usa no trabalho (Databricks) — o tipo de conexão que os pilares valorizam explicitamente.
- **Pilar**: 5 com 1
- **Tratamento sugerido**: aprendizado
- **Risco**: nenhum
- **Potencial de conteúdo**: médio
- **Requer validação/estudo**: sim — [A CONFIRMAR] se ela já usa/estuda o provider Databricks do Airflow

### Governança no Unity Catalog: external secrets (Beta, 09/09), ABAC DENY (Beta, 08/09), OpenSharing de metric views (Beta, 03/09)
- **Fonte**: tier 1 — release notes oficiais. Observação: OpenSharing é de 03/09, fora da janela por 8 dias — mantido por fazer parte do mesmo bloco temático.
- **Recência**: notícia recente / próximo da janela
- **Resumo factual**: secrets externos conectam um schema do Unity Catalog ao AWS Secrets Manager (leitura sob demanda, governada por privilégios); políticas ABAC DENY permitem negar explicitamente privilégios (precedem qualquer grant); OpenSharing (Beta) permite compartilhar metric views com outros metastores/contas.
- **Relevância**: governança é área de experiência prática real da usuária (comentários, tags, organização), mas esses itens são de administração avançada — acima do nível atual documentado.
- **Pilar**: 1 com 5
- **Tratamento sugerido**: aprendizado / notícia contextualizada
- **Risco**: parecer administradora de governança — mitigar como estudo, nunca como experiência
- **Potencial de conteúdo**: médio
- **Requer validação/estudo**: sim — tratamento como estudo de features, sem alegação de uso

### dbt Core v2.0.0-rc.1 (2026-09-02) + migração do PyPI para dbt v2 a partir de 2026-09-14
- **Fonte**: tier 2 — GitHub oficial dbt-labs + documentação dbt (newreleases.io como índice). URL: https://github.com/dbt-labs/dbt-core/releases
- **Recência**: próximo da janela (09/02, 9 dias antes) — mantido por relevância para os estudos; a migração do PyPI é iminente (14/09)
- **Resumo factual**: primeiro release candidate do dbt Core v2 (engine Rust, relicenciado Apache 2.0); inclui query tags para Databricks e ajustes de servidor. A partir de 14/09, `pip install dbt` passa a instalar o dbt v2 em vez do CLI da plataforma — quem não fixa versão recebe a engine nova, que não tem comandos como `dbt cancel`, `dbt reattach` e `dbt sqlfluff`.
- **Relevância**: dbt está em estudo na rotina da usuária; a migração pode afetar diretamente quem instala via pip.
- **Pilar**: 5 (Aprendendo em público)
- **Tratamento sugerido**: aprendizado
- **Risco**: dbt é estudo — só como aprendizado, nunca como experiência profissional
- **Potencial de conteúdo**: médio
- **Requer validação/estudo**: sim — conferir como a usuária instala/usa dbt hoje e se a migração a afeta

## Itens com aderência baixa

- **OpenAI GPT-6 Astra como modelo hospedado no Unity Gateway (04/09)** — tier 1 (release notes); conexão apenas via estudo de IA; utilidade prática baixa.
- **`ai_search` citations (Beta, 08/09)** — tier 1 (release notes); IA aplicada a dados; pode servir de contexto do item sobre o retriever, sem pauta própria.
- **AWS MWAA suporta Airflow 3.3.1 (01/09) + dashboard CloudWatch (03/09)** — tier 2 (AWS What's New); fora da janela por 8–10 dias; conexão via estudo de Airflow/AWS; utilidade marginal.
- **Databricks Excel Add-in GA (10/09)** — tier 1 (release notes); lado do consumo/BI; fora do foco do perfil.
- **Maintenance windows para continuous pipelines (10/09)** — tier 1 (release notes); operação de pipelines; conexão fraca com o dia a dia atual.
- **Conectores Lakeflow Connect: Celigo, Anaplan e Anysphere/Cursor (Beta, 09/09)** — tier 1 (release notes); ingestão de SaaS; conexão fraca (Curioso: o conector do Cursor toca o tema IA, mas indiretamente).

## Descartados

- **Spark 4.2.0 (14/07) e Databricks Runtime 19 Beta (15/06)** — fora da janela por ~2 meses; manter como contexto para estudos e certificação DE Associate, não como novidade.
- **Delta Lake 4.4.0 (20/08)** — fora da janela.
- **Unity Catalog OSS (última versão 0.6.0, ago/2026)** — sem release em setembro; fora da janela.
- **Microsoft Fabric Runtime 2.0 (padrão a partir de final de setembro)** — stack Microsoft; o perfil é Databricks; conexão fraca.
- **Teradata × OneLake (02/09)** — conexão fraca com o perfil (sem Teradata/OneLake no contexto).
- **Snowflake na conferência Goldman Sachs (09/09)** — sem conexão com o perfil.
- **Aliança de padrões para AI workflows (11–12/09, Berlim)** — fonte de 3º nível sem confirmação; conexão distante.
- **AI Extract Precision Mode** — divulgação via LinkedIn/TipRanks; sem confirmação em fonte oficial → não entra como fato (regra de fonte da skill).
- **VLDB 2026 (Databricks)** — fonte fraca; sem data confirmada dentro da janela.
- **Expansão dos Genie Agents (02/09)** — fora da janela; incorporada como contexto do item do retriever.

## Observações de anti-repetição

- Primeira sessão de pesquisa: `research/` estava vazio e `ideas/`, `drafts/`, `approved/` e `published/` ainda não existem — não há histórico a comparar. Nada repetido.
- Acompanhamento para futuras sessões: (a) data de GA do Unity Gateway e MCP Services; (b) migração do PyPI para dbt v2 (14/09); (c) progresso do DBR 19/Spark 4.2 nos runtimes.
- Conflito de datas entre fontes oficiais: "Genie Code scheduled tasks GA" aparece em 01/09 nas release notes de produto e como "October 2026" na página What's coming — conflito registrado; tratar como [A CONFIRMAR] se for usado no futuro.
- Fonte fraca detectada e descartada (AI Extract Precision Mode) — exemplo do filtro de tier em ação.

## Limites desta skill

- NÃO escrever posts nem rascunhos
- NÃO transformar novidade automaticamente em recomendação de publicação
- NÃO inventar experiências, opiniões ou resultados da usuária
- NÃO usar redes sociais como fonte factual primária
- NÃO deixar Databricks dominar a pesquisa sem justificativa real (nesta sessão o domínio é justificado pelo escopo pedido pela usuária e pela concentração de novidades oficiais na janela)
- NÃO forçar pauta por falta de contexto: sinalizar em vez de preencher
