import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/espacofisio_logo-fd933.png'
import { navigation, socialLinks, contact } from '@/data/content'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100',
        isScrolled ? 'py-2 shadow-md' : 'py-4',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={logoUrl} alt="Espaço Fisio" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium font-sans">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary"
                                >
                                  <div className="text-sm font-semibold leading-none font-sans">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        to={item.href}
                        className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium font-sans cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            <div className="hidden xl:flex items-center gap-2 text-gray-700 font-semibold">
              <Phone className="w-4 h-4 text-primary" />
              <span>{contact.phone}</span>
            </div>

            <Button asChild className="rounded-full font-semibold font-sans shadow-sm">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Agendar uma avaliação
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 overflow-y-auto',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col gap-2">
                {item.items ? (
                  <>
                    <span className="text-lg font-bold text-gray-800 font-sans border-b pb-2">
                      {item.name}
                    </span>
                    <div className="flex flex-col gap-3 pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-600 hover:text-primary transition-colors py-1 font-medium font-sans"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-lg font-bold text-gray-800 font-sans border-b pb-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t flex flex-col gap-6 pb-12">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>

            <Button size="lg" asChild className="w-full rounded-full font-semibold font-sans">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Agendar uma avaliação
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
