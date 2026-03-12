import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const [dor, setDor] = useState('')
  const [esp, setEsp] = useState('')
  const [trat, setTrat] = useState('')

  const handleSearch = () => {
    if (trat) navigate(`/servico/${trat}`)
    else if (esp) navigate(`/servico/${esp}`)
    else if (dor) navigate(`/servico/${dor}`)
    else document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative z-20 -mt-12 container px-4 sm:px-8 mx-auto">
      <Card className="shadow-2xl border-0 rounded-2xl bg-white overflow-hidden max-w-6xl mx-auto">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1 px-4 py-2 border-r-0 sm:border-r border-border/50">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Onde dói?
                </label>
                <Select onValueChange={setDor} value={dor}>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-bold text-base bg-transparent">
                    <SelectValue placeholder="Selecione a região" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisioterapia-ortopedica">Coluna / Costas</SelectItem>
                    <SelectItem value="fisioterapia-esportiva">
                      Ombro / Joelho / Tornozelo
                    </SelectItem>
                    <SelectItem value="fisioterapia-pelvica">Região Pélvica</SelectItem>
                    <SelectItem value="rpg">Dores posturais generalizadas</SelectItem>
                    <SelectItem value="acupuntura-sistemica">Enxaqueca / Estresse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 px-4 py-2 border-r-0 sm:border-r border-border/50">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Especialidade
                </label>
                <Select onValueChange={setEsp} value={esp}>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-bold text-base bg-transparent">
                    <SelectValue placeholder="Qualquer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisioterapia-ortopedica">Ortopedia</SelectItem>
                    <SelectItem value="fisioterapia-neurologica">Neurologia</SelectItem>
                    <SelectItem value="fisioterapia-esportiva">Esportiva</SelectItem>
                    <SelectItem value="fisioterapia-pediatrica">Pediatria</SelectItem>
                    <SelectItem value="fisioterapia-geriatrica">Geriatria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 px-4 py-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Terapia
                </label>
                <Select onValueChange={setTrat} value={trat}>
                  <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 text-navy-900 font-bold text-base bg-transparent">
                    <SelectValue placeholder="Escolher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisioterapia-ortopedica">Fisioterapia</SelectItem>
                    <SelectItem value="pilates-postural">Pilates</SelectItem>
                    <SelectItem value="acupuntura-sistemica">Acupuntura</SelectItem>
                    <SelectItem value="quiropraxia">Quiropraxia</SelectItem>
                    <SelectItem value="liberacao-miofascial">Liberação Miofascial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleSearch}
              className="w-full lg:w-auto h-16 px-8 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold flex items-center gap-2 m-2 shadow-md transition-all hover:-translate-y-1"
            >
              <Search className="w-5 h-5" /> Buscar Solução
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
