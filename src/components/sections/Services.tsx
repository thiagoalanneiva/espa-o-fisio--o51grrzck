import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services, contact } from '@/data/content'

export function Services() {
  const featuredServices = services.filter((s) =>
    ['fisioterapia', 'pilates', 'acupuntura'].includes(s.id),
  )

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Abordagem completa e integrada para sua reabilitação e bem-estar.
          </p>
        </div>

        <div className="space-y-24">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 scale-105 -z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-[2rem] shadow-2xl object-cover w-full aspect-[4/3]"
                />
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 font-sans">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.fullDescription.split('.')[0]}.
                </p>

                <ul className="space-y-4 pt-4">
                  {service.benefits.slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full font-sans font-semibold" asChild>
                    <Link to={`/servicos/${service.id}`}>Conhecer serviço</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full font-sans font-semibold"
                    asChild
                  >
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                      Agendar uma avaliação
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
