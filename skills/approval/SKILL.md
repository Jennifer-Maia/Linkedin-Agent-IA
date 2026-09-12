---
name: approval
description: Registra decisões humanas sobre drafts revisados para LinkedIn e encaminha explicitamente os conteúdos aprovados para approved/, sem aprovar ou publicar automaticamente.
---

# Approval Skill

Fluxo:

RESEARCH
→ IDEAS
→ DRAFT
→ REVIEW
→ HUMAN APPROVAL
→ APPROVED
→ PUBLISHED

## Objetivo

A Approval Skill é a etapa responsável por transformar uma decisão HUMANA explícita sobre um Draft revisado em um estado editorial registrado no projeto.

A Approval Skill NÃO deve substituir a decisão humana.

O fato de um Draft estar com status:

`pronto para aprovação`

significa apenas que ele passou pela etapa de Review.

Isso NÃO significa que está aprovado.

Somente uma instrução explícita da usuária pode aprovar um conteúdo.

## Princípio central

A regra mais importante desta Skill é:

"Approved é uma decisão humana, não uma inferência da IA."

Portanto:

- Nunca aprovar automaticamente um Draft.
- Nunca interpretar `pronto para aprovação` como aprovação.
- Nunca mover um Draft para `approved/` sem uma instrução explícita.
- Nunca interpretar silêncio, ausência de objeção ou execução de uma etapa anterior como aprovação.
- Nunca aprovar todos os Drafts simplesmente porque passaram no Review.
- Nunca publicar um conteúdo aprovado automaticamente.
- Nunca alterar um Draft apenas porque ele foi aprovado.
- Nunca decidir pela usuária qual conteúdo deve ser aprovado.

Exemplos:

"Esse draft está pronto para aprovação."
→ NÃO aprovado.

"Gostei desse draft."
→ NÃO tratar automaticamente como aprovação se a intenção não estiver inequívoca.

"Aprovo o Draft 01."
→ aprovação explícita.

"Aprovo os drafts 01, 03 e 06."
→ aprovação explícita desses três.

"Pode mandar para approved/ os drafts 01, 03 e 06."
→ aprovação explícita + movimentação autorizada.

"Os cinco estão aprovados."
→ aprovação explícita dos cinco.

## Responsabilidades

A Approval Skill deve:

1. Identificar os Drafts que a usuária explicitamente deseja aprovar.
2. Verificar se esses Drafts existem.
3. Verificar o status atual deles no Review.
4. Confirmar que estão elegíveis para aprovação.
5. Registrar a decisão humana.
6. Copiar o conteúdo aprovado para `approved/` (promoção por cópia controlada), preservando o Draft original em `drafts/`.
7. Preservar o histórico da decisão.
8. Informar claramente o que foi aprovado e o que foi feito.
9. Impedir aprovação quando houver bloqueio que exija contexto ou validação factual.
10. Não publicar automaticamente.

A Skill não deve:

- criar conteúdo;
- editar o post;
- fazer nova pesquisa;
- criar ideias;
- revisar o texto novamente;
- gerar imagens;
- publicar no LinkedIn;
- decidir se o conteúdo é bom;
- transformar `pronto para aprovação` em aprovação;
- aprovar conteúdos sem comando explícito;
- alterar Review como forma de "resolver" um bloqueio.

## Pré-condições para aprovação

Antes de executar uma aprovação, a Skill deve verificar:

### Existência do Draft

O Draft indicado precisa existir em:

`drafts/`

Se não existir:

- não aprovar;
- informar que o Draft não foi encontrado;
- não criar um substituto.

### Existência de Review

Sempre que houver Review correspondente, a Skill deve utilizá-lo como referência.

### Status do Review

Somente Drafts com status:

`pronto para aprovação`

podem ser aprovados diretamente.

Drafts com status:

- `precisa de alterações`
- `precisa de contexto`
- `precisa de validação factual`
- `rejeitado`

não podem ser aprovados diretamente.

### Draft bloqueado

Se o Draft ainda estiver bloqueado, a Skill deve informar:

- qual Draft está bloqueado;
- qual é o status;
- qual pendência precisa ser resolvida.

Não deve tentar contornar o bloqueio.

### Ausência de Review

Se não houver Review correspondente, não assumir que o Draft está aprovado.

Nesse caso:

`precisa de revisão`

e a Skill deve impedir a aprovação até que exista uma avaliação adequada.

## Decisão humana

A usuária pode aprovar:

- um Draft;
- vários Drafts;
- todos os Drafts elegíveis;
- ou nenhum.

Exemplos válidos:

`Aprovo o Draft 01.`

`Aprovo os drafts 01, 03 e 06.`

`Pode aprovar todos os drafts que estão prontos para aprovação.`

`Aprovo os cinco que estão prontos.`

Quando a instrução for explícita, executar somente os conteúdos indicados ou, no caso de "todos os elegíveis", somente os que realmente estiverem elegíveis.

Nunca incluir automaticamente Drafts bloqueados.

Cada execução de aprovação requer um comando explícito e separado da usuária. Instruções de aprovação não permanecem pendentes entre sessões e nunca são executadas durante manutenções desta Skill.

## Aprovação parcial

É permitido aprovar apenas parte dos Drafts.

Regras:

- aprovar somente os IDs mencionados explicitamente;
- não aprovar os demais por inferência;
- não tratar a ausência de menção como aprovação;
- registrar os aprovados;
- registrar os bloqueados e não processados separadamente quando forem relevantes;
- nunca executar "aprovar todos" sem uma instrução explícita nesse sentido.

Exemplo:

Drafts:

01 → pronto para aprovação
02 → precisa de contexto
03 → pronto para aprovação
04 → pronto para aprovação

Se a usuária disser:

`Aprovo 01 e 04.`

A Skill deve:

- aprovar 01;
- aprovar 04;
- deixar 02 e 03 inalterados;
- não interpretar a aprovação como aprovação dos demais.

## Aprovação de todos

Quando a usuária disser explicitamente algo como:

`Aprovo todos os drafts prontos para aprovação.`

a Skill deve:

1. listar os Drafts elegíveis;
2. excluir os bloqueados;
3. registrar quais foram aprovados;
4. mover apenas os elegíveis;
5. deixar os demais onde estão;
6. informar os bloqueados separadamente.

Nunca considerar `precisa de contexto`, `precisa de alterações`, `precisa de validação factual` ou `rejeitado` como aprovados.

## Promoção para approved/

A aprovação real funciona como **promoção por cópia controlada, sem remoção do Draft original**.

Regras:

- O Draft original permanece intacto em `drafts/` — a aprovação NÃO apaga nem remove a seção original
- O conteúdo aprovado é copiado para `approved/`
- O conteúdo é preservado verbatim, sem edição silenciosa
- A cópia em `approved/` representa o estado aprovado do conteúdo
- Nenhuma publicação ocorre nesta etapa

Durante a cópia:

- Não reescrever o post
- Não modificar o texto para "melhorá-lo"
- Não adicionar informações novas
- Não gerar visual nessa etapa

### Estrutura do arquivo aprovado

Como um arquivo de Draft pode conter vários Drafts, a Skill NÃO copia o lote inteiro quando apenas alguns Drafts forem aprovados.

Para cada Draft aprovado, criar um arquivo individual em `approved/`:

`approved/YYYY-MM-DD-draft-XX-slug.md`

Exemplos:

`approved/2026-09-12-draft-01-consumidor-da-gold.md`
`approved/2026-09-12-draft-03-mcp-services-roadmap.md`

Cada arquivo individual aprovado contém:

1. ID do Draft;
2. título;
3. texto original intacto;
4. ideia de origem;
5. arquivo de Draft de origem;
6. Review utilizado;
7. data e hora da aprovação;
8. decisão humana explícita;
9. status: aprovado.

Os metadados NÃO alteram o texto original do Draft. A Skill deve separar claramente metadados e conteúdo original.

## Segurança de arquivos e prevenção de duplicação

Antes de criar uma cópia em `approved/`:

- verificar se o destino já existe;
- verificar se existe conteúdo equivalente aprovado;
- verificar se o mesmo Draft já foi aprovado anteriormente;
- não sobrescrever arquivos;
- não apagar históricos;
- não criar uma segunda cópia silenciosamente.

Em caso de conflito:

- interromper o processamento daquele Draft;
- informar o conflito;
- registrar como "não processado por conflito de arquivo";
- solicitar decisão humana explícita antes de qualquer substituição ou nova cópia.

## Histórico da aprovação

Cada execução real registra decisões em:

`approval/YYYY-MM-DD-approval.md`

Um arquivo por sessão.

Não modificar registros históricos de aprovação.

O registro deve conter, para cada Draft processado:

- data e hora;
- ID do Draft;
- título;
- ideia de origem;
- arquivo de origem;
- status anterior;
- Review utilizado, quando existir;
- decisão humana;
- ação executada;
- destino;
- pendências;
- observações.

A ação executada deve indicar claramente uma das possibilidades:

- copiado para approved/;
- rejeitado, sem movimentação;
- pedido de alterações, sem movimentação;
- bloqueado, sem movimentação;
- não processado, aguardando decisão da usuária;
- não processado por conflito de arquivo;
- não processado por ausência de Review.

Exemplo:

```markdown
# Approval — YYYY-MM-DD

## IDEA-YYYYMMDD-01

### Data e hora
YYYY-MM-DD HH:MM

### ID do Draft
IDEA-YYYYMMDD-01

### Título
...

### Ideia de origem
...

### Arquivo de origem
drafts/...

### Status anterior
pronto para aprovação

### Review utilizado
review/...

### Decisão
Aprovado pela usuária

### Ação
Copiado para approved/

### Destino
approved/YYYY-MM-DD-draft-01-...md

### Pendências
Nenhuma

### Observações
Nenhuma
```

Se vários Drafts forem processados na mesma sessão, registrar todos no mesmo arquivo.

## Registro de decisões não aprovadoras

Também devem ser registradas em `approval/`:

- rejeições explícitas;
- pedidos explícitos de alteração;
- tentativas de aprovação bloqueadas;
- tentativas de aprovação de Draft já processado;
- conflitos de destino;
- Drafts elegíveis que foram deixados fora de uma aprovação parcial, somente quando isso for relevante para a rastreabilidade da sessão.

A Skill não deve inventar motivos.

Quando a usuária rejeitar sem informar motivo, registrar:

"Motivo não informado."

Quando houver pedido de alteração sem instrução detalhada, registrar:

"Alterações solicitadas; detalhes não informados."

## Status

A Approval Skill deve trabalhar com estes estados:

### pronto para aprovação

Review concluído e Draft elegível para decisão humana.

### aguardando decisão

Draft elegível que ainda não recebeu uma decisão humana explícita.

### aprovado

Decisão humana explícita registrada e promoção por cópia controlada concluída.

### não aprovado

Decisão humana explícita de rejeição registrada.

### bloqueado

Draft que não pode ser aprovado por alguma pendência ou impedimento.

### precisa de alterações

Draft que recebeu pedido de alteração e deve retornar ao fluxo Draft/Review.

### precisa de revisão

Condição operacional usada quando não existe Review válido associado ao Draft; NÃO é um status de aprovação.

Regras explícitas:

- "pronto para aprovação" NÃO significa "aprovado"
- "aguardando decisão" NÃO significa "aprovado"
- "precisa de revisão" não é elegível
- "bloqueado" não é elegível
- "precisa de alterações" não é elegível

A Skill não deve inventar novos status sem necessidade.

## Pedido de alteração após Review

Se a usuária disser:

Quero alterar o Draft 04 antes de aprovar.

isso NÃO é aprovação.

A Skill deve deixar o Draft fora de approved/.

A alteração deve voltar para o fluxo de Draft/Review.

A Approval Skill não deve editar o texto por conta própria.

Exemplo:

REVIEW
→ precisa de alterações
→ DRAFT corrigido
→ REVIEW novamente
→ pronto para aprovação
→ HUMAN APPROVAL
→ APPROVED

## Rejeição

A usuária também pode rejeitar um Draft.

Exemplo:

Não quero o Draft 04.

A Skill deve registrar a decisão como:

não aprovado

e não mover para approved/.

Não apagar o Draft automaticamente.

Não alterar o Draft.

Não publicar.

O histórico da decisão deve ser preservado.

## Revisão após aprovação

Se um conteúdo aprovado precisar de alteração posteriormente:

- não alterar silenciosamente o conteúdo em approved/;
- registrar que a aprovação anterior existia;
- devolver o conteúdo ao fluxo apropriado de Draft/Review;
- uma nova aprovação deve ser necessária depois das alterações.

Uma aprovação antiga não deve ser considerada válida automaticamente para uma nova versão substancial do conteúdo.

## Publicação

A Approval Skill NÃO publica no LinkedIn.

Mesmo depois de um conteúdo estar em:

approved/

ele permanece aguardando publicação.

Fluxo:

approved/
→ publicação futura
→ published/

A movimentação para published/ deverá acontecer somente em uma etapa posterior e mediante ação/autorização explícita.

## Anti-invenção

A Approval Skill não pode inventar:

- decisões da usuária;
- datas;
- aprovação;
- alterações;
- motivos de rejeição;
- justificativas;
- conteúdo;
- versões;
- resultados;
- publicação.

Se a usuária não informou o motivo da rejeição, não inventar.

Usar:

Motivo não informado.

Se a data puder ser obtida do sistema, utilizar a data real da sessão.

## Restrições permanentes

A Approval Skill:

- não pesquisa;
- não cria ideias;
- não escreve Drafts;
- não revisa novamente;
- não gera visuais;
- não publica;
- não altera outras etapas;
- não decide pela usuária;
- não transforma ausência de objeção em aprovação;
- não interpreta aprovação implícita;
- não edita o texto de um Draft aprovado.

## Relação com as outras Skills

A Approval Skill deve respeitar as responsabilidades existentes:

RESEARCH
→ pesquisa e fatos.

IDEAS
→ transforma pesquisa/contexto em ideias.

DRAFT
→ transforma ideias em posts.

REVIEW
→ avalia Drafts antes da aprovação.

APPROVAL
→ registra a decisão humana e encaminha aprovados.

PUBLISHED
→ representa conteúdo efetivamente publicado, em etapa futura.

Nenhuma Skill deve assumir a responsabilidade de outra.

## Histórico

A Skill deve consultar o histórico existente em:

research/
ideas/
drafts/
review/
approved/
published/
approval/

quando esses diretórios existirem e forem relevantes.

O objetivo é evitar:

- aprovar conteúdo já aprovado;
- sobrescrever aprovação anterior;
- perder rastreabilidade;
- confundir versões;
- duplicar conteúdos.

## Saída da Skill

Ao executar uma aprovação, a resposta deve informar:

- aprovados;
- rejeitados;
- pedidos de alteração;
- bloqueados;
- não processados;
- conflitos;
- arquivos criados;
- arquivos alterados;
- arquivos que permaneceram intactos;
- registro criado em approval/;
- confirmação explícita de que nenhuma publicação foi realizada.

Exemplo:

Aprovados
Draft 01
Draft 03

Rejeitados
(nenhum)

Pedidos de alteração
(nenhum)

Bloqueados
Draft 02 — bloqueado: precisa de contexto

Não processados
Draft 05 — aguardando decisão

Conflitos
(nenhum)

Arquivos criados
approved/2026-09-12-draft-01-...md
approval/2026-09-12-approval.md

Arquivos alterados
(nenhum além dos listados)

Arquivos que permaneceram intactos
drafts/... (Draft original preservado)

Registro criado em approval/
approval/2026-09-12-approval.md

Publicação
Nenhuma publicação realizada.

A Skill nunca deve responder somente "aprovado".

## Princípio final

A Approval Skill existe para garantir uma fronteira clara entre:

"AI says this is ready"

e

"the user decided to publish this."

O sistema pode pesquisar.
O sistema pode sugerir.
O sistema pode escrever.
O sistema pode revisar.

Mas:

A decisão de aprovação pertence à usuária.

E:

A publicação também pertence à usuária.

Nunca ultrapassar essas fronteiras automaticamente.
