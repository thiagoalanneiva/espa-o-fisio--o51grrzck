import { MessageCircle } from 'lucide-react'
import { contact } from '@/data/content'

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
      aria-label="Agendar uma avaliação pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  )
}
