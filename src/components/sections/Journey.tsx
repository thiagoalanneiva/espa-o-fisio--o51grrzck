import { CalendarCheck, ClipboardList, ActivitySquare, SmilePlus } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: '1. Agendamento',
    desc: 'Entre em contato via WhatsApp e escolha o melhor horário.',
  },
  {
    icon: ClipboardList,
    title: '2. Avaliação',
    desc: 'Consulta detalhada para entender a causa da sua dor.',
  },
  {
    icon: ActivitySquare,
    title: '3. Tratamento',
    desc: 'Sessões personalizadas com técnicas modernas.',
  },
  {
    icon: SmilePlus,
    title: '4. Alta e Manutenção',
    desc: 'Foco na sua independência e prevenção de novas lesões.',
  },
]

export function Journey() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            O Caminho para a Cura
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
            Como funciona nossa jornada
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-gold-500 w-full opacity-30"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 relative">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-elevation mb-2 z-10 relative group hover:border-gold-500 transition-colors">
                  <div className="absolute inset-0 bg-navy-900 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  <step.icon className="w-10 h-10 text-navy-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-navy-900">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
