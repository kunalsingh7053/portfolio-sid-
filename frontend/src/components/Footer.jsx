import { motion } from 'framer-motion'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.26em] text-neutral-500">Siddharth Bagora</p>
          <h3 className="font-display text-2xl text-neutral-900">Cinematic photographer crafting luxury visuals.</h3>
          <p className="max-w-xl text-sm text-neutral-600">Available for editorial, portrait, and travel commissions worldwide. Based in India, working globally.</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button href="/contact" variant="primary">Book a session</Button>
          <motion.a
            href="mailto:siddharthbagora@gmail.com"
            className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
            whileHover={{ x: 2 }}
          >
            siddharthbagora@gmail.com
          </motion.a>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-neutral-500 sm:flex-row sm:px-6">
          <p>© 2026 Siddharth Bagora. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/sid.bagora" className="hover:text-neutral-900 transition-colors" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/siddharth-bagora-3aaba0270" className="hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://wa.me/918269629303" className="hover:text-neutral-900 transition-colors" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
