import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { contact } from '@/data/content'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
  {
    image: 'https://img.usecurling.com/p/1920/1080?q=physiotherapy',
    title: 'Excelência em Fisioterapia',
    subtitle:
      'Reabilitação avançada para devolver sua qualidade de vida com profissionais altamente capacitados.',
  },
  {
    image: 'https://img.usecurling.com/p/1920/1080?q=pilates',
    title: 'Pilates para o Corpo e Mente',
    subtitle:
      'Fortalecimento, flexibilidade e equilíbrio em um ambiente preparado para o seu bem-estar.',
  },
  {
    image: 'https://img.usecurling.com/p/1920/1080?q=acupuncture',
    title: 'Acupuntura Tradicional',
    subtitle: 'Alívio de dores e equilíbrio energético com técnicas milenares e seguras.',
  },
]

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full w-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-white">
                <div className="max-w-2xl animate-fade-in-up">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">{slide.subtitle}</p>
                  <Button
                    size="lg"
                    asChild
                    className="text-lg px-8 py-6 rounded-full font-semibold font-sans shadow-lg"
                  >
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                      Agendar uma avaliação
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
