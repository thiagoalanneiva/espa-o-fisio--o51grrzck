import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { units } from '@/data/content'

export function Units() {
  return (
    <section id="unidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Nossa Estrutura
          </h2>
          <p className="text-lg text-gray-600">
            Ambientes modernos e equipados para oferecer o melhor tratamento para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {units.map((unit) => (
            <Card key={unit.id} className="overflow-hidden border-none shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">{unit.name}</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p>{unit.address}</p>
                      <p>{unit.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <p>{unit.phone}</p>
                  </div>
                </div>

                <Button className="w-full rounded-full font-sans font-semibold" asChild>
                  <a href={unit.mapUrl} target="_blank" rel="noopener noreferrer">
                    Ver no mapa (Como chegar)
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
