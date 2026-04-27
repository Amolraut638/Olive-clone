import { ArrowRight, Star } from 'lucide-react'
import '../styles/Testimonials.css'

const reviews = [
  {
    id: 1,
    text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    name: "Megan L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    id: 2,
    text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    name: "Tina B.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    id: 3,
    text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
    name: "Lila M.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
]

function StarRow({ count }) {
  return (
    <div className="star-row">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={16} fill="#f5a623" color="#f5a623" />
      ))}
    </div>
  )
}

function ReviewCard({ review, className }) {
  return (
    <div className={`t-card ${className || ''}`}>
      <p className="t-card-text">{review.text}</p>
      <div className="t-card-footer">
        <img src={review.avatar} alt={review.name} className="t-footer-avatar" />
        <div>
          <p className="t-card-name">{review.name}</p>
          <StarRow count={review.stars} />
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="t-section">

      <div className="t-blob t-blob-left" />
      <div className="t-blob t-blob-bottom" />

      <div className="t-inner">

        {/* RIGHT — title first on mobile via order:-1 */}
        <div className="t-right">
          <h2 className="t-title">
            Real Mothers<br />Real Results
          </h2>
          <p className="t-subtitle">
            Join thousands of satisfied parents who trust Olive to help
            them make healthier choices for their families.
          </p>
          <a href="#" className="t-read-all">
            read all 3,147+ reviews
            <ArrowRight size={16} />
          </a>

          {/* Mid review — desktop only */}
          <ReviewCard review={reviews[1]} className="t-card-mid t-desktop-only" />
        </div>

        {/* LEFT — photo + floating cards */}
        <div className="t-left">

          {/* Top floating card — desktop only */}
          <div className="t-card t-card-top">
            <p className="t-card-text">{reviews[0].text}</p>
            <p className="t-card-name">{reviews[0].name}</p>
            <StarRow count={reviews[0].stars} />
            <img
              src={reviews[0].avatar}
              alt={reviews[0].name}
              className="t-card-avatar t-avatar-tr"
            />
          </div>

          {/* Main photo */}
          <div className="t-photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=600&h=600&fit=crop&crop=face"
              alt="mother with children"
              className="t-main-photo"
            />
          </div>

          {/* Bottom floating card — desktop only */}
          <div className="t-card t-card-bottom">
            <p className="t-card-text">{reviews[2].text}</p>
            <p className="t-card-name">{reviews[2].name}</p>
            <StarRow count={reviews[2].stars} />
            <img
              src={reviews[2].avatar}
              alt={reviews[2].name}
              className="t-card-avatar t-avatar-br"
            />
          </div>

        </div>

      </div>

      {/* Mobile reviews — shown only on mobile below everything */}
      <div className="t-mobile-reviews">
        {reviews.map(r => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

    </section>
  )
}