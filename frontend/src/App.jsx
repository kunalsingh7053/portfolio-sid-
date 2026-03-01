import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import './App.css'
import './index.css'

const heroTitles = ['Photographer', 'Creative Editor', 'Developer']

const skillItems = [
  'Photography',
  'Photoshop',
  'Lightroom',
  'After Effects',
  'Figma',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind',
]

const photoCategories = ['All', 'Nature', 'Portrait', 'Travel', 'Creative']

const photoGrid = [
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80', cat: 'Nature', title: 'Mist Valley' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80', cat: 'Portrait', title: 'Soft Gaze' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80', cat: 'Travel', title: 'Edge of Cliffs' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80', cat: 'Creative', title: 'Neon Alley' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80', cat: 'Portrait', title: 'Studio Calm' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80', cat: 'Nature', title: 'Dawn Pines' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80', cat: 'Travel', title: 'Golden Journey' },
]

const projectCards = [
  {
    title: 'Cinematic Portfolio',
    desc: 'A motion-first gallery with parallax and Lottie integration.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    repo: '#',
    live: '#',
  },
  {
    title: 'Collage Studio',
    desc: 'Creative editor with layers, blend-modes, and keyboard shortcuts.',
    tech: ['Vite', 'Zustand', 'Canvas'],
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    repo: '#',
    live: '#',
  },
  {
    title: 'Story Pages',
    desc: 'Responsive magazine layouts with CMS-ready blocks.',
    tech: ['Next.js', 'MDX', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    repo: '#',
    live: '#',
  },
]

const testimonials = [
  {
    quote: 'Siddharth captures emotion with rare precision and elevates every brief with his creative instincts.',
    name: 'Aarav Mehta',
    role: 'Creative Director, Lumen Studio',
  },
  {
    quote: 'Working with Siddharth is effortless--his edits are crisp, consistent, and always on time.',
    name: 'Maya Patel',
    role: 'Founder, Wanderly',
  },
  {
    quote: 'From portraits to product work, he delivers premium results with a calm, collaborative approach.',
    name: 'Ryan Carter',
    role: 'Producer, Northwind',
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'IN' },
]

const Section = ({ id, children, className }) => (
  <section id={id} className={`scroll-mt-24 ${className || ''}`}>
    {children}
  </section>
)

const Tag = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-200">
    {children}
  </span>
)

const App = () => {
  const [activeCat, setActiveCat] = useState('All')
  const [heroText, setHeroText] = useState(heroTitles[0])
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [cursorRing, setCursorRing] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [lightbox, setLightbox] = useState(null)
  const [editBlend, setEditBlend] = useState(50)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const { scrollYProgress } = useScroll()
  const progressRef = useRef(null)

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${latest})`
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroText(prev => {
        const idx = heroTitles.indexOf(prev)
        return heroTitles[(idx + 1) % heroTitles.length]
      })
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const move = e => {
      setCursor({ x: e.clientX, y: e.clientY })
      setCursorRing({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(idx => (idx + 1) % testimonials.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const filteredPhotos = useMemo(
    () => (activeCat === 'All' ? photoGrid : photoGrid.filter(p => p.cat === activeCat)),
    [activeCat],
  )

  return (
    <div className="gradient-bg relative overflow-hidden">
      <div className="noise" aria-hidden />

      <div className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400" ref={progressRef} />

      <div
        className="cursor-dot"
        style={{ transform: `translate(${cursor.x - 5}px, ${cursor.y - 5}px) scale(${isHovering ? 1.4 : 1})` }}
      />
      <div
        className="cursor-ring"
        style={{ transform: `translate(${cursorRing.x - 16}px, ${cursorRing.y - 16}px) scale(${isHovering ? 1.6 : 1})` }}
      />

      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050915]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-cyan-300 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-6xl mx-auto px-5 pb-16">
        <header className="flex items-center justify-between py-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400/70 to-fuchsia-400/70 flex items-center justify-center shadow-glow">
              <span className="text-lg font-semibold">SB</span>
            </div>
            <div>
              <p className="text-sm text-slate-400">Portfolio of</p>
              <p className="text-base font-semibold text-white">Siddharth Bagora</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            {['About', 'Work', 'Projects', 'Testimonials', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-300 transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:-translate-y-0.5 transition-transform"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Let's Talk
          </a>
        </header>

        <Section id="hero" className="py-10 md:py-16 flex flex-col gap-12">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulsefast" />
                Available for freelance and collaborations
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mt-5 leading-tight font-display">
                Siddharth Bagora
              </h1>
              <div className="text-xl md:text-2xl text-slate-300 mt-2 flex items-center gap-3">
                <motion.span
                  key={heroText}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 font-medium"
                >
                  {heroText}
                </motion.span>
                crafting vivid visuals and interactive stories.
              </div>
              <p className="mt-4 text-slate-400 max-w-2xl">
                I build premium visual experiences across photography, creative editing, and code. My work blends mood-driven color grading, clean layouts, and performant interactions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-sm font-semibold text-slate-950 shadow-glow hover:-translate-y-1 transition-transform"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:-translate-y-1 transition-transform"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-300">
                {[{ label: 'Projects', value: '35+' }, { label: 'Clients', value: '22' }, { label: 'Awards', value: '04' }].map(item => (
                  <div key={item.label} className="glass rounded-xl px-4 py-3">
                    <div className="text-xl font-semibold text-white">{item.value}</div>
                    <div className="text-slate-400 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-emerald-400/25 to-cyan-400/15 blur-3xl rounded-full" />
              <div className="frosted rounded-3xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                  alt="Siddharth portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="about" className="py-12 md:py-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="frosted rounded-2xl p-6 border border-white/10"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">About</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">Crafting emotion-rich visuals.</h2>
              <p className="text-slate-400 mt-3 leading-relaxed">
                I combine storytelling, color science, and technical precision. Whether it is capturing cinematic portraits, designing editorial-grade edits, or shipping performant web experiences, I obsess over detail and mood.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-slate-300">
                <div>
                  <div className="text-white font-semibold">Photography</div>
                  <div className="text-slate-500">Portraits / Travel / Product</div>
                </div>
                <div>
                  <div className="text-white font-semibold">Creative Editing</div>
                  <div className="text-slate-500">Collage / Color / Composites</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="frosted rounded-2xl p-6 border border-white/10"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Skills</p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skillItems.map(skill => (
                  <div key={skill} className="glass rounded-xl px-3 py-2 text-sm text-slate-200 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="work" className="py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Photography</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Frames</h2>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {photoCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                    activeCat === cat ? 'bg-white/10 text-white border-white/20' : 'bg-white/5 text-slate-300 border-white/5'
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filteredPhotos.map(item => (
              <motion.div
                key={item.src}
                className="mb-4 overflow-hidden rounded-2xl relative group cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onClick={() => setLightbox(item)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-slate-200">{item.cat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="editing" className="py-12 md:py-16">
          <div className="frosted rounded-3xl p-6 border border-white/10 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Creative Editing</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Before / After</h2>
                <p className="text-slate-400 mt-2 max-w-xl">Color grading and compositing with precise masks and balanced contrast.</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span>Before</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={editBlend}
                  onChange={e => setEditBlend(Number(e.target.value))}
                  className="accent-cyan-300"
                />
                <span>After</span>
              </div>
            </div>
            <div className="relative mt-6 h-[360px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Before edit"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
                alt="After edit"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${editBlend}%` }}
                loading="lazy"
              />
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 to-fuchsia-300"
                style={{ left: `${editBlend}%` }}
              />
            </div>
          </div>
        </Section>

        <Section id="projects" className="py-12 md:py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Coding</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Interactive Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectCards.map(project => (
              <motion.div
                key={project.title}
                className="frosted rounded-2xl overflow-hidden border border-white/10 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="text-lg font-semibold text-white">{project.title}</div>
                  <p className="text-sm text-slate-400 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.repo}
                      className="flex-1 text-center px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:-translate-y-0.5 transition-transform"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 text-center px-3 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 transition-transform"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="testimonials" className="py-12 md:py-16">
          <div className="frosted rounded-3xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Feedback</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Testimonials</h2>
              </div>
              <div className="flex gap-2">
                <button
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white"
                  onClick={() => setTestimonialIndex(idx => (idx - 1 + testimonials.length) % testimonials.length)}
                >
                  &lt;
                </button>
                <button
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white"
                  onClick={() => setTestimonialIndex(idx => (idx + 1) % testimonials.length)}
                >
                  &gt;
                </button>
              </div>
            </div>
            <div className="relative mt-6 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-slate-200"
                >
                  &quot;{testimonials[testimonialIndex].quote}&quot;
                  <div className="mt-4 text-sm text-slate-400">
                    <span className="text-white font-semibold">{testimonials[testimonialIndex].name}</span> - {testimonials[testimonialIndex].role}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Section>

        <Section id="contact" className="py-12 md:py-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="frosted rounded-2xl p-6 border border-white/10">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Contact</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Let's create together</h2>
              <p className="text-slate-400 mt-3">Share your brief, moodboard, or idea. I respond within 24 hours.</p>
              <div className="mt-5 flex gap-3">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:-translate-y-0.5 transition-transform"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <form className="frosted rounded-2xl p-6 border border-white/10 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-300"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-300"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Project</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your idea"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-300"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold hover:-translate-y-1 transition-transform"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>

        <footer className="py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>(c) {new Date().getFullYear()} Siddharth Bagora. Crafted with care.</div>
          <div className="flex gap-4">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="hover:text-cyan-300 transition-colors" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {s.label}
              </a>
            ))}
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-3 text-center text-white text-sm">{lightbox.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
