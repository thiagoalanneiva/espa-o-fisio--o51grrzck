import { Hero } from '@/components/sections/Hero'
import { QuickSearch } from '@/components/sections/QuickSearch'
import { Specialties } from '@/components/sections/Specialties'
import { Differentials } from '@/components/sections/Differentials'
import { Services } from '@/components/sections/Services'
import { Journey } from '@/components/sections/Journey'
import { Team } from '@/components/sections/Team'
import { Testimonials } from '@/components/sections/Testimonials'
import { Units } from '@/components/sections/Units'
import { Contact } from '@/components/sections/Contact'

const Index = () => {
  return (
    <>
      <Hero />
      <QuickSearch />
      <Specialties />
      <Differentials />
      <Services />
      <Journey />
      <Team />
      <Testimonials />
      <Units />
      <Contact />
    </>
  )
}

export default Index
