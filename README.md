# LinkedIn Content Engine

Sistema pessoal para apoiar a criação, revisão e organização de conteúdo técnico para o LinkedIn.

O projeto transforma experiências práticas, aprendizados técnicos e projetos pessoais em conteúdo autêntico, estruturado e revisado humanamente.

A publicação permanece sempre manual.

## Objetivo

O sistema ajuda a:

- organizar pesquisas e ideias;
- transformar ideias em drafts;
- revisar conteúdo;
- manter consistência editorial;
- decidir quando um post precisa de recurso visual;
- gerar imagens, diagramas e carrosséis reproduzíveis;
- preservar aprovação humana antes da publicação.

## Posicionamento

A identidade representa uma profissional de dados em evolução, que:

- aprende construindo;
- trabalha com dados reais;
- testa e documenta decisões;
- compartilha aprendizados práticos;
- evolui em direção a Data Engineering e Data Architecture.

O projeto não deve sugerir senioridade, autoridade ou experiência que não correspondam à trajetória real.

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

## Pipeline

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

A etapa `PUBLISHED` não publica automaticamente. A publicação é manual.

## Estrutura do projeto

```text
.
├── .claude/       # Configurações relacionadas ao agente
├── approval/      # Registros de aprovação
├── approved/      # Conteúdos aprovados
├── brand/         # Identidade e sistema visual
├── context/       # Contexto pessoal, profissional e editorial
├── drafts/        # Rascunhos
├── ideas/         # Ideias
├── research/      # Pesquisas
├── review/        # Conteúdos em revisão
├── skills/        # Skills do pipeline
├── specs/         # Especificações de implementação
└── published/     # Registro de conteúdos publicados
```

## Camada visual

A camada visual não tem como objetivo gerar imagens aleatórias por IA.

O fluxo esperado é:

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

O sistema deve decidir conscientemente entre:

- sem visual;
- imagem única;
- carrossel;
- diagrama;
- comparação;
- outro formato adequado ao conteúdo.

Nem todo post deve se tornar um carrossel.

## Princípios visuais

A identidade deve ser:

- técnica;
- editorial;
- humana;
- didática;
- autoral;
- estruturada;
- confiante sem arrogância;
- coerente com uma trajetória em evolução.

Dark e light são direções oficiais. O banner dark funciona como âncora da marca, mas não como template universal.

Devem ser evitados:

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

A composição final deve ser feita preferencialmente por:

```text
HTML/CSS/SVG → PNG
```

Essa abordagem permite:

- texto nítido e correto;
- fontes consistentes;
- layouts reproduzíveis;
- menor consumo de tokens;
- menor dependência de geração de imagem;
- QA repetível.

A geração de imagem por IA deve ser reservada para elementos pontuais que não sejam simples de construir por código.

## Formatos

O formato preferencial para carrosséis é:

```text
1080 × 1350 px
```

O formato do banner do LinkedIn é:

```text
1584 × 396 px
```

Toda peça deve respeitar margem segura, contraste, legibilidade em celular e hierarquia clara.

## MVP visual atual

O primeiro MVP determinístico está em:

```text
brand/visual/carrossel-gold/
```

Para reproduzir:

```bash
node brand/visual/carrossel-gold/render.mjs
```

O MVP gera cinco PNGs de `1080 × 1350 px` usando HTML/CSS/SVG e Microsoft Edge ou Chrome em modo headless.

## Decisões e especificações

As decisões arquiteturais da camada visual ficam em:

```text
brand/decisions/
```

As especificações de implementação ficam em:

```text
specs/
```

Decisões atuais:

- dark e light são direções oficiais;
- o banner é uma âncora, não um template universal;
- a renderização determinística é o padrão;
- a aprovação humana continua obrigatória;
- a publicação automática não faz parte do projeto.

## Estado atual

### Concluído

- pipeline inicial de conteúdo;
- contexto editorial e profissional;
- identidade visual;
- banner do LinkedIn;
- documentação visual;
- tokens e grid;
- regras iniciais de decisão visual;
- ADRs e SPECs;
- primeiro MVP determinístico de carrossel.

### Próximos passos

- tornar o renderer reutilizável;
- separar decisão visual, dados e renderização;
- criar templates adicionais gradualmente;
- implementar uma direção light validada;
- criar QA visual mais automatizado;
- criar a skill visual somente depois da validação do sistema.

## Regras editoriais

O projeto deve:

- manter aprovação humana;
- não publicar automaticamente;
- não inventar experiência;
- não transformar estudo em experiência profissional;
- não criar autoridade artificial;
- distinguir trabalho, estudo e projeto pessoal;
- preservar a autenticidade da trajetória.

## Status

Projeto pessoal em desenvolvimento.

A camada visual concluiu seu primeiro MVP e está avançando da validação para a construção de um sistema reutilizável.