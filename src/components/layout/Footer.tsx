import { Link } from 'react-router-dom'
import { Instagram, MapPin } from 'lucide-react'
import { contact, units, navigation } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-16 lg:py-20 border-t-4 border-gold-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
              <img
                src="https://therapy-rebrand-hub.lovable.app/logo.svg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('logo.svg')) {
                    target.src = 'https://therapy-rebrand-hub.lovable.app/logo.png'
                  } else if (target.src.includes('logo.png')) {
                    target.src = 'https://img.usecurling.com/i?q=therapy&shape=outline&color=navy'
                  }
                }}
                alt="Espaço Fisio"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Referência em reabilitação avançada, proporcionando qualidade de vida e bem-estar
              através de tratamentos premium e personalizados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/espacofisioembu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold font-sans mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              Acesso Rápido
            </h3>
            <ul className="space-y-4">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  {item.isMega || item.items ? (
                    <span className="text-white font-medium block mb-2">{item.name}</span>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                  {(item.isMega || item.items) && (
                    <ul className="pl-4 border-l-2 border-white/10 space-y-2 mt-2">
                      {/* Just link to the main sections to keep it clean */}
                      <li>
                        <Link
                          to="/#servicos"
                          className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                        >
                          Ver todas especialidades
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold font-sans mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              Fale Conosco
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-gold-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div className="pt-1">
                  <p className="text-sm text-gray-400 font-medium">WhatsApp / Telefone</p>
                  <a
                    href={contact.whatsapp}
                    className="text-white font-bold text-lg hover:text-gold-500 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-gold-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <div className="pt-1">
                  <p className="text-sm text-gray-400 font-medium">E-mail</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white hover:text-gold-500 transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Units */}
          <div>
            <h3 className="text-white text-xl font-bold font-sans mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              Nossas Unidades
            </h3>
            <ul className="space-y-6">
              {units.map((unit) => (
                <li key={unit.id} className="flex gap-4 group">
                  <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold font-sans mb-1 group-hover:text-gold-500 transition-colors">
                      {unit.name}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">{unit.address}</p>
                    <a
                      href={unit.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 text-sm font-semibold hover:underline"
                    >
                      Ver no mapa →
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
