'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FindUserGithub',
    description: 'Aplicación web que permite buscar y explorar usuarios de GitHub a través de una API integrada. Interfaz intuitiva para visualizar información de desarrolladores.',
    technologies: ['Svelte', 'JavaScript', 'HTML/CSS', 'API REST'],
    image: '/github-finder-app.jpg',
    github: 'https://github.com/jalo2312/DevFinder-GitHyb-Svelte.git',
  },
  {
    id: 2,
    title: 'DonaMedicApp',
    description: 'Aplicación mobile para facilitar donaciones de medicamentos entre usuarios. Sistema de gestión de medicamentos con notificaciones en tiempo real.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Mobile'],
    image: '/medication-donation-app.jpg',
    github: 'https://github.com/jalo2312/DonaMedicFrontend',
  },
  {
    id: 3,
    title: 'Angular Bank',
    description: 'Interfaz moderna de banco ejemplo con diseño responsive. Incluye secciones de cuentas, transacciones y gestión de fondos con arquitectura moderna.',
    technologies: ['Angular', 'TypeScript', 'HTML/CSS'],
    image: '/angular-bank-dashboard.jpg',
    github: 'https://github.com/jalo2312/Angular_Bank',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
        </h2>

        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{
                animation: isVisible ? `fade-in-up 0.8s ease-out ${index * 0.15}s backwards` : 'none',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative glass-effect-strong rounded-2xl overflow-hidden group-hover:glass-effect transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  {/* Imagen */}
                  <div className="relative h-64 md:h-full md:min-h-80 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Etiquetas neón */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-semibold glass-effect neon-border transition-all duration-300 hover:neon-glow text-primary hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="flex gap-4 pt-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg glass-effect hover:glass-effect-strong transition-all duration-300 text-center font-semibold text-foreground hover:neon-glow active:scale-95"
                      >
                        GitHub
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-foreground font-semibold transition-all duration-300 text-center hover:scale-105 active:scale-95 neon-glow"
                        >
                          Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
