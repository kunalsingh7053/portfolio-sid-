import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import SectionWrapper from '../components/SectionWrapper'

/* ---------------- PHOTOGRAPHY ---------------- */

const photographySkills = [
  'Portrait & Natural Light Photography',
  'Editorial Storytelling & Visual Direction',
  'Advanced Color Grading (Lightroom / Capture One)',
  'Professional Retouching & Skin Texture Control',
  'Studio Lighting & On-Location Lighting Design',
  'Creative Composition & Framing',
  'Client Direction & Shoot Management',
]

/* ---------------- ENGINEERING (ECE) ---------------- */

const engineeringSkills = [
  'PCB Design & Circuit Layout (Analog + Digital)',
  'Electronics Prototyping & Testing',
  'Embedded Systems Fundamentals',
  'Microcontrollers & Hardware Interfacing',
  'Signal Processing Basics',
  'Electronic Circuit Analysis & Troubleshooting',
  'Technical Documentation & System Design',
]

/* ---------------- WORK PROCESS ---------------- */

const process = [
  {
    title: 'Concept & Planning',
    copy:
      'Understanding requirements, defining objectives, and designing structured workflows for both visual and technical projects.',
  },
  {
    title: 'Execution',
    copy:
      'Precision-driven implementation — whether directing a photoshoot or building electronic systems with accuracy and reliability.',
  },
  {
    title: 'Refinement & Delivery',
    copy:
      'Careful optimization, testing, and polished final delivery aligned with professional standards.',
  },
]

const Skills = () => {
  return (
    <div className="flex flex-col gap-16 bg-transparent">

      {/* ---------- PHOTOGRAPHY SKILLS ---------- */}
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Photography"
          title="Visual craft shaped through storytelling and technical precision."
          description="A balanced approach combining artistic intuition with disciplined production workflows."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {photographySkills.map(skill => (
            <motion.div
              key={skill}
              className="rounded-[22px] border border-neutral-200 bg-white p-5 shadow-soft"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-medium text-neutral-900">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ---------- ENGINEERING SKILLS ---------- */}
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Engineering"
          title="Electronics & Communication engineering capabilities."
          description="Focused on hardware design, problem solving, and practical implementation of electronic systems."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {engineeringSkills.map(skill => (
            <motion.div
              key={skill}
              className="rounded-[22px] border border-neutral-200 bg-white p-5 shadow-soft"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-medium text-neutral-900">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ---------- PROCESS ---------- */}
      <SectionWrapper className="space-y-8 pb-4">
        <AnimatedHeading
          eyebrow="Workflow"
          title="A structured approach across creative and technical disciplines."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {process.map(step => (
            <motion.div
              key={step.title}
              className="flex flex-col gap-3 rounded-[22px] border border-neutral-200 bg-white p-5 shadow-soft"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-semibold text-neutral-900">
                {step.title}
              </p>
              <p className="text-sm text-neutral-600">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

    </div>
  )
}

export default Skills