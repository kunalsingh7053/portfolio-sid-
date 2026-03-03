import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import HeroImg from '../assets/Hero_no_bg.png'

const About = () => {
  return (
    <div className="flex flex-col gap-20 bg-transparent">

      {/* ================= HERO INTRO ================= */}
      <SectionWrapper className="pt-10">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={HeroImg}
              alt="Siddharth"
              className="w-full max-w-[420px] grayscale contrast-110 drop-shadow-[0_25px_45px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              About Me
            </p>

            <h2 className="text-3xl font-semibold leading-snug text-neutral-900 md:text-4xl">
              Electronics & Communication Engineer
              <br /> and Visual Photographer
            </h2>

            <p className="text-neutral-600 leading-relaxed">
              I combine engineering precision with creative storytelling.
              My background in Electronics & Communication Engineering helps
              me approach photography with structure, technical accuracy,
              and problem-solving thinking while maintaining artistic
              expression.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              From designing electronic systems to crafting visual narratives,
              my work focuses on clarity, minimalism, and meaningful impact.
              I believe both engineering and photography share one principle —
              balancing logic with creativity.
            </p>

            <Button href="/contact" variant="primary">
              Let's Work Together
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ================= IDENTITY SECTION ================= */}
      <SectionWrapper className="space-y-12">
        <AnimatedHeading
          eyebrow="Identity"
          title="Two disciplines. One mindset."
          description="A fusion of analytical engineering and visual creativity shaping how I build and capture experiences."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {/* ENGINEER */}
          <motion.div
            className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              Engineering Perspective
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>• PCB Design & Circuit Development</li>
              <li>• Embedded Systems Fundamentals</li>
              <li>• Signal & Communication Concepts</li>
              <li>• Hardware Troubleshooting</li>
              <li>• Technical Problem Solving</li>
              <li>• System Optimization Thinking</li>
            </ul>
          </motion.div>

          {/* PHOTOGRAPHER */}
          <motion.div
            className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              Photography Practice
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>• Portrait & Lifestyle Photography</li>
              <li>• Natural & Studio Lighting</li>
              <li>• Composition & Visual Storytelling</li>
              <li>• Color Grading & Editing</li>
              <li>• Creative Direction</li>
              <li>• Client Collaboration Workflow</li>
            </ul>
          </motion.div>

        </div>
      </SectionWrapper>

      {/* ================= WORK PHILOSOPHY ================= */}
      <SectionWrapper className="space-y-10 pb-10">
        <AnimatedHeading
          eyebrow="Philosophy"
          title="Design with logic. Create with emotion."
        />

        <motion.div
          className="rounded-[26px] border border-neutral-200 bg-white p-8 shadow-soft text-neutral-600 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My approach is simple — understand deeply before creating.
          Engineering taught me structure and precision, while photography
          taught me observation and emotion. Every project I work on aims
          to balance functionality with aesthetics, ensuring solutions
          that are both practical and visually meaningful.
        </motion.div>
      </SectionWrapper>

    </div>
  )
}

export default About