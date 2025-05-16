'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="/about-image.jpg"
              alt="About Phamily Pharma"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Healthcare Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Phamily Pharma, we believe in providing more than just medications. We're committed to being your trusted healthcare partner, offering personalized care and expert advice to ensure your well-being.
            </p>
            <div className="space-y-4">
              {[
                'Family-owned and operated since 2003',
                'Certified healthcare professionals',
                'Comprehensive medication management',
                'Personalized patient care',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 