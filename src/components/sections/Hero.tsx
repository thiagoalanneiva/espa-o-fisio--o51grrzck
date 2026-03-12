import { Button } from '@/components/ui/button'
import { Users, Star, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-navy-900 pt-32 pb-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-800 opacity-50 clip-path-hero"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" /> Referência em Reabilitação
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Fisioterapia moderna para uma vida <span className="text-gold-500 italic">sem dor</span>
          </h1>

          <p className="text-lg text-white/80 max-w-lg leading-relaxed font-medium">
            Especialistas em reabilitação, pilates e terapias integrativas. Recupere seus movimentos
            e qualidade de vida com um atendimento humano e personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-400 text-white rounded-full px-8 shadow-lg shadow-gold-500/20 font-bold text-base h-14"
              onClick={() => window.open('https://wa.me/5511971664664', '_blank')}
            >
              Agendar avaliação no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 bg-transparent font-bold text-base h-14"
              onClick={() =>
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conhecer tratamentos
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <h4 className="text-3xl font-bold text-white">+1000</h4>
              <p className="text-sm font-medium text-white/60">Pacientes Atendidos</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-gold-500" /> Equipe
              </h4>
              <p className="text-sm font-medium text-white/60">Especializada</p>
            </div>
            <div className="space-y-1 hidden sm:block">
              <h4 className="text-3xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gold-500" /> 2
              </h4>
              <p className="text-sm font-medium text-white/60">Unidades na Região</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-gold-500/20 rounded-[2.5rem] blur-2xl"></div>
          <img
            src="https://img.usecurling.com/p/800/900?q=physiotherapist%20patient&color=blue"
            alt="Profissional realizando atendimento de fisioterapia"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px] border border-white/10"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600 fill-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-900">Avaliação 5 Estrelas</p>
              <p className="text-xs font-semibold text-muted-foreground">No Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
