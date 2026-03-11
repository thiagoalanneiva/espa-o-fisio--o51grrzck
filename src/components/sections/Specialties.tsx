import { Activity, Bone, Brain, Baby, HeartPulse, PersonStanding } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const specialties = [
  {
    icon: Bone,
    title: 'Fisioterapia Ortopédica',
    description:
      'Tratamento de lesões musculares, articulares, fraturas e pós-operatórios para restaurar a mobilidade plena.',
  },
  {
    icon: Brain,
    title: 'Fisioterapia Neurológica',
    description:
      'Reabilitação focada em pacientes com sequelas de AVC, Parkinson e outras condições neurológicas.',
  },
  {
    icon: Activity,
    title: 'Fisioterapia Esportiva',
    description:
      'Prevenção e tratamento rápido de lesões focadas no retorno de atletas e praticantes de exercícios.',
  },
  {
    icon: PersonStanding,
    title: 'Fisioterapia Geriátrica',
    description:
      'Cuidados dedicados à terceira idade, prevenindo quedas e mantendo a independência funcional.',
  },
  {
    icon: HeartPulse,
    title: 'Fisioterapia Pélvica',
    description:
      'Tratamento de disfunções do assoalho pélvico, incontinência e suporte em gestações.',
  },
  {
    icon: Baby,
    title: 'Fisioterapia Pediátrica',
    description:
      'Acompanhamento do desenvolvimento motor infantil com métodos lúdicos e especializados.',
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Nossas Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
            Cuidado especializado para cada necessidade
          </h3>
          <p className="text-muted-foreground text-lg">
            Atuamos em diversas áreas da fisioterapia, sempre com profissionais altamente
            capacitados para oferecer o melhor tratamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <Card
              key={i}
              className="group border-0 shadow-subtle hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-8 space-y-4 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-navy-900/5 text-navy-900 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-bold text-navy-900">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
