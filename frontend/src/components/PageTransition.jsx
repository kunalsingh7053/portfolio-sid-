import { motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen pt-24 pb-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
