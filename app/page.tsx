import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 'project-1',
    title: 'Eclipse Robotics',
    description: 'A full set of essentials tools required for the VEX Robotics Competition.',
    technologies: ['Path Planning', 'React', 'MongoDB'],
    image: '/Eclipse.jpg'
  },
  {
    id: 'project-2',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest high school robotics competition.',
    technologies: ['React', 'Next.js', 'Tailwind'],
    image: '/Mech3.png'
  },
  {
    id: 'project-3',
    title: 'AI Interview Trainer',
    description: 'Personal AI interview voice agent for technical and mixed interviews.',
    technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
    image: '/InterviewTrainer.png'
  },
  {
    id: 'project-4',
    title: 'AI Mental Health Chatbot',
    description: 'AI chatbot for mental health support.',
    technologies: ['PyTorch', 'NLTK/NLP', 'Customtkinter'],
    image: '/MentalSupport.png'
  },
  {
    id: 'project-5',
    title: 'AI Autonomous Vehicle Simulator',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/WATonomous.png'
  },
  {
    id: 'project-6',
    title: 'The Nothing Robot',
    description: 'The robot that does nothing.',
    technologies: ['RobotC', 'Path Planning', 'Localization'],
    image: '/AE.jpg'
  },

]

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Conavi Medical',
    period: 'Jan 2025 - April 2025',
    description: '',
    skills: ['.NET', 'WPF', 'Moq', 'Nunit'],
    location: 'Toronto, ON'
  },
  {
    title: 'Software Engineer',
    company: 'Google Girl Powered',
    period: 'May 2023 - July 2024',
    description: '',
    skills: ['C++', 'Python', 'Localization', 'Path Planning'],
    location: 'Calgary, AB'
  },
  {
    title: 'Fullstack Engineer',
    company: 'Western Mechatronics',
    period: 'Nov 2023 - Feb 2024',
    description: '',
    skills: ['React.js', 'Express', 'Node.js', 'Tailwind'],
    location: 'Calgary, AB'
  },
  {
    title: 'Software Engineering Lead',
    company: 'Eclipse Robotics',
    period: 'Sept 2021 - August 2024',
    description: '',
    skills: ['C++', 'Python', 'React.js', 'Express', 'Node.js', 'Tailwind'],
    location: 'Calgary, AB'
  }
]

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/BackgroundImage.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ff34a1] to-[#00ffc3] bg-clip-text text-transparent">
            Hi, I'm Zech
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Mechatronics Engineering at the University of Waterloo
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="https://drive.google.com/file/d/1hj3Z9T4tiqzI__B34tZThgoUIprel7pM/view?usp=sharing" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="mailto:zechariah.wang@uwaterloo.ca" 
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-6 mt-8 justify-center">
            <a 
              href="https://github.com/ZechariahWang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/zechariah-wang-826578234/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
                />
              </svg>
            </a>
            <a 
              href="mailto:zechariah.wang@uwaterloo.ca" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hi, I'm Zech! I'm currently a 1B Mechatronics Engineering student at the University of Waterloo.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about software development, and am experienced in a wide variety of fields including robotics, medtech, AI, and fullstack engineering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, Tailwind</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB, Firebase</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold mb-2">Robotics</h3>
                <p className="text-sm text-muted-foreground">ROS2, Docker, Foxglove, PROS</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold mb-2">Medtech</h3>
                <p className="text-sm text-muted-foreground">.NET, WPF, Moq, Nunit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{experience.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{experience.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <p className="text-muted-foreground">{experience.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 text-sm bg-accent rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-48 w-full group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full hover:bg-primary/20 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
