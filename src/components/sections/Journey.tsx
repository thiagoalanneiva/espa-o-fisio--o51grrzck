import { CalendarCheck, ClipboardList, ActivitySquare, SmilePlus } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: '1. Agendamento Rápido',
    desc: 'Entre em contato via WhatsApp e escolha o melhor horário para sua avaliação presencial.',
  },
  {
    icon: ClipboardList,
    title: '2. Avaliação Profunda',
    desc: 'Consulta clínica detalhada para descobrir a verdadeira causa da sua dor e limitação.',
  },
  {
    icon: ActivitySquare,
    title: '3. Tratamento Premium',
    desc: 'Sessões focadas e personalizadas utilizando terapia manual e alta tecnologia.',
  },
  {
    icon: SmilePlus,
    title: '4. Qualidade de Vida',
    desc: 'Alta clínica e reabilitação concluída. O foco final é a sua total independência física.',
  },
]

export function Journey() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            A Jornada da Reabilitação
          </h2>
          <h3 className="text-3xl md:text-5xl font-sans font-bold text-navy-900">
            Como funciona nosso tratamento
          </h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-1 bg-gray-200 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-gold-500 w-full opacity-50 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 relative">
                <div className="w-28 h-28 rounded-full bg-white border-[6px] border-gray-50 flex items-center justify-center shadow-lg z-10 relative group hover:border-gold-500 transition-colors duration-300">
                  <div className="absolute inset-0 bg-navy-900 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  <step.icon className="w-12 h-12 text-navy-900 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3 font-sans">{step.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed px-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
