import { useState } from 'react'
import AnimatedHeading from '../components/AnimatedHeading'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    if (!form.message.trim()) nextErrors.message = 'Tell me about your project'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <div className="flex flex-col gap-16 bg-transparent">
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Contact"
          title="Let&apos;s create something precise and cinematic."
          description="Share your brief, timeline, and location. You&apos;ll receive a tailored approach deck within 24 hours (no automated replies)."
        />
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-soft">
            {['name', 'email'].map(field => (
              <div key={field} className="space-y-2">
                <label className="text-sm font-semibold capitalize text-neutral-900" htmlFor={field}>
                  {field}
                </label>
                <input
                  id={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors[field] ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:border-neutral-900'
                  }`}
                  placeholder={field === 'email' ? 'you@email.com' : 'Full name'}
                />
                {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-900" htmlFor="message">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                  errors.message ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:border-neutral-900'
                }`}
                placeholder="Share scope, locations, and timelines."
              />
              {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
            </div>
            <Button variant="primary" className="w-full justify-center" type="submit">
              Send the inquiry
            </Button>
            {submitted && <p className="text-sm text-green-600">Thanks—your note is received. I&apos;ll reply within 24 hours.</p>}
          </form>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-neutral-900">Direct line</p>
              <p className="mt-2 text-sm text-neutral-600">Email</p>
              <a href="mailto:hello@siddharth.studio" className="text-lg font-semibold text-neutral-900">
                hello@siddharth.studio
              </a>
              <p className="mt-4 text-sm text-neutral-600">Phone</p>
              <a href="tel:+919999000000" className="text-lg font-semibold text-neutral-900">
                +91 9999 000 000
              </a>
            </div>
            <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-neutral-900">Socials</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-800 hover:-translate-y-[2px] hover:shadow-soft transition-transform"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Contact
