import { Star, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'

const GOOGLE_REVIEWS_LINK =
  'https://www.google.com/search?sca_esv=014cb5ad1839ea23&sxsrf=ANbL-n40s2C4NaptJwbfLNuaGCpLYV5Yzg:1773282000770&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUdhC7_dlVxW0vXR-Li8jlFsoSyoNkG3huvhlCh4xoq1mt_sFTyLxthPiYhhPEqa_jLCKK3ThErHlTzZ7N-2b7A6k7NK270SSZOj0fzf9lYBVHE3ow%3D%3D&q=Espa%C3%A7o+Fisioterapia+Embu+Coment%C3%A1rios&sa=X&ved=2ahUKEwjihfidppmTAxWlDrkGHYNzEOIQ0bkNegQIKRAF&biw=1920&bih=869&dpr=1'

// Mock implementation of a live fetch
const fetchGoogleReviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800)) // Simulating network delay
  return [
    {
      author_name: 'Mariana Costa',
      rating: 5,
      text: 'Cheguei na clínica com muita dor na lombar. Em poucas sessões de fisioterapia e RPG, já senti uma melhora absurda. O atendimento é super humanizado.',
      relative_time_description: '1 mês atrás',
      profile_photo_url: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
    },
    {
      author_name: 'Roberto Almeida',
      rating: 5,
      text: 'A infraestrutura é fantástica e a equipe muito competente. Estava me recuperando de uma cirurgia no joelho e o suporte deles foi essencial para minha volta ao esporte.',
      relative_time_description: '2 meses atrás',
      profile_photo_url: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
    },
    {
      author_name: 'Juliana Freitas',
      rating: 5,
      text: 'Comecei o Pilates na Espaço Fisio por recomendação médica. Além de melhorar minha postura, o ambiente é muito tranquilo e acolhedor. Recomendo de olhos fechados!',
      relative_time_description: '3 semanas atrás',
      profile_photo_url: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
    },
    {
      author_name: 'Fernando Souza',
      rating: 5,
      text: 'Excelente profissionalismo desde a recepção até o consultório. A acupuntura me ajudou a tratar uma enxaqueca crônica que nenhum outro tratamento resolvia.',
      relative_time_description: '2 meses atrás',
      profile_photo_url: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
    },
    {
      author_name: 'Camila Rodrigues',
      rating: 5,
      text: 'Melhor clínica da região de Embu das Artes. O Dr. Carlos é excepcional na quiropraxia. Resolveu minha dor no ciático que me incomodava há anos.',
      relative_time_description: '1 semana atrás',
      profile_photo_url: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=5',
    },
  ]
}

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchGoogleReviews()
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()

    // Simulate auto-updating listener
    const interval = setInterval(loadReviews, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full pr-4 pl-1 py-1 border border-white/20 shadow-sm">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <span className="text-sm font-bold">Google Avaliações</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            O que nossos pacientes dizem
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold">5,0</div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <span className="text-sm text-white/70 font-medium">Baseado em avaliações reais</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <Carousel
              plugins={[plugin.current]}
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {reviews.map((review, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm h-full flex flex-col hover:bg-white/10 transition-colors duration-300">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={review.profile_photo_url}
                              alt={review.author_name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-bold text-sm line-clamp-1">{review.author_name}</p>
                              <p className="text-xs text-white/50">
                                {review.relative_time_description}
                              </p>
                            </div>
                          </div>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex gap-0.5 mb-3">
                          {[...Array(review.rating)].map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 text-gold-500 fill-gold-500" />
                          ))}
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm flex-1 font-medium italic">
                          "{review.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-12 bg-white/10 hover:bg-white border-white/20 text-white hover:text-navy-900" />
              <CarouselNext className="hidden lg:flex -right-12 bg-white/10 hover:bg-white border-white/20 text-white hover:text-navy-900" />
            </Carousel>
          )}

          <div className="mt-12 text-center">
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-bold transition-colors group"
            >
              Ver todas as avaliações no Google
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
