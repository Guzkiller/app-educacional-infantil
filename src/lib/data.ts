import { Activity, Milestone } from './types';
import { generateId } from './utils';

// Marcos de desenvolvimento por idade (em meses)
export const defaultMilestones: Milestone[] = [
  // 0-6 meses
  {
    id: generateId(),
    title: 'Sorri socialmente',
    description: 'Sorri em resposta a outras pessoas',
    category: 'social',
    expectedAge: 2,
    ageRange: { min: 0, max: 6 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Sustenta a cabeça',
    description: 'Consegue sustentar a cabeça quando está de bruços',
    category: 'motor',
    expectedAge: 3,
    ageRange: { min: 0, max: 6 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Segue objetos com os olhos',
    description: 'Acompanha objetos em movimento com o olhar',
    category: 'cognitive',
    expectedAge: 4,
    ageRange: { min: 0, max: 6 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Balbucia',
    description: 'Produz sons como "ba-ba" ou "ma-ma"',
    category: 'language',
    expectedAge: 6,
    ageRange: { min: 3, max: 9 },
    achieved: false
  },

  // 6-12 meses
  {
    id: generateId(),
    title: 'Senta sem apoio',
    description: 'Consegue sentar sozinho sem suporte',
    category: 'motor',
    expectedAge: 8,
    ageRange: { min: 6, max: 12 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Transfere objetos entre as mãos',
    description: 'Passa brinquedos de uma mão para outra',
    category: 'motor',
    expectedAge: 7,
    ageRange: { min: 6, max: 12 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Reconhece o próprio nome',
    description: 'Responde quando chamado pelo nome',
    category: 'language',
    expectedAge: 9,
    ageRange: { min: 6, max: 15 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Engatinha',
    description: 'Move-se engatinhando para explorar',
    category: 'motor',
    expectedAge: 10,
    ageRange: { min: 8, max: 15 },
    achieved: false
  },

  // 12-18 meses
  {
    id: generateId(),
    title: 'Caminha sozinho',
    description: 'Anda independentemente sem apoio',
    category: 'motor',
    expectedAge: 14,
    ageRange: { min: 12, max: 18 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Diz primeiras palavras',
    description: 'Fala palavras com significado como "mamã" ou "papá"',
    category: 'language',
    expectedAge: 12,
    ageRange: { min: 10, max: 18 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Imita ações simples',
    description: 'Copia gestos como bater palmas ou acenar',
    category: 'social',
    expectedAge: 15,
    ageRange: { min: 12, max: 20 },
    achieved: false
  },

  // 18-24 meses
  {
    id: generateId(),
    title: 'Combina duas palavras',
    description: 'Forma frases simples como "quer água"',
    category: 'language',
    expectedAge: 20,
    ageRange: { min: 18, max: 30 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Sobe escadas',
    description: 'Sobe degraus com apoio',
    category: 'motor',
    expectedAge: 22,
    ageRange: { min: 18, max: 30 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Brinca de faz de conta',
    description: 'Simula atividades como dar comida à boneca',
    category: 'cognitive',
    expectedAge: 24,
    ageRange: { min: 20, max: 36 },
    achieved: false
  },

  // 2-3 anos
  {
    id: generateId(),
    title: 'Forma frases de 3 palavras',
    description: 'Constrói frases mais complexas',
    category: 'language',
    expectedAge: 30,
    ageRange: { min: 24, max: 42 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Usa o banheiro',
    description: 'Controla esfíncteres durante o dia',
    category: 'motor',
    expectedAge: 32,
    ageRange: { min: 24, max: 48 },
    achieved: false
  },
  {
    id: generateId(),
    title: 'Brinca com outras crianças',
    description: 'Interage e compartilha brinquedos',
    category: 'social',
    expectedAge: 36,
    ageRange: { min: 30, max: 48 },
    achieved: false
  }
];

// Atividades educacionais expandidas para crianças até 10 anos
export const defaultActivities: Activity[] = [
  // 0-6 meses - Bebês
  {
    id: generateId(),
    title: 'Tempo de Bruços Divertido',
    description: 'Exercício para fortalecer músculos do pescoço e costas com estímulos visuais',
    category: 'physical',
    ageRange: { min: 0, max: 6 },
    duration: 10,
    materials: ['Tapete macio', 'Brinquedos coloridos', 'Espelho seguro'],
    instructions: [
      'Coloque o bebê de bruços em superfície firme',
      'Posicione brinquedos coloridos à frente',
      'Use espelho para despertar curiosidade',
      'Converse e cante durante o exercício',
      'Comece com 2-3 minutos e aumente gradualmente'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Massagem Sensorial',
    description: 'Massagem com diferentes texturas para estimular desenvolvimento sensorial',
    category: 'physical',
    ageRange: { min: 0, max: 12 },
    duration: 15,
    materials: ['Óleo para bebê', 'Toalha macia', 'Pincéis macios', 'Esponjas'],
    instructions: [
      'Aqueça as mãos e o óleo',
      'Use diferentes texturas: mãos, pincel, esponja',
      'Faça movimentos suaves e circulares',
      'Converse ou cante durante a massagem',
      'Observe as reações e preferências do bebê'
    ],
    completed: false
  },

  // 6-18 meses - Exploradores
  {
    id: generateId(),
    title: 'Caixa dos Tesouros',
    description: 'Exploração sensorial com objetos seguros de diferentes texturas',
    category: 'educational',
    ageRange: { min: 6, max: 18 },
    duration: 20,
    materials: ['Caixa grande', 'Objetos seguros variados', 'Tecidos diferentes'],
    instructions: [
      'Encha a caixa com objetos de texturas variadas',
      'Inclua: colheres de madeira, tecidos, bolas macias',
      'Deixe a criança explorar livremente',
      'Descreva texturas: "macio", "áspero", "liso"',
      'Supervisione sempre para segurança'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Música e Movimento',
    description: 'Atividade musical para desenvolver ritmo e coordenação',
    category: 'creative',
    ageRange: { min: 6, max: 24 },
    duration: 15,
    materials: ['Instrumentos simples', 'Lenços coloridos', 'Música variada'],
    instructions: [
      'Toque músicas com ritmos diferentes',
      'Use chocalhos, tambores simples',
      'Balance lenços no ritmo da música',
      'Encoraje movimentos livres',
      'Varie entre música calma e animada'
    ],
    completed: false
  },

  // 18-36 meses - Pequenos Artistas
  {
    id: generateId(),
    title: 'Pintura com Dedos Mágica',
    description: 'Arte sensorial com tintas comestíveis e efeitos especiais',
    category: 'creative',
    ageRange: { min: 18, max: 36 },
    duration: 30,
    materials: ['Tinta atóxica', 'Papel grande', 'Esponjas', 'Carimbos', 'Aventais'],
    instructions: [
      'Prepare espaço com proteção completa',
      'Ofereça tintas de cores primárias',
      'Mostre técnicas: dedos, palmas, esponjas',
      'Crie texturas com carimbos caseiros',
      'Deixe secar e celebre a obra de arte'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Teatro de Sombras',
    description: 'Brincadeira com luz e sombras para estimular imaginação',
    category: 'creative',
    ageRange: { min: 18, max: 48 },
    duration: 20,
    materials: ['Lanterna', 'Lençol branco', 'Objetos diversos', 'Fantoches'],
    instructions: [
      'Estenda lençol como tela',
      'Use lanterna para criar sombras',
      'Faça sombras com mãos e objetos',
      'Conte histórias simples',
      'Deixe a criança experimentar'
    ],
    completed: false
  },

  // 2-4 anos - Pequenos Cientistas
  {
    id: generateId(),
    title: 'Laboratório de Cores',
    description: 'Experimentos simples com mistura de cores',
    category: 'educational',
    ageRange: { min: 24, max: 48 },
    duration: 25,
    materials: ['Corante alimentar', 'Água', 'Copos transparentes', 'Conta-gotas'],
    instructions: [
      'Prepare copos com água',
      'Adicione corantes primários',
      'Misture cores para criar novas',
      'Use conta-gotas para precisão',
      'Registre descobertas com desenhos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Cozinha Divertida',
    description: 'Receitas simples para desenvolver coordenação e matemática',
    category: 'educational',
    ageRange: { min: 24, max: 60 },
    duration: 40,
    materials: ['Ingredientes simples', 'Utensílios seguros', 'Aventais', 'Receita visual'],
    instructions: [
      'Escolha receita sem fogo (sanduíche, salada)',
      'Ensine medidas: "uma colher", "meia xícara"',
      'Deixe a criança misturar e decorar',
      'Converse sobre texturas e sabores',
      'Celebre comendo juntos'
    ],
    completed: false
  },

  // 3-5 anos - Exploradores do Mundo
  {
    id: generateId(),
    title: 'Caça ao Tesouro Educativa',
    description: 'Busca por objetos para desenvolver observação e seguir instruções',
    category: 'educational',
    ageRange: { min: 36, max: 60 },
    duration: 30,
    materials: ['Lista visual', 'Objetos escondidos', 'Sacola', 'Adesivos de recompensa'],
    instructions: [
      'Crie lista com desenhos dos objetos',
      'Esconda itens pela casa/quintal',
      'Dê pistas simples: "perto da janela"',
      'Celebre cada descoberta',
      'Conte os tesouros encontrados'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Jardinagem Mágica',
    description: 'Plantio e cuidado de plantas para ensinar responsabilidade',
    category: 'educational',
    ageRange: { min: 36, max: 72 },
    duration: 45,
    materials: ['Sementes fáceis', 'Vasos pequenos', 'Terra', 'Regador', 'Etiquetas'],
    instructions: [
      'Escolha sementes de crescimento rápido',
      'Plante junto explicando cada passo',
      'Crie calendário de cuidados',
      'Meça crescimento semanalmente',
      'Registre progresso com fotos/desenhos'
    ],
    completed: false
  },

  // 4-6 anos - Pequenos Inventores
  {
    id: generateId(),
    title: 'Construção com Materiais Reciclados',
    description: 'Criação de brinquedos e objetos úteis com recicláveis',
    category: 'creative',
    ageRange: { min: 48, max: 72 },
    duration: 50,
    materials: ['Caixas', 'Rolos de papel', 'Cola', 'Tinta', 'Tesoura sem ponta'],
    instructions: [
      'Planeje projeto simples: robô, castelo',
      'Deixe a criança escolher materiais',
      'Ajude apenas quando necessário',
      'Decore com tintas e adesivos',
      'Brinque com a criação finalizada'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Experimentos de Física Simples',
    description: 'Descobertas sobre densidade, magnetismo e movimento',
    category: 'educational',
    ageRange: { min: 48, max: 84 },
    duration: 35,
    materials: ['Ímãs', 'Objetos variados', 'Água', 'Óleo', 'Bolas diferentes'],
    instructions: [
      'Teste o que gruda no ímã',
      'Misture água e óleo',
      'Role bolas em superfícies diferentes',
      'Faça perguntas: "Por que isso acontece?"',
      'Registre descobertas em caderno'
    ],
    completed: false
  },

  // 5-7 anos - Pequenos Leitores
  {
    id: generateId(),
    title: 'Criação de Livro Ilustrado',
    description: 'Escrita e ilustração de história própria',
    category: 'creative',
    ageRange: { min: 60, max: 84 },
    duration: 60,
    materials: ['Papel', 'Lápis de cor', 'Grampeador', 'Adesivos', 'Fotos'],
    instructions: [
      'Escolha tema da história juntos',
      'Desenhe personagens principais',
      'Escreva frases simples',
      'Ilustre cada página',
      'Monte livro e leia para família'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Jogo da Memória Personalizado',
    description: 'Criação de jogo com fotos e desenhos da família',
    category: 'educational',
    ageRange: { min: 60, max: 96 },
    duration: 40,
    materials: ['Cartolina', 'Fotos', 'Cola', 'Tesoura', 'Plástico adesivo'],
    instructions: [
      'Corte cartões do mesmo tamanho',
      'Cole fotos/desenhos em pares',
      'Plastifique para durabilidade',
      'Jogue começando com poucos pares',
      'Aumente dificuldade gradualmente'
    ],
    completed: false
  },

  // 6-8 anos - Pequenos Matemáticos
  {
    id: generateId(),
    title: 'Loja de Brinquedo',
    description: 'Brincadeira de compra e venda para aprender matemática',
    category: 'educational',
    ageRange: { min: 72, max: 96 },
    duration: 45,
    materials: ['Brinquedos', 'Dinheiro de brinquedo', 'Etiquetas de preço', 'Calculadora'],
    instructions: [
      'Monte loja com preços simples',
      'Ensine a contar dinheiro',
      'Pratique soma e subtração',
      'Alternem papéis: vendedor/comprador',
      'Calcule troco juntos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Mapa do Tesouro Matemático',
    description: 'Aventura com coordenadas e resolução de problemas',
    category: 'educational',
    ageRange: { min: 72, max: 108 },
    duration: 50,
    materials: ['Papel quadriculado', 'Lápis', 'Régua', 'Pequenos prêmios'],
    instructions: [
      'Desenhe mapa simples com coordenadas',
      'Crie problemas matemáticos como pistas',
      'Esconda "tesouros" nos pontos marcados',
      'Resolva problemas para avançar',
      'Celebre cada tesouro encontrado'
    ],
    completed: false
  },

  // 7-10 anos - Pequenos Cientistas Avançados
  {
    id: generateId(),
    title: 'Laboratório de Química Caseira',
    description: 'Experimentos seguros com reações químicas simples',
    category: 'educational',
    ageRange: { min: 84, max: 120 },
    duration: 60,
    materials: ['Bicarbonato', 'Vinagre', 'Corantes', 'Copos', 'Funil', 'Caderno'],
    instructions: [
      'Misture bicarbonato e vinagre',
      'Adicione corantes para efeito visual',
      'Teste diferentes proporções',
      'Registre observações no caderno',
      'Discuta o que causa a reação'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Projeto de Programação Simples',
    description: 'Introdução à lógica de programação sem computador',
    category: 'educational',
    ageRange: { min: 84, max: 120 },
    duration: 45,
    materials: ['Papel', 'Lápis', 'Adesivos coloridos', 'Tabuleiro caseiro'],
    instructions: [
      'Crie sequência de comandos simples',
      'Use setas para direções: frente, trás',
      'Faça "robô" seguir instruções',
      'Corrija "bugs" nas instruções',
      'Crie labirintos mais complexos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Documentário Familiar',
    description: 'Criação de vídeo sobre história da família',
    category: 'creative',
    ageRange: { min: 84, max: 120 },
    duration: 90,
    materials: ['Câmera/celular', 'Fotos antigas', 'Papel', 'Roteiro'],
    instructions: [
      'Entreviste familiares sobre histórias',
      'Organize fotos cronologicamente',
      'Escreva roteiro simples',
      'Grave pequenos trechos',
      'Monte apresentação para família'
    ],
    completed: false
  },

  // Atividades especiais para dias chuvosos
  {
    id: generateId(),
    title: 'Acampamento Indoor',
    description: 'Aventura dentro de casa com cabana e histórias',
    category: 'creative',
    ageRange: { min: 36, max: 120 },
    duration: 120,
    materials: ['Lençóis', 'Cadeiras', 'Lanternas', 'Livros', 'Lanches'],
    instructions: [
      'Monte cabana com lençóis e cadeiras',
      'Prepare lanches especiais',
      'Conte histórias com lanterna',
      'Faça jogos dentro da cabana',
      'Durma na cabana se possível'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Spa Day em Casa',
    description: 'Dia de relaxamento e cuidados pessoais',
    category: 'social',
    ageRange: { min: 48, max: 120 },
    duration: 90,
    materials: ['Máscaras naturais', 'Música relaxante', 'Toalhas', 'Óleos'],
    instructions: [
      'Prepare máscaras com ingredientes naturais',
      'Faça massagem relaxante',
      'Pinte unhas juntas',
      'Ouça música calma',
      'Termine com lanche saudável'
    ],
    completed: false
  },

  // ===== NOVAS ATIVIDADES ADICIONADAS =====

  // 5 NOVAS ATIVIDADES EDUCATIVAS
  {
    id: generateId(),
    title: 'Escola de Dinossauros',
    description: 'Exploração paleontológica com escavação e classificação de fósseis',
    category: 'educational',
    ageRange: { min: 48, max: 96 },
    duration: 60,
    materials: ['Areia', 'Brinquedos de dinossauro', 'Pincéis', 'Lupa', 'Caderno de campo'],
    instructions: [
      'Enterre "fósseis" na areia',
      'Use pincéis para escavar cuidadosamente',
      'Classifique descobertas por tipo',
      'Desenhe os achados no caderno',
      'Crie histórias sobre cada dinossauro'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Meteorologista por um Dia',
    description: 'Observação e registro do clima para entender meteorologia',
    category: 'educational',
    ageRange: { min: 60, max: 108 },
    duration: 30,
    materials: ['Termômetro', 'Caderno', 'Lápis', 'Régua', 'Saco plástico'],
    instructions: [
      'Meça temperatura em diferentes horários',
      'Observe e desenhe tipos de nuvens',
      'Registre direção do vento',
      'Colete gotas de chuva se houver',
      'Faça previsão para o dia seguinte'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Banco dos Números',
    description: 'Simulação bancária para aprender sobre dinheiro e matemática',
    category: 'educational',
    ageRange: { min: 72, max: 120 },
    duration: 45,
    materials: ['Dinheiro de brinquedo', 'Calculadora', 'Caderneta', 'Carimbos'],
    instructions: [
      'Abra conta no "banco" da família',
      'Pratique depósitos e saques',
      'Calcule juros simples',
      'Registre todas as transações',
      'Planeje compras futuras'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Laboratório de Idiomas',
    description: 'Introdução divertida a novos idiomas através de jogos',
    category: 'educational',
    ageRange: { min: 48, max: 120 },
    duration: 35,
    materials: ['Cartões com palavras', 'Música internacional', 'Mapa-múndi'],
    instructions: [
      'Aprenda 5 palavras básicas em novo idioma',
      'Ouça música no idioma escolhido',
      'Localize país no mapa',
      'Pratique pronúncia com jogos',
      'Ensine palavras para família'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Engenheiro de Pontes',
    description: 'Construção e teste de pontes com materiais diversos',
    category: 'educational',
    ageRange: { min: 60, max: 120 },
    duration: 55,
    materials: ['Palitos de sorvete', 'Cola', 'Barbante', 'Pesos pequenos', 'Régua'],
    instructions: [
      'Projete ponte no papel primeiro',
      'Construa usando materiais disponíveis',
      'Teste resistência com pesos',
      'Meça distância que a ponte cobre',
      'Melhore design baseado nos testes'
    ],
    completed: false
  },

  // 5 NOVAS ATIVIDADES CRIATIVAS
  {
    id: generateId(),
    title: 'Estúdio de Animação Caseiro',
    description: 'Criação de pequenos filmes de animação com desenhos',
    category: 'creative',
    ageRange: { min: 72, max: 120 },
    duration: 90,
    materials: ['Papel', 'Lápis', 'Celular/tablet', 'App de animação gratuito'],
    instructions: [
      'Desenhe personagem em várias posições',
      'Fotografe cada desenho em sequência',
      'Use app para criar animação',
      'Adicione sons e música',
      'Apresente filme para família'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Ateliê de Esculturas Naturais',
    description: 'Arte tridimensional usando elementos da natureza',
    category: 'creative',
    ageRange: { min: 36, max: 96 },
    duration: 50,
    materials: ['Galhos', 'Pedras', 'Folhas', 'Argila', 'Cola natural'],
    instructions: [
      'Colete materiais naturais no quintal',
      'Crie base com argila',
      'Combine elementos de forma criativa',
      'Deixe secar ao sol',
      'Fotografe criação para portfólio'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Designer de Moda Infantil',
    description: 'Criação de roupas e acessórios para bonecas e bonecos',
    category: 'creative',
    ageRange: { min: 48, max: 108 },
    duration: 70,
    materials: ['Tecidos', 'Tesoura', 'Cola de tecido', 'Botões', 'Fitas'],
    instructions: [
      'Desenhe modelo da roupa primeiro',
      'Corte tecido no tamanho certo',
      'Cole ou costure peças simples',
      'Adicione detalhes decorativos',
      'Organize desfile de moda'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Oficina de Instrumentos Musicais',
    description: 'Construção de instrumentos com materiais recicláveis',
    category: 'creative',
    ageRange: { min: 36, max: 84 },
    duration: 60,
    materials: ['Latas', 'Elásticos', 'Arroz', 'Tampas', 'Fita adesiva'],
    instructions: [
      'Transforme latas em tambores',
      'Crie chocalhos com arroz',
      'Faça violão com caixa e elásticos',
      'Decore cada instrumento',
      'Forme banda familiar'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Galeria de Arte Sensorial',
    description: 'Criação de obras de arte que estimulam todos os sentidos',
    category: 'creative',
    ageRange: { min: 24, max: 72 },
    duration: 45,
    materials: ['Texturas variadas', 'Aromas', 'Tintas', 'Papel texturizado'],
    instructions: [
      'Crie quadros com diferentes texturas',
      'Adicione aromas suaves às obras',
      'Use cores que transmitam emoções',
      'Monte exposição em casa',
      'Convide família para vernissage'
    ],
    completed: false
  },

  // 5 NOVAS ATIVIDADES FÍSICAS
  {
    id: generateId(),
    title: 'Olimpíadas Domésticas',
    description: 'Competição esportiva adaptada para casa com várias modalidades',
    category: 'physical',
    ageRange: { min: 48, max: 120 },
    duration: 90,
    materials: ['Cronômetro', 'Fita métrica', 'Obstáculos', 'Medalhas caseiras'],
    instructions: [
      'Crie 5 modalidades diferentes',
      'Estabeleça regras claras',
      'Cronometrre cada prova',
      'Registre recordes pessoais',
      'Cerimônia de premiação'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Yoga para Pequenos Yogis',
    description: 'Sequência de yoga adaptada com histórias e animais',
    category: 'physical',
    ageRange: { min: 36, max: 96 },
    duration: 25,
    materials: ['Tapete', 'Música relaxante', 'Cartões com poses'],
    instructions: [
      'Comece com respiração profunda',
      'Imite animais: gato, cobra, cachorro',
      'Conte história durante as poses',
      'Termine com relaxamento',
      'Pratique gratidão juntos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Dança das Emoções',
    description: 'Expressão corporal através de diferentes estilos musicais',
    category: 'physical',
    ageRange: { min: 24, max: 84 },
    duration: 30,
    materials: ['Playlist variada', 'Lenços', 'Espelho', 'Fantasias simples'],
    instructions: [
      'Escolha músicas de ritmos diferentes',
      'Dance cada emoção: alegria, tristeza',
      'Use lenços para movimentos fluidos',
      'Crie coreografia simples',
      'Apresente para família'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Aventura de Equilíbrio',
    description: 'Percurso desafiador para desenvolver equilíbrio e coordenação',
    category: 'physical',
    ageRange: { min: 36, max: 96 },
    duration: 35,
    materials: ['Fita adesiva', 'Almofadas', 'Livros', 'Corda'],
    instructions: [
      'Cole fita no chão como linha de equilíbrio',
      'Crie obstáculos com almofadas',
      'Ande sobre livros empilhados',
      'Pule corda de diferentes alturas',
      'Cronometrre melhorias'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Capoeira Mirim',
    description: 'Introdução aos movimentos básicos da capoeira',
    category: 'physical',
    ageRange: { min: 48, max: 108 },
    duration: 40,
    materials: ['Música de capoeira', 'Espaço livre', 'Pandeiro (opcional)'],
    instructions: [
      'Aprenda ginga básica',
      'Pratique esquivas simples',
      'Tente movimentos de pernas',
      'Cante músicas tradicionais',
      'Forme roda com família'
    ],
    completed: false
  },

  // 5 NOVAS ATIVIDADES SOCIAIS
  {
    id: generateId(),
    title: 'Tribunal da Família',
    description: 'Simulação de julgamento para resolver conflitos de forma lúdica',
    category: 'social',
    ageRange: { min: 60, max: 120 },
    duration: 45,
    materials: ['Martelo de brinquedo', 'Toga improvisada', 'Caderno de atas'],
    instructions: [
      'Escolha caso simples para julgar',
      'Cada um assume um papel',
      'Apresente argumentos respeitosamente',
      'Vote em decisão justa',
      'Celebre resolução pacífica'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Clube do Livro Familiar',
    description: 'Discussão de histórias e criação de clube de leitura',
    category: 'social',
    ageRange: { min: 48, max: 120 },
    duration: 50,
    materials: ['Livros adequados à idade', 'Caderno', 'Lápis', 'Lanches'],
    instructions: [
      'Escolha livro para ler juntos',
      'Discuta personagens favoritos',
      'Desenhe cenas marcantes',
      'Vote no próximo livro',
      'Crie certificados de leitura'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Restaurante da Família',
    description: 'Simulação de restaurante com cardápio e atendimento',
    category: 'social',
    ageRange: { min: 36, max: 96 },
    duration: 60,
    materials: ['Cardápio desenhado', 'Aventais', 'Bloco de pedidos', 'Comida real'],
    instructions: [
      'Crie cardápio com desenhos',
      'Alternem papéis: chef, garçom, cliente',
      'Anote pedidos cuidadosamente',
      'Sirva com educação',
      'Avalie experiência juntos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Conselho de Família',
    description: 'Reunião democrática para decisões familiares importantes',
    category: 'social',
    ageRange: { min: 48, max: 120 },
    duration: 30,
    materials: ['Agenda', 'Papel', 'Lápis', 'Cronômetro'],
    instructions: [
      'Prepare pauta com temas importantes',
      'Cada um tem direito à fala',
      'Ouça opiniões sem interromper',
      'Vote em decisões coletivas',
      'Registre acordos feitos'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Festival Cultural Caseiro',
    description: 'Celebração de diferentes culturas com comida, música e tradições',
    category: 'social',
    ageRange: { min: 48, max: 120 },
    duration: 120,
    materials: ['Receitas internacionais', 'Música mundial', 'Decorações', 'Fantasias'],
    instructions: [
      'Escolha país para homenagear',
      'Prepare prato típico simples',
      'Aprenda dança tradicional',
      'Decore casa com tema',
      'Convide vizinhos se possível'
    ],
    completed: false
  }
];

// Atividades para professores (mantidas as originais)
export const teacherActivities: Activity[] = [
  {
    id: generateId(),
    title: 'Roda de Conversa',
    description: 'Atividade para desenvolver linguagem oral e socialização',
    category: 'social',
    ageRange: { min: 24, max: 72 },
    duration: 20,
    materials: ['Tapete ou almofadas', 'Objeto para passar a vez'],
    instructions: [
      'Forme um círculo com as crianças',
      'Escolha um tema do dia',
      'Passe o objeto para quem vai falar',
      'Encoraje todos a participarem'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Circuito Motor',
    description: 'Desenvolve coordenação motora grossa',
    category: 'physical',
    ageRange: { min: 24, max: 60 },
    duration: 30,
    materials: ['Cones', 'Cordas', 'Bambolês', 'Colchonetes'],
    instructions: [
      'Monte estações com diferentes desafios',
      'Demonstre cada movimento',
      'Acompanhe as crianças no circuito',
      'Adapte para diferentes habilidades'
    ],
    completed: false
  },
  {
    id: generateId(),
    title: 'Projeto Científico Simples',
    description: 'Introduz conceitos científicos básicos',
    category: 'educational',
    ageRange: { min: 36, max: 72 },
    duration: 40,
    materials: ['Materiais do experimento', 'Caderno de observações'],
    instructions: [
      'Escolha experimento seguro e simples',
      'Faça perguntas antes de começar',
      'Observe e registre resultados',
      'Discuta o que aconteceu'
    ],
    completed: false
  }
];

// Atividades por categoria para facilitar busca
export const activitiesByCategory = {
  educational: defaultActivities.filter(a => a.category === 'educational'),
  creative: defaultActivities.filter(a => a.category === 'creative'),
  physical: defaultActivities.filter(a => a.category === 'physical'),
  social: defaultActivities.filter(a => a.category === 'social')
};

// Atividades por faixa etária
export const activitiesByAge = {
  baby: defaultActivities.filter(a => a.ageRange.max <= 12), // 0-12 meses
  toddler: defaultActivities.filter(a => a.ageRange.min >= 12 && a.ageRange.max <= 36), // 1-3 anos
  preschool: defaultActivities.filter(a => a.ageRange.min >= 24 && a.ageRange.max <= 72), // 2-6 anos
  school: defaultActivities.filter(a => a.ageRange.min >= 60) // 5+ anos
};