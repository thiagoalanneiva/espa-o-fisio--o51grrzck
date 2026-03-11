import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'Contato', href: '#contato' },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-md py-3 border-white/10'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 z-50 relative">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-white leading-none">
              Espaço <span className="text-gold-500">Fisio</span>
            </span>
            <span className="text-[10px] text-white/80 uppercase tracking-widest font-sans">
              Clínica de Reabilitação
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-white/70">Agende sua consulta</span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <Phone className="w-3 h-3 text-gold-500" /> (11) 97166-4664
              </span>
            </div>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white border-0 shadow-lg shadow-gold-500/20 rounded-full px-6">
              Agendar Consulta
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-navy-900 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden z-40',
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-8">
              <Button
                onClick={toggleMobileMenu}
                className="bg-gold-500 hover:bg-gold-400 text-white rounded-full px-8 py-6 text-lg"
              >
                Agendar Agora
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
