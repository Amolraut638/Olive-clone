import { useState, useEffect } from 'react'
import '../styles/ProtectFamily.css'

const images = [
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506484381205-f7945653044d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&h=600&fit=crop',
]

export default function ProtectFamily() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length)
        setFading(false)
      }, 400)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pf-section">
      <div className="pf-card">

        {/* Arch Image */}
        <div className="pf-arch-wrap">
          <img
            src={images[activeIndex]}
            alt="healthy family"
            className={`pf-arch-img ${fading ? 'pf-fade-out' : 'pf-fade-in'}`}
          />
          {/* dark overlay at bottom for smooth blend */}
          <div className="pf-arch-overlay" />
        </div>

        {/* Dot Indicators */}
        <div className="pf-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`pf-dot ${i === activeIndex ? 'pf-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="pf-title">
          Protect Your Family<br />From Hidden Toxins
        </h2>

        {/* CTA */}
        <a href="#" className="pf-btn">
          Sign up for Olive today
        </a>

      </div>
    </section>
  )
}