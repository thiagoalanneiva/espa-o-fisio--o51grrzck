import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '@/data/content'

export function Services() {
  // Select a compact list of prominent services to feature
  const featuredIds = [
    'fisioterapia-ortopedica',
    'pilates-postural',
    'acupuntura-sistemica',
    'rpg',
    'quiropraxia',
    'liberacao-miofascial',
  ]
  const featuredServices = services.filter((s) => featuredIds.includes(s.id))

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3 font-sans">
            Nossos Tratamentos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 font-sans">
            Soluções Completas em Reabilitação
          </h3>
          <p className="text-lg text-gray-600 font-medium">
            Conheça nossos principais serviços desenvolvidos para tratar a causa da sua dor e
            devolver a sua qualidade de vida com protocolos personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden group flex flex-col h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold font-sans text-lg flex items-center gap-2">
                    Ver detalhes <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow relative bg-white z-10">
                <h4 className="text-2xl font-bold text-navy-900 font-sans mb-4 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                <Button
                  variant="outline"
                  className="w-full font-bold font-sans border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full h-12 transition-all"
                  asChild
                >
                  <Link to={`/servico/${service.id}`}>Saber mais</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">
            Não encontrou o que procura? Temos uma equipe completa para te atender.
          </p>
          <Button
            size="lg"
            className="rounded-full font-sans font-bold text-lg h-14 px-10 shadow-lg bg-gold-500 hover:bg-gold-600 text-navy-900 transition-all hover:-translate-y-1"
            asChild
          >
            <Link to="/#especialidades">Ver todas as especialidades</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
