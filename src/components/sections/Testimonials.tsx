import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { testimonials } from '@/data/content'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export function Testimonials() {
  const googleReviewsUrl =
    'https://www.google.com/search?sca_esv=014cb5ad1839ea23&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUdhC7_dlVxW0vXR-Li8jlFsoSyoNkG3huvhlCh4xoq1mt_sFTyLxthPiYhhPEqa_jLCKK3ThErHlTzZ7N-2b7A6k7NK270SSZOj0fzf9lYBVHE3ow%3D%3D&q=Espa%C3%A7o+Fisioterapia+Embu+Coment%C3%A1rios'

  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 rounded-l-[100px] -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest">
            Aprovação Real
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-900 font-sans">
            O Que Dizem Nossos Pacientes
          </h3>
          <p className="text-lg text-gray-600">
            Resultados comprovados por quem já recuperou a qualidade de vida com a nossa equipe.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-4 lg:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border border-gray-100 shadow-xl bg-white rounded-2xl hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8 flex flex-col h-full relative">
                      {/* Quote icon watermark */}
                      <div className="absolute top-6 right-6 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="flex gap-1 mb-6 text-gold-500 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-8 flex-grow leading-relaxed relative z-10">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                          <h4 className="font-bold text-navy-900 font-sans text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white h-12 w-12" />
            <CarouselNext className="hidden md:flex -right-12 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white h-12 w-12" />
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-sans font-bold px-8 h-14"
          >
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Ler mais avaliações no Google <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
