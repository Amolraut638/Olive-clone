import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Share2, Leaf, ChevronDown } from 'lucide-react'
import '../styles/Hero.css'

const products = [
  {
    id: 1,
    name: "Late July Snacks Thin and Crispy Organic Tortilla",
    brand: "Late July",
    score: 78,
    grade: "Good",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/292/300/300",
    insight: "These chips are made with organic corn and simple ingredients. A decent snack option, though the sodium content is worth watching if consumed frequently.",
    breakdown: [
      { label: "Seed Oils", value: "None", good: true },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "Low", good: true },
      { label: "Sodium", value: "Moderate", good: false },
    ],
  },
  {
    id: 2,
    name: "Strawberry Vanilla Sparkling Tonic",
    brand: "Olipop",
    score: 100,
    grade: "Excellent",
    gradeColor: "#27ae60",
    image: "https://picsum.photos/id/433/300/300",
    insight: "This drink's high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives.",
    breakdown: [
      { label: "Seed Oils", value: "None", good: true },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "None", good: true },
      { label: "Preservatives", value: "None", good: true },
    ],
  },
  {
    id: 3,
    name: "Fig and Olive Crackers",
    brand: "Lesley Stowe",
    score: 46,
    grade: "Avoid",
    gradeColor: "#e74c3c",
    image: "https://picsum.photos/id/1080/300/300",
    insight: "This product's low score mainly comes from processed sugars like honey and brown sugar, which can impact health when consumed frequently.",
    breakdown: [
      { label: "Seed Oils", value: "Present", good: false },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "High", good: false },
      { label: "Preservatives", value: "Present", good: false },
    ],
  },
  {
    id: 4,
    name: "Organic Greek Yogurt",
    brand: "Stonyfield Farm",
    score: 88,
    grade: "Great",
    gradeColor: "#27ae60",
    image: "https://picsum.photos/id/1060/300/300",
    insight: "High in protein and probiotics with no artificial additives. Great for a balanced diet.",
    breakdown: [
      { label: "Seed Oils", value: "None", good: true },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "None", good: true },
      { label: "Sodium", value: "Low", good: true },
    ],
  },
  {
    id: 5,
    name: "Almond Butter, Creamy",
    brand: "Justin's",
    score: 81,
    grade: "Great",
    gradeColor: "#27ae60",
    image: "https://picsum.photos/id/292/300/300?random=1",
    insight: "Made with simple ingredients. High in healthy fats and protein.",
    breakdown: [
      { label: "Seed Oils", value: "None", good: true },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "Low", good: true },
      { label: "Sodium", value: "Low", good: true },
    ],
  },
  {
    id: 6,
    name: "Sea Salt & Vinegar Potato Crisps",
    brand: "Kettle Brand",
    score: 62,
    grade: "Okay",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/1081/300/300",
    insight: "Simple ingredients but high sodium and seed oils.",
    breakdown: [
      { label: "Seed Oils", value: "Present", good: false },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "None", good: true },
      { label: "Sodium", value: "High", good: false },
    ],
  },
  {
    id: 7,
    name: "Classic Hummus",
    brand: "Sabra",
    score: 72,
    grade: "Good",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/292/300/300?random=2",
    insight: "A decent dip but contains added oils and sodium.",
    breakdown: [
      { label: "Seed Oils", value: "Present", good: false },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "None", good: true },
      { label: "Sodium", value: "Moderate", good: false },
    ],
  },
  {
    id: 8,
    name: "Oats & Honey Granola Bars",
    brand: "Nature Valley",
    score: 58,
    grade: "Okay",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/102/300/300",
    insight: "Convenient snack but contains added sugars.",
    breakdown: [
      { label: "Seed Oils", value: "Present", good: false },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "High", good: false },
      { label: "Preservatives", value: "Present", good: false },
    ],
  },
  {
    id: 9,
    name: "Organic Apple Juice",
    brand: "Tree Top",
    score: 75,
    grade: "Good",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/1084/300/300",
    insight: "No artificial additives but naturally high sugar.",
    breakdown: [
      { label: "Seed Oils", value: "None", good: true },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "None", good: true },
      { label: "Sugar Content", value: "High", good: false },
    ],
  },
  {
    id: 10,
    name: "Whole Wheat Bread",
    brand: "Arnold",
    score: 70,
    grade: "Good",
    gradeColor: "#e8a020",
    image: "https://picsum.photos/id/431/300/300",
    insight: "Contains fiber but also preservatives.",
    breakdown: [
      { label: "Seed Oils", value: "Present", good: false },
      { label: "Artificial Colors", value: "None", good: true },
      { label: "Added Sugar", value: "Low", good: true },
      { label: "Preservatives", value: "Present", good: false },
    ],
  },
];

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=5",
  "https://i.pravatar.cc/40?img=9",
]

const ITEM_WIDTH = 112

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const trackOffset = () => {
    if (!trackRef.current || !trackRef.current.parentElement) return 0
    const containerWidth = trackRef.current.parentElement.offsetWidth
    return containerWidth / 2 - activeIndex * ITEM_WIDTH - 50
  }

  const active = products[activeIndex]

  return (
    <section className="hero">

      {/* Trust Badge */}
      <div className="trust-badge">
        <div className="avatar-stack">
          {avatars.map((src, i) => (
            <img key={i} src={src} alt="user" className="avatar" />
          ))}
          <div className="avatar avatar-count">8k+</div>
        </div>
        <span className="trust-text">Trusted by thousands of healthy families</span>
      </div>

      {/* Title */}
      <h1 className="hero-title">
        The Safest Way to Shop for Groceries
      </h1>

      {/* Subtitle */}
      <p className="hero-sub">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
        from Your Family's Diet and Get Expert-Backed Food Insights
      </p>

      {/* CTA */}
      <a href="#" className="btn-download">
        <img
          src="icons8-apple-90.png"
          alt="Apple"
          className="apple-img"
        />
        <span>Download for iOS</span>
      </a>

      {/* Phone Scene */}
      <div className="phone-scene">

        {/* Phone */}
        <div className="phone-frame">
          <div className="phone-notch" />

          {/* ✅ SLIDER NOW INSIDE PHONE FRAME */}
          <div className="slider-mask">
            <div
              ref={trackRef}
              className="slider-track"
              style={{
                transform: `translateX(${trackOffset()}px)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className={`slider-item ${i === activeIndex ? 'slider-item--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <img src={p.image} alt={p.name} />
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="phone-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="pc-header">
                <img src={active.image} alt={active.name} className="pc-thumb" />
                <div className="pc-texts">
                  <p className="pc-name">{active.name}</p>
                  <p className="pc-brand">{active.brand}</p>
                  <div className="pc-score-row">
                    <span className="pc-dot" style={{ background: active.gradeColor }} />
                    <span className="pc-score">{active.score}/100</span>
                    <span className="pc-grade">{active.grade}</span>
                    <Heart size={12} className="pc-icon" />
                    <Share2 size={12} className="pc-icon" />
                  </div>
                </div>
              </div>

              <div className="pc-divider" />

              {/* Oliver Says */}
              <div className="pc-oliver">
                <div className="pc-oliver-top">
                  <Leaf size={13} color="#4a7c2f" />
                  <span className="pc-oliver-label">Oliver Says:</span>
                </div>
                <p className="pc-oliver-text">"{active.insight}"</p>
              </div>

              <div className="pc-divider" />

              {/* Breakdown */}
              <div className="pc-breakdown">
                <p className="pc-breakdown-title">Breakdown</p>
                {active.breakdown.map((item, i) => (
                  <div key={i} className="pc-breakdown-row">
                    <span className="pc-breakdown-label">{item.label}</span>
                    <div className="pc-breakdown-right">
                      <span className="pc-breakdown-val">{item.value}</span>
                      <span
                        className="pc-breakdown-dot"
                        style={{ background: item.good ? '#27ae60' : '#e74c3c' }}
                      />
                      <ChevronDown size={11} color="#bbb" />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}