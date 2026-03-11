import { Award, Clock, Heart, Shield, Stethoscope, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    desc: 'Cada paciente recebe um plano de tratamento único, desenhado para suas necessidades específicas.',
  },
  {
    icon: Stethoscope,
    title: 'Equipamentos Modernos',
    desc: 'Clínica equipada com tecnologia de ponta para acelerar sua recuperação.',
  },
  {
    icon: Award,
    title: 'Profissionais Especializados',
    desc: 'Equipe em constante atualização, com diversas especializações clínicas.',
  },
  {
    icon: Clock,
    title: 'Tratamentos Atualizados',
    desc: 'Utilizamos as técnicas científicas mais recentes baseadas em evidências.',
  },
  {
    icon: ThumbsUp,
    title: 'Ambiente Confortável',
    desc: 'Espaço climatizado e acolhedor, focado no seu bem-estar.',
  },
  {
    icon: Shield,
    title: 'Acompanhamento Contínuo',
    desc: 'Monitoramos sua evolução do início ao fim do tratamento.',
  },
]

export function Differentials() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Texture bg overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
              Excelência
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Por que escolher a Espaço Fisio?
            </h3>
            <p className="text-white/70 text-lg">
              Nosso compromisso é com a sua saúde completa. Entregamos um padrão premium de cuidado
              para que sua recuperação seja ágil e definitiva.
            </p>
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center text-gold-500 hover:text-gold-400 font-semibold transition-colors gap-2 group"
              >
                Conheça a clínica
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <feat.icon className="w-8 h-8 text-gold-500 mb-4" />
                <h4 className="text-lg font-bold mb-2">{feat.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
