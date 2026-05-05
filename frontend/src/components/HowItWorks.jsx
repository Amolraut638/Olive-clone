import { useEffect, useRef } from 'react'
import '../styles/HowItWorks.css'

export default function HowItWorks() {

    const strips = [
        'Master Salad', 'Villain Bread', 'Organic Juice', 'Farm Yogurt',
        'Kettle Chips', 'Almond Butter', 'Sparkling Water', 'Brown Rice',
    ]

    const marqueeItems = [
        { label: 'Chips', image: './product-1.webp' },
        { label: 'YumEarth', image: './product-2.webp' },
        { label: 'Crackers', image: './product-3.webp' },
        { label: 'Yogurt', image: './product-4.webp' },
        { label: 'Bagels', image: './product-5.webp' },
        { label: 'Juice', image: './product-6.webp' },
        { label: 'Juice', image: './product-7.webp' },
        { label: 'Juice', image: './product-8.webp' },
        { label: 'Juice', image: './product-9.webp' },
        { label: 'Juice', image: './product-10.webp' },
    ]

    const marqueeWrapRef = useRef(null)  // ← added

    useEffect(() => {
        const wrap = marqueeWrapRef.current
        if (!wrap) return

        const interval = setInterval(() => {
            const wrapCenter = wrap.offsetWidth / 2
            const items = wrap.querySelectorAll('.marquee-item')

            items.forEach((item) => {
                const rect = item.getBoundingClientRect()
                const wrapRect = wrap.getBoundingClientRect()
                const itemCenter = rect.left - wrapRect.left + rect.width / 2
                const distFromCenter = Math.abs(itemCenter - wrapCenter)

                if (distFromCenter < 50) {
                    item.classList.add('marquee-item--active')
                } else {
                    item.classList.remove('marquee-item--active')
                }
            })
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hiw-section">

            <div className="hiw-header">
                <h2 className="hiw-title">
                    How the Olive Food<br />Scanner App Works
                </h2>
                <img
                    src="./title.webp"
                    alt="avocado"
                    className="hiw-avocado"
                />
            </div>

            <div className="hiw-cards">

                {/* ── CARD 1 — SCAN & DETECT ── */}
                <div className="hiw-card">
                    <p className="hiw-card-title">Scan & Detect</p>

                    <div className="hiw-card-visual scan-visual">
                        <div className="scan-bracket tl" />
                        <div className="scan-bracket tr" />
                        <div className="scan-bracket bl" />
                        <div className="scan-bracket br" />

                        <div className="star star-1">✦</div>
                        <div className="star star-2">✦</div>
                        <div className="star star-3">✦</div>
                        <div className="star star-4">·</div>

                        <div className="scan-product">
                            <img
                                src="./orangeQr.png"
                                alt="product"
                                className="scan-avocado"
                            />
                        </div>

                        <div className="scan-line" />
                    </div>

                    <p className="hiw-card-desc">
                        When you open Olive simply scan the barcode to instantly detect product
                        ingredients. Olive's intuitive design means busy parents can quickly see
                        which items contain harmful substances, delivering peace of mind with every scan.
                    </p>
                </div>

                {/* ── CARD 2 — DATA ANALYSIS ── */}
                <div className="hiw-card">
                    <p className="hiw-card-title">Data Analysis & Validation</p>

                    <div className="hiw-card-visual marquee-visual">

                        <div className="marquee-track-wrap" ref={marqueeWrapRef}>  {/* ← ref added */}
                            <div className="marquee-fade-left" />
                            <div className="marquee-fade-right" />
                            <div className="marquee-track">
                                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                                    <div key={i} className="marquee-item">
                                        <img src={item.image} alt={item.label} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="safe-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    stroke="#27ae60"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Safe to consume</span>
                        </div>
                    </div>

                    <p className="hiw-card-desc">
                        After scanning, our food scanner app compares product data with an extensive,
                        up-to-date food database. Using expert nutritional guidelines, Olive filters out
                        potentially dangerous ingredients so you never have to second guess
                    </p>
                </div>

                {/* ── CARD 3 — ACTIONABLE INSIGHTS ── */}
                <div className="hiw-card">
                    <p className="hiw-card-title">Actionable Insights & Recommendations</p>

                    <div className="hiw-card-visual insights-visual">
                        <div className="strips-wrap">
                            <div className="strips-track">
                                {[...strips, ...strips].map((name, i) => (
                                    <div key={i} className="strip-item">{name}</div>
                                ))}
                            </div>
                        </div>

                        <div className="insights-products">
                            <div className="insight-img insight-img--left">
                                <img src="./product-7.webp" alt="product" />
                            </div>
                            <div className="insight-img insight-img--center">
                                <img src="./product-10.webp" alt="product" />
                            </div>
                            <div className="insight-img insight-img--right">
                                <img src="./product-9.webp" alt="product" />
                            </div>
                        </div>
                    </div>

                    <p className="hiw-card-desc">
                        Once analyzed, Olive provides tailored insights and healthier product suggestions.
                        Olive proactively flags harmful ingredients and offers personalized recommendations,
                        empowering you to make better choices for your family's health & nutrition.
                    </p>
                </div>

            </div>
        </section>
    )
}