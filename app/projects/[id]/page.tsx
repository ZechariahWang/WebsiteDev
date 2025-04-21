import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/project-1.jpg',
    longDescription: `This e-commerce platform was built with a focus on scalability and user experience. 
    Features include:
    - Real-time inventory management
    - Secure payment processing with Stripe integration
    - User authentication and authorization
    - Product search and filtering
    - Shopping cart functionality
    - Order tracking and management
    
    The platform handles thousands of daily transactions and provides a seamless shopping experience for users.`,
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-demo.com'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Firebase'],
    image: '/project-2.jpg',
    longDescription: `The Task Management App is designed to help teams stay organized and productive. 
    Key features include:
    - Real-time task updates
    - Team collaboration tools
    - Task assignment and tracking
    - Progress visualization
    - File attachments
    - Deadline management
    
    Built with modern web technologies, it provides a smooth and intuitive user experience.`,
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.com'
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work and professional experience.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/project-3.jpg',
    longDescription: `This portfolio website was designed to showcase my work and skills in an engaging way. 
    Features include:
    - Responsive design for all devices
    - Smooth animations and transitions
    - Project showcase with detailed case studies
    - Contact form integration
    - Blog section
    - SEO optimization
    
    The website demonstrates my ability to create modern, performant web applications.`,
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com'
  }
]

export default function ProjectPage({
  params,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Projects
        </Link>

        <div className="space-y-8">
          <div className="aspect-video bg-accent rounded-lg mb-8"></div>
          
          <h1 className="text-4xl font-bold">{project.title}</h1>
          
          <p className="text-xl text-muted-foreground">{project.description}</p>
          
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>

          <div className="flex gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            {project.longDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 