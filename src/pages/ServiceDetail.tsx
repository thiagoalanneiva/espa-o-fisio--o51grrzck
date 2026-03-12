import { useParams, Link, Navigate } from 'react-router-dom'
import { contentData } from '@/data/content'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = contentData.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/404" />

  const ctaMessage = `Olá! Gostaria de agendar uma avaliação para ${service.title}.`

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container max-w-6xl animate-fade-in-up">
        <Link
          to="/"
          className="inline-flex items-center text-navy-900 hover:text-gold-500 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Voltar para o início
        </Link>
        <div className="bg-white rounded-[2rem] shadow-elevation overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="md:w-1/2 h-72 md:h-auto relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent md:hidden" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              {service.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.description}</p>
            <div className="space-y-4 mb-10 bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                <span className="text-navy-900 font-semibold">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                <span className="text-navy-900 font-semibold">Profissionais Especializados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                <span className="text-navy-900 font-semibold">Tecnologia e Conforto</span>
              </div>
            </div>
            <Button
              className="w-full h-16 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-whatsapp/20 flex items-center gap-3 group"
              onClick={() =>
                window.open(
                  `https://wa.me/5511971664664?text=${encodeURIComponent(ctaMessage)}`,
                  '_blank',
                )
              }
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Agendar uma Avaliação
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
