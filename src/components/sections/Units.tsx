import { MapPin, Phone, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { units } from '@/data/content'

export function Units() {
  return (
    <section id="unidades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Onde Estamos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 font-sans">
            Nossa Estrutura
          </h3>
          <p className="text-lg text-gray-600">
            Unidades estrategicamente localizadas, com ambientes climatizados e equipamentos de
            última geração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {units.map((unit) => (
            <Card key={unit.id} className="overflow-hidden border-none shadow-xl bg-white group">
              <div className="h-[300px] overflow-hidden relative">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <h4 className="absolute bottom-6 left-8 text-3xl font-bold text-white font-sans">
                  {unit.name}
                </h4>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-navy-900">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-navy-900 text-lg mb-1">{unit.address}</p>
                      <p className="text-gray-500">{unit.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-navy-900">
                      <Phone className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-lg">{unit.phone}</p>
                  </div>

                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-navy-900">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Seg - Sex: 07h às 20h</p>
                      <p className="text-sm text-gray-500">Sáb: 08h às 12h</p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full rounded-full font-sans font-bold text-base h-14 bg-gold-500 text-navy-900 hover:bg-gold-600 transition-colors"
                  asChild
                >
                  <a href={unit.mapUrl} target="_blank" rel="noopener noreferrer">
                    Fazer trajeto no Google Maps
                    <MapPin className="w-5 h-5 ml-2" />
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
