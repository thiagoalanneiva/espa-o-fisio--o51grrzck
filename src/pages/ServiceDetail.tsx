import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-navy-900 mb-4 font-sans">
          Tratamento não encontrado
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          O serviço que você está procurando pode ter mudado de nome ou não existe mais.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-navy-900 hover:bg-navy-800 rounded-full h-12 px-8 font-bold"
        >
          Voltar para o Início
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Service Section */}
      <div className="relative h-[45vh] min-h-[400px] mb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <Button
            variant="ghost"
            className="text-white hover:text-navy-900 hover:bg-white w-fit mb-8 font-sans font-bold rounded-full h-10 px-4 transition-colors"
            asChild
          >
            <Link to="/#servicos">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ver todos os serviços
            </Link>
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-sans leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-navy-900 mb-6 font-sans border-b border-gray-100 pb-4">
                Sobre o Tratamento
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed whitespace-pre-line text-lg">
                  {service.fullDescription}
                </p>
              </div>
            </div>

            <div className="bg-navy-900 rounded-[2rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <h3 className="text-2xl font-bold mb-8 font-sans relative z-10 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-gold-500" />
                Principais Benefícios
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {service.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-health-500 shrink-0 mt-0.5" />
                    <span className="font-semibold text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Action */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 font-sans">
                Agende sua Avaliação
              </h3>
              <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                Descubra como o tratamento de <strong>{service.title}</strong> pode devolver sua
                qualidade de vida. Fale com um especialista agora mesmo.
              </p>

              <Button
                size="lg"
                className="w-full rounded-2xl mb-6 text-lg font-sans font-bold h-16 shadow-lg bg-gold-500 hover:bg-gold-600 text-navy-900 transition-all hover:-translate-y-1"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Agendar uma avaliação
                  <ArrowRight className="w-6 h-6 ml-2" />
                </a>
              </Button>

              <div className="text-center pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">
                  Ou ligue para nós
                </p>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, '')}`}
                  className="text-2xl font-bold text-navy-900 hover:text-gold-500 transition-colors font-sans"
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
