import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Fisioterapia',
    slug: 'fisioterapia-ortopedica',
    img: 'https://img.usecurling.com/p/600/800?q=physiotherapy%20clinic',
  },
  {
    title: 'Acupuntura',
    slug: 'acupuntura-sistemica',
    img: 'https://img.usecurling.com/p/600/800?q=acupuncture%20needles',
  },
  {
    title: 'Pilates',
    slug: 'pilates-postural',
    img: 'https://img.usecurling.com/p/600/800?q=pilates%20studio',
  },
  { title: 'RPG', slug: 'rpg', img: 'https://img.usecurling.com/p/600/800?q=posture%20therapy' },
  {
    title: 'Ventosaterapia',
    slug: 'ventosa',
    img: 'https://img.usecurling.com/p/600/800?q=cupping%20therapy',
  },
  {
    title: 'Liberação Miofascial',
    slug: 'liberacao-miofascial',
    img: 'https://img.usecurling.com/p/600/800?q=myofascial%20release',
  },
  {
    title: 'Ondas de Choque',
    slug: 'ondas-de-choque',
    img: 'https://img.usecurling.com/p/600/800?q=shockwave%20therapy',
  },
  {
    title: 'Laserterapia',
    slug: 'laser',
    img: 'https://img.usecurling.com/p/600/800?q=laser%20therapy',
  },
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
            <h3 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
              Tratamentos e Terapias Completas
            </h3>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 border-2 border-navy-900 text-navy-900 font-bold rounded-full hover:bg-navy-900 hover:text-white transition-colors h-14"
          >
            Agendar Tratamento
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Link
              key={i}
              to={`/servico/${svc.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 block"
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white text-2xl font-bold">{svc.title}</h4>
                <div className="w-12 h-12 rounded-full bg-gold-500/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-4">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
