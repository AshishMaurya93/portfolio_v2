"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, ArrowRight, Calendar, MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react"

// Initialize GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Skills data
const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "SVN",
  "Oracle",
  "SQL",
  "MySQL",
  "Figma",
  "UI/UX Design",
  "SEO",
  "Jenkins",
  "TensorFlow",
  "Python",
  "AWS S3",
  "Redis",
  "Express.js",
]

// Education data
const education = [
  {
    degree: "Master of Computer Application in Computer Applications",
    institution: "Centre For Development Of Advanced Computing",
    period: "2017 - 2020",
    location: "Noida, India",
  },
  {
    degree: "Bachelor of Computer Application in Computer Applications",
    institution: "Indira Gandhi National Open University",
    period: "2012 - 2016",
    location: "New Delhi, India",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Andhra Education Society School",
    period: "2012",
    location: "New Delhi, India",
  },
]

// Work Experience data
const experience = [
  {
    role: "Junior Software Developer",
    company: "Opalina Technologies Pvt Ltd",
    period: "May 2022 - April 2024",
    location: "Noida, India (Remote)",
    projects: [
      {
        name: "Narendra Modi Mother Project",
        url: "https://www.narendramodi.in/mother",
        achievements: [
          "Developed and optimized the project using HTML5, CSS3, JavaScript, and React.js reducing page load time by 40%",
          "Built and managed landing pages with Bootstrap and jQuery, leading to a 25% increase in visitor engagement",
          "Implemented Next.js as the CMS for seamless content updates, decreasing update time by 50%",
          "Collaborated with cross-functional teams using Figma and Adobe XD to ensure brand consistency and UI/UX alignment",
          "Conducted regular performance audits with Google Lighthouse and implemented caching strategies using Redis",
          "Integrated Google Analytics (Gtag) to monitor user behavior and support data-driven improvements",
          "Ensured cross-browser compatibility and mobile responsiveness using responsive design best practices",
        ],
      },
      {
        name: "DKSCORE",
        url: "https://www.dkscore.com/",
        achievements: [
          "Developed and enhanced DKSCORE using React.js, Node.js, improving responsiveness and reducing bounce rate by 30%",
          "Executed SEO strategies including structured data and metadata optimization, boosting organic traffic by 30% within six months",
          "Managed a custom-built CMS using Next.js, Express.js and MySQL for 2 years, optimizing editorial workflows",
          "Designed and built a media center with AWS S3, increasing user retention by 20%",
          "Engineered JyotishMedium using Next.js and Vector DB using Pinecone, leading to a 25% increase in content contributions",
          "Introduced Python-based automation scripts with cron jobs to streamline content publishing and system maintenance",
          "Added AI related features for matching Kundalis, better predictions on Dasha and AI auto description features using ChatGPT API integrations",
          "Led UI/UX redesign initiatives using Tailwind CSS and React Hooks, resulting in improved usability and engagement",
          "Worked closely with stakeholders using Jira and Notion to gather requirements and deliver timely feature updates",
        ],
      },
    ],
  },
]

// Academic Projects data
const academicProjects = [
  {
    title: "Flower Recognition System",
    period: "May 2018 - December 2019",
    description:
      "Developed an Android application using TensorFlow Lite and neural network models to recognize and classify various types of flowers using the mobile camera.",
    technologies: ["TensorFlow Lite", "Python", "Keras", "Android Studio", "Java", "OpenCV", "Material Design"],
    achievements: [
      "Integrated Google Camera API and OpenCV for real-time image capture and preprocessing",
      "Trained custom CNN models using Python and Keras, optimized for mobile inference",
      "Deployed the model to Android using Android Studio with Java, achieving high accuracy in flower identification",
      "Implemented a lightweight UI using Material Design principles for better usability and performance on low-end devices",
      "Performed rigorous model testing and dataset augmentation to improve recognition reliability across different lighting conditions",
    ],
  },
  {
    title: "Web-Based Mobile Store Management System",
    period: "August 2014 - March 2015",
    description:
      "Developed a full-stack web application for mobile phone search, comparison, and purchase using MySQL, HTML5, CSS3, and JavaScript.",
    technologies: ["MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "AJAX", "jQuery"],
    achievements: [
      "Implemented product filtering, search functionality, and dynamic comparison features to enhance user experience",
      "Designed a responsive UI with Bootstrap for seamless access across desktop and mobile browsers",
      "Integrated an admin dashboard for inventory management, sales tracking, and product updates",
      "Used AJAX and jQuery to ensure smooth user interactions and dynamic content loading",
      "Ensured database normalization and optimized queries for fast product retrieval and comparisons",
    ],
  },
]

// Certifications data
const certifications = [
  {
    title: "Certification in UI/UX Design",
    institution: "Internshala Trainings",
    date: "April 2021",
  },
  {
    title: "Oracle Workforce Development Program",
    institution: "NIIT",
    date: "August 2014",
  },
]

export default function AboutPage() {
  const skillsRef = useRef(null)
  const timelineRef = useRef(null)
  const projectsRef = useRef(null)

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

    if (projectsRef.current) {
      const projectItems = projectsRef.current.querySelectorAll(".project-item")

      gsap.fromTo(
        projectItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
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
              I am a results-driven Front-End Developer with 2 years of experience in designing, developing, and
              deploying dynamic web applications. My expertise spans React.js, Next.js, and Node.js, where I focus on
              building user-centric interfaces and enhancing performance.
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
                <a href="/resume_ashish_maurya(updated).pdf" download="Ashish_Maurya_Resume.pdf">
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
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">Hindi (Native)</span>
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">English (Fluent)</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Portfolio</h3>
                <a
                  href="https://portfolio-v2-khaki-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  portfolio-v2-khaki-sigma.vercel.app
                </a>
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
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>

                  {job.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="mb-8 last:mb-0">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm"
                          >
                            ({project.url})
                          </a>
                        )}
                      </div>
                      <ul className="space-y-2 list-disc pl-5">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={projectsRef} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Academic <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key projects completed during my academic journey, showcasing technical skills and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Education</span> & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional certifications.
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
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg border border-border"
                  >
                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                    <p className="text-primary mb-2">{cert.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
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
