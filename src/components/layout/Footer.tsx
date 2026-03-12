import { Link } from 'react-router-dom'
import logoUrl from '@/assets/espacofisio_logo-fd933.png'
import { contact, socialLinks, navigation } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg inline-block">
              <img src={logoUrl} alt="Espaço Fisio" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">
              Excelência em fisioterapia e reabilitação, proporcionando qualidade de vida e
              bem-estar para nossos pacientes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold font-sans mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.items ? (
                    <div className="space-y-2">
                      <span className="text-white font-medium">{item.name}</span>
                      <ul className="pl-4 space-y-2 border-l border-gray-700">
                        {item.items.slice(0, 4).map((sub) => (
                          <li key={sub.name}>
                            <Link
                              to={sub.href}
                              className="text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold font-sans mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Map/Hours */}
          <div>
            <h3 className="text-white text-lg font-bold font-sans mb-6">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <div>
                  <p className="text-white font-medium">Segunda a Sexta</p>
                  <p className="text-gray-400">07:00 às 20:00</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <div>
                  <p className="text-white font-medium">Sábado</p>
                  <p className="text-gray-400">08:00 às 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Espaço Fisio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
