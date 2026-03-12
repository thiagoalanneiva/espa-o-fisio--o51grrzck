import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Dra. Ana Silva',
    role: 'Diretora e Fisioterapeuta',
    specialties: 'Especialista em Ortopedia e RPG',
    crefito: '12345-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=14',
  },
  {
    name: 'Dr. Carlos Mendes',
    role: 'Fisioterapeuta Clínico',
    specialties: 'Quiropraxia e Terapia Manual',
    crefito: '54321-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=4',
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Instrutora de Pilates',
    specialties: 'Pilates Clínico e Acupuntura',
    crefito: '98765-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=28',
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Corpo Clínico
          </h2>
          <h3 className="text-3xl md:text-5xl font-sans font-bold text-navy-900">
            Especialistas dedicados a você
          </h3>
          <p className="text-lg text-gray-600">
            Nossos profissionais possuem alta qualificação acadêmica e prática para oferecer o
            melhor diagnóstico e intervenção terapêutica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-gray-50"
            >
              <div className="aspect-[4/5] overflow-hidden bg-navy-900 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-8 text-center space-y-2 relative bg-white -mt-6 rounded-t-[2rem] mx-2 shadow-sm">
                <div className="w-12 h-1.5 bg-gold-500 mx-auto rounded-full mb-4"></div>
                <h4 className="text-2xl font-sans font-bold text-navy-900">{member.name}</h4>
                <p className="text-sm font-bold text-gold-600 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-base text-gray-600 font-medium">{member.specialties}</p>
                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100 font-medium">
                  CREFITO: {member.crefito}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
