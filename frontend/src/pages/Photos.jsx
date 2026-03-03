import { useState } from 'react'
import AnimatedHeading from '../components/AnimatedHeading'
import GalleryCard from '../components/GalleryCard'
import ImageModal from '../components/ImageModal'
import SectionWrapper from '../components/SectionWrapper'

const photos = [
  {
    title: 'Velvet Light',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Harbor Mist',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Stone Quiet',
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Soft Muse',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Morning Haze',
    src: 'https://i.pinimg.com/1200x/1e/56/1b/1e561bdb5c7bce458e8dc70843c0afab.jpg',
  },
  {
    title: 'Palm Study',
    src: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Crescent Dunes',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Glass Hour',
    src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Silent Bloom',
    src: 'https://i.pinimg.com/1200x/eb/31/77/eb317731ea42a80ede7e4cb4592e34f2.jpg',
  },
]

const Photos = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-transparent">
      <SectionWrapper className="space-y-10">
        <AnimatedHeading
          eyebrow="Photos"
          title="Masonry gallery of recent commissions."
          description="Hover to reveal details, click to open the cinematic lightbox."
        />

        {/* Masonry Gallery */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map(photo => (
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