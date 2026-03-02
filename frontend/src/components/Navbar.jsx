import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from './Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Photos', to: '/photos' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-soft backdrop-blur-md' : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3 text-neutral-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white shadow-soft">SB</div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Portfolio</p>
            <p className="text-sm font-semibold">Siddharth Bagora</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive ? 'text-neutral-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-neutral-900' : 'hover:text-neutral-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="primary">
            Book a shoot
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 md:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white/95 shadow-soft md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-5 text-sm font-medium text-neutral-700">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 ${isActive ? 'text-neutral-900' : 'hover:text-neutral-900'}`
                }
              >
                {link.label}
                <span className="text-xs uppercase tracking-[0.24em] text-neutral-400">Go</span>
              </NavLink>
            ))}
            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center" variant="primary">
                Book a shoot
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
