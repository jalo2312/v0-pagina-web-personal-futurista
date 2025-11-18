'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sobre Mí
          </span>
        </h2>

        <div className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tarjeta con foto */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative glass-effect-strong rounded-2xl p-8 flex flex-col items-center">
              {/* Círculo con foto */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse" />
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-primary via-secondary to-accent bg-clip-border rounded-full" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                  JA
                </div>
              </div>
              <p className="text-sm text-foreground/60 text-center">
                Ingeniero en Software | Full Stack Developer
              </p>
            </div>
          </div>

          {/* Información */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Hola, soy <span className="text-primary">Johan</span>
            </h3>
            
            <p className="text-foreground/70 leading-relaxed text-lg">
              Soy estudiante universitario de 6to semestre en Ingeniería en Software con fuerte pasión por la tecnología y el desarrollo de soluciones innovadoras.
            </p>

            <p className="text-foreground/70 leading-relaxed text-lg">
              Tengo experiencia trabajando como <span className="text-secondary">Full Stack Developer</span>, combinando mis conocimientos en frontend, backend y bases de datos para crear aplicaciones modernas y escalables.
            </p>

            <div className="pt-6 space-y-2">
              <p className="text-foreground/60">
                <span className="text-primary font-semibold">Puntos fuertes:</span> Trabajo en equipo, resolución de problemas, creatividad e iniciativa
              </p>
              <p className="text-foreground/60">
                <span className="text-secondary font-semibold">Ubicación:</span> Colombia
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2 rounded-lg glass-effect hover:glass-effect-strong transition-all duration-300 text-accent font-semibold"
              >
                Conoce más →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
