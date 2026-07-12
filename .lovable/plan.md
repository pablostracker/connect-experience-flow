# Backlog — pendências agendadas

Feito neste turno:
- Hidratação corrigida (SectionShell, WhatIConnect, Languages) via `useMounted` — resolve travamento do header e clique nos idiomas.
- Removidos todos os "—" de `src/i18n/pt.ts`.
- Removida a instrução "↕ Clique em cada bandeira…" em Languages.
- Wellhub agora usa rosa choque no strip de parceiros.
- Discord passa a usar o mark oficial (SVG inline) no Contato.
- AI Lab: espaçamento entre cluster/tools corrigido; chips viram metalizados ao **clicar** (toggle), preservam estado.

Pendências agendadas (para os próximos créditos):

1. **WhatIConnect interativo**
   - Clique nos nós (People/Ops/Data/AI) e nas linhas abre painel explicando como atuo naquela interseção.
   - Bola de energia percorrendo as linhas ao clicar (hoje já pulsa contínuo; falta o "shot" no clique).

2. **Journey — trajetória completa clicável**
   - Cada empresa do timeline abre modal com transição suave listando escopo completo de atividades.
   - Conteúdo por empresa precisa ser adicionado em `src/i18n/pt.ts` (`journey.trajectory[i].scope`).

3. **SideQuests — Gerando Falcões**
   - Redesenhar `FalconWings` mais fino/moderno e em movimento contínuo (flap loop sempre ativo, não só no hover).
   - Os 4 pássaros menores em loop constante de travessia, com paths variados.

4. **SideQuests — LOUD**
   - Restaurar card com altura cheia (voltar TA/título completo).
   - Ícones de Sinal do Jogador / Mapa de Atenção / Funil / Short Videos com animação contínua (hoje só animam no viewport enter).

5. **SideQuests — Naruto**
   - Redesenhar `KonohaSymbol` a partir da referência anexada (espiral canônica + textura metalizada + sombra "alguém passando").
   - Kunai no HyperrealPortrait com animação de "edição" (grid de ajuste, sliders, glint contínuo).
   - Todos os cards de repertório em movimento contínuo.

6. **SideQuests — Customer Insights**
   - Garantir capa (`triathlon-splash.jpg`) 100% visível no mobile e desktop.
   - Garmin: animação contínua da linha de batimento (hoje anima só uma vez no viewport).
   - FMTri: reorganizar layout, título "Federação Mineira de Triathlon" em duas linhas com hierarquia clara.

7. **Wellhub extra**
   - Migrar o rosa choque para tokens semânticos em `src/styles.css` (`--wellhub`).

8. **Nav header**
   - Verificar que backdrop-blur não bloqueia cliques após a correção de hidratação. Se persistir, mover blur para `::before` com `pointer-events:none`.
