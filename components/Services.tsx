'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

const services = [
  {
    title: 'Prescription Services',
    description: 'Quick and accurate prescription filling with expert pharmacist consultation.',
    icon: '💊',
  },
  {
    title: 'Health Screenings',
    description: 'Regular health screenings and monitoring services for your well-being.',
    icon: '🩺',
  },
  {
    title: 'Vaccinations',
    description: 'Comprehensive vaccination services for all age groups.',
    icon: '💉',
  },
  {
    title: 'Medical Supplies',
    description: 'Wide range of medical supplies and equipment for home healthcare needs.',
    icon: '🏥',
  },
]

export const Services = () => {
  const { scrollYProgress } = useScroll()
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const title = useScrollProgress({
    targetY: [50, 0],
    targetOpacity: [0, 1],
    springConfig: { stiffness: 200, damping: 25, mass: 0.5 }
  })

  const description = useScrollProgress({
    targetY: [30, 0],
    targetOpacity: [0, 1],
    springConfig: { stiffness: 200, damping: 25, mass: 0.5 }
  })

  return (
    <section id="services" className="relative py-24">
      <motion.div 
        className="absolute inset-0 bg-secondary/50"
        style={{ opacity: backgroundOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          ref={title.elementRef}
          style={{
            y: title.y,
            opacity: title.opacity
          }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          ref={description.elementRef}
          style={{
            y: description.y,
            opacity: description.opacity
          }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          We offer a comprehensive range of pharmaceutical services to meet all your healthcare needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const cardProgress = useScrollProgress({
              targetScale: [0.8, 1],
              targetOpacity: [0, 1],
              targetY: [50, 0],
              springConfig: {
                stiffness: 200,
                damping: 25,
                mass: 0.5
              }
            })

            return (
              <motion.div
                key={service.title}
                ref={cardProgress.elementRef}
                style={{
                  scale: cardProgress.scale,
                  opacity: cardProgress.opacity,
                  y: cardProgress.y
                }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 