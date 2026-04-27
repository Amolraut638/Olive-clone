import { CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import '../styles/HealthBenefits.css'

const cards = [
    {
        id: 1,
        title: 'Achieve Nutritional Clarity',
        bullets: [
            'Olive breaks down every ingredient into clear, actionable information.',
            'Olive scores products out of 100 based on additives, seed oils, processing level, and more.',
            'Helps families make smarter, healthier grocery decisions every day.',
        ],
        visual: 'clarity',
        images: [
            'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
        ],
        productName: 'Straus Ice Cream',
        productScore: 95,
        productGrade: 'Excellent',
        productImage: './straus-ice-cream-description.webp',
    },
    {
        id: 2,
        title: 'Proactive Ingredient Filtering',
        bullets: [
            'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
            'Keeps you ahead of potential food safety concerns.',
            'Gives busy parents the confidence to make safer food choices every time.',
        ],
        visual: 'filtering',
    },
    {
        id: 3,
        title: 'Real Health Outcomes for Your Family',
        bullets: [
            "Empowers parents to feel more in control of their family's health.",
            'Delivers personalized suggestions for healthier food choices.',
            'Promotes long-term well-being through informed, balanced decisions.',
        ],
        visual: 'outcomes',
    },
]

const row1Tags = ['Low PFAS', 'Organic Ingredients', 'Gluten-Free', 'No MSG', 'High Fibre', 'Cholesterol-Free']
const row2Tags = ['Non-GMO', 'Rich in Antioxidants', '100% Whole Grain', 'Gluten-Free']
const row3Tags = ['Monosodium Glutamate', 'Artificial Colors', 'Sodium Nitrite', 'Carrageenan']
const row4Tags = ['TBHQ', 'Palm Oil', 'Saccharin', 'Sodium Benzoate', 'Aspartame']
const row5Tags = ['Potassium Bromate', 'Xanthan Gum', 'Aspartame']

// Score counter hook
function useCountUp(target, inView) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 1200
        const step = 16
        const increment = target / (duration / step)

        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, step)

        return () => clearInterval(timer)
    }, [inView, target])

    return count
}

export default function HealthBenefits() {
    // Card 1 — score count up
    const card1Ref = useRef(null)
    const [card1Visible, setCard1Visible] = useState(false)
    const score = useCountUp(cards[0].productScore, card1Visible)

    // Card 3 — fade in
    const card3Ref = useRef(null)
    const [card3Visible, setCard3Visible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === card1Ref.current) {
                            setCard1Visible(true)
                            observer.unobserve(entry.target) 
                        }
                        if (entry.target === card3Ref.current) {
                            setCard3Visible(true)
                            observer.unobserve(entry.target) 
                        }
                    }
                })
            },
            {
                threshold: 0.4,
                rootMargin: '0px 0px -100px 0px'
            }
        )

        if (card1Ref.current) observer.observe(card1Ref.current)
        if (card3Ref.current) observer.observe(card3Ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section className="hb-section">

            {/* ── Dark Green Banner ── */}
            <div className="hb-banner">
                <h2 className="hb-banner-title">Health Benefits of Using Olive</h2>
                <div className="hb-banner-right">
                    <p className="hb-banner-desc">
                        Olive proactively flags harmful ingredients and offers personalized
                        recommendations, empowering you to make better choices for your family's health.
                    </p>
                    <a href="#" className="hb-banner-btn">
                        <img src="./icons8-apple-90.png" alt="apple" width={16} height={16} />
                        Download for iOS
                    </a>
                </div>
            </div>

            {/* ── Cards ── */}
            <div className="hb-cards">

                {/* Card 1 — Nutritional Clarity */}
                <div className="hb-card" ref={card1Ref}>
                    <div className="hb-card-left">
                        <h3 className="hb-card-title">{cards[0].title}</h3>
                        <ul className="hb-bullets">
                            {cards[0].bullets.map((b, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={18} className="hb-check" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hb-card-right">
                        <div className="hb-clarity-visual">
                            <div className="fan-wrap">
                                <div className="fan-img fan-img--left">
                                    <img src={cards[0].images[0]} alt="product" />
                                </div>
                                <div className="fan-img fan-img--center">
                                    <img src={cards[0].images[1]} alt="product" />
                                </div>
                                <div className="fan-img fan-img--right">
                                    <img src={cards[0].images[2]} alt="product" />
                                </div>
                            </div>
                            {/* Product info card with animated score */}
                            <div className="hb-product-card">
                                <img src={cards[0].productImage} alt="product" className="hb-product-thumb" />
                                <div>
                                    <p className="hb-product-name">{cards[0].productName}</p>
                                    <div className="hb-product-score">
                                        <span className="hb-score-dot" style={{ background: '#27ae60' }} />
                                        <strong>
                                            <span className="hb-score-num">{score}/100</span>
                                        </strong>
                                        <span className="hb-score-grade">{cards[0].productGrade}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 — Ingredient Filtering */}
                <div className="hb-card">
                    <div className="hb-card-left">
                        <h3 className="hb-card-title">{cards[1].title}</h3>
                        <ul className="hb-bullets">
                            {cards[1].bullets.map((b, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={18} className="hb-check" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hb-card-right">
                        <div className="hb-filter-visual">
                            {/* Row 1 — slides left */}
                            <div className="hb-tag-row hb-tag-row--left">
                                {[...row1Tags, ...row1Tags].map((tag, i) => (
                                    <div key={i} className="hb-tag hb-tag--good">
                                        <span className="hb-tag-icon hb-tag-icon--good">✓</span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            {/* Row 2 — slides right */}
                            <div className="hb-tag-row hb-tag-row--right">
                                {[...row2Tags, ...row2Tags].map((tag, i) => (
                                    <div key={i} className="hb-tag hb-tag--good">
                                        <span className="hb-tag-icon hb-tag-icon--good">✓</span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            {/* Row 3 — slides left */}
                            <div className="hb-tag-row hb-tag-row--left">
                                {[...row3Tags, ...row3Tags].map((tag, i) => (
                                    <div key={i} className="hb-tag hb-tag--bad">
                                        <span className="hb-tag-icon hb-tag-icon--bad">✕</span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            {/* Row 4 — slides right */}
                            <div className="hb-tag-row hb-tag-row--right">
                                {[...row4Tags, ...row4Tags].map((tag, i) => (
                                    <div key={i} className="hb-tag hb-tag--bad">
                                        <span className="hb-tag-icon hb-tag-icon--bad">✕</span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            {/* Row 5 — slides left */}
                            <div className="hb-tag-row hb-tag-row--left">
                                {[...row5Tags, ...row5Tags].map((tag, i) => (
                                    <div key={i} className="hb-tag hb-tag--bad">
                                        <span className="hb-tag-icon hb-tag-icon--bad">✕</span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 — Real Health Outcomes */}
                <div className="hb-card" ref={card3Ref}>
                    <div className="hb-card-left">
                        <h3 className="hb-card-title">{cards[2].title}</h3>
                        <ul className="hb-bullets">
                            {cards[2].bullets.map((b, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={18} className="hb-check" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hb-card-right">
                        <div className={`hb-outcomes-visual ${card3Visible ? 'hb-outcomes-visible' : ''}`}>
                            <img
                                src="./card3.jpg"
                                alt="family health"
                                className="hb-outcomes-img"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}