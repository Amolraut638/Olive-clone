import { Check, X, Leaf, CarrotIcon, BookMarked } from 'lucide-react'
import '../styles/Comparison.css'

const features = [
  { label: 'Detailed Product Breakdown', olive: true,  carrot: true,  b: true  },
  { label: 'Comprehensive Water Data',   olive: true,  carrot: false, b: false },
  { label: 'Seed Oil Free Dining Map',   olive: true,  carrot: false, b: false },
  { label: 'Seed Oil Flagging',          olive: true,  carrot: false, b: true  },
  { label: 'Certified Lab-Testing Data', olive: true,  carrot: false, b: false },
]

function Cell({ value }) {
  return (
    <div className="cmp-cell">
      {value ? (
        <span className="cmp-check">
          <Check size={14} strokeWidth={3} color="#fff" />
        </span>
      ) : (
        <span className="cmp-cross">
          <X size={14} strokeWidth={3} color="#fff" />
        </span>
      )}
    </div>
  )
}

export default function Comparison() {
  return (
    <section className="cmp-section">
      <div className="cmp-inner">

        <h2 className="cmp-title">
          Olive Food Scanner App<br />vs. The Rest
        </h2>

        {/* Download button — dark bg so white Apple logo is visible */}
        <a href="#" className="cmp-download">
          {/* REPLACE: your white apple logo image */}
          <img src="./icons8-apple-90.png" alt="Apple" className="cmp-apple-img" />
          Download for iOS
        </a>

        <div className="cmp-table">

          <div className="cmp-thead">
            <div className="cmp-thead-label" />

            {/* Olive */}
            <div className="cmp-thead-icon">
              <div className="cmp-logo cmp-logo-olive">
                <Leaf size={22} color="#fff" />
              </div>
            </div>

            {/* Carrot app */}
            <div className="cmp-thead-icon">
              <div className="cmp-logo cmp-logo-carrot">
                <CarrotIcon size={22} color="#f97316" />
              </div>
            </div>

            {/* B app */}
            <div className="cmp-thead-icon">
              <div className="cmp-logo cmp-logo-b">
                <BookMarked size={22} color="#888" />
              </div>
            </div>
          </div>

          {features.map((f, i) => (
            <div key={i} className="cmp-row">
              <div className="cmp-row-label">{f.label}</div>
              <Cell value={f.olive} />
              <Cell value={f.carrot} />
              <Cell value={f.b} />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}