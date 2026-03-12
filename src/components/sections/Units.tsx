import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const units = [
  {
    name: 'Espaço Fisio Embu',
    address: 'Av. Elias Yazbek, 567 - Tingidor, Embu das Artes - SP',
    phone: '(11) 97166-4664',
    hours: 'Seg a Sex: 08h - 20h | Sáb: 08h - 12h',
    img: 'https://img.usecurling.com/p/800/600?q=modern%20building%20clinic&color=blue',
  },
  {
    name: 'Espaço Fisio Taboão',
    address: 'R. Thereza Maria Luizetto, 220 - Taboão da Serra - SP',
    phone: '(11) 97166-4664',
    hours: 'Seg a Sex: 08h - 20h | Sáb: 08h - 12h',
    img: 'https://img.usecurling.com/p/800/600?q=medical%20clinic%20exterior',
  },
]

export function Units() {
  return (
    <section id="unidades" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Nossa Estrutura
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
            Duas unidades para melhor te atender
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {units.map((unit, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-elevation group rounded-[2rem]"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={unit.img}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <h4 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                  {unit.name}
                </h4>
              </div>
              <CardContent className="p-8 space-y-8 bg-white">
                <div className="space-y-5 text-gray-600 font-medium">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{unit.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-gold-500 shrink-0" />
                    <p>{unit.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-gold-500 shrink-0" />
                    <p>{unit.hours}</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-xl h-14 flex items-center justify-between px-6 group/btn font-bold text-base"
                >
                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent(unit.address)}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Mapa (Waze)
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
