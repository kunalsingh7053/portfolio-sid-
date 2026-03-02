import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import SectionWrapper from '../components/SectionWrapper'

const skills = [
  { name: 'Portrait lighting', level: 92 },
  { name: 'Editorial direction', level: 88 },
  { name: 'Color grading', level: 90 },
  { name: 'Retouch & texture', level: 86 },
  { name: 'Location scouting', level: 84 },
]

const equipment = ['Sony A7R IV', 'Zeiss Prime lenses', 'Profoto B10 kit', 'Gitzo traveller tripod', 'Tether tools', 'PolarPro mist filters']

const process = [
  { title: 'Pre-production', copy: 'Story mapping, shot list, light diagrams, location notes.' },
  { title: 'On-set flow', copy: 'Calm direction, pacing, live grading previews, redundancy backups.' },
  { title: 'Delivery', copy: 'Color-managed exports, print-ready files, private gallery links.' },
]

const Skills = () => {
  return (
    <div className="flex flex-col gap-16 bg-transparent">
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Capabilities"
          title="Disciplines and tools refined for premium image-making."
          description="A blend of technical precision and editorial taste—built to deliver luxurious, consistent visuals on every commission."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              className="rounded-[22px] border border-neutral-200 bg-white p-4 shadow-soft"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between text-sm font-semibold text-neutral-900">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-neutral-900"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        <AnimatedHeading
          eyebrow="Equipment"
          title="A curated kit for nimble, detail-rich shoots."
          description="Lightweight, travel-ready gear that prioritises fidelity, speed, and resilience."
        />
        <div className="flex flex-wrap gap-3">
          {equipment.map(item => (
            <motion.span
              key={item}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-800 shadow-soft"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="space-y-8 pb-4">
        <AnimatedHeading
          eyebrow="Process"
          title="A timeline that keeps crews aligned and clients relaxed."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {process.map(step => (
            <motion.div
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-[22px] border border-neutral-200 bg-white p-5 shadow-soft"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-semibold text-neutral-900">{step.title}</p>
              <p className="text-sm text-neutral-600">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Skills
