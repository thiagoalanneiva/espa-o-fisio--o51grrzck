import { Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/content'

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 font-sans">Vamos conversar?</h2>
                <p className="text-primary-foreground/90 mb-12 text-lg">
                  Nossa equipe está pronta para entender suas necessidades e montar o melhor plano
                  de tratamento.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/80 text-sm">Telefone / WhatsApp</p>
                      <p className="text-lg font-semibold">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/80 text-sm">E-mail</p>
                      <p className="text-lg font-semibold break-all">{contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Agende agora</h3>
              <p className="text-gray-600 mb-8">
                O primeiro passo para sua recuperação é uma avaliação detalhada. Entre em contato
                pelo WhatsApp e reserve seu horário.
              </p>

              <Button
                size="lg"
                className="w-full text-lg h-14 rounded-full shadow-lg font-sans font-semibold"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Agendar uma avaliação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
