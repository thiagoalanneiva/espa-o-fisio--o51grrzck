import { Instagram } from 'lucide-react'

export const contact = {
  phone: '(11) 97166-4664',
  whatsapp: 'https://wa.me/5511971664664',
  email: 'contato@espacofisioembu.com.br',
}

export const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/espacofisioembu/', icon: Instagram },
]

export const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/#sobre' },
  {
    name: 'Serviços',
    isMega: true,
    groups: [
      {
        title: 'Fisioterapia',
        items: [
          { name: 'Ortopédica', href: '/servico/fisioterapia-ortopedica' },
          { name: 'Neurológica', href: '/servico/fisioterapia-neurologica' },
          { name: 'Pélvica', href: '/servico/fisioterapia-pelvica' },
          { name: 'Pediátrica', href: '/servico/fisioterapia-pediatrica' },
          { name: 'Geriátrica', href: '/servico/fisioterapia-geriatrica' },
          { name: 'Gestante', href: '/servico/fisioterapia-gestante' },
          { name: 'Esportiva', href: '/servico/fisioterapia-esportiva' },
        ],
      },
      {
        title: 'Acupuntura & Pilates',
        items: [
          { name: 'Acupuntura Sistêmica', href: '/servico/acupuntura-sistemica' },
          { name: 'Acupuntura Auricular', href: '/servico/acupuntura-auricular' },
          { name: 'Dryneedling', href: '/servico/dryneedling' },
          { name: 'Pilates Postural', href: '/servico/pilates-postural' },
          { name: 'Pilates Gestante', href: '/servico/pilates-gestante' },
          { name: 'Pilates Idoso', href: '/servico/pilates-idoso' },
          { name: 'Pilates Kids', href: '/servico/pilates-kids' },
        ],
      },
      {
        title: 'Especialidades',
        items: [
          { name: 'RPG', href: '/servico/rpg' },
          { name: 'Liberação Miofascial', href: '/servico/liberacao-miofascial' },
          { name: 'Ventosa', href: '/servico/ventosa' },
          { name: 'Quiropraxia', href: '/servico/quiropraxia' },
        ],
      },
    ],
  },
  {
    name: 'Tratamentos',
    isMega: false,
    items: [
      { name: 'Laser', href: '/servico/laser' },
      { name: 'Recupero', href: '/servico/recupero' },
      { name: 'Ondas de Choque', href: '/servico/ondas-de-choque' },
      { name: 'Infra Vermelho', href: '/servico/infra-vermelho' },
      { name: 'Terapia Manual', href: '/servico/terapia-manual' },
      { name: 'Bandagens', href: '/servico/bandagens' },
    ],
  },
  { name: 'Unidades', href: '/#unidades' },
]

const baseBenefits = [
  'Alívio rápido e eficaz da dor',
  'Tratamento 100% personalizado',
  'Recuperação da mobilidade',
  'Prevenção de futuras lesões',
]

export const services = [
  // Fisioterapia
  {
    id: 'fisioterapia-ortopedica',
    title: 'Fisioterapia Ortopédica',
    shortDescription:
      'Reabilitação especializada para lesões musculoesqueléticas, fraturas e dores articulares.',
    fullDescription:
      'Focada no tratamento de disfunções do sistema musculoesquelético. Ideal para recuperação de cirurgias, fraturas, tendinites, bursites, lombalgias e outras dores que limitam o seu dia a dia. Utilizamos técnicas manuais e exercícios específicos para restaurar a função normal.',
    image: 'https://img.usecurling.com/p/800/600?q=physiotherapy%20clinic&color=blue',
    benefits: baseBenefits,
    icon: 'Bone',
  },
  {
    id: 'fisioterapia-neurologica',
    title: 'Fisioterapia Neurológica',
    shortDescription: 'Recuperação funcional para pacientes com distúrbios ou lesões neurológicas.',
    fullDescription:
      'Tratamento direcionado a pacientes com AVC, Parkinson, esclerose múltipla, paralisia cerebral, entre outros. O foco é estimular a neuroplasticidade, melhorando o equilíbrio, a coordenação motora e a independência funcional.',
    image: 'https://img.usecurling.com/p/800/600?q=neurology&color=blue',
    benefits: [
      'Melhora do equilíbrio',
      'Estímulo cognitivo-motor',
      'Maior independência',
      'Prevenção de contraturas',
    ],
    icon: 'Activity',
  },
  {
    id: 'fisioterapia-pelvica',
    title: 'Fisioterapia Pélvica',
    shortDescription: 'Tratamento de disfunções do assoalho pélvico para homens e mulheres.',
    fullDescription:
      'Atua na prevenção e tratamento de incontinência urinária, disfunções sexuais, prolapsos e dores pélvicas crônicas. O tratamento fortalece a musculatura da região, devolvendo o controle e a qualidade de vida.',
    image: 'https://img.usecurling.com/p/800/600?q=anatomy&color=blue',
    benefits: [
      'Controle urinário',
      'Fortalecimento muscular',
      'Preparação para o parto',
      'Alívio de dores',
    ],
    icon: 'Heart',
  },
  {
    id: 'fisioterapia-pediatrica',
    title: 'Fisioterapia Pediátrica',
    shortDescription: 'Cuidado especializado para o desenvolvimento motor de bebês e crianças.',
    fullDescription:
      'Avaliação e intervenção em atrasos no desenvolvimento motor, problemas ortopédicos congênitos, alterações respiratórias e neurológicas infantis. Tudo feito de forma lúdica para engajar a criança.',
    image: 'https://img.usecurling.com/p/800/600?q=pediatrics&color=blue',
    benefits: [
      'Estímulo ao desenvolvimento',
      'Correção postural infantil',
      'Melhora respiratória',
      'Atendimento lúdico',
    ],
    icon: 'Activity',
  },
  {
    id: 'fisioterapia-geriatrica',
    title: 'Fisioterapia Geriátrica',
    shortDescription: 'Manutenção da autonomia e qualidade de vida na terceira idade.',
    fullDescription:
      'Foco na prevenção de quedas, tratamento de artrose, osteoporose e manutenção da força muscular em idosos. O objetivo principal é garantir um envelhecimento ativo e independente.',
    image: 'https://img.usecurling.com/p/800/600?q=elderly%20care&color=blue',
    benefits: [
      'Prevenção de quedas',
      'Manutenção da força',
      'Alívio de dores articulares',
      'Maior autonomia',
    ],
    icon: 'Heart',
  },
  {
    id: 'fisioterapia-gestante',
    title: 'Fisioterapia para Gestantes',
    shortDescription: 'Preparação física para o parto e alívio das dores durante a gestação.',
    fullDescription:
      'Acompanhamento especializado para reduzir desconfortos como dores lombares e inchaço, além de preparar a musculatura pélvica e a respiração para um parto mais tranquilo e uma recuperação pós-parto eficiente.',
    image: 'https://img.usecurling.com/p/800/600?q=pregnancy&color=blue',
    benefits: [
      'Redução de inchaços',
      'Alívio da lombalgia',
      'Preparação para o parto',
      'Recuperação rápida',
    ],
    icon: 'Activity',
  },
  {
    id: 'fisioterapia-esportiva',
    title: 'Fisioterapia Esportiva',
    shortDescription:
      'Prevenção de lesões e reabilitação acelerada para atletas e praticantes de esportes.',
    fullDescription:
      'Focada na rápida recuperação de entorses, distensões e rupturas musculares, permitindo o retorno seguro à prática esportiva. Inclui trabalho preventivo para otimizar o desempenho do atleta.',
    image: 'https://img.usecurling.com/p/800/600?q=sports%20medicine&color=blue',
    benefits: [
      'Retorno rápido ao esporte',
      'Aumento de performance',
      'Prevenção de lesões',
      'Reequilíbrio muscular',
    ],
    icon: 'Zap',
  },

  // Acupuntura
  {
    id: 'acupuntura-sistemica',
    title: 'Acupuntura Sistêmica',
    shortDescription:
      'Terapia milenar chinesa para equilíbrio energético e alívio de diversas patologias.',
    fullDescription:
      'Técnica que utiliza agulhas extremamente finas em pontos específicos do corpo. É altamente eficaz no tratamento de dores crônicas, ansiedade, insônia, enxaqueca, tensões musculares e desequilíbrios sistêmicos.',
    image: 'https://img.usecurling.com/p/800/600?q=acupuncture&color=blue',
    benefits: [
      'Redução do estresse',
      'Alívio de dores crônicas',
      'Melhora do sono',
      'Equilíbrio emocional',
    ],
    icon: 'Feather',
  },
  {
    id: 'acupuntura-auricular',
    title: 'Acupuntura Auricular',
    shortDescription: 'Estímulo de pontos no pavilhão auricular para tratar dores e ansiedade.',
    fullDescription:
      'A auriculoterapia usa o mapa da orelha como um microssistema do corpo humano. Excelente técnica complementar para controle de peso, vício em tabaco, estresse profundo e distúrbios digestivos.',
    image: 'https://img.usecurling.com/p/800/600?q=ear%20acupuncture&color=blue',
    benefits: [
      'Controle de ansiedade',
      'Tratamento rápido',
      'Sem contraindicações',
      'Efeito contínuo',
    ],
    icon: 'Feather',
  },
  {
    id: 'dryneedling',
    title: 'Dry Needling (Agulhamento a Seco)',
    shortDescription: 'Desativação de pontos gatilho musculares para alívio imediato da dor.',
    fullDescription:
      'Diferente da acupuntura tradicional, o agulhamento a seco foca diretamente na musculatura tensionada (pontos gatilho). É extremamente eficaz para dores miofasciais crônicas, torcicolos e tensões nos ombros e pescoço.',
    image: 'https://img.usecurling.com/p/800/600?q=dry%20needling&color=blue',
    benefits: [
      'Alívio muscular imediato',
      'Aumento da amplitude de movimento',
      'Desativação de espasmos',
      'Complemento à fisioterapia',
    ],
    icon: 'Zap',
  },

  // Pilates
  {
    id: 'pilates-postural',
    title: 'Pilates Postural',
    shortDescription: 'Correção de desvios posturais e fortalecimento do centro de força (core).',
    fullDescription:
      'O método foca no alinhamento da coluna e fortalecimento global. Indicado para quem passa muito tempo sentado, sente dores frequentes nas costas ou busca melhorar a consciência corporal e flexibilidade.',
    image: 'https://img.usecurling.com/p/800/600?q=pilates%20studio&color=blue',
    benefits: [
      'Melhora drástica da postura',
      'Fortalecimento do core',
      'Flexibilidade',
      'Alívio de tensões',
    ],
    icon: 'Activity',
  },
  {
    id: 'pilates-gestante',
    title: 'Pilates para Gestantes',
    shortDescription: 'Exercícios seguros para fortalecer o corpo e facilitar a gestação.',
    fullDescription:
      'Aulas adaptadas para cada trimestre da gravidez. O Pilates previne o excesso de ganho de peso, fortalece a musculatura pélvica, alivia as dores na coluna e melhora a circulação sanguínea da gestante.',
    image: 'https://img.usecurling.com/p/800/600?q=pregnancy%20exercise&color=blue',
    benefits: [
      'Controle da respiração',
      'Fortalecimento seguro',
      'Redução de dores',
      'Bem-estar materno',
    ],
    icon: 'Heart',
  },
  {
    id: 'pilates-idoso',
    title: 'Pilates para a Terceira Idade',
    shortDescription: 'Mobilidade, equilíbrio e força muscular para um envelhecimento ativo.',
    fullDescription:
      'O Pilates é um dos métodos mais seguros para idosos, pois possui baixo impacto articular. Auxilia muito na prevenção de quedas, combate à osteoporose e devolução da autonomia para atividades diárias.',
    image: 'https://img.usecurling.com/p/800/600?q=elderly%20fitness&color=blue',
    benefits: [
      'Segurança nos movimentos',
      'Ganho de massa muscular',
      'Socialização',
      'Prevenção de lesões',
    ],
    icon: 'Activity',
  },
  {
    id: 'pilates-kids',
    title: 'Pilates Kids',
    shortDescription: 'Desenvolvimento motor e postural saudável para crianças e adolescentes.',
    fullDescription:
      'De forma lúdica, trabalhamos a concentração, coordenação motora e prevenimos desvios posturais causados pelo excesso de uso de celulares e mochilas pesadas. Ideal para o desenvolvimento infantil.',
    image: 'https://img.usecurling.com/p/800/600?q=kids%20exercise&color=blue',
    benefits: [
      'Correção postural precoce',
      'Foco e concentração',
      'Gasto de energia',
      'Consciência corporal',
    ],
    icon: 'Sparkles',
  },

  // Specialties
  {
    id: 'rpg',
    title: 'RPG (Reeducação Postural Global)',
    shortDescription:
      'Método de correção postural profunda através de posturas de alongamento e respiração.',
    fullDescription:
      'A Reeducação Postural Global (RPG) trata a causa da dor atuando sobre os desvios posturais. O tratamento consiste em consultas individuais onde o fisioterapeuta aplica posturas específicas para realinhar a coluna e as articulações.',
    image: 'https://img.usecurling.com/p/800/600?q=posture%20correction&color=blue',
    benefits: [
      'Tratamento de escoliose',
      'Cura de hérnias de disco',
      'Correção postural',
      'Alívio de dores crônicas',
    ],
    icon: 'Bone',
  },
  {
    id: 'liberacao-miofascial',
    title: 'Liberação Miofascial',
    shortDescription:
      'Técnica manual profunda para relaxar a fáscia muscular e aliviar dores tensionais.',
    fullDescription:
      'Através de pressão manual ou com instrumentos, soltamos as aderências na fáscia (tecido que envolve o músculo). Fundamental para atletas, pessoas com fibromialgia ou quem sofre com alto nível de estresse e tensão no pescoço.',
    image: 'https://img.usecurling.com/p/800/600?q=massage%20therapy&color=blue',
    benefits: [
      'Relaxamento profundo',
      'Prevenção de lesões musculares',
      'Aumento de flexibilidade',
      'Melhora da circulação',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'ventosa',
    title: 'Ventosaterapia',
    shortDescription:
      'Terapia que utiliza sucção para oxigenar tecidos, eliminar toxinas e soltar músculos.',
    fullDescription:
      'A aplicação de ventosas cria um vácuo na pele, aumentando a circulação sanguínea no local. O aumento do fluxo de sangue nutre os músculos, desfazendo nódulos de tensão e promovendo uma sensação de alívio rápido.',
    image: 'https://img.usecurling.com/p/800/600?q=cupping%20therapy&color=blue',
    benefits: [
      'Desintoxicação muscular',
      'Alívio imediato de tensões',
      'Oxigenação celular',
      'Acelera a recuperação',
    ],
    icon: 'Activity',
  },
  {
    id: 'quiropraxia',
    title: 'Quiropraxia',
    shortDescription:
      'Ajustes articulares precisos para restaurar o alinhamento da coluna e sistema nervoso.',
    fullDescription:
      'A Quiropraxia foca no diagnóstico e tratamento de problemas articulares, principalmente na coluna vertebral. Através de manobras manuais (os famosos "estalos"), destravamos articulações bloqueadas, eliminando a dor e otimizando o corpo.',
    image: 'https://img.usecurling.com/p/800/600?q=chiropractic&color=blue',
    benefits: [
      'Alinhamento vertebral',
      'Mobilidade imediata',
      'Melhora da condução nervosa',
      'Tratamento não invasivo',
    ],
    icon: 'Dna',
  },

  // Tratamentos
  {
    id: 'laser',
    title: 'Laserterapia',
    shortDescription:
      'Tecnologia avançada de luz para acelerar a cicatrização e reduzir inflamações severas.',
    fullDescription:
      'O Laser de baixa potência atua diretamente no nível celular. Ele acelera a produção de ATP, promovendo uma rápida regeneração de tecidos lesionados. Muito utilizado em cicatrização de feridas, tendinites crônicas e fascite plantar.',
    image: 'https://img.usecurling.com/p/800/600?q=laser%20treatment&color=blue',
    benefits: [
      'Poderoso anti-inflamatório',
      'Cicatrização rápida',
      'Totalmente indolor',
      'Analgesia profunda',
    ],
    icon: 'Zap',
  },
  {
    id: 'recupero',
    title: 'Recupero',
    shortDescription:
      'Tecnologia inovadora para aceleração biológica do reparo de tecidos musculoesqueléticos.',
    fullDescription:
      'Um equipamento premium que atua profundamente, emitindo estímulos que reorganizam as fibras musculares e articulares. É a escolha de atletas de alto rendimento para acelerar a cura de distensões e traumas.',
    image: 'https://img.usecurling.com/p/800/600?q=medical%20technology&color=blue',
    benefits: [
      'Recuperação em tempo recorde',
      'Regeneração celular',
      'Ação direta na inflamação',
      'Alta tecnologia',
    ],
    icon: 'Activity',
  },
  {
    id: 'ondas-de-choque',
    title: 'Terapia por Ondas de Choque',
    shortDescription:
      'Onda acústica de alta energia ideal para dissolver calcificações e dores persistentes.',
    fullDescription:
      'O padrão ouro para o tratamento de tendinites calcificadas, fascite plantar, esporão de calcâneo e epicondilites. As ondas acústicas criam microlesões que forçam o corpo a reiniciar um processo de cura agudo na região afetada.',
    image: 'https://img.usecurling.com/p/800/600?q=shockwave%20machine&color=blue',
    benefits: [
      'Evita cirurgias',
      'Quebra de calcificações',
      'Resultados em poucas sessões',
      'Estimula novos vasos sanguíneos',
    ],
    icon: 'Zap',
  },
  {
    id: 'infra-vermelho',
    title: 'Infravermelho',
    shortDescription:
      'Terapia de calor superficial para preparar e relaxar a musculatura antes da reabilitação.',
    fullDescription:
      'A luz infravermelha penetra nas primeiras camadas da pele, promovendo uma vasodilatação profunda. Esse aquecimento aumenta a maleabilidade dos tecidos e alivia espasmos, sendo excelente como preparo para terapias manuais.',
    image: 'https://img.usecurling.com/p/800/600?q=infrared%20lamp&color=blue',
    benefits: [
      'Vasodilatação local',
      'Relaxamento imediato',
      'Preparação tecidual',
      'Conforto térmico',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual',
    shortDescription: 'Conjunto de técnicas aplicadas exclusivamente pelas mãos do fisioterapeuta.',
    fullDescription:
      'Inclui mobilização articular, manipulação, tração e massagem profunda. O raciocínio clínico por trás da terapia manual permite devolver o deslizamento perfeito entre as articulações e nervos, acabando com a rigidez.',
    image: 'https://img.usecurling.com/p/800/600?q=manual%20physiotherapy&color=blue',
    benefits: [
      'Restauração do movimento',
      'Avaliação contínua',
      'Toque especializado',
      'Desbloqueio articular',
    ],
    icon: 'Activity',
  },
  {
    id: 'bandagens',
    title: 'Bandagens Funcionais (Kinesio)',
    shortDescription:
      'Aplicação de fitas terapêuticas coloridas para dar suporte articular e muscular.',
    fullDescription:
      'As fitas elásticas são aplicadas com tensões específicas para levantar levemente a pele, aliviando a pressão nos receptores de dor e facilitando a drenagem linfática. Permitem o movimento livre enquanto estabilizam a área lesionada.',
    image: 'https://img.usecurling.com/p/800/600?q=kinesio%20tape&color=blue',
    benefits: [
      'Suporte contínuo 24h',
      'Redução imediata de edemas',
      'Melhora da propriocepção',
      'Segurança no movimento',
    ],
    icon: 'Feather',
  },
]

export const units = [
  {
    id: 'embu',
    name: 'Espaço Fisio Embu',
    address: 'Av. Elias Yazbek, 567',
    city: 'Embu das Artes - SP',
    phone: '(11) 97166-4664',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Elias+Yazbek,+567+-+Embu+das+Artes',
    image: 'https://img.usecurling.com/p/600/400?q=clinic%20building&color=blue',
  },
  {
    id: 'taboao',
    name: 'Espaço Fisio Taboão',
    address: 'R. Thereza Maria Luizetto, 220',
    city: 'Taboão da Serra - SP',
    phone: '(11) 97166-4664',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=R.+Thereza+Maria+Luizetto,+220+-+Taboão+da+Serra',
    image: 'https://img.usecurling.com/p/600/400?q=medical%20office&color=blue',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Ana Lúcia Ferreira',
    role: 'Paciente de Fisioterapia',
    content:
      'Fui super bem atendida desde a recepção até a avaliação com o fisioterapeuta. Profissionais extremamente competentes e atenciosos. A clínica é linda e muito bem equipada. Minha dor no ombro melhorou 100%!',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=15',
  },
  {
    id: 2,
    name: 'Carlos Eduardo Santos',
    role: 'Paciente de RPG',
    content:
      'Excelente espaço para reabilitação. Faço sessões de RPG e a melhora na minha postura foi notável em poucas semanas. Recomendo muito o Espaço Fisio para quem busca tratamento sério e de resultado.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=22',
  },
  {
    id: 3,
    name: 'Mariana Oliveira',
    role: 'Aluna de Pilates',
    content:
      'O melhor estúdio de Pilates da região! Os professores são super capacitados, as turmas são pequenas e o acompanhamento é bem personalizado. O ambiente é super agradável e muito limpo.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=31',
  },
  {
    id: 4,
    name: 'Roberto Mendes',
    role: 'Paciente de Acupuntura',
    content:
      'Tinha crises constantes de enxaqueca e a acupuntura no Espaço Fisio salvou minha vida. Resultados rápidos e duradouros. A equipe é muito acolhedora e te deixa super à vontade.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=44',
  },
]
