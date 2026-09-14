# LinkedIn Content Engine

Sistema pessoal para apoiar a criação, revisão e organização de conteúdo técnico para o LinkedIn.

O projeto foi criado para transformar experiências práticas, aprendizados técnicos e projetos pessoais em conteúdo autêntico, estruturado e revisado humanamente.

## Objetivo

O LinkedIn Content Engine ajuda a:

- organizar pesquisas e ideias;
- transformar ideias em drafts;
- revisar conteúdo antes da publicação;
- manter consistência de voz e posicionamento;
- decidir quando um conteúdo realmente precisa de um recurso visual;
- preparar imagens, diagramas e carrosséis de forma reproduzível;
- preservar aprovação humana em todas as etapas.

A publicação permanece manual.

## Posicionamento

O projeto representa uma profissional de dados em evolução, que:

- aprende construindo;
- trabalha com dados reais;
- testa e documenta decisões;
- compartilha aprendizados práticos;
- evolui em direção a Data Engineering e Data Architecture.

O conteúdo não deve sugerir senioridade, autoridade ou experiência que ainda não correspondam à trajetória real.

## Temas principais

- Databricks;
- Lakehouse;
- Analytics Engineering;
- Data Engineering;
- Data Architecture;
- modelagem e preparação de dados;
- SQL, Python e Spark/PySpark;
- Unity Catalog e governança;
- migração para Databricks;
- Git, GitHub e CI/CD;
- Airflow, dbt e pipelines;
- IA aplicada a dados;
- aprendizado técnico;
- projetos pessoais;
- evolução profissional.

## Pipeline de conteúdo

```text
RESEARCH
   ↓
IDEAS
   ↓
DRAFT
   ↓
REVIEW
   ↓
HUMAN APPROVAL
   ↓
APPROVED
   ↓
VISUAL
   ↓
PUBLISHED
```

A etapa `PUBLISHED` não realiza publicação automática. O conteúdo é publicado manualmente pela usuária.

## Estrutura do projeto

```text
.
├── .claude/       # Configurações relacionadas ao agente
├── approval/      # Registros e decisões de aprovação
├── approved/      # Conteúdos aprovados para as próximas etapas
├── brand/         # Identidade e sistema visual
├── context/       # Contexto pessoal, profissional e editorial
├── drafts/        # Rascunhos de conteúdo
├── ideas/         # Ideias ainda não desenvolvidas
├── research/      # Pesquisas e referências de conteúdo
├── review/        # Conteúdos em revisão
├── skills/        # Skills de apoio ao pipeline
└── published/     # Registro de conteúdos publicados
```

## Camada visual

A camada visual não tem como objetivo gerar imagens aleatórias por IA.

O fluxo visual esperado é:

```text
Conteúdo aprovado
   ↓
Visual Decision
   ↓
Visual Spec
   ↓
Template
   ↓
Renderer determinístico
   ↓
QA visual
   ↓
Peça final
```

A decisão visual deve identificar se o conteúdo precisa de:

- nenhum visual;
- imagem única;
- carrossel;
- diagrama;
- comparação;
- outro formato adequado ao conteúdo.

O sistema não deve transformar todos os posts em carrosséis.

## Princípios visuais

A identidade visual deve ser:

- técnica;
- editorial;
- humana;
- didática;
- autoral;
- estruturada;
- confiante sem arrogância;
- coerente com uma trajetória em evolução.

A identidade pode variar entre direções `dark` e `light`, sem perder consistência.

A consistência deve vir principalmente de:

- tipografia;
- hierarquia;
- espaçamento;
- geometria;
- composição;
- tratamento de linhas e diagramas;
- qualidade editorial.

A direção visual deve evitar:

- estética cyberpunk;
- neon;
- dashboards;
- templates SaaS;
- gráficos fictícios;
- fotos genéricas de tecnologia;
- robôs, cérebros digitais e hologramas;
- excesso de efeitos;
- badges de especialista;
- logos e certificações como decoração.

## Renderização

A composição final deve ser feita preferencialmente por uma abordagem determinística, como:

```text
HTML/CSS/SVG → PNG
```

Isso permite:

- texto nítido e correto;
- fontes consistentes;
- layouts reproduzíveis;
- menor consumo de tokens;
- menor dependência de geração de imagem;
- QA automatizado ou repetível.

A geração de imagem por IA deve ser reservada para elementos pontuais que realmente não sejam simples de construir com código.

## Formatos visuais

O formato padrão para carrosséis é:

```text
1080 × 1350 px
```

A produção deve respeitar:

- área segura;
- legibilidade em dispositivos móveis;
- hierarquia clara;
- contraste;
- alinhamento;
- consistência entre slides.

O banner do LinkedIn utiliza:

```text
1584 × 396 px
```

## Documentação visual atual

A pasta `brand/` contém a documentação inicial da identidade e do sistema visual, incluindo:

- identidade visual;
- paleta;
- tipografia;
- iconografia;
- especificação do banner;
- sistema visual;
- tokens;
- grid e layout;
- regras de decisão visual;
- checklist de QA.

O banner dark existente funciona como âncora da linguagem visual da marca, mas não deve ser copiado literalmente para todos os posts.

## Decisões arquiteturais

As decisões relevantes da camada visual são registradas em ADRs.

Entre os princípios atuais estão:

- dark e light são direções oficiais;
- o banner é uma referência de identidade, não um template universal;
- a renderização determinística é o padrão para peças com texto e estrutura;
- a aprovação humana continua obrigatória;
- a publicação automática não faz parte do projeto.

As especificações de implementação são registradas separadamente em `specs/`.

## Estado atual

### Concluído

- pipeline inicial de conteúdo;
- contexto editorial e profissional;
- identidade visual inicial;
- banner de LinkedIn;
- documentação da camada visual;
- definição de tokens e grid;
- regras iniciais para escolha de formato;
- checklist de QA visual;
- definição de ADRs e SPECs para orientar implementações.

### Em andamento

- primeiro MVP visual determinístico;
- template de carrossel técnico de arquitetura/fluxo;
- renderer reproduzível;
- validação de uma peça real em 1080 × 1350 px.

### Planejado

- templates adicionais;
- histórico visual do feed;
- biblioteca organizada de referências;
- maior automação da decisão visual;
- QA automatizado;
- skill visual somente após a validação do sistema e do renderer.

## Regras de segurança editorial

O projeto deve:

- manter a aprovação humana;
- não publicar automaticamente;
- não inventar experiência profissional;
- não transformar estudo em experiência de trabalho;
- não criar autoridade artificial;
- não usar logos ou certificações como prova de senioridade;
- preservar a autenticidade da trajetória da usuária.

## Status

Projeto pessoal em desenvolvimento.

A camada de conteúdo está estruturada e a camada visual está passando da fase documental para a fase de implementação de um primeiro renderer determinístico.