"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X, ExternalLink, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectModal({ project, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="aspect-video w-full bg-muted">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {project.duration}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="h-4 w-4 mr-1" />
                {project.company}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-sm bg-secondary px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
