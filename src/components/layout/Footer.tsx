import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { contact, units } from '@/data/content'

export function Footer() {
  const NavItem = ({ href, children, className }: any) => {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <footer className="bg-navy-900 text-gray-300 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl inline-flex items-center justify-center w-48">
              <img
                src="https://therapy-rebrand-hub.lovable.app/logo.svg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('logo.svg'))
                    target.src = 'https://therapy-rebrand-hub.lovable.app/logo.png'
                }}
                alt="Espaço Fisio"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Referência em reabilitação avançada, proporcionando qualidade de vida e bem-estar
              através de tratamentos premium e personalizados.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/espacofisioembu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></span>
              Acesso Rápido
            </h3>
            <ul className="space-y-4">
              <li>
                <NavItem
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Início
                </NavItem>
              </li>
              <li>
                <NavItem
                  href="/#sobre"
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Sobre Nós
                </NavItem>
              </li>
              <li className="pt-2">
                <span className="text-white font-bold text-sm block mb-3">Serviços</span>
                <div className="pl-4 border-l border-white/10 ml-1">
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Ver todas especialidades
                  </a>
                </div>
              </li>
              <li className="pt-2">
                <span className="text-white font-bold text-sm block mb-3">Tratamentos</span>
                <div className="pl-4 border-l border-white/10 ml-1">
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Ver todas especialidades
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></span>
              Fale Conosco
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm mb-0.5">WhatsApp / Telefone</span>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold text-lg hover:text-gold-500 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm mb-0.5">E-mail</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white text-sm hover:text-gold-500 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></span>
              Nossas Unidades
            </h3>
            <ul className="space-y-6">
              {units.map((unit) => (
                <li key={unit.id} className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <p className="text-white font-bold mb-1">{unit.name}</p>
                    <p className="text-gray-400 text-sm mb-2">{unit.address}</p>
                    <a
                      href={unit.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 text-sm flex items-center gap-1 hover:underline w-fit"
                    >
                      Ver no mapa <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Espaço Fisio. Todos os direitos reservados.
          </p>
          <div className="text-sm text-gray-500">
            Responsável Técnico: Dra. Diretora Clínica - CREFITO 00000-F
          </div>
        </div>
      </div>
    </footer>
  )
}
