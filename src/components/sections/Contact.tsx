import { Phone, Mail, ArrowRight, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/content'

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-navy-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">
            {/* Dark Side */}
            <div className="p-12 md:p-16 text-white flex flex-col justify-center relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-health-500/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
                  <CalendarCheck className="w-5 h-5" />
                  Agendamento
                </div>
                <h2 className="text-4xl font-bold mb-6 font-sans">Pronto para viver sem dor?</h2>
                <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                  Entre em contato com nossa equipe de especialistas. Estamos prontos para entender
                  sua necessidade e indicar o tratamento exato para sua recuperação.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 text-gold-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">Telefone / WhatsApp</p>
                      <p className="text-2xl font-bold font-sans">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 text-gold-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">E-mail</p>
                      <p className="text-lg font-semibold break-all">{contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Light Side / Action */}
            <div className="p-12 md:p-16 flex flex-col justify-center bg-gray-50 h-full">
              <h3 className="text-3xl font-bold text-navy-900 mb-4 font-sans">
                Dê o primeiro passo
              </h3>
              <p className="text-gray-600 mb-10 text-lg">
                Sua avaliação inicial é fundamental para traçarmos um plano de sucesso. Agende seu
                horário agora mesmo de forma rápida e segura.
              </p>

              <Button
                size="lg"
                className="w-full text-xl h-16 rounded-2xl shadow-xl font-sans font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all hover:-translate-y-1 group"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Agendar uma avaliação
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-center text-sm text-gray-500 mt-6 font-medium">
                Atendimento rápido pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
