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

export function Testimonials() {
  const googleReviewsUrl =
    'https://www.google.com/search?sca_esv=014cb5ad1839ea23&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUdhC7_dlVxW0vXR-Li8jlFsoSyoNkG3huvhlCh4xoq1mt_sFTyLxthPiYhhPEqa_jLCKK3ThErHlTzZ7N-2b7A6k7NK270SSZOj0fzf9lYBVHE3ow%3D%3D&q=Espa%C3%A7o+Fisioterapia+Embu+Coment%C3%A1rios&sa=X&ved=2ahUKEwjGr52qjZmTAxUvE7kGHco4FqsQ0bkNegQILRAF&biw=1920&bih=869&dpr=1'

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            O Que Dizem Nossos Pacientes
          </h2>
          <p className="text-lg text-gray-600">
            Histórias reais de recuperação e bem-estar de quem confiou em nosso trabalho.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full border-none shadow-lg bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4 text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 font-sans">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12" />
            <CarouselNext className="-right-4 lg:-right-12" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-sans font-semibold"
          >
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Ver mais avaliações no Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
