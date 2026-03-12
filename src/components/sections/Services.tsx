import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services, contact } from '@/data/content'

export function Services() {
  // Select a few prominent services to feature
  const featuredIds = ['fisioterapia-ortopedica', 'pilates-postural', 'acupuntura-sistemica']
  const featuredServices = services.filter((s) => featuredIds.includes(s.id))

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">
            Nossos Tratamentos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 font-sans">
            Abordagem Completa para sua Reabilitação
          </h3>
          <p className="text-lg text-gray-600">
            Combinamos as melhores práticas da fisioterapia moderna com um atendimento humano e
            especializado para devolver sua autonomia.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 relative w-full group">
                <div className="absolute inset-0 bg-gold-500/10 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6 -z-10" />
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h4 className="text-3xl md:text-4xl font-bold text-navy-900 font-sans">
                  {service.title}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.fullDescription.split('.')[0]}. {service.fullDescription.split('.')[1]}.
                </p>

                <ul className="space-y-4 pt-4 mb-6">
                  {service.benefits.slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy-900">
                      <CheckCircle2 className="w-6 h-6 text-health-500 shrink-0" />
                      <span className="font-semibold">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full font-sans font-bold text-base h-14 px-8 bg-navy-900 hover:bg-navy-800"
                    asChild
                  >
                    <Link to={`/servico/${service.id}`}>Conhecer serviço</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full font-sans font-bold text-base h-14 px-8 border-2 border-navy-900 text-navy-900 hover:bg-navy-50"
                    asChild
                  >
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                      Agendar uma avaliação <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
