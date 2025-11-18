'use client'

import { useEffect, useRef, useState } from 'react'

interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'from-primary',
    skills: ['React', 'React Native', 'Angular', 'HTML/CSS', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: 'from-secondary',
    skills: ['Node.js', 'Express', 'Spring Boot', 'Java', 'PHP', 'Python'],
  },
  {
    title: 'Bases de Datos',
    color: 'from-accent',
    skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Herramientas',
    color: 'from-purple-500',
    skills: ['Git', 'Docker', 'Azure DevOps', 'XAMPP', 'SQL Workbench'],
  },
  {
    title: 'Metodologías',
    color: 'from-pink-500',
    skills: ['Agile', 'Scrum', 'Problem Solving', 'Team Work'],
  },
]

export default function Skills() {
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
            Habilidades Técnicas
          </span>
        </h2>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative"
              style={{
                animation: isVisible ? `fade-in-up 0.8s ease-out ${index * 0.1}s backwards` : 'none',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative glass-effect-strong rounded-2xl p-6 h-full hover:glass-effect transition-all duration-300 hover:scale-105 cursor-default group-hover:neon-glow">
                {/* Borde brillante superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl opacity-50" />

                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} to-accent bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-foreground/70 group/skill hover:text-foreground transition-colors duration-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} to-accent opacity-60 group-hover/skill:opacity-100 transition-opacity`} />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
