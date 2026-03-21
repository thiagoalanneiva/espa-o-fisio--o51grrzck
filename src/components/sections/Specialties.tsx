import { ArrowRight, Activity, Bone, Heart, Zap, Sparkles, Feather, Dna } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/content'

const iconMap: Record<string, any> = { Activity, Bone, Heart, Zap, Sparkles, Feather, Dna }

export function Specialties() {
  const highlights = [
    'fisioterapia-ortopedica',
    'fisioterapia-neurologica',
    'rpg',
    'acupuntura-sistemica',
    'quiropraxia',
    'liberacao-miofascial',
  ]
  const displayServices = services.filter((s) => highlights.includes(s.id))

  return (
    <section id="especialidades" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">
            Áreas de Atuação
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 font-sans">
            Especialidades Premium
          </h3>
          <p className="text-lg text-gray-600">
            Nossa clínica oferece um amplo portfólio de terapias para tratar a origem do seu
            problema com precisão e técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Activity

            return (
              <Card
                key={service.id}
                className="group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white overflow-hidden rounded-2xl cursor-pointer"
              >
                <a href={`#servico-${service.id}`} className="block h-full">
                  <CardHeader className="p-8 pb-4 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors duration-300 shadow-sm border border-gray-100 group-hover:border-navy-800">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-navy-900 font-sans group-hover:text-gold-500 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex flex-col justify-between">
                    <CardDescription className="text-gray-600 text-base leading-relaxed mb-8 line-clamp-3">
                      {service.shortDescription}
                    </CardDescription>
                    <div className="flex items-center text-navy-900 font-bold font-sans group-hover:text-gold-500 transition-colors">
                      Saiba mais{' '}
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </a>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-navy-900 text-navy-900 font-bold px-8 h-14 hover:bg-navy-900 hover:text-white"
            asChild
          >
            <a href="#servicos">Ver todas as opções</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
