import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'

const timeline = [
  { year: '2026', title: 'Art residency, Kyoto', copy: 'Developed a minimalist portrait series focused on quiet rituals and light studies.' },
  { year: '2024', title: 'Opened studio', copy: 'Built a boutique studio for editorial and product assignments with custom lighting rigs.' },
  { year: '2022', title: 'Lead photographer, Atelier', copy: 'Led cross-country campaigns blending architecture, design, and portraiture.' },
]

const About = () => {
  return (
    <div className="flex flex-col gap-16 bg-transparent">
      <SectionWrapper className="space-y-12">
        <AnimatedHeading
          eyebrow="About"
          title="Siddharth Bagora crafts photographs that feel like held breaths."
          description="Working across portraits, travel, and editorial spaces, Siddharth pairs disciplined lighting with poetic restraint. Each assignment is treated as a bespoke collaboration—thoughtful pre-production, calm sets, and exacting delivery."
        />

        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <motion.div
            className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-soft"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80"
              alt="Siddharth Bagora"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="text-lg leading-relaxed text-neutral-700">
              Raised on cinema and long train journeys, Siddharth documents the spaces between moments. His method blends analog-inspired grading with modern retouch, ensuring each frame feels tactile and lived-in. Calm direction, precise light, and an editorial eye keep subjects relaxed and environments elevated.
            </p>
            <div className="rounded-[22px] border border-neutral-200 bg-white/80 p-5 shadow-soft">
              <p className="text-sm font-semibold text-neutral-900">Philosophy</p>
              <p className="mt-2 text-sm text-neutral-600">
                Minimalism with warmth. Every image is built for longevity—designed to live beautifully in print, galleries, and digital spaces without trend fatigue.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-neutral-900">Select clients</p>
              <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">Vogue India</span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">Artifact Hotels</span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">Nowness</span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">Kinfolk</span>
              </div>
            </div>
            <div className="pt-3">
              <Button href="/contact" variant="primary">
                Schedule a conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        <AnimatedHeading
          eyebrow="Trajectory"
          title="A timeline of craft, residencies, and collaborations."
          description="A selective view of milestones that shaped the current visual language."
        />
        <div className="grid gap-4">
          {timeline.map(item => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-3 rounded-[22px] border border-neutral-200 bg-white/85 p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">{item.year}</p>
                <p className="text-lg font-semibold text-neutral-900">{item.title}</p>
              </div>
              <p className="max-w-2xl text-sm text-neutral-600">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default About
