import { AnimatePresence, motion } from 'framer-motion'

const ImageModal = ({ photo, onClose }) => {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[82vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={e => e.stopPropagation()}
          >
            <img src={photo.src} alt={photo.title} className="h-full w-full object-contain bg-neutral-950" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">{photo.category}</div>
              <div className="text-xl font-semibold leading-tight">{photo.title}</div>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-soft"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageModal
