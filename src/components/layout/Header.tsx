import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Instagram, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, contact } from '@/data/content'
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
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const NavItem = ({ href, children, className, onClick }: any) => {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100',
        isScrolled ? 'py-2 shadow-md' : 'py-4',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src="https://therapy-rebrand-hub.lovable.app/logo.svg"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              if (target.src.includes('logo.svg'))
                target.src = 'https://therapy-rebrand-hub.lovable.app/logo.png'
            }}
            alt="Espaço Fisio Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.isMega && item.groups ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-navy-900 font-semibold font-sans text-base">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-3 w-[700px] xl:w-[900px] gap-8 p-6 bg-white rounded-xl shadow-xl">
                          {item.groups.map((group) => (
                            <div key={group.title} className="space-y-4">
                              <h4 className="text-sm font-bold text-gold-500 uppercase tracking-wider border-b border-gray-100 pb-2 font-sans">
                                {group.title}
                              </h4>
                              <ul className="space-y-2">
                                {group.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <NavigationMenuLink asChild>
                                      <NavItem
                                        href={subItem.href}
                                        className="block text-sm font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 p-2 rounded-md transition-colors font-sans"
                                      >
                                        {subItem.name}
                                      </NavItem>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : item.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-navy-900 font-semibold font-sans text-base">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[250px] p-2 bg-white rounded-xl shadow-xl space-y-1">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <NavItem
                                  href={subItem.href}
                                  className="block text-sm font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 p-3 rounded-md transition-colors font-sans"
                                >
                                  {subItem.name}
                                </NavItem>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <NavItem
                        href={item.href}
                        className="bg-transparent hover:bg-gray-50 text-navy-900 font-semibold font-sans text-base cursor-pointer"
                      >
                        {item.name}
                      </NavItem>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
            <div className="hidden xl:flex items-center gap-2 text-navy-900 font-bold font-sans">
              <Phone className="w-5 h-5 text-gold-500" />
              {contact.phone}
            </div>
            <a
              href="https://www.instagram.com/espacofisioembu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-navy-900 transition-colors bg-gray-50 p-2 rounded-full hover:bg-gray-100"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button
              asChild
              className="rounded-full font-bold font-sans shadow-md bg-navy-900 hover:bg-navy-800 text-white"
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Agendar uma avaliação
              </a>
            </Button>
          </div>
        </div>

        <button
          className="lg:hidden z-50 p-2 text-navy-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 overflow-y-auto',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col gap-2">
                {item.isMega && item.groups ? (
                  <>
                    <span className="text-xl font-bold text-navy-900 font-sans border-b border-gray-100 pb-2">
                      {item.name}
                    </span>
                    <div className="flex flex-col gap-6 pl-4 mt-2">
                      {item.groups.map((group) => (
                        <div key={group.title} className="flex flex-col gap-2">
                          <span className="text-sm font-bold text-gold-500 uppercase font-sans">
                            {group.title}
                          </span>
                          <div className="flex flex-col gap-3 border-l-2 border-gray-100 pl-4">
                            {group.items.map((subItem) => (
                              <NavItem
                                key={subItem.name}
                                href={subItem.href}
                                className="text-gray-600 hover:text-navy-900 font-medium font-sans"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </NavItem>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : item.items ? (
                  <>
                    <span className="text-xl font-bold text-navy-900 font-sans border-b border-gray-100 pb-2">
                      {item.name}
                    </span>
                    <div className="flex flex-col gap-3 pl-4 mt-2 border-l-2 border-gray-100 ml-4">
                      {item.items.map((subItem) => (
                        <NavItem
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-600 hover:text-navy-900 font-medium font-sans py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </NavItem>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavItem
                    href={item.href}
                    className="text-xl font-bold text-navy-900 font-sans border-b border-gray-100 pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavItem>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t flex flex-col gap-6 pb-12">
            <div className="flex items-center justify-center gap-2 text-navy-900 font-bold font-sans mb-2">
              <Phone className="w-5 h-5 text-gold-500" /> {contact.phone}
            </div>
            <Button
              size="lg"
              asChild
              className="w-full rounded-full font-bold font-sans text-lg bg-navy-900 text-white h-14"
            >
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
