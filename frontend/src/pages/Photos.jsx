import { useMemo, useState } from 'react'
import AnimatedHeading from '../components/AnimatedHeading'
import GalleryCard from '../components/GalleryCard'
import ImageModal from '../components/ImageModal'
import SectionWrapper from '../components/SectionWrapper'

const categories = ['All', 'Portrait', 'Editorial', 'Travel', 'Lifestyle']

const photos = [
  {
    title: 'Velvet Light',
    category: 'Portrait',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Harbor Mist',
    category: 'Travel',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Stone Quiet',
    category: 'Editorial',
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Soft Muse',
    category: 'Portrait',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Midnight Arches',
    category: 'Lifestyle',
    src: 'https://images.unsplash.com/photo-1492447273231-0f8fecec1e4b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Palm Study',
    category: 'Editorial',
    src: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Crescent Dunes',
    category: 'Travel',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Glass Hour',
    category: 'Lifestyle',
    src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Quiet Bloom',
    category: 'Portrait',
    src: 'https://images.unsplash.com/photo-1494797706938-03f5c627c6b8?auto=format&fit=crop&w=1400&q=80',
  },
]

const Photos = () => {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (active === 'All') return photos
    return photos.filter(photo => photo.category === active)
  }, [active])

  return (
    <div className="bg-transparent">
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Photos"
          title="Masonry gallery of recent commissions."
          description="Hover to reveal details, click to open the cinematic lightbox. Filters keep browsing focused."
        />
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                active === cat ? 'bg-neutral-900 text-white shadow-soft' : 'bg-white text-neutral-700 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map(photo => (
            <div key={photo.title} className="mb-4 break-inside-avoid">
              <GalleryCard item={photo} onClick={setSelected} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ImageModal photo={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default Photos