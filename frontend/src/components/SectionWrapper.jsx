const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-6 xl:px-0">{children}</div>
    </section>
  )
}

export default SectionWrapper
