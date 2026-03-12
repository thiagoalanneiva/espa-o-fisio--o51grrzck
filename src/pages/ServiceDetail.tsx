import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services, contact } from '@/data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const service = services.find((s) => s.id === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Serviço não encontrado</h1>
        <p className="text-gray-600 mb-8">
          O serviço que você está procurando não existe ou foi removido.
        </p>
        <Button onClick={() => navigate('/')}>Voltar para o início</Button>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/20 w-fit mb-6 font-sans"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">
            {service.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                Sobre o Tratamento
              </h2>
              <p className="leading-relaxed whitespace-pre-line">{service.fullDescription}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">
                Principais Benefícios
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                Comece seu tratamento
              </h3>
              <p className="text-gray-600 mb-8">
                Agende uma avaliação com nossos especialistas e descubra como o tratamento de{' '}
                {service.title} pode ajudar você.
              </p>

              <Button
                size="lg"
                className="w-full rounded-full mb-4 text-base font-sans font-semibold"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Agendar uma avaliação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Ou ligue para nós</p>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, '')}`}
                  className="text-lg font-bold text-primary hover:underline font-sans"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
