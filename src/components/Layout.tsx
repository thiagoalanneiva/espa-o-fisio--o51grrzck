import { Outlet } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { WhatsAppButton } from './layout/WhatsAppButton'
import { ServiceModal } from './ServiceModal'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ServiceModal />
    </div>
  )
}
