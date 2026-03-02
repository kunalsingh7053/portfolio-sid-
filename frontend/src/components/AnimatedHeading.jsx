import { motion } from 'framer-motion'

const AnimatedHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          className="text-xs uppercase tracking-[0.26em] text-neutral-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="font-display text-3xl md:text-4xl leading-tight text-neutral-900"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="max-w-3xl text-neutral-600"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default AnimatedHeading
