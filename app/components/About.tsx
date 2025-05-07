'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Hi, I'm Zech! I'm currently a 1B Mechatronics Engineering student at the University of Waterloo.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about software development, and am experienced in a wide variety of fields including robotics, medtech, AI, and fullstack engineering.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 