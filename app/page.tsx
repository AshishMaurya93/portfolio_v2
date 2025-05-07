"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, Code, Briefcase, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectModal from "@/components/project-modal"
import dynamic from "next/dynamic"

// Dynamically import ThreeBackground to improve initial load time
const DynamicThreeBackground = dynamic(() => import("@/components/three-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>,
})

// Initialize GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Skills data
const skills = [
  "React.js",
  "Redux",
  "Next.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "CSS3",
  "HTML5",
  "CMS",
  "Figma",
  "Git",
  "jQuery",
  "Front-end",
  "Oracle",
  "SEO",
  "SQL",
  "SVN",
  "UI/UX Design",
  "Tailwind CSS",
]

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Narendra Modi Mother Project",
    description:
      "Developed and optimized the Narendra Modi Mother Project, reducing page load time by 40%. Built and managed landing pages, leading to a 25% increase in visitor engagement. Implemented a CMS for seamless content updates, decreasing update time by 50%.",
    image: "/images/narendra-modi-mother.png",
    link: "https://www.narendramodi.in/mother",
    technologies: ["React.js", "Next.js", "CMS", "SEO"],
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt. Ltd",
    duration: "May 2022 - March 2024",
  },
  {
    id: 2,
    title: "DKSCORE",
    description:
      "Developed and enhanced DKSCORE, improving responsiveness and reducing bounce rate by 30%. Executed SEO strategies, boosting organic traffic by 30% within six months. Managed DKSCORE CMS for 2 years, optimizing workflows. Designed and built a media center, increasing user retention by 20%.",
    image: "/images/dkscore.png",
    link: "https://www.dkscore.com/",
    technologies: ["React.js", "Node.js", "CMS", "SEO", "UI/UX"],
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt. Ltd",
    duration: "May 2022 - March 2024",
  },
]

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const skillsRef = useRef(null)
  const statsRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // GSAP animations
  useEffect(() => {
    if (skillsRef.current) {
      const skillElements = skillsRef.current.querySelectorAll(".skill-item")

      gsap.fromTo(
        skillElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    }

    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll(".stat-item")

      gsap.fromTo(
        statElements,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <DynamicThreeBackground />
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="container max-w-5xl z-10">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                Front-End Developer
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Ashish Maurya</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              A results-driven Front-End Developer with 2 years of experience in designing, developing, and deploying
              dynamic web applications. My expertise spans React.js, Next.js, and Node.js.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1">
              <div className="w-1 h-2 bg-muted-foreground rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating user-centric interfaces and enhancing performance using modern technologies.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="stat-item bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Expert in developing responsive web applications with modern frameworks and libraries.
              </p>
            </div>
            <div className="stat-item bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Proficiency</h3>
              <p className="text-muted-foreground">
                Skilled at implementing organic SEO strategies to boost traffic and visibility.
              </p>
            </div>
            <div className="stat-item bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating intuitive user interfaces with a focus on user experience and accessibility.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          </div>

          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item skill-pill">
                {skill}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative bg-card">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="project-card hover-lift cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <Button size="sm">View Details</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing
              together.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all w-full md:w-auto"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                Send me an email and I'll get back to you as soon as possible.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  )
}
