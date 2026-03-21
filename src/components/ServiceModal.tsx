import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { services, contact } from '@/data/content'
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServiceModal() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#servico-')) {
        const id = hash.replace('#servico-', '')
        setSelectedServiceId(id)
      } else {
        setSelectedServiceId(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Check on mount
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      window.history.pushState(null, '', window.location.pathname)
      setSelectedServiceId(null)
    }
  }

  const service = services.find((s) => s.id === selectedServiceId)

  return (
    <Dialog open={!!service} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none [&>button]:text-white [&>button]:bg-navy-900/50 [&>button]:rounded-full [&>button]:p-2 [&>button]:hover:bg-navy-900">
        <DialogTitle className="sr-only">{service?.title}</DialogTitle>
        {service && (
          <div className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-[400px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-navy-900/70" />
              </div>
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-sans border-b border-gray-100 pb-4">
                  Sobre o Tratamento
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>

              <div className="bg-navy-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <h3 className="text-2xl font-bold mb-8 font-sans relative z-10 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-gold-500" /> Principais Benefícios
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <CheckCircle2 className="w-6 h-6 text-health-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-gray-200 text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 pb-4">
                <Button
                  size="lg"
                  className="rounded-2xl font-bold font-sans text-lg bg-gold-500 hover:bg-gold-600 text-navy-900 h-16 px-10 w-full sm:w-auto shadow-lg transition-all hover:-translate-y-1"
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    Agendar avaliação <ArrowRight className="w-6 h-6 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl font-bold font-sans text-lg border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white h-16 px-10 w-full sm:w-auto transition-all"
                  onClick={() => handleOpenChange(false)}
                >
                  Voltar aos serviços
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
