import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511971664664?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Espa%C3%A7o%20Fisio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <div className="bg-white text-navy-900 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg whitespace-nowrap">
          Fale Conosco
        </div>
      </div>
      <div className="w-14 h-14 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-whatsapp before:animate-ping before:opacity-75">
        <MessageCircle className="w-7 h-7 relative z-10" />
      </div>
    </a>
  )
}
