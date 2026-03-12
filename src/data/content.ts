import { Instagram } from 'lucide-react'

export const contact = {
  phone: '(11) 97166-4664',
  whatsapp: 'https://wa.me/5511971664664',
  email: 'contato@espacofisioembu.com.br',
  address: 'Rua Exemplo, 123 - Centro, Embu das Artes - SP',
}

export const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/espacofisioembu/', icon: Instagram },
]

export const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/#sobre' },
  {
    name: 'Serviços',
    items: [
      {
        name: 'Fisioterapia',
        href: '/servicos/fisioterapia',
        description: 'Reabilitação e prevenção de lesões',
      },
      {
        name: 'Acupuntura',
        href: '/servicos/acupuntura',
        description: 'Tratamento tradicional para dor',
      },
      { name: 'RPG', href: '/servicos/rpg', description: 'Reeducação Postural Global' },
      { name: 'Pilates', href: '/servicos/pilates', description: 'Fortalecimento e flexibilidade' },
      {
        name: 'Liberação Miofascial',
        href: '/servicos/liberacao-miofascial',
        description: 'Alívio de tensões musculares',
      },
      { name: 'Ventosa', href: '/servicos/ventosa', description: 'Terapia com ventosas' },
      {
        name: 'Quiropraxia',
        href: '/servicos/quiropraxia',
        description: 'Ajustes articulares e alinhamento',
      },
    ],
  },
  {
    name: 'Tratamentos',
    items: [
      { name: 'Laser', href: '/servicos/laser', description: 'Terapia a laser para inflamações' },
      {
        name: 'Recupero',
        href: '/servicos/recupero',
        description: 'Aceleração da recuperação tecidual',
      },
      {
        name: 'Ondas de Choque',
        href: '/servicos/ondas-de-choque',
        description: 'Tratamento para dores crônicas',
      },
      {
        name: 'Infra Vermelho',
        href: '/servicos/infra-vermelho',
        description: 'Terapia térmica superficial',
      },
      {
        name: 'Terapia Manual',
        href: '/servicos/terapia-manual',
        description: 'Técnicas de mobilização manual',
      },
      {
        name: 'Bandagens',
        href: '/servicos/bandagens',
        description: 'Suporte muscular e articular',
      },
    ],
  },
  { name: 'Unidades', href: '/#unidades' },
]

export const services = [
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    shortDescription:
      'Avaliação, diagnóstico e tratamento de disfunções do movimento humano com as melhores técnicas.',
    fullDescription:
      'A Fisioterapia foca na reabilitação através de recursos físicos, manuais e exercícios terapêuticos. Nosso objetivo é restaurar, manter e promover a função física ótima, bem-estar e qualidade de vida do paciente.\n\nTratamos condições ortopédicas, neurológicas, respiratórias e desportivas, sempre com um plano de tratamento individualizado.',
    image: 'https://img.usecurling.com/p/800/600?q=physiotherapy',
    benefits: [
      'Alívio da dor',
      'Recuperação de movimentos',
      'Prevenção de lesões',
      'Melhora da flexibilidade',
    ],
    icon: 'Activity',
  },
  {
    id: 'acupuntura',
    title: 'Acupuntura',
    shortDescription:
      'Terapia milenar chinesa para equilíbrio energético e tratamento de diversas patologias.',
    fullDescription:
      'A Acupuntura é uma técnica milenar que consiste na inserção de agulhas finas em pontos específicos do corpo para estimular a cura natural, promover a saúde e aliviar a dor.\n\nÉ altamente eficaz no tratamento de dores crônicas, ansiedade, insônia, enxaqueca e problemas digestivos.',
    image: 'https://img.usecurling.com/p/800/600?q=acupuncture',
    benefits: [
      'Redução do estresse',
      'Alívio de dores crônicas',
      'Melhora do sono',
      'Equilíbrio emocional',
    ],
    icon: 'Feather',
  },
  {
    id: 'rpg',
    title: 'RPG (Reeducação Postural Global)',
    shortDescription:
      'Método fisioterapêutico de correção postural através de posturas de alongamento.',
    fullDescription:
      'A Reeducação Postural Global (RPG) é um método inovador de fisioterapia que consiste em ajustamentos na postura para reorganização dos segmentos do corpo humano.\n\nAtravés de posturas específicas de alongamento, tratamos desvios posturais, dores nas costas, hérnias de disco e lesões articulares.',
    image: 'https://img.usecurling.com/p/800/600?q=posture',
    benefits: [
      'Correção postural',
      'Alívio de dores na coluna',
      'Melhora da respiração',
      'Aumento da flexibilidade',
    ],
    icon: 'Bone',
  },
  {
    id: 'pilates',
    title: 'Pilates',
    shortDescription:
      'Sistema de exercícios para melhorar flexibilidade, força e consciência corporal.',
    fullDescription:
      'O Pilates é um método de condicionamento físico e mental que trabalha o corpo de forma global, enfatizando a respiração, a concentração, o controle, o centro de força, a precisão e a fluidez dos movimentos.\n\nIdeal para reabilitação, prevenção de lesões e melhora do condicionamento físico geral.',
    image: 'https://img.usecurling.com/p/800/600?q=pilates',
    benefits: [
      'Fortalecimento muscular',
      'Melhora da postura',
      'Aumento da flexibilidade',
      'Consciência corporal',
    ],
    icon: 'Heart',
  },
  {
    id: 'liberacao-miofascial',
    title: 'Liberação Miofascial',
    shortDescription: 'Técnica manual para relaxar a musculatura e aliviar tensões da fáscia.',
    fullDescription:
      'A Liberação Miofascial é uma técnica de terapia manual que visa promover o alívio de tensões e dores musculares, relaxando a fáscia (tecido conectivo que envolve os músculos).\n\nÉ excelente para atletas, pessoas com má postura crônica ou que sofrem de dores tensionais.',
    image: 'https://img.usecurling.com/p/800/600?q=massage',
    benefits: [
      'Alívio de tensões musculares',
      'Aumento da amplitude de movimento',
      'Melhora da circulação',
      'Redução de dores',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'ventosa',
    title: 'Ventosaterapia',
    shortDescription:
      'Terapia natural que utiliza sucção para melhorar a circulação e aliviar dores.',
    fullDescription:
      'A Ventosaterapia é um tipo de tratamento natural no qual são usadas ventosas para melhorar a circulação sanguínea em um local do corpo.\n\nA sucção criada pela ventosa aumenta o fluxo de sangue, o que promove o relaxamento muscular, o alívio de tensões e a desintoxicação do organismo.',
    image: 'https://img.usecurling.com/p/800/600?q=cupping',
    benefits: [
      'Relaxamento muscular profundo',
      'Melhora da circulação sanguínea',
      'Alívio de dores nas costas',
      'Desintoxicação',
    ],
    icon: 'Activity',
  },
  {
    id: 'quiropraxia',
    title: 'Quiropraxia',
    shortDescription:
      'Diagnóstico e tratamento de problemas no sistema neuromusculoesquelético com ajustes articulares.',
    fullDescription:
      'A Quiropraxia dedica-se ao diagnóstico, tratamento e prevenção de problemas das articulações, músculos, tendões e nervos, com ênfase especial na coluna vertebral.\n\nAtravés de ajustes articulares precisos, restauramos a mobilidade, reduzimos a dor e otimizamos o funcionamento do sistema nervoso central, promovendo saúde e bem-estar de forma natural.',
    image: 'https://img.usecurling.com/p/800/600?q=chiropractic',
    benefits: [
      'Alinhamento da coluna vertebral',
      'Alívio imediato de dores articulares',
      'Melhora da mobilidade',
      'Otimização do sistema nervoso',
    ],
    icon: 'Dna',
  },
  {
    id: 'laser',
    title: 'Laserterapia',
    shortDescription: 'Tratamento com laser para acelerar a cicatrização e reduzir inflamações.',
    fullDescription:
      'A Laserterapia utiliza a luz do laser de baixa potência para estimular a recuperação celular e tecidual. É amplamente utilizada para reduzir inflamações, aliviar dores e acelerar o processo de cicatrização de feridas e lesões musculares.',
    image: 'https://img.usecurling.com/p/800/600?q=laser%20therapy',
    benefits: [
      'Ação anti-inflamatória',
      'Efeito analgésico',
      'Aceleração da cicatrização',
      'Regeneração tecidual',
    ],
    icon: 'Zap',
  },
  {
    id: 'recupero',
    title: 'Recupero',
    shortDescription:
      'Tecnologia avançada para aceleração do reparo de tecidos musculoesqueléticos.',
    fullDescription:
      'O Recupero é um equipamento de alta tecnologia que atua profundamente nos tecidos, promovendo uma rápida recuperação de lesões musculares, articulares e ligamentares através de estímulos biológicos.',
    image: 'https://img.usecurling.com/p/800/600?q=medical%20device',
    benefits: [
      'Recuperação acelerada',
      'Ação analgésica rápida',
      'Redução de edemas',
      'Melhora da função celular',
    ],
    icon: 'Activity',
  },
  {
    id: 'ondas-de-choque',
    title: 'Ondas de Choque',
    shortDescription: 'Terapia não invasiva altamente eficaz no tratamento de dores crônicas.',
    fullDescription:
      'A Terapia por Ondas de Choque é um tratamento não invasivo que utiliza ondas acústicas de alta energia para estimular a regeneração de tecidos e a formação de novos vasos sanguíneos, sendo excelente para fascite plantar, tendinites e calcificações.',
    image: 'https://img.usecurling.com/p/800/600?q=shockwave%20therapy',
    benefits: [
      'Desintegração de calcificações',
      'Alívio de dores crônicas',
      'Estimulação de colágeno',
      'Formação de novos vasos',
    ],
    icon: 'Zap',
  },
  {
    id: 'infra-vermelho',
    title: 'Infravermelho',
    shortDescription: 'Terapia de calor superficial para promover relaxamento e alívio da dor.',
    fullDescription:
      'A terapia com luz Infravermelha utiliza o calor para penetrar superficialmente nos tecidos corporais, promovendo vasodilatação local, relaxamento muscular, alívio da dor e aumento do metabolismo da região tratada.',
    image: 'https://img.usecurling.com/p/800/600?q=infrared%20therapy',
    benefits: [
      'Relaxamento muscular',
      'Alívio de espasmos',
      'Aumento da circulação local',
      'Preparação para outras terapias',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual',
    shortDescription: 'Conjunto de técnicas aplicadas com as mãos para tratar disfunções.',
    fullDescription:
      'A Terapia Manual engloba diversas técnicas de manipulação e mobilização articular e de tecidos moles. O fisioterapeuta utiliza as mãos para diagnosticar e tratar dores e disfunções, restaurando a mobilidade e função normais.',
    image: 'https://img.usecurling.com/p/800/600?q=manual%20therapy',
    benefits: [
      'Restauração da mobilidade',
      'Diminuição da dor',
      'Melhora da função articular',
      'Tratamento personalizado',
    ],
    icon: 'Activity',
  },
  {
    id: 'bandagens',
    title: 'Bandagens Funcionais',
    shortDescription: 'Aplicação de fitas terapêuticas para suporte e alívio de dores.',
    fullDescription:
      'As bandagens funcionais (como o Kinesio Taping) são aplicadas sobre a pele para fornecer suporte muscular e articular sem restringir a amplitude de movimento. Ajudam a reduzir edemas, aliviar a dor e facilitar a contração muscular.',
    image: 'https://img.usecurling.com/p/800/600?q=kinesio%20tape',
    benefits: [
      'Suporte articular',
      'Redução de edemas',
      'Alívio de dores',
      'Melhora da propriocepção',
    ],
    icon: 'Feather',
  },
]

export const units = [
  {
    id: 'embu',
    name: 'Unidade Embu das Artes',
    address: 'Rua Exemplo, 123 - Centro',
    city: 'Embu das Artes - SP',
    phone: '(11) 97166-4664',
    mapUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Espa%C3%A7o+Fisioterapia+Embu+das+Artes',
    image: 'https://img.usecurling.com/p/600/400?q=modern%20clinic',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Paciente de Fisioterapia',
    content:
      'Lugar maravilhoso, ótimo atendimento! Os profissionais são super capacitados. Fui tratada pela equipe e só tenho a agradecer.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: 2,
    name: 'João Pedro',
    role: 'Aluno de Pilates',
    content:
      'Espaço muito bem equipado e ambiente super agradável. Faço pilates duas vezes por semana e minhas dores nas costas sumiram!',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Paciente de Acupuntura',
    content:
      'Atendimento impecável desde a recepção até a acupuntura. Profissionais atenciosos e competentes. Recomendo muito o Espaço Fisio.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
]
