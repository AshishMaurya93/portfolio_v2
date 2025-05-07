"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, ArrowRight, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

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
]

// Education data
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Centre For Development Of Advanced Computing",
    period: "August 2017 - July 2020",
    location: "Noida",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University",
    period: "July 2012 - December 2016",
    location: "New Delhi",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Andhra Education Society School",
    period: "January 2012 - December 2012",
    location: "New Delhi",
  },
]

// Experience data
const experience = [
  {
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt. Ltd",
    period: "May 2022 - March 2024",
    location: "Noida, India",
    description: [
      "Developed and optimized the Narendra Modi Mother Project, reducing page load time by 40%.",
      "Built and managed landing pages, leading to a 25% increase in visitor engagement.",
      "Implemented a CMS for seamless content updates, decreasing update time by 50%.",
      "Developed and enhanced DKSCORE, improving responsiveness and reducing bounce rate by 30%.",
      "Executed SEO strategies, boosting organic traffic by 30% within six months.",
      "Managed DKSCORE CMS for 2 years, optimizing workflows.",
      "Designed and built a media center, increasing user retention by 20%.",
      "Engineered JyotishMedium, leading to a 25% increase in content contributions.",
    ],
  },
]

// Training data
const training = [
  {
    title: "Oracle Workforce Development Program",
    courses: [
      "Oracle Database 10g: Introduction to SQL",
      "Oracle Database 10g: PL/SQL Fundamentals",
      "Oracle Database 10g: Database Administration Workshop",
    ],
  },
]

export default function AboutPage() {
  const skillsRef = useRef(null)
  const timelineRef = useRef(null)
  const bioRef = useRef(null)

  // Initialize GSAP animations
  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")

      gsap.fromTo(
        timelineItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <div className="pt-24 pb-16">
      <section className="container max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I'm <span className="gradient-text">Ashish Maurya</span>
            </h1>
            <p className="text-muted-foreground mb-6">
              A results-driven Front-End Developer with 2 years of experience in designing, developing, and deploying
              dynamic web applications. My expertise spans React.js, Next.js, and Node.js, where I focus on building
              user-centric interfaces and enhancing performance.
            </p>
            <p className="text-muted-foreground mb-8">
              I thrive in collaborative environments, leveraging modern technologies and SEO strategies to ensure
              project success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume-ashish-maurya.pdf" download="Ashish_Maurya_Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h2 className="text-2xl font-bold mb-6">Personal Info</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-muted-foreground">2 Years</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-muted-foreground">MCA, BCA</p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">English (Native)</span>
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">Hindi (Native)</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Interests</h3>
                <p className="text-muted-foreground">Badminton, Football, Piano</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've developed a diverse set of skills throughout my career, allowing me to tackle projects from multiple
              angles.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="skill-pill"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div ref={timelineRef} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the projects I've worked on.
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <ul className="space-y-2 list-disc pl-5">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Education</span> & Training
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg border border-border"
                  >
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-primary mb-2">{edu.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Training & Courses
              </h3>
              <div className="space-y-6">
                {training.map((train, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg border border-border"
                  >
                    <h4 className="text-lg font-bold mb-4">{train.title}</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      {train.courses.map((course, i) => (
                        <li key={i} className="text-muted-foreground">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
