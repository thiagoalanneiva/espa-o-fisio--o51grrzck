import { ArrowUpRight } from 'lucide-react'

const services = [
  { title: 'Fisioterapia', img: 'https://img.usecurling.com/p/600/600?q=physiotherapy%20clinic' },
  { title: 'Pilates', img: 'https://img.usecurling.com/p/600/600?q=pilates%20studio' },
  { title: 'Acupuntura', img: 'https://img.usecurling.com/p/600/600?q=acupuncture%20needles' },
  { title: 'RPG', img: 'https://img.usecurling.com/p/600/600?q=posture%20therapy' },
  { title: 'Ventosaterapia', img: 'https://img.usecurling.com/p/600/600?q=cupping%20therapy' },
  {
    title: 'Drenagem Linfática',
    img: 'https://img.usecurling.com/p/600/600?q=lymphatic%20drainage',
  },
  {
    title: 'Liberação Miofascial',
    img: 'https://img.usecurling.com/p/600/600?q=myofascial%20release',
  },
  { title: 'Ondas de Choque', img: 'https://img.usecurling.com/p/600/600?q=shockwave%20therapy' },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
              Catálogo de Terapias
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
              Tratamentos e Terapias Completas
            </h3>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-colors h-12"
          >
            Agendar Tratamento
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white text-xl font-serif font-bold">{svc.title}</h4>
                <div className="w-10 h-10 rounded-full bg-gold-500/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
