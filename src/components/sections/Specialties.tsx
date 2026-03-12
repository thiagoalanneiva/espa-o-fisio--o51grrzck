import { Link } from 'react-router-dom'
import { ArrowRight, Activity, Bone, Heart, Zap, Sparkles, Feather, Dna } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/content'

const iconMap: Record<string, any> = {
  Activity,
  Bone,
  Heart,
  Zap,
  Sparkles,
  Feather,
  Dna,
}

export function Specialties() {
  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Cuidados Especializados
          </h2>
          <p className="text-lg text-gray-600">
            Tratamentos personalizados para atender às suas necessidades específicas com a mais alta
            tecnologia e técnicas comprovadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Activity

            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden"
              >
                <CardHeader className="p-6 pb-4 relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-sans">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-gray-600 text-base mb-6 line-clamp-3">
                    {service.shortDescription}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:text-primary/80 hover:bg-transparent font-semibold font-sans group-hover:translate-x-2 transition-transform duration-300"
                    asChild
                  >
                    <Link to={`/servicos/${service.id}`}>
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
