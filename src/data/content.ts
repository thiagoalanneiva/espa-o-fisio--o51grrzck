export interface ServiceContent {
  slug: string
  title: string
  category: string
  description: string
  image: string
}

export const contentData: ServiceContent[] = [
  {
    slug: 'fisioterapia-ortopedica',
    title: 'Fisioterapia Ortopédica',
    category: 'Fisioterapia',
    description:
      'Tratamento focado na reabilitação de disfunções osteomioarticulares e tendíneas para restaurar a mobilidade plena.',
    image: 'https://img.usecurling.com/p/800/600?q=orthopedic%20physiotherapy',
  },
  {
    slug: 'fisioterapia-neurologica',
    title: 'Fisioterapia Neurológica',
    category: 'Fisioterapia',
    description:
      'Reabilitação dedicada a pacientes com distúrbios neurológicos, focada em restaurar e maximizar a funcionalidade motora.',
    image: 'https://img.usecurling.com/p/800/600?q=neurological%20rehabilitation',
  },
  {
    slug: 'fisioterapia-pelvica',
    title: 'Fisioterapia Pélvica',
    category: 'Fisioterapia',
    description:
      'Tratamento de disfunções do assoalho pélvico para melhorar a qualidade de vida, continência e suporte muscular.',
    image: 'https://img.usecurling.com/p/800/600?q=pelvic%20physiotherapy',
  },
  {
    slug: 'fisioterapia-pediatrica',
    title: 'Fisioterapia Pediátrica',
    category: 'Fisioterapia',
    description:
      'Cuidados especiais e lúdicos para bebês e crianças com alterações no desenvolvimento motor ou respiratório.',
    image: 'https://img.usecurling.com/p/800/600?q=pediatric%20physiotherapy',
  },
  {
    slug: 'fisioterapia-geriatrica',
    title: 'Fisioterapia Geriátrica',
    category: 'Fisioterapia',
    description:
      'Foco na prevenção de quedas, manutenção da independência e tratamento de problemas relacionados ao envelhecimento.',
    image: 'https://img.usecurling.com/p/800/600?q=geriatric%20physiotherapy',
  },
  {
    slug: 'fisioterapia-gestante',
    title: 'Fisioterapia para Gestantes',
    category: 'Fisioterapia',
    description:
      'Acompanhamento especializado para prevenir e tratar desconfortos posturais durante e após a gestação.',
    image: 'https://img.usecurling.com/p/800/600?q=pregnant%20physiotherapy',
  },
  {
    slug: 'fisioterapia-esportiva',
    title: 'Fisioterapia Esportiva',
    category: 'Fisioterapia',
    description:
      'Prevenção e tratamento ágil de lesões em atletas amadores e profissionais para um retorno seguro ao esporte.',
    image: 'https://img.usecurling.com/p/800/600?q=sports%20physiotherapy',
  },
  {
    slug: 'acupuntura-auricular',
    title: 'Acupuntura Auricular',
    category: 'Acupuntura',
    description:
      'Técnica terapêutica que estimula pontos no pavilhão auricular para tratar dores, ansiedade e distúrbios sistêmicos.',
    image: 'https://img.usecurling.com/p/800/600?q=auricular%20acupuncture',
  },
  {
    slug: 'acupuntura-sistemica',
    title: 'Acupuntura Sistêmica',
    category: 'Acupuntura',
    description:
      'Equilíbrio da energia vital através da inserção de agulhas finas em pontos específicos distribuídos pelo corpo.',
    image: 'https://img.usecurling.com/p/800/600?q=systemic%20acupuncture',
  },
  {
    slug: 'dry-needling',
    title: 'Dry Needling',
    category: 'Acupuntura',
    description:
      'Agulhamento a seco focado em desativar pontos gatilhos (trigger points) para alívio imediato de dores musculares profundas.',
    image: 'https://img.usecurling.com/p/800/600?q=dry%20needling',
  },
  {
    slug: 'rpg',
    title: 'RPG (Reeducação Postural Global)',
    category: 'RPG',
    description:
      'Método fisioterapêutico que trata as desarmonias do corpo humano de forma global, corrigindo posturas e aliviando dores.',
    image: 'https://img.usecurling.com/p/800/600?q=posture%20correction',
  },
  {
    slug: 'pilates-gestante',
    title: 'Pilates para Gestantes',
    category: 'Pilates',
    description:
      'Exercícios adaptados para o fortalecimento, alívio de tensões e preparação segura do corpo para o momento do parto.',
    image: 'https://img.usecurling.com/p/800/600?q=pregnant%20pilates',
  },
  {
    slug: 'pilates-idoso',
    title: 'Pilates para Idosos',
    category: 'Pilates',
    description:
      'Prática focada na manutenção da mobilidade articular, equilíbrio e força muscular para a terceira idade.',
    image: 'https://img.usecurling.com/p/800/600?q=senior%20pilates',
  },
  {
    slug: 'pilates-kids',
    title: 'Pilates Kids',
    category: 'Pilates',
    description:
      'Atividades dinâmicas e lúdicas desenhadas para o correto desenvolvimento motor e postural das crianças.',
    image: 'https://img.usecurling.com/p/800/600?q=kids%20pilates',
  },
  {
    slug: 'pilates-postural',
    title: 'Pilates Postural',
    category: 'Pilates',
    description:
      'Exercícios focados no alinhamento da coluna, fortalecimento do core e conscientização corporal para alívio de dores.',
    image: 'https://img.usecurling.com/p/800/600?q=pilates%20studio',
  },
  {
    slug: 'liberacao-miofascial',
    title: 'Liberação Miofascial',
    category: 'Terapias Manuais',
    description:
      'Técnica manual focada em relaxar a fáscia e os músculos, aliviando tensões crônicas e melhorando a flexibilidade.',
    image: 'https://img.usecurling.com/p/800/600?q=myofascial%20massage',
  },
  {
    slug: 'ventosa',
    title: 'Ventosaterapia',
    category: 'Terapias Alternativas',
    description:
      'Utilização de copos para criar sucção na pele, promovendo aumento do fluxo sanguíneo local e alívio rápido de dores.',
    image: 'https://img.usecurling.com/p/800/600?q=cupping%20therapy',
  },
  {
    slug: 'laser',
    title: 'Laserterapia',
    category: 'Tratamentos',
    description:
      'Uso de feixes de luz específicos para acelerar a cicatrização celular, reduzir inflamações e promover analgesia.',
    image: 'https://img.usecurling.com/p/800/600?q=laser%20therapy',
  },
  {
    slug: 'recupero',
    title: 'Recupero',
    category: 'Tratamentos',
    description:
      'Tecnologia avançada importada para acelerar intensamente o processo de reabilitação celular, articular e muscular.',
    image: 'https://img.usecurling.com/p/800/600?q=recovery%20technology',
  },
  {
    slug: 'ondas-de-choque',
    title: 'Ondas de Choque',
    category: 'Tratamentos',
    description:
      'Tratamento não invasivo altamente eficaz para patologias crônicas como tendinites, bursites e fascite plantar.',
    image: 'https://img.usecurling.com/p/800/600?q=shockwave%20therapy',
  },
  {
    slug: 'infra-vermelho',
    title: 'Infra Vermelho',
    category: 'Tratamentos',
    description:
      'Terapia térmica superficial para promover relaxamento muscular profundo e aumento expressivo da circulação local.',
    image: 'https://img.usecurling.com/p/800/600?q=infrared%20therapy',
  },
  {
    slug: 'terapia-manual',
    title: 'Terapia Manual',
    category: 'Tratamentos',
    description:
      'Conjunto de manobras manuais especializadas para restaurar o movimento natural das articulações e tecidos moles.',
    image: 'https://img.usecurling.com/p/800/600?q=manual%20therapy',
  },
  {
    slug: 'bandagens',
    title: 'Bandagens Funcionais',
    category: 'Tratamentos',
    description:
      'Aplicação de fitas elásticas que proporcionam suporte muscular contínuo e alívio da dor sem limitar a amplitude de movimento.',
    image: 'https://img.usecurling.com/p/800/600?q=kinesio%20tape',
  },
]

export const menuItems = [
  { name: 'Início', href: '/#inicio' },
  {
    name: 'Serviços',
    items: [
      {
        name: 'Fisioterapia',
        subItems: [
          { name: 'Ortopédica', href: '/servico/fisioterapia-ortopedica' },
          { name: 'Neurológica', href: '/servico/fisioterapia-neurologica' },
          { name: 'Pélvica', href: '/servico/fisioterapia-pelvica' },
          { name: 'Pediátrica', href: '/servico/fisioterapia-pediatrica' },
          { name: 'Geriátrica', href: '/servico/fisioterapia-geriatrica' },
          { name: 'Para Gestante', href: '/servico/fisioterapia-gestante' },
          { name: 'Esportiva', href: '/servico/fisioterapia-esportiva' },
        ],
      },
      {
        name: 'Acupuntura',
        subItems: [
          { name: 'Auricular', href: '/servico/acupuntura-auricular' },
          { name: 'Sistêmica', href: '/servico/acupuntura-sistemica' },
          { name: 'Dry Needling', href: '/servico/dry-needling' },
        ],
      },
      { name: 'RPG', href: '/servico/rpg' },
      {
        name: 'Pilates',
        subItems: [
          { name: 'Gestante', href: '/servico/pilates-gestante' },
          { name: 'Idoso', href: '/servico/pilates-idoso' },
          { name: 'Kids', href: '/servico/pilates-kids' },
          { name: 'Postural', href: '/servico/pilates-postural' },
        ],
      },
      { name: 'Liberação Miofascial', href: '/servico/liberacao-miofascial' },
      { name: 'Ventosa', href: '/servico/ventosa' },
    ],
  },
  {
    name: 'Tratamentos',
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
  { name: 'Contato', href: '/#contato' },
]
