import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { menuItems } from '@/data/content'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100',
        isScrolled ? 'shadow-md py-3' : 'py-5',
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/#inicio" className="flex items-center gap-2 z-50 relative">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-navy-900 leading-none">
              Espaço <span className="text-gold-500">Fisio</span>
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">
              Clínica de Reabilitação
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group/nav">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-bold text-navy-900 hover:text-gold-500 py-6 inline-block"
                  >
                    {item.name}
                  </a>
                ) : (
                  <>
                    <span className="text-sm font-bold text-navy-900 hover:text-gold-500 py-6 inline-flex items-center gap-1 cursor-pointer">
                      {item.name} <ChevronDown className="w-3 h-3" />
                    </span>
                    <ul className="absolute left-0 top-full hidden group-hover/nav:block bg-white shadow-xl min-w-[240px] border border-gray-100 rounded-xl py-2 z-50">
                      {item.items?.map((sub) => (
                        <li key={sub.name} className="relative group/sub">
                          {sub.href ? (
                            <Link
                              to={sub.href}
                              className="px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-navy-900 block"
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <>
                              <span className="px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-navy-900 flex justify-between items-center cursor-pointer">
                                {sub.name} <ChevronRight className="w-4 h-4" />
                              </span>
                              <ul className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl min-w-[200px] border border-gray-100 rounded-xl py-2 -ml-2">
                                {sub.subItems?.map((deep) => (
                                  <li key={deep.name}>
                                    <Link
                                      to={deep.href}
                                      className="px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-900 block"
                                    >
                                      {deep.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-xs text-gray-500 font-medium">Agende sua consulta</span>
              <span className="text-sm font-bold text-navy-900 flex items-center gap-1">
                <Phone className="w-3 h-3 text-gold-500" /> (11) 97166-4664
              </span>
            </div>
            <Button
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white border-0 shadow-lg shadow-gold-500/20 rounded-full px-6 font-bold"
              onClick={() => window.open('https://wa.me/5511971664664', '_blank')}
            >
              Agendar Consulta
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-navy-900 z-50 relative p-2"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'fixed inset-0 top-[72px] bg-white flex flex-col items-center justify-start pt-6 transition-transform duration-300 ease-in-out lg:hidden z-40 overflow-hidden',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="w-full h-full overflow-y-auto px-6 pb-24">
            <ul className="flex flex-col gap-2 w-full">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full border-b border-gray-50 pb-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="text-lg font-bold text-navy-900 block py-3"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="text-lg font-bold text-navy-900 py-3 flex justify-between items-center cursor-pointer list-none">
                        {item.name}
                        <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                      </summary>
                      <ul className="pl-4 mt-1 space-y-1 mb-2">
                        {item.items?.map((sub) => (
                          <li key={sub.name}>
                            {sub.href ? (
                              <Link
                                to={sub.href}
                                onClick={toggleMobileMenu}
                                className="text-base font-semibold text-gray-700 block py-2"
                              >
                                {sub.name}
                              </Link>
                            ) : (
                              <details className="group/sub [&_summary::-webkit-details-marker]:hidden">
                                <summary className="text-base font-semibold text-gray-700 py-2 flex justify-between items-center cursor-pointer list-none">
                                  {sub.name}
                                  <ChevronDown className="w-4 h-4 group-open/sub:rotate-180 transition-transform" />
                                </summary>
                                <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-2 mb-2">
                                  {sub.subItems?.map((deep) => (
                                    <li key={deep.name}>
                                      <Link
                                        to={deep.href}
                                        onClick={toggleMobileMenu}
                                        className="text-sm font-medium text-gray-500 block py-2"
                                      >
                                        {deep.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            )}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 mb-8">
              <Button
                onClick={() => {
                  toggleMobileMenu()
                  window.open('https://wa.me/5511971664664', '_blank')
                }}
                className="w-full bg-gold-500 hover:bg-gold-400 text-white rounded-full py-6 text-lg font-bold"
              >
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
