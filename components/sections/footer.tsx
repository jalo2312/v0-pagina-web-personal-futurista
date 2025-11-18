export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      {/* Línea horizontal luminosa en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Nombre */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Johan Andrés Linares
            </h3>
            <p className="text-foreground/60 text-sm">
              Ingeniero en Software | Full Stack Developer
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4 className="font-bold text-foreground mb-3">Enlaces Rápidos</h4>
            <div className="space-y-2 text-foreground/60 text-sm">
              <p>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Inicio
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-secondary transition-colors duration-300">
                  Proyectos
                </a>
              </p>
              <p>
                <a href="#contact" className="hover:text-accent transition-colors duration-300">
                  Contacto
                </a>
              </p>
            </div>
          </div>

          {/* Redes */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-foreground mb-3">Redes Sociales</h4>
            <div className="flex justify-center md:justify-end gap-4 text-foreground/60">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                LinkedIn
              </a>
              <a href="mailto:johan@example.com" className="hover:text-accent transition-colors duration-300">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center text-foreground/50 text-sm">
          <p>
            © {currentYear} Johan Andrés Linares. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Diseñado y desarrollado con <span className="text-primary">♥</span> usando React, Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
