import { motion } from 'framer-motion'

const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-soft"
      onClick={() => onClick?.(item)}
    >
      <motion.img
        src={item.src}
        alt={item.title}
        className="h-full w-full object-cover"
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">{item.category}</p>
          <p className="text-lg font-semibold leading-tight">{item.title}</p>
        </div>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">View</span>
      </div>
    </motion.div>
  )
}

export default GalleryCard
