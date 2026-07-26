const QUESTOES = [
  {
    "id": 1,
    "texto": "O Direito Administrativo é um ramo do Direito Privado, pois tutela predominantemente os interesses e a coexistência dos indivíduos em suas relações particulares.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 2,
    "texto": "Na esfera pública vigora o princípio da legalidade estrita, o que significa que o administrador só pode fazer aquilo que a lei autoriza.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 3,
    "texto": "Elementos indissociáveis do Estado moderno incluem o povo, o território e o governo soberano.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 4,
    "texto": "Os três Poderes do Estado (Legislativo, Executivo e Judiciário) são independentes e harmônicos entre si.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 5,
    "texto": "A Administração Direta é constituída pelas próprias entidades políticas da Federação: União, Estados, Distrito Federal e Municípios.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 6,
    "texto": "As autarquias são pessoas jurídicas de Direito Privado criadas para exploração de atividade econômica.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 7,
    "texto": "Órgãos públicos são centros de competência despersonalizados instituidos por lei dentro da estrutura da Administração.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 8,
    "texto": "A revogação é a extinção de um ato administrativo ilegal ou ilegítimo.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 9,
    "texto": "O ato de anulação de um ato administrativo ilegal produz efeitos retroativos à data de sua origem (ex tunc).",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 10,
    "texto": "O mérito do ato administrativo confere ao administrador uma margem de escolha baseada nos critérios de conveniência e oportunidade.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 11,
    "texto": "De acordo com a Constituição Federal, as pessoas jurídicas de direito público respondem objetivamente pelos danos que seus agentes causarem a terceiros.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 12,
    "texto": "Agente público é a categoria que abrange exclusivamente os servidores públicos estatutários de carreira.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 13,
    "texto": "O princípio da publicidade exige que todos os atos da Administração Pública sejam divulgados de forma transparente, sendo o sigilo a regra geral.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 14,
    "texto": "A licença para dirigir é um exemplo clássico de ato administrativo vinculado e definitivo.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 15,
    "texto": "A competência, como requisito de validade do ato administrativo, pode ser livremente transmitida ou derrogada por vontade das partes.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 16,
    "texto": "O fornecimento de certidões pela Administração Pública é uma garantia constitucional que deve ser atendida no prazo legal.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 17,
    "texto": "O Poder Judiciário tem competência para revogar atos legítimos do Poder Executivo por razões de conveniência pública.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 18,
    "texto": "A imperatividade é o atributo que permite ao ato administrativo impor obrigações unilateralmente a terceiros.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 19,
    "texto": "Empresas Públicas possuem capital 100% público e são autorizadas por lei para a prestação de serviços ou exploração econômica.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 20,
    "texto": "Atos de expediente são atividades administrativas cotidianas e rotineiras que não possuem conteúdo decisório de mérito.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 21,
    "texto": "A destituição ou demissão de um servidor público após um Processo Administrativo Disciplinar (PAD) é uma expressão do poder punitivo interno.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 22,
    "texto": "O costume é considerado a fonte primária e principal do Direito Administrativo brasileiro.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 23,
    "texto": "O princípio da eficiência exige que a atividade pública busque resultados positivos, rápidos e com rendimento funcional para a sociedade.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 24,
    "texto": "Mesários eleitorais e jurados são classificados pela doutrina como agentes honoríficos.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 25,
    "texto": "Atos gerais ou normativos possuem destinatários indeterminados e caráter abstrato.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 26,
    "texto": "O Brasil adota, desde o advento da República em 1891, o Sistema do Contencioso Administrativo (modelo francês) de controle dos atos administrativos.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 27,
    "texto": "A separação anatômica (estática) do Estado é objeto do Direito Constitucional, enquanto o aspecto dinâmico e fisiológico é o objeto do Direito Administrativo.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 28,
    "texto": "A Administração Indireta compreende as entidades criadas por meio da descentralização funcional, possuindo patrimônio e receitas auto-administráveis.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 29,
    "texto": "Entre a Administração Direta e a Administração Indireta não há relação de subordinação hierárquica, mas sim vinculação e controle de supervisão (tutela).",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 30,
    "texto": "Órgãos compostos são aqueles caracterizados por possuírem apenas um único centro de competência, sem subdivisões internas.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 31,
    "texto": "Os agentes políticos formam os primeiros escalões do Governo e atuam com ampla liberdade funcional, não estando sujeitos à hierarquia administrativa comum.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 32,
    "texto": "A investidura em cargo de comissão confere ao agente caráter de vitaliciedade, sendo a perda do cargo condicionada a processo judicial transitado em julgado.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 33,
    "texto": "O desvio de finalidade configura-se quando o administrador pratica o ato visando a um fim diverso daquele previsto em lei ou do interesse público primário.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 34,
    "texto": "A presunção de legitimidade dos atos administrativos é do tipo juris et de jure (absoluta), impedindo que o particular apresente prova em contrário.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 35,
    "texto": "O atributo da autoexecutoriedade permite que a Administração execute diretamente certas decisões sem prévia autorização do Poder Judiciário.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 36,
    "texto": "Atos complexos diferenciam-se dos compostos porque os complexos exigem a fusão da vontade de dois ou mais órgãos independentes para formar um único ato.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 37,
    "texto": "De acordo com a Teoria dos Motivos Determinantes, se os motivos alegados para a prática do ato forem comprovadamente falsos, o ato será nulo, mesmo que a lei não exigisse a motivação.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 38,
    "texto": "Atos consumados, atos que geraram direito adquirido e atos vinculados são exemplos de atos insuscetíveis de revogação.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 39,
    "texto": "Na esfera federal, a Administração Pública tem o prazo decadencial de 5 anos para anular atos de efeitos favoráveis aos destinatários, mesmo se comprovada a má-fé.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 40,
    "texto": "O decreto regulamentar ou de execução é um ato de competência exclusiva do Chefe do Executivo destinado a detalhar uma lei e facilitar sua aplicação.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 41,
    "texto": "As instruções normativas expedidas por Ministros de Estado possuem força de direito original primário e podem criar proibições não previstas em lei.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 42,
    "texto": "Atos enunciativos como pareceres jurídicos possuem caráter eminentemente opinativo e, como regra geral, não vinculam a decisão final da autoridade competente.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 43,
    "texto": "A imposição de multa administrativa externa decorrente de infração possui natureza predominantemente subjetiva, exigindo sempre a prova do dolo ou da culpa do infrator.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 44,
    "texto": "Se o Estado for condenado a indenizar um terceiro devido a dano causado por seu agente, a ação regressiva contra o servidor exige comprovação de dolo ou culpa.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 45,
    "texto": "As prerrogativas da supremacia do interesse público justificam a desigualdade vertical existente entre a Administração e o particular.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 46,
    "texto": "O princípio da motivação exige que o administrador justifique por escrito os pressupostos de fato e de direito que determinaram a prática do ato.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 47,
    "texto": "Atos de império são aqueles praticados de forma horizontal, onde o Estado atua despido de sua supremacia, em igualdade com o particular.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 48,
    "texto": "A anulação de um ato administrativo pela própria Administração Pública prescinde de processo administrativo prévio quando atinge interesses individuais concretos.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 49,
    "texto": "Concessionários e permissionários de serviços públicos são classificados como agentes públicos na categoria de agentes delegados.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 50,
    "texto": "O princípio da proporcionalidade serve como limite ao poder discricionário do administrador, impedindo sanções abusivas ou desmedidas.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 51,
    "texto": "A Escola Italiana ou Subjetivista definia o Direito Administrativo como o catálogo de leis da Administração, excluindo os atos administrativos praticados pelo Legislativo e Judiciário.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 52,
    "texto": "No sistema de jurisdição única adotado pelo Brasil, as decisões dos tribunais administrativos não possuem a força de definitividade da coisa julgada material do Judiciário.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 53,
    "texto": "A Ciência da Administração é considerada um ramo autônomo do Direito Público interno no ordenamento jurídico nacional.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 54,
    "texto": "No Direito Administrativo brasileiro, admite-se a aplicação da analogia para integrar lacunas, mas rejeita-se a interpretação extensiva que crie obrigação nova a partir do Direito Privado.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 55,
    "texto": "A teoria da dupla personalidade do Estado (pública e privada) permanece amplamente adotada e fundamenta as ações civis modernas no ordenamento brasileiro.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 56,
    "texto": "As funções dos Poderes de Estado são reciprocamente indelegáveis, mas a tripartição de funções não é absoluta, pois todos os Poderes exercem funções atípicas.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 57,
    "texto": "Órgãos singulares ou unipessoais são aqueles cujas decisões decorrem da manifestação de vontade de um único chefe, ainda que o órgão conte com servidores de apoio.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 58,
    "texto": "A investidura derivada é aquela caracterizada pelo primeiro vínculo profissional entre o cidadão e o Estado, ocorrendo tipicamente via nomeação inicial por concurso.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 59,
    "texto": "As responsabilidades civil, administrativa e penal dos agentes públicos são esferas independentes e podem cumular-se sem configurar bis in idem.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 60,
    "texto": "Em decorrência do princípio da segurança jurídica e da proteção à confiança legítima, o decurso do tempo e a boa-fé do administrado podem convalidar atos originalmente nulos.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 61,
    "texto": "O controle judicial de legalidade dos atos discricionários autoriza o magistrado a aferir a veracidade dos pressupostos de fato (motivo), mas veda a substituição do mérito administrativo.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 62,
    "texto": "Os regimentos internos são atos normativos de atuação externa que têm por finalidade primordial regular a conduta dos particulares em geral.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 63,
    "texto": "O ato de visto consiste em um controle discricionário e precário que avalia a conveniência e oportunidade de outro ato administrativo.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 64,
    "texto": "A destruição sumária de coisas perigosas ou nocivas à saúde, por ser medida urgente de polícia, prescinde de processo prévio, exigindo-se, contudo, a lavratura imediata do auto.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 65,
    "texto": "O princípio da impessoalidade veda a promoção pessoal de autoridades sobre obras públicas, além de exigir tratamento isonômico aos administrados.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 66,
    "texto": "O desfazimento de ato administrativo por razões de interesse público superveniente que o tornou inconveniente denomina-se anulação.",
    "resposta": "F",
    "anulada": false
  },
  {
    "id": 67,
    "texto": "O poder normativo ou regulamentar da Administração é um poder essencialmente secundário e subordinado, sendo vedada a inovação original na ordem jurídica.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 68,
    "texto": "O Congresso Nacional, por previsão constitucional, detém a competência política de sustar atos normativos do Poder Executivo que exorbitem do poder regulamentar.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 69,
    "texto": "Atos de gestão são aqueles que ordenam a conduta interna da máquina pública ou geram direitos e obrigações de caráter horizontal/comum.",
    "resposta": "V",
    "anulada": false
  },
  {
    "id": 70,
    "texto": "O \"Sistema S\" (SESI, SENAI) e as Organizações Sociais (OS) não integram formalmente a Administração Indireta, sendo classificados pela doutrina como entidades paraestatais. L – Legalidade: agir conforme a lei. I – Impessoalidade: tratar todos de forma igual, sem favorecimentos. M – Moralidade: agir com ética, honestidade e boa-fé. P – Publicidade: dar transparência aos atos",
    "resposta": "V",
    "anulada": false
  }
];
