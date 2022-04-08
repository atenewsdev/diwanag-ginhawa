import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Backgrounds = ({ bgIndex }) => {
  return (
    <AnimatePresence>
      { bgIndex === 0 && (
        <motion.div
          key="landing_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/landing_bg.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
      
      { bgIndex === 1 && (
        <motion.div
          key="art_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/art_bg.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
      
      { bgIndex === 2 && (
        <motion.div 
          key="artist_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/artist_bg.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
    </AnimatePresence>
  )
}

export default Backgrounds;