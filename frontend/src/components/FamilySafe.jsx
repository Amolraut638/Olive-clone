import { CheckCircle2 } from 'lucide-react'
import '../styles/FamilySafe.css'

const features = [
  'Effortless food scanning',
  'Peace of mind for parents',
  'Healthy product recommendations',
]

export default function FamilySafe() {
  return (
    <section className="fs-section">
      <div className="fs-card">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400&h=700&fit=crop"
          alt="family dining"
          className="fs-bg-img"
        />

        {/* Dark overlay */}
        <div className="fs-overlay" />

        {/* Decorative circles */}
        <div className="fs-circle fs-circle--tl" />
        <div className="fs-circle fs-circle--br" />

        {/* Content */}
        <div className="fs-content">
          <h2 className="fs-title">
            Keep your family<br />safe with Olive
          </h2>

          <ul className="fs-features">
            {features.map((f, i) => (
              <li key={i}>
                <CheckCircle2 size={22} className="fs-check" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a href="#" className="fs-btn">
            <img
              src="./icons8-apple-90.png"
              alt="apple"
              width={16}
              height={16}
              className="fs-apple-icon"
            />
            Download for iOS
          </a>
        </div>

      </div>
    </section>
  )
}