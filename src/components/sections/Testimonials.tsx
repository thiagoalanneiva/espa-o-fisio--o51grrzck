import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Mariana Costa',
    text: 'Cheguei na clínica com muita dor na lombar. Em poucas sessões de fisioterapia e RPG, já senti uma melhora absurda. O atendimento é super humanizado.',
    service: 'RPG e Fisioterapia',
  },
  {
    name: 'Roberto Almeida',
    text: 'A infraestrutura é fantástica e a equipe muito competente. Estava me recuperando de uma cirurgia no joelho e o suporte deles foi essencial para minha volta ao esporte.',
    service: 'Fisioterapia Esportiva',
  },
  {
    name: 'Juliana Freitas',
    text: 'Comecei o Pilates na Espaço Fisio por recomendação médica. Além de melhorar minha postura, o ambiente é muito tranquilo e acolhedor. Recomendo de olhos fechados!',
    service: 'Pilates Clínico',
  },
  {
    name: 'Fernando Souza',
    text: 'Excelente profissionalismo desde a recepção até o consultório. A acupuntura me ajudou a tratar uma enxaqueca crônica que nenhum outro tratamento resolvia.',
    service: 'Acupuntura',
  },
]

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 relative z-10">
          <Quote className="w-12 h-12 text-gold-500 mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            O que nossos pacientes dizem
          </h2>
          <p className="text-white/70">
            Histórias reais de recuperação e melhoria na qualidade de vida.
          </p>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: 'center', loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-2">
                    <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
                      <CardContent className="p-8 space-y-6">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 text-gold-500 fill-gold-500" />
                          ))}
                        </div>
                        <p className="text-white/90 italic leading-relaxed text-lg">"{t.text}"</p>
                        <div>
                          <p className="font-bold">{t.name}</p>
                          <p className="text-sm text-gold-400">{t.service}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 hover:bg-white border-white/20 text-white hover:text-navy-900" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 hover:bg-white border-white/20 text-white hover:text-navy-900" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
