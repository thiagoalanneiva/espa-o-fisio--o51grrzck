import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function QuickSearch() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative z-20 -mt-12 container px-4 sm:px-8">
      <Card className="shadow-2xl border-0 rounded-2xl bg-white overflow-hidden">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1 px-4 py-2 border-r-0 sm:border-r border-border/50">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Onde dói?
                </label>
                <Select>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-medium text-base">
                    <SelectValue placeholder="Selecione a região" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coluna">Coluna (Costas/Pescoço)</SelectItem>
                    <SelectItem value="ombro">Ombro</SelectItem>
                    <SelectItem value="joelho">Joelho</SelectItem>
                    <SelectItem value="quadril">Quadril</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 px-4 py-2 border-r-0 sm:border-r border-border/50">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Especialidade
                </label>
                <Select>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-medium text-base">
                    <SelectValue placeholder="Qualquer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ortopedia">Ortopedia</SelectItem>
                    <SelectItem value="neurologia">Neurologia</SelectItem>
                    <SelectItem value="esportiva">Esportiva</SelectItem>
                    <SelectItem value="rpg">RPG / Postura</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 px-4 py-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Tratamento
                </label>
                <Select>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-medium text-base">
                    <SelectValue placeholder="Escolher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisioterapia">Fisioterapia Convencional</SelectItem>
                    <SelectItem value="pilates">Pilates</SelectItem>
                    <SelectItem value="acupuntura">Acupuntura</SelectItem>
                    <SelectItem value="massagem">Liberação Miofascial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={scrollToServices}
              className="w-full lg:w-auto h-16 px-8 rounded-xl bg-navy-900 hover:bg-navy-800 text-white flex items-center gap-2 m-2"
            >
              <Search className="w-5 h-5" /> Encontrar Tratamento
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
