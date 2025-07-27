'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Users, 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  GraduationCap,
  Calculator,
  Globe,
  Sparkles,
  ChevronDown,
  Coffee
} from 'lucide-react';

// Your actual deployed projects
const projects = [
  {
    id: 1,
    title: "Motivational Quotes for Programmers",
    description: "An inspiring web application that generates motivational quotes specifically crafted for developers and programmers to boost productivity and morale.",
    url: "https://ai-web-app-three.vercel.app/",
    image: "/screenshots/motivational-quotes.png",
    tech: ["Next.js", "AI/API", "React"],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Perfect Circle",
    description: "Interactive web application challenging users to draw the most perfect circle possible, with scoring and feedback mechanisms.",
    url: "https://perfect-circ-68jd.vercel.app/",
    image: "/screenshots/perfect-circle.png",
    tech: ["JavaScript", "Canvas API", "CSS"],
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Purrfect Paws",
    description: "A delightful web application featuring cats, designed to bring joy and entertainment to cat lovers everywhere.",
    url: "https://bolt-cats.vercel.app/",
    image: "/screenshots/purrfect-paws.png",
    tech: ["React", "Next.js", "Tailwind"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Health Data",
    description: "Comprehensive health data visualization and tracking application for monitoring personal wellness metrics and trends.",
    url: "https://health-data-nu.vercel.app/",
    image: "/screenshots/health-data.png",
    tech: ["React", "Charts.js", "Data Visualization"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Image Generator",
    description: "AI-powered image generation tool that creates custom images based on user prompts and specifications.",
    url: "https://ai-image-gen-beta.vercel.app/",
    image: "/screenshots/image-generator.png",
    tech: ["Next.js", "AI/API", "Image Processing"],
    color: "from-indigo-500 to-blue-600"
  }
];

const skills = [
  { name: "Python", icon: <Code className="w-6 h-6" />, level: 95 },
  { name: "JavaScript", icon: <Globe className="w-6 h-6" />, level: 92 },
  { name: "Next.js", icon: <Sparkles className="w-6 h-6" />, level: 88 },
  { name: "HTML/CSS", icon: <BookOpen className="w-6 h-6" />, level: 94 },
  { name: "Mathematics", icon: <Calculator className="w-6 h-6" />, level: 96 },
  { name: "Teaching", icon: <GraduationCap className="w-6 h-6" />, level: 98 }
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Asha Kripalani
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Teaching Python, JavaScript, Mathematics & English<br />
              <span className="text-blue-400">14+ years</span> of inspiring learners of all ages
            </p>
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </motion.button>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                With over 14 years of experience in education, I've had the privilege of teaching 
                students from primary school through university level. My passion lies in making 
                complex concepts accessible and engaging for learners of all backgrounds.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in Python programming, JavaScript development, web technologies, 
                mathematics, and English language instruction. My approach combines traditional 
                teaching methods with modern technology to create immersive learning experiences.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not teaching, I'm building educational tools and applications that help 
                students learn more effectively. I believe technology should enhance, not replace, 
                human connection in education.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Teaching Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Student-Centered</h4>
                    <p className="text-white/70">Every learner is unique with their own pace and style</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Practical Application</h4>
                    <p className="text-white/70">Learning through real-world projects and examples</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-pink-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Continuous Growth</h4>
                    <p className="text-white/70">Fostering curiosity and lifelong learning habits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                  />
                </div>
                <p className="text-white/70 text-sm">{skill.level}% proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Educational tools and applications built to enhance learning experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Screenshot Image */}
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.classList.add(`bg-gradient-to-br`, ...project.color.split(' '));
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    {/* External Link Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
                    >
                      <span>Visit Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Interested in collaborating or have questions about my work? I'd love to hear from you!
            </p>
            
            {/* Buy Me a Coffee Button */}
            <div className="mb-8">
              <motion.a
                href="https://www.buymeacoffee.com/ashakripalani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Coffee className="w-6 h-6" />
                <span>Buy Me a Coffee</span>
              </motion.a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <motion.a
                href="mailto:ashakv1712@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/asha-kripalani-1496661a5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/ashakv1712"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/50">
            © 2025 Asha Kripalani. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}