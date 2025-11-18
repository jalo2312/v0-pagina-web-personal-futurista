'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTypingEffect } from '@/hooks/use-typing-effect'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const typedName = useTypingEffect('Johan Andrés Linares', 80, 300)
  const typedRole = useTypingEffect('Ingeniero en Software', 80, 1800)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1u319j3TP1SowVMSYhHF315Ni2hKpOGIV/view?usp=sharing', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Título con efecto typing */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight text-balance min-h-24">
            <span className="bg-gradient-to-r from-[rgb(101,102,255)] via-[rgb(0,255,200)] to-[rgb(255,0,200)] bg-clip-text text-transparent animate-pulse">
              {typedName}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full neon-glow mb-8" />
        </div>

        {/* Subtítulo con efecto typing */}
        <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light tracking-wide min-h-12">
          {typedRole}
          <span className="animate-pulse">|</span>
        </p>

        {/* Descripción */}
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estudiante de 6to semestre en Ingeniería en Software con pasión por construir soluciones innovadoras.
          Full Stack Developer con experiencia en React, Node.js, Spring Boot y más.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={downloadCV}
            className="px-8 py-3 rounded-lg glass-effect-strong neon-glow hover:neon-glow transition-all duration-300 border-primary text-foreground font-semibold hover:scale-105 active:scale-95"
          >
            Descargar CV
          </button>
        </div>

        {/* Elemento 3D animado */}
        <div className="relative h-32 md:h-48 flex items-center justify-center perspective">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            {/* Cubo rotativo */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg transform -rotate-45" />
              <div className="absolute inset-4 border-2 border-secondary/30 rounded-lg transform rotate-45" />
              <div className="absolute inset-8 border-2 border-accent/30 rounded-lg" />
            </div>

            {/* Centro luminoso */}
            <div className="absolute inset-1/3 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-2xl pulse-glow" />
          </div>
        </div>

        {/* Texto flotante */}
        <div className="mt-12 text-sm text-foreground/50 animate-bounce">
          ↓ Scroll para explorar
        </div>
      </div>

      {/* Línea horizontal iluminada en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  )
}
