import { CheckCircle } from 'lucide-react'
import '../styles/Pricing.css'

const monthlyFeatures = [
  'Unlimited Scans',
  'Unlimited Database Searches',
  'Comprehensive Lab-Testing Data',
]

const yearlyFeatures = [
  'Everything in monthly plan',
  'Get 7 months free',
  '60% Savings',
]

export default function Pricing() {
  return (
    <section className="pr-section">

      <div className="pr-blob" />

      <h2 className="pr-title">
        Healthy Choices<br />Honest Pricing
      </h2>

      <div className="pr-cards">

        {/* Monthly */}
        <div className="pr-card pr-card-light">
          <p className="pr-plan-name">Monthly</p>

          <div className="pr-price-row">
            <span className="pr-price">$14.99</span>
            <span className="pr-period">/monthly</span>
          </div>

          <ul className="pr-features">
            {monthlyFeatures.map((f, i) => (
              <li key={i} className="pr-feature">
                <CheckCircle size={16} className="pr-check-light" />
                {f}
              </li>
            ))}
          </ul>

          <button className="pr-btn pr-btn-dark">Subscribe</button>
        </div>

        {/* Yearly */}
        <div className="pr-card pr-card-dark">
          <p className="pr-plan-name pr-plan-name-white">Yearly</p>

          <div className="pr-price-row">
            <span className="pr-price pr-price-white">$69.99</span>
            <span className="pr-price-orig">$179.88</span>
            <span className="pr-period pr-period-white">/yearly</span>
          </div>

          <ul className="pr-features">
            {yearlyFeatures.map((f, i) => (
              <li key={i} className="pr-feature pr-feature-white">
                <CheckCircle size={16} className="pr-check-white" />
                {f}
              </li>
            ))}
          </ul>

          <button className="pr-btn pr-btn-white">Subscribe</button>
        </div>

      </div>
    </section>
  )
}