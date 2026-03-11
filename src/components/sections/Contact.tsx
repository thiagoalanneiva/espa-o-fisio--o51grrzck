import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá, meu nome é ${formData.name}. Gostaria de agendar ou saber mais sobre: ${formData.service || 'Tratamentos'}. \n\nMeu telefone é ${formData.phone}. \n\nMensagem: ${formData.message}`
    window.open(`https://wa.me/5511971664664?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-elevation overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-navy-900 p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-navy-800 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-serif font-bold">Inicie sua recuperação hoje.</h3>
              <p className="text-white/70 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato via WhatsApp para confirmar
                seu agendamento e tirar dúvidas.
              </p>
              <div className="pt-8 space-y-4">
                <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
                <p className="font-semibold text-lg">Atendimento Rápido</p>
                <p className="text-white/60 text-sm">
                  Respondemos em até 30 minutos em horário comercial.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-navy-900">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Seu nome"
                  className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-gold-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-navy-900">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    required
                    placeholder="(11) 90000-0000"
                    className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-gold-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-navy-900">
                    Interesse em
                  </Label>
                  <Select onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-gold-500">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fisioterapia">Fisioterapia</SelectItem>
                      <SelectItem value="Pilates">Pilates</SelectItem>
                      <SelectItem value="Acupuntura">Acupuntura</SelectItem>
                      <SelectItem value="Outros">Outros tratamentos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy-900">
                  Mensagem (Opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Descreva brevemente o motivo do contato..."
                  className="min-h-[120px] bg-gray-50 border-gray-200 focus-visible:ring-gold-500 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-base font-bold bg-gold-500 hover:bg-gold-400 text-white rounded-xl flex items-center gap-2"
              >
                Enviar pelo WhatsApp <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
