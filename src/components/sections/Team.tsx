import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Dra. Ana Silva',
    role: 'Fisioterapeuta Chefe',
    specialties: 'Ortopedia e Trauma',
    crefito: '12345-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=1',
  },
  {
    name: 'Dr. Carlos Mendes',
    role: 'Fisioterapeuta Especialista',
    specialties: 'Osteopatia e Quiropraxia',
    crefito: '54321-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=4',
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Instrutora de Pilates',
    specialties: 'Pilates Clínico e RPG',
    crefito: '98765-F',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=8',
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Nossos Especialistas
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
            Profissionais dedicados a você
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-subtle group hover:shadow-elevation transition-all"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <CardContent className="p-6 text-center space-y-2 relative bg-white">
                <div className="w-12 h-1 bg-gold-500 mx-auto rounded-full mb-4"></div>
                <h4 className="text-xl font-serif font-bold text-navy-900">{member.name}</h4>
                <p className="text-sm font-semibold text-gold-600">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialties}</p>
                <p className="text-xs text-gray-400 mt-2">CREFITO: {member.crefito}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
