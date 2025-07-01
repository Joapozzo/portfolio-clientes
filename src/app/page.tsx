"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Users, Sparkles, ArrowRight, CheckCircle, Clock, MessageCircle, Mail } from 'lucide-react';

// Types
interface Tag {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  progres: number;
  coop: boolean;
  link: string;
  github: string;
  image: string;
  tags: Tag[];
}

const TAGS = {
  REACT: { name: "React", color: "#61DAFB" },
  JS: { name: "JavaScript", color: "#F7DF1E" },
  NODE: { name: "Node.js", color: "#339933" },
  NEXTJS: { name: "Next.js", color: "#ffffff" },
  TS: { name: "TypeScript", color: "#3178C6" },
  TW: { name: "Tailwind", color: "#06B6D4" },
  ASTRO: { name: "Astro", color: "#FF5D01" }
};

const PROJECTS = [
  {
    title: "Copa Relámpago - Gestión de torneos",
    description: "Sistema de gestión web para torneo de fútbol 7. Roles múltiples, fixture, resultados y más.",
    progres: 95,
    coop: true,
    link: "https://coparelampago.com/",
    github: "https://github.com/perezmariano08/CR_Frontend.git",
    image: "/projects/coparelampago.png",
    tags: [TAGS.REACT, TAGS.JS, TAGS.NODE],
  },
  {
    title: "Loopin - App de fidelización",
    description: "Frontend desarrollado para una app de puntos y beneficios en restaurantes.",
    progres: 95,
    coop: true,
    link: "https://loopin.com.ar/",
    github: "https://github.com/Joapozzo/loopin-front.git",
    image: "/projects/coparelampago.png",
    tags: [TAGS.NEXTJS, TAGS.TS, TAGS.TW],
  },
  {
    title: "Gentío - Agencia de comunicación",
    description: "Landing page desarrollada a medida según identidad visual y análisis de competencia.",
    progres: 100,
    coop: true,
    link: "https://gentiomkt.com/es",
    github: "https://github.com/perezmariano08/Gentio-Web.git",
    image: "/projects/gentio.png",
    tags: [TAGS.REACT, TAGS.JS],
  },
  {
    title: "Grupo BZN - Desarrolladora inmobiliaria",
    description: "Landing institucional con foco en branding e impacto visual. Diseño responsive.",
    progres: 100,
    coop: true,
    link: "https://bznurbanmaking.com.ar/",
    github: "https://github.com/Joapozzo/bzn-web.git",
    image: "/projects/bzn.png",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TW],
  },
  {
    title: "Duccó - Sitio para mueblería",
    description: "Sitio web moderno y elegante para mostrar productos y servicios personalizados.",
    progres: 100,
    coop: true,
    link: "https://ducco.vercel.app/",
    github: "https://github.com/Joapozzo/ducco.git",
    image: "/projects/bzn.png",
    tags: [TAGS.NEXTJS, TAGS.TS, TAGS.TW],
  },
  {
    title: "Rayces - Tienda de muebles",
    description: "Diseño moderno y visualmente atractivo para tienda de muebles a medida.",
    progres: 100,
    coop: true,
    link: "https://rayces.vercel.app/",
    github: "https://github.com/Joapozzo/rayces.git",
    image: "/projects/bzn.png",
    tags: [TAGS.NEXTJS, TAGS.TS, TAGS.TW],
  },
  {
    title: "Grupo Rennella - Publicidad OOH",
    description: "Landing profesional para empresa con más de 60 años en medios publicitarios.",
    progres: 100,
    coop: true,
    link: "https://rennella.vercel.app/",
    github: "https://github.com/Joapozzo/grupo-rennella",
    image: "/projects/bzn.png",
    tags: [TAGS.NEXTJS, TAGS.TS, TAGS.TW],
  },
  {
    title: "Timba - División de gastos",
    description: "App para dividir gastos en grupo, simple e intuitiva. En desarrollo.",
    progres: 80,
    coop: true,
    link: "https://timba-git-main-joapozzos-projects.vercel.app/",
    github: "https://github.com/Joapozzo/timba.git",
    image: "/projects/timba.png",
    tags: [TAGS.NEXTJS, TAGS.TW],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`group relative bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-12 opacity-0 scale-95'
      } hover:border-violet-500/50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Progress indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-violet-500/30 shadow-lg">
          {project.progres === 100 ? (
            <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
          ) : (
            <Clock className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '2s' }} />
          )}
          <span className="text-sm font-semibold text-foreground">{project.progres}%</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-violet-900/20 to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
        />
        
        {/* Animated overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-violet-900/90 via-purple-900/90 to-background/90 backdrop-blur-sm flex items-center justify-center gap-4 z-20 transition-all duration-500 ${
          isHovered 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            Ver sitio
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1.5 text-xs font-semibold bg-background/60 border border-border rounded-full hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              style={{ color: tag.color }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transform transition-all duration-1000 ease-out ${
      mounted 
        ? 'translate-y-0 opacity-100 scale-100' 
        : 'translate-y-12 opacity-0 scale-95'
    }`}>
      {children}
    </div>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-violet-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default function ClientPortfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("¡Hola Joaquín! Me interesa trabajar contigo en un proyecto web. ¿Podemos conversar?");
    window.open(`https://wa.me/543517021495?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent("Consulta sobre desarrollo web");
    const body = encodeURIComponent("Hola Joaquín,\n\nMe interesa trabajar contigo en un proyecto web. Me gustaría conocer más sobre tus servicios.\n\nSaludos!");
    window.open(`mailto:pozzojoa@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };
  
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --background: #0a0a0a;
          --foreground: #ffffff;
          --muted: #1f1f23;
          --muted-foreground: #a1a1aa;
          --surface: #141418;
          --border: #2d2d35;
          --primary: #6366f1;
          --primary-foreground: #ffffff;
          --accent: #8b5cf6;
          --violet-dark: #4c1d95;
          --purple-dark: #581c87;
          --success: #10b981;
          --warning: #f59e0b;
          --gradient-primary: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          --gradient-secondary: linear-gradient(135deg, #0f0f23, #1e1b4b, #312e81);
          --gradient-surface: linear-gradient(135deg, #141418, #1f1f23, #2d2d35);
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          background: linear-gradient(135deg, #0a0a0a, #0f0f23, #1a103a);
          color: var(--foreground);
          overflow-x: hidden;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
          100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .glass-effect {
          background: rgba(20, 20, 24, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .magnetic-hover:hover {
          animation: magnetic 0.3s ease-out;
        }
        
        @keyframes magnetic {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1.02); }
        }
      `}</style>
      
      <div className="min-h-screen text-foreground relative">
        <ParticleBackground />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/15 rounded-full blur-2xl animate-bounce-slow transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <FloatingElement>
              <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8 animate-glow">
                <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                <span className="text-sm font-semibold text-violet-300">Desarrollador Web Freelance</span>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={200}>
              <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text animate-float">
                Joaquín Pozzo
              </h1>
            </FloatingElement>
            
            <FloatingElement delay={400}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transformo ideas en <span className="text-violet-400 font-bold">experiencias digitales</span> excepcionales. 
                Desarrollo web moderno que <span className="text-purple-400 font-bold">impulsa tu negocio</span> hacia el éxito.
              </p>
            </FloatingElement>
            
            <FloatingElement delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button 
                  onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group magnetic-hover flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 transform hover:-translate-y-1"
                >
                  <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Ver mis proyectos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex gap-2">
                  <button 
                    onClick={handleWhatsAppContact}
                    className="magnetic-hover flex items-center gap-2 glass-effect text-violet-300 px-6 py-4 rounded-full font-bold hover:bg-violet-500/20 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                  <button 
                    onClick={handleEmailContact}
                    className="magnetic-hover flex items-center gap-2 glass-effect text-violet-300 px-6 py-4 rounded-full font-bold hover:bg-violet-500/20 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </button>
                </div>
              </div>
            </FloatingElement>
            
            {/* Enhanced Featured Project Preview */}
            <FloatingElement delay={800}>
              <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/20 transform hover:scale-105">
                <div className="text-sm text-violet-400 mb-2 font-semibold">Proyecto destacado</div>
                <div className="font-bold text-foreground mb-1 text-lg">{PROJECTS[currentProject].title}</div>
                <div className="text-sm text-gray-400 mb-3">{PROJECTS[currentProject].description.slice(0, 60)}...</div>
                <div className="flex gap-1.5">
                  {PROJECTS.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentProject 
                          ? 'bg-gradient-to-r from-violet-500 to-purple-500 w-8 shadow-lg shadow-violet-500/30' 
                          : 'bg-gray-600 w-2 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </FloatingElement>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
                Proyectos que Impactan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Cada proyecto es una <span className="text-violet-400 font-semibold">historia de éxito</span>. 
                Soluciones web que generan <span className="text-purple-400 font-semibold">resultados reales</span> para mis clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-purple-900/10 to-violet-900/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="glass-effect rounded-3xl p-12 border-violet-500/30">
              <h3 className="text-3xl md:text-5xl font-black mb-6 gradient-text">
                ¿Listo para llevar tu proyecto al siguiente nivel?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trabajemos juntos para crear algo <span className="text-violet-400 font-bold">extraordinario</span> que impulse tu negocio hacia el <span className="text-purple-400 font-bold">éxito</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={handleWhatsAppContact}
                  className="group magnetic-hover flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 transform hover:-translate-y-2 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                  Hablemos por WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <button 
                  onClick={handleEmailContact}
                  className="group magnetic-hover flex items-center gap-3 glass-effect text-violet-300 px-10 py-5 rounded-full font-bold hover:bg-violet-500/20 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                  Enviar email
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}