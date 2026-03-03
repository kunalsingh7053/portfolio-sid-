import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'
import HeroImg from '../assets/Hero_no_bg.png'

/* ---------------- DATA ---------------- */

const featuredShots = [
  {
    title: 'Nocturne Portraits',
    category: 'Portrait',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Desert Geometry',
    category: 'Editorial',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Paris at Dawn',
    category: 'Travel',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Studio Silence',
    category: 'Minimal',
    src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Monochrome Lines',
    category: 'Architecture',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Sahara Bloom',
    category: 'Fashion',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  },
]

const clients = ['Vogue', 'Kinfolk', 'Lumen', 'Artifact', 'Nowness', 'Frame']

/* ---------------- COMPONENT ---------------- */

const Home = () => {
  const [hovered, setHovered] = useState(null)
  const isTopActive = hovered === 'top'
  const isBottomActive = hovered === 'bottom'

  const portraitVariants = {
    rest: {
      x: 0,
      transition: { type: 'spring', stiffness: 140, damping: 16 },
    },
    hover: {
      x: [-16, 16, -12, 12, 0],
      transition: { duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
    },
  }

  return (
    <div className="flex flex-col gap-5 bg-transparent">
      {/* ================= HERO ================= */}
      <SectionWrapper className="py-6">

        <section className="relative flex min-h-[80vh] flex-col items-center justify-start gap-3 overflow-hidden px-3 pt-4 text-center sm:px-0 sm:pt-6 md:min-h-screen md:pt-10">
          <p className="relative z-30 text-xs uppercase text-neutral-500 sm:text-sm">
             My name is Siddharth and I am a freelance photographer
          </p>
          {/* ================= BACKGROUND TYPOGRAPHY ================= */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center leading-none -translate-y-6 sm:-translate-y-10 md:-translate-y-14">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[15vw] font-black uppercase tracking-[-0.02em] sm:text-[12vw] md:text-[10vw] mt-0"
              onMouseEnter={() => setHovered('top')}
              onMouseLeave={() => setHovered(null)}
              style={{
                color: isTopActive ? '#0f0f0f' : 'rgba(0,0,0,0.15)',
                transition: 'color 240ms ease',
              }}
            >
                 EC Engineer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="flex gap-3 text-[11vw] font-black uppercase tracking-[-0.025em] sm:text-[10.5vw] md:text-[9vw]"
              onMouseEnter={() => setHovered('bottom')}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="text-black/15">&</span>

              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: isBottomActive ? '0px transparent' : '2px rgba(0,0,0,0.18)',
                  color: isBottomActive ? '#0f0f0f' : 'transparent',
                  transition: 'color 240ms ease, -webkit-text-stroke 240ms ease',
                }}
              >
                 Photographer
              </span>
            </motion.div>
          </div>

          {/* ================= PORTRAIT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-20 mt-14 flex justify-center translate-x-2 sm:translate-x-6 md:translate-x-4 sm:mt-12 md:mt-10"
          >
            <motion.img
              src={HeroImg}
              alt="portrait"
                className="w-full max-w-[320px] grayscale contrast-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)] sm:max-w-[440px] md:max-w-[620px]"
              variants={portraitVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
            />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-30 mt-8 flex flex-col items-center gap-6">

            <p className="max-w-2xl px-2 text-neutral-700 sm:px-0">
              based in India.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-center gap-3 rounded-full bg-white/15 px-4 py-3 backdrop-blur-lg shadow-soft sm:gap-4">
                <Button href="/design" className="bg-black text-white">
                  You need a designer
                </Button>

                <Button
                  href="/photos"
                  className="border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  You need a photographer
                </Button>
              </div>
            </div>

          </div>

        </section>

      </SectionWrapper>

      {/* ================= FEATURED ================= */}
      <SectionWrapper id="featured" className="space-y-10">
        <AnimatedHeading
          eyebrow="Selected work"
          title="A curated reel of intimate moments and refined spaces."
          description="Each collection is approached with cinematic restraint."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredShots.map((shot, idx) => (
            <motion.div
              key={shot.title}
              className={`group overflow-hidden rounded-[28px] border bg-white shadow-soft ${
                idx % 3 === 0 ? 'md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full">
                <motion.img
                  src={shot.src}
                  alt={shot.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <p className="text-xs uppercase text-white/70">{shot.category}</p>
                  <p className="text-xl font-semibold">{shot.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

    </div>
  )
}

export default Home