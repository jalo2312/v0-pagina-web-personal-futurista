'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
  type: 'education' | 'experience' | 'certification'
}

const timelineItems: TimelineItem[] = [
  {
    year: '2022',
    title: 'Graduación de Bachiller',
    description: 'Colegio Militar JQA. Culminación exitosa de educación media.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Ingreso a Ingeniería en Software',
    description: 'Comienzo de la carrera profesional en Ingeniería en Software en la Universidad Uniempresarial.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'FIBRATELTEC - Desarrollador Full Stack',
    description: 'Desarrollo de aplicaciones móviles para gestión de seguridad laboral y sistema ATS en telecomunicaciones.',
    type: 'experience',
  },
  {
    year: '2024',
    title: 'Certificaciones Cloud',
    description: 'Certificado Aviatrix Multicloud Network Associate y AWS Educate Introduction to Cloud 101.',
    type: 'certification',
  },
  {
    year: '2025',
    title: 'REDESCORD - Desarrollador Full Stack',
    description: 'Desarrollo de página web para área de seguridad y salud en el trabajo (ACC Riesgos). Continuación de proyectos empresariales.',
    type: 'experience',
  },
  {
    year: '2025',
    title: 'Certificado Mendix Rapid Developer',
    description: 'Certificación como Mendix Rapid Developer. Actualmente cursando 6to semestre de Ingeniería en Software.',
    type: 'certification',
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          timelineItems.forEach((_, index) => {
            setTimeout(() => {
              setActiveItems((prev) => new Set([...prev, index]))
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Experiencia y Educación
          </span>
        </h2>

        <div className="relative">
          {/* Línea vertical iluminada */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${activeItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Punto en la línea */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-500 ${
                      item.type === 'education' 
                        ? 'bg-primary' 
                        : item.type === 'experience' 
                        ? 'bg-secondary' 
                        : 'bg-accent'
                    } ${activeItems.has(index) ? 'scale-100 shadow-lg shadow-primary/50' : 'scale-0'}`} />
                  </div>

                  {/* Contenido */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-effect-strong rounded-2xl p-6 md:p-8 hover:glass-effect transition-all duration-300 hover:scale-105 cursor-default group">
                      {/* Etiqueta tipo */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          item.type === 'education' 
                            ? 'bg-primary/20 text-primary' 
                            : item.type === 'experience' 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {item.type === 'education' ? 'Educación' : item.type === 'experience' ? 'Experiencia' : 'Certificación'}
                        </span>
                        <span className="text-foreground/50 text-sm font-mono">{item.year}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Borde iluminado superior */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${item.type === 'education' ? 'primary' : item.type === 'experience' ? 'secondary' : 'accent'} to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
