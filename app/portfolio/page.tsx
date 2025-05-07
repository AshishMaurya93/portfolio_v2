"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import ProjectModal from "@/components/project-modal"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Initialize GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Project data
const projects = [
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
    category: "Professional",
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
    category: "Professional",
  },
  {
    id: 3,
    title: "JyotishMedium",
    description:
      "Engineered JyotishMedium, leading to a 25% increase in content contributions. Implemented responsive design principles and optimized for mobile devices.",
    image: "/images/jyotish-medium.png",
    link: "https://www.dkscore.com/jyotishmedium",
    technologies: ["React.js", "CSS3", "HTML5", "JavaScript"],
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt. Ltd",
    duration: "May 2022 - March 2024",
    category: "Professional",
  },
  {
    id: 4,
    title: "Landing Page Optimization",
    description:
      "Built and managed landing pages for various clients, leading to a 25% increase in visitor engagement. Implemented SEO best practices and optimized for conversion.",
    image: "/images/landing-page-login.png",
    link: "https://www.mydkscore.com/Login",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt. Ltd",
    duration: "May 2022 - March 2024",
    category: "Professional",
  },
  {
    id: 5,
    title: "Mystic Brews",
    description:
      "An immersive potion-making simulation game where players can cultivate magical ingredients, craft powerful potions, trade with NPCs, manage their shop, and build a thriving potion business. Set in a magical world, players take on the role of an aspiring alchemist seeking to master the art of potion-making.",
    image: "/images/mystic-brews.jpg",
    link: "https://mystic-brews.vercel.app",
    technologies: ["Next.js", "TypeScript", "JavaScript", "CSS", "Redux"],
    role: "Front-End Developer",
    company: "Personal Project",
    duration: "2024",
    category: "Personal",
  },
  {
    id: 6,
    title: "Movie & TV Listing",
    description:
      "A web application for listing and searching movies and TV series along with their details. Users can browse through popular titles, search for specific content, and view comprehensive information about each title.",
    image: "/images/movie-listing.png",
    link: "https://movie-and-tv-series-search.vercel.app/",
    technologies: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    role: "Front-End Developer",
    company: "Personal Project",
    duration: "2023",
    category: "Personal",
  },
]

// All unique technologies for filtering
const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies))).sort()

// All categories
const categories = ["All", "Professional", "Personal"]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const [activeTechFilter, setActiveTechFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const projectsRef = useRef(null)

  // Filtered projects based on category, technology, and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const categoryMatch = activeFilter === "All" || project.category === activeFilter

      // Technology filter
      const techMatch = activeTechFilter === "All" || project.technologies.includes(activeTechFilter)

      // Search query
      const searchMatch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      return categoryMatch && techMatch && searchMatch
    })
  }, [activeFilter, activeTechFilter, searchQuery])

  // Initialize GSAP animations
  useEffect(() => {
    if (projectsRef.current) {
      const projectItems = projectsRef.current.querySelectorAll(".project-item")

      projectItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }
  }, [filteredProjects])

  // Card hover effect
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card")

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      })
    })
  }, [filteredProjects])

  return (
    <div className="pt-24 pb-16">
      <section className="container max-w-6xl px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my selected projects showcasing front-end development, SEO optimization, and UI/UX design.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10 w-full md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={cn("filter-button", activeFilter === category ? "active" : "")}
                >
                  {category}
                </Button>
              ))}

              <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(!isFilterOpen)} className="ml-2">
                <Filter className="h-4 w-4 mr-2" />
                Technologies
              </Button>
            </div>
          </div>

          {/* Technology filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveTechFilter("All")}
                      className={cn("filter-button", activeTechFilter === "All" ? "active" : "")}
                    >
                      All
                    </Button>
                    {allTechnologies.map((tech) => (
                      <Button
                        key={tech}
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveTechFilter(tech)}
                        className={cn("filter-button", activeTechFilter === tech ? "active" : "")}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-card cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  )
}
