# LinkedIn Content Engine

Sistema pessoal de apoio à produção de conteúdo para o LinkedIn, focado em
Databricks, Analytics Engineering, Data Engineering, Lakehouse, Arquitetura de
Dados, IA aplicada a dados, evolução profissional e projetos pessoais de dados.

## Objetivo

Ajudar o usuário a produzir conteúdo para o LinkedIn de 3 a 4 vezes por semana,
com consistência e qualidade, mantendo uma voz autêntica baseada na experiência
real dele.

Temas prioritários:
- Databricks
- Analytics Engineering
- Data Engineering
- Lakehouse
- Engenharia / Arquitetura de Dados
- IA aplicada a dados
- Evolução profissional e aprendizados técnicos do usuário
- Projetos pessoais relacionados a dados

## O que o sistema deverá fazer futuramente

- Gerar ideias de conteúdo a partir dos pilares definidos em `context/content-pillars.md`
- Produzir rascunhos completos em `drafts/`
- Aplicar o estilo e a voz definidos em `context/linkedin-voice.md`
- Manter o fluxo de trabalho: `ideas/` → `drafts/` → `approved/` → `published/`
- (Etapas como pesquisa na internet, geração de imagens e publicação serão
  avaliadas e implementadas somente quando o usuário pedir explicitamente)

## O que NÃO fazer sem aprovação explícita do usuário

- Publicar qualquer conteúdo no LinkedIn
- Criar automações agendadas (posts programados, tarefas periódicas de publicação)
- Fazer pesquisa na internet durante a geração de conteúdo (por enquanto)
- Gerar imagens (por enquanto)
- Alterar arquivos em `context/` ou `approved/` sem pedido explícito

## Estrutura das pastas

- `context/` — informações sobre o usuário que orientam a geração:
  - `about-me.md` — identidade e história
  - `career.md` — trajetória profissional
  - `technical-profile.md` — stack, ferramentas e competências técnicas
  - `content-pillars.md` — pilares e temas de conteúdo
  - `linkedin-voice.md` — tom, estilo e linguagem
- `research/` — material de pesquisa e referências
- `ideas/` — banco de ideias de posts
- `drafts/` — rascunhos em andamento
- `approved/` — rascunhos aprovados pelo usuário, prontos para publicação manual
- `published/` — registro dos posts publicados
- `brand/` — materiais de marca (paleta, templates, etc.)
- `skills/` — skills específicas deste projeto

## Princípios para geração de conteúdo

1. **Autenticidade**: o conteúdo reflete a experiência e a visão reais do usuário.
2. **Valor prático**: cada post deve ensinar algo, mostrar um caso real ou
   destilar uma lição concreta.
3. **Especificidade técnica**: usar exemplos concretos (código, arquitetura,
   cenários) em vez de generalidades.
4. **Voz de quem executa**: o usuário é engenheiro/analista — o conteúdo fala
   de dentro da prática, não de cima do palco.
5. **Consistência**: respeitar os pilares de `context/content-pillars.md` e a
   voz definida em `context/linkedin-voice.md`.
6. **Privacidade**: nunca expor dados, clientes, empresas ou colegas sem
   autorização; anonimizar sempre que necessário.

## Regras inegociáveis

- **Verdade**: nenhum conteúdo pode inventar experiências, opiniões, projetos,
  conhecimentos ou resultados que não sejam verdadeiros sobre o usuário.
  Quando faltar informação real em `context/` ou no material fornecido, o
  sistema deve perguntar ao usuário em vez de preencher lacunas.
- **Sem publicação automática**: o sistema nunca publica conteúdo no LinkedIn,
  em nenhuma circunstância.
- **Revisão humana obrigatória**: todo conteúdo passa por revisão do usuário
  antes de qualquer publicação. A decisão final de publicar é sempre dele.

## Estado atual

Estrutura inicial do projeto criada. Nenhuma funcionalidade implementada além
disso.

O `context/` está preenchido e aprovado pela usuária: `about-me.md`,
`career.md`, `technical-profile.md`, `content-pillars.md` e
`linkedin-voice.md`. Esses arquivos são a fonte de verdade sobre o perfil
dela. Antes de gerar qualquer ideia, rascunho ou conteúdo, ler todos eles e
nunca contradizê-los sem perguntar à usuária.
