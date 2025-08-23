import React from 'react'

const Training = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-text-light text-center dark:text-white mb-4">Training</h2>
        <p className="text-lg text-text-light/70 dark:text-white/70 text-center">
            Details about my training program.
        </p>
        <div className="flex justify-center mt-5 flex-col items-center">
        <img src="./Training.png" alt="Training" width={400} height={300} className="glow-on-hover" />
        <h2 className="text-3xl text-text-light/70 dark:text-orange-400 font-bold text-center">
          FULL-STACK WEB DEVELOPMENT WITH GEN AI - DSA
        </h2>
        <p className="text-lg text-text-light/70 dark:text-white/70 text-center">
            A comprehensive training program covering full-stack web development
            concepts with a focus on Generative AI and Data Structures & Algorithms.
        </p>
        </div>
    </div>
  )
} 

export default Training