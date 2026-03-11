import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-8 border-t border-navy-800 text-white/80">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-3xl font-serif font-bold text-white leading-none">
              Espaço <span className="text-gold-500">Fisio</span>
            </span>
            <span className="text-xs text-white/60 uppercase tracking-widest mt-1">
              Clínica de Reabilitação
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Nossa missão é promover qualidade de vida e bem-estar através de tratamentos
            fisioterapêuticos personalizados, aliando tecnologia e atendimento humanizado.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-white mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#inicio" className="hover:text-gold-500 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#especialidades" className="hover:text-gold-500 transition-colors">
                Especialidades
              </a>
            </li>
            <li>
              <a href="#equipe" className="hover:text-gold-500 transition-colors">
                Nossa Equipe
              </a>
            </li>
            <li>
              <a href="#unidades" className="hover:text-gold-500 transition-colors">
                Unidades
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gold-500 transition-colors">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>

        {/* Tratamentos */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-white mb-6">Tratamentos</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#servicos" className="hover:text-gold-500 transition-colors">
                Fisioterapia Ortopédica
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gold-500 transition-colors">
                Pilates Clínico
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gold-500 transition-colors">
                Acupuntura
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gold-500 transition-colors">
                RPG
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gold-500 transition-colors">
                Liberação Miofascial
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-white mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-white">(11) 97166-4664</p>
                <p className="text-xs text-white/50">Seg à Sex: 08h às 20h</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <p className="text-white break-all">contato@espacofisio.com.br</p>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Unidade Embu</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Av. Elias Yazbek, 567 - Tingidor
                  <br />
                  Embu das Artes - SP
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Espaço Fisio. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
