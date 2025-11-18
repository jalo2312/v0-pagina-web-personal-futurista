'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
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

  const socialLinks = [
    { icon: 'Gh', name: 'GitHub', url: 'https://github.com/jalo2312' },
    { icon: 'Li', name: 'LinkedIn', url: 'https://www.linkedin.com/in/johan-andres-linares-ovalle-12b4762a6' },
    { icon: 'Em', name: 'Email', url: 'mailto:jlinares@uniempresarial.edu.co' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Contacto
          </span>
        </h2>

        {/* Redes sociales holográficas */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect-strong rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Conecta conmigo</h3>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-lg glass-effect hover:glass-effect-strong transition-all duration-300 hover:scale-110 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                      {link.icon}
                    </div>
                    <p className="text-xs font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
                      {link.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div className="glass-effect-strong rounded-2xl p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Información</h3>
            <div className="space-y-3 text-foreground/70 text-sm">
              <p>
                <span className="text-primary font-semibold">Ubicación:</span> Colombia
              </p>
              <p>
                <span className="text-secondary font-semibold">Teléfono:</span> +57 319 2085596
              </p>
              <p>
                <span className="text-accent font-semibold">Especialización:</span> Full Stack Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
