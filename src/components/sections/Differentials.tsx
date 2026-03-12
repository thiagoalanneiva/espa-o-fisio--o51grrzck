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
    desc: 'Clínica equipada com tecnologia de ponta, como Recupero e Laser de alta potência.',
  },
  {
    icon: Award,
    title: 'Time de Especialistas',
    desc: 'Equipe em constante atualização, com foco exclusivo em resultados e excelência técnica.',
  },
  {
    icon: Clock,
    title: 'Tratamentos Atualizados',
    desc: 'Utilizamos as técnicas científicas mais recentes e baseadas em evidências clínicas reais.',
  },
  {
    icon: ThumbsUp,
    title: 'Ambiente Premium',
    desc: 'Espaço climatizado, sofisticado e acolhedor, pensado em cada detalhe para o seu conforto.',
  },
  {
    icon: Shield,
    title: 'Foco na Causa da Dor',
    desc: 'Não tratamos apenas o sintoma. Nossa avaliação descobre e trata a origem do problema.',
  },
]

export function Differentials() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Texture bg overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
              Excelência Clínica
            </h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold leading-tight">
              Por que escolher o Espaço Fisio?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nosso compromisso é com a sua saúde completa. Entregamos um padrão premium de cuidado
              para que sua recuperação seja ágil, segura e definitiva.
            </p>
            <div className="pt-6">
              <a
                href="#unidades"
                className="inline-flex items-center text-gold-500 hover:text-white font-bold transition-colors gap-2 group text-lg"
              >
                Conheça nossa estrutura
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gold-500/20 rounded-2xl flex items-center justify-center mb-6 text-gold-500">
                  <feat.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 font-sans">{feat.title}</h4>
                <p className="text-base text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
