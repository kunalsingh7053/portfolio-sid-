import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-neutral-900 text-white shadow-soft hover:-translate-y-[2px]',
  ghost: 'bg-white/70 text-neutral-900 border border-neutral-200 hover:-translate-y-[2px]',
  subtle: 'bg-white text-neutral-900 border border-neutral-200 hover:-translate-y-[2px]',
}

const Button = ({ children, variant = 'primary', href, className = '', onClick, ...rest }) => {
  const Component = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="inline-block">
      <Component
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 ${variants[variant] || variants.primary} ${className}`}
        {...rest}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button
