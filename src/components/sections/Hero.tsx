import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { contact } from '@/data/content'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background elegant gradient/texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-80" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-white animate-fade-in-up space-y-8 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 shadow-lg mx-auto lg:mx-0">
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span className="text-sm font-semibold tracking-wider text-gold-400">
              Referência em Reabilitação
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans leading-tight tracking-tight">
            Excelência em Fisioterapia e <span className="text-gold-500">Qualidade de Vida</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            Tratamentos personalizados, tecnologia avançada e uma equipe de especialistas dedicados
            a devolver o seu bem-estar de forma definitiva.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto text-lg px-8 h-16 rounded-full font-bold font-sans shadow-elevation bg-gold-500 hover:bg-gold-600 text-navy-900 border-none transition-all hover:scale-105"
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Agendar uma avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-sm text-gray-400 font-medium">Avaliação presencial criteriosa.</p>
          </div>
        </div>

        <div
          className="flex-1 w-full max-w-[600px] relative mt-12 lg:mt-0 hidden md:block animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Aesthetic decorators */}
          <div className="absolute -inset-4 bg-gold-500/20 rounded-[3rem] transform rotate-3 -z-10 blur-xl"></div>
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-health-500/30 rounded-full blur-3xl -z-10"></div>

          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
            <img
              src="https://img.usecurling.com/p/800/1000?q=professional%20physiotherapist&color=blue"
              alt="Especialista em Fisioterapia"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center text-health-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-navy-900 font-bold text-sm">+ de 5.000</p>
              <p className="text-gray-500 text-xs">Pacientes recuperados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
