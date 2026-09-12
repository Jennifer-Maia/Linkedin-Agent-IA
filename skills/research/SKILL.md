---
name: research
description: Pesquisa de pautas e novidades para conteúdo de LinkedIn (Databricks, Data Engineering, Analytics Engineering, Lakehouse, governança, IA aplicada a dados) conectadas ao perfil real da usuária. Usar quando ela pedir para pesquisar novidades, releases, tendências, temas técnicos ou oportunidades de conteúdo.
---

# Research — camada de inteligência de pautas

Esta skill executa a etapa de PESQUISA do fluxo de conteúdo:
pesquisa → ideias → rascunhos → revisão humana → aprovado → visual.

Ela produz pesquisa organizada e oportunidades de conteúdo. NÃO escreve posts,
NÃO gera ideias finais (etapa posterior) e NÃO recomenda publicação
automaticamente.

Fronteira com a etapa de ideias: a classificação de Potencial de conteúdo
(alto/médio/baixo) e o campo Possível ângulo são APENAS sinais preliminares
para a próxima etapa. Esta skill NÃO escolhe a pauta, NÃO define o ângulo
final e NÃO recomenda automaticamente que algo vire post.

## Antes de pesquisar

1. Ler os arquivos de contexto (fonte de verdade do perfil):
   - `context/about-me.md`
   - `context/career.md`
   - `context/technical-profile.md` (níveis de domínio — obrigatório para
     avaliar risco de posicionamento)
   - `context/content-pillars.md` (pilares e prioridades)
   - `context/linkedin-voice.md`
2. Ler o histórico existente, quando houver conteúdo:
   - `research/`, `ideas/`, `drafts/`, `approved/`, `published/`

## Definir o escopo

- Se a usuária definiu um escopo, seguir exatamente.
- Sem escopo definido, pesquisar cobrindo os pilares, priorizando:
  1. Databricks & Lakehouse na prática
  2. Analytics Engineering → Data Engineering
  3. Aprendendo em público
  4. Carreira em movimento
  5. Arquitetura de dados em construção
  6. IA no meu fluxo de dados e desenvolvimento
  7. Projetos pessoais em construção (só quando houver novidade real)
- Equilíbrio de pilares (preferência, não obrigação): em uma pesquisa
  padrão, é desejável cobrir ao menos 2–3 pilares diferentes e evitar que
  mais da metade dos itens seja sobre o mesmo tema. Qualidade e relevância
  têm prioridade sobre distribuição artificial: uma novidade
  excepcionalmente relevante pode dominar a pesquisa sem forçar outros
  temas. Databricks é prioridade, não monopólio.
- A pesquisa não precisa atingir meta de quantidade: qualidade e aderência
  vêm antes de volume.

## Buscar (hierarquia de fontes)

Usar busca na web e leitura de páginas (ferramentas de busca e fetch).

1. **Databricks — fontes oficiais (prioridade máxima)**
   - Documentação oficial e release notes (docs.databricks.com)
   - Blog oficial da Databricks
   - Anúncios oficiais de produto
2. **Fontes técnicas confiáveis**
   - Documentação oficial de outras ferramentas (Apache Spark, Delta Lake,
     Airflow, dbt etc.)
   - Blogs de engenharia de empresas com boa reputação técnica
   - Publicações técnicas reconhecidas da área de dados
3. **Sinais da comunidade (nunca como fonte factual primária)**
   - Reddit, LinkedIn, YouTube, newsletters — servem para identificar
     discussões e percepções da comunidade, apenas. Qualquer fato vindo
     delas precisa ser confirmado em fonte oficial/técnica antes de entrar
     na pesquisa.

Regras de fonte:
- Preferir sempre a fonte primária/original à cobertura de terceiros
- Registrar data da publicação e data do acesso
- Desconfiar de conteúdo promocional ou de marketing disfarçado de notícia
- Sem fonte identificável → o item não entra na pesquisa como fato
- Conflito entre fontes primárias (data, disponibilidade ou status
  divergentes): registrar o conflito, NÃO escolher arbitrariamente uma das
  versões, marcar [A CONFIRMAR] e, quando necessário, explicar qual
  informação está em conflito

## Avaliar cada candidato

Para cada assunto encontrado, responder:

1. O que aconteceu? (fato, sem editorialização)
2. Por que pode ser relevante para a usuária?
3. Qual é a fonte e quão confiável é?
4. Quão recente é? (classificar — ver recência abaixo)
5. Existe um ângulo interessante para o contexto dela?
6. Em qual pilar se encaixa (ou não se encaixa em nenhum)?
7. Ela tem contexto suficiente para falar sobre isso? (conferir
   `technical-profile.md`; nunca inventar experiência para justificar pauta)
8. Como seria melhor tratar: notícia, aprendizado, análise, experiência
   prática ou experimento?
   - "Experiência prática" SÓ quando houver experiência real documentada no
     contexto
   - Temas dos níveis 3–5 do `technical-profile.md` → apenas aprendizado,
     experimento ou notícia contextualizada
9. Risco: este assunto pode fazê-la parecer especialista em algo que ainda
   está aprendendo?
10. Qual o potencial de conteúdo para a próxima etapa?
    - **Potencial de conteúdo**: alto/médio/baixo
    - **Motivo**: breve justificativa baseada na conexão com o contexto da
      usuária
    - Sinal, não decisão: isso NÃO é recomendação de publicação, NÃO escolhe
      a pauta e NÃO define o ângulo final — a decisão e a elaboração da pauta
      são da etapa de ideias

## Classificar recência

- **Notícia recente**: fato novo (últimos ~30 dias). Verificar se já foi
  coberto no histórico
- **Próximo da janela**: fato publicado até 3 dias fora do período pesquisado
  (antes do início). SÓ entra quando houver relevância clara para o perfil OU
  um gatilho iminente (ex.: migração, GA ou mudança marcada para os próximos
  dias). Não incluir automaticamente tudo que estiver até 3 dias fora.
- **Anúncio de roadmap (futuro)**: novidade anunciada que ainda não está
  disponível (GA "em breve", preview futuro etc.). Registrar a data prevista
  quando houver; sem data → marcar [A CONFIRMAR]. NUNCA tratar roadmap como
  funcionalidade já disponível.
- **Assunto recorrente**: volta periodicamente à discussão (ex.: custos,
  qualidade de dados). O ângulo novo vale mais que a data
- **Conteúdo evergreen**: conceito de fundação que não envelhece (ex.: o que
  é medalhão). Pode entrar a qualquer momento, desde que com ângulo não
  usado recentemente
- **Informação antiga que voltou a ser relevante**: conteúdo antigo com novo
  gatilho (release relacionado, estudo atual, projeto precisando daquilo).
  Registrar o gatilho explicitamente

Regras de recência:
- Nunca entregar notícia antiga como novidade
- Não descartar conteúdo antigo só por ser antigo, se tiver valor como
  aprendizado, contexto ou análise
- Item fora do período pesquisado por mais de 3 dias: vai para "Descartados"
  com o motivo registrado, mesmo quando tiver valor como aprendizado/contexto
  — esse valor fica anotado como observação, não como novidade
- Registrar sempre a data da fonte; data desconhecida → marcar [A CONFIRMAR]

## Anti-repetição

- Comparar cada candidato com o histórico (`research/`, `ideas/`, `drafts/`,
  `approved/`, `published/`)
- Um mesmo assunto só volta se houver: nova atualização, novo ângulo,
  experiência prática diferente, aprendizado novo ou mudança de contexto —
  e o motivo precisa ficar registrado no item
- Sem regra artificial de bloqueio: revisitar é permitido quando justificado

## Filtrar pela conexão com o perfil

Interessante para profissionais de dados ≠ boa pauta para a usuária.
Um item só é priorizado se tiver conexão legítima com pelo menos um destes:

- Experiência real dela (documentada no contexto)
- Momento de carreira atual
- Estudos em andamento
- Projetos pessoais
- Dificuldades/aprendizados reais
- Áreas de interesse declaradas

Sem conexão clara: marcar como "descartado/sem conexão" e explicar por quê.
Nunca inventar experiência para justificar pauta. Dúvida → [A CONFIRMAR].

## Resultado: salvar em research/

Criar um arquivo por sessão de pesquisa:
`research/YYYY-MM-DD-<slug-do-escopo>.md`

Resultados e arquivos sempre em português do Brasil.

### Estrutura do arquivo

# Pesquisa — <escopo> — YYYY-MM-DD

> Data da pesquisa / Escopo / Status: pronto para a etapa de ideias

## Resumo executivo
- Itens com aderência alta / média / baixa / descartados
- Principais destaques em 2–3 linhas

## Itens com aderência alta
### <título>
- **Data**: ...
- **Acessado em**: ...
- **Fonte**: ... (tier e nome)
- **URL**: ...
- **Classificação de recência**: notícia recente | recorrente | evergreen |
  antiga que voltou (gatilho: ...)
- **Resumo factual**: o que aconteceu, sem editorialização
- **Relevância para a usuária**: por que importa
- **Pilar**: ...
- **Possível ângulo**: ... (sinal preliminar — o ângulo final é decidido na
  etapa de ideias)
- **Tratamento sugerido**: notícia | aprendizado | análise | experiência
  prática | experimento
- **Relação com o contexto**: qual experiência/estudo/projeto conecta
- **Aderência**: alta
- **Risco**: nenhum | pode parecer especialista em X — mitigar com ...
- **Potencial de conteúdo**: alto | médio | baixo
- **Motivo**: breve justificativa baseada na conexão com o contexto
- **Requer validação/estudo**: sim/não — o quê

## Itens com aderência média / baixa
(mesma estrutura, resumida)

Itens classificados como "próximo da janela" entram na seção correspondente à
sua aderência, com a classificação registrada no campo de recência de cada
item.

## Descartados
- título — motivo (sem conexão com perfil, fonte fraca, repetido de X, etc.)

## Observações de anti-repetição
- Assuntos semelhantes já cobertos e onde

## Limites desta skill

- NÃO escrever posts nem rascunhos
- NÃO transformar novidade automaticamente em recomendação de publicação
- NÃO escolher a pauta nem definir o ângulo final — Potencial de conteúdo e
  Possível ângulo são sinais para a etapa de ideias, não decisões
- NÃO inventar experiências, opiniões ou resultados da usuária
- NÃO usar redes sociais como fonte factual primária
- NÃO deixar Databricks dominar a pesquisa sem justificativa real (equilíbrio
  de pilares é preferência, não obrigação)
- NÃO forçar pauta por falta de contexto: sinalizar em vez de preencher
