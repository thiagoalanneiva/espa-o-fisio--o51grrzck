import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '@/data/content'

export function Services() {
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
            Catálogo de Terapias
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 font-sans">
            Tratamentos e Terapias Completas
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
              className="overflow-hidden group flex flex-col h-full border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-3xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-navy-900 uppercase tracking-wider shadow-sm">
                  {service.title.split(' ')[0]}
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow relative bg-white z-10">
                <h4 className="text-2xl font-bold text-navy-900 font-sans mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-3 mb-8">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                      <span className="leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full font-bold font-sans border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full h-12 transition-all flex items-center justify-center gap-2 group/btn mt-auto"
                  asChild
                >
                  <a href={`#servico-${service.id}`}>
                    Ver Tratamento
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">
            Temos uma equipe multidisciplinar completa para te atender.
          </p>
          <Button
            size="lg"
            className="rounded-full font-sans font-bold text-lg h-14 px-10 shadow-lg bg-gold-500 hover:bg-gold-600 text-navy-900 transition-all hover:-translate-y-1"
            asChild
          >
            <a href="#especialidades">Consultar todas as opções</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
