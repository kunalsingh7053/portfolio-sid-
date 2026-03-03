import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CursorBubble = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorScale = useMotionValue(1)

  const x = useSpring(cursorX, { stiffness: 260, damping: 28, mass: 0.4 })
  const y = useSpring(cursorY, { stiffness: 260, damping: 28, mass: 0.4 })
  const scale = useSpring(cursorScale, { stiffness: 240, damping: 18 })

  useEffect(() => {
    const handleMove = (event) => {
      cursorX.set(event.clientX - 18)
      cursorY.set(event.clientY - 18)
    }

    const handleDown = () => cursorScale.set(0.85)
    const handleUp = () => cursorScale.set(1)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [cursorX, cursorY, cursorScale])

  return <motion.div className="cursor-bubble" style={{ x, y, scale }} />
}

export default CursorBubble
