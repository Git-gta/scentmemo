'use client'

import { motion } from 'framer-motion'
import { Sparkles, Rocket, Star, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen" style={{
      background: `linear-gradient(135deg, #1A5276 0%, #85C1E9 100%)`
    }}>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-24 h-24 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            ScentMemo
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Create and share digital scent-triggered memories and emotional experiences
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Feature 1
              </h3>
              <p className="text-white/80">
                AI-powered scent-to-emotion mapping
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.30000000000000004 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Feature 2
              </h3>
              <p className="text-white/80">
                Collaborative memory storytelling with scent triggers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Feature 3
              </h3>
              <p className="text-white/80">
                Personal scent library with mood tracking
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <button 
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
              style={{ color: brandIdentity.colors.primary }}
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}