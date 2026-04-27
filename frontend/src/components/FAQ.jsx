import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import '../styles/FAQ.css'

const faqs = [
  {
    q: 'What is the Food Scanner App and how does it work?',
    a: 'Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks.',
  },
  {
    q: 'How does Olive ensure the accuracy of the Food Scanner App results?',
    a: 'Olive leverages an extensive, up-to-date food database and expert nutritional guidelines to offer precise feedback. The Food Scanner App cross-references real-world data with independent analyses to deliver reliable, actionable insights tailored for your family\'s needs.',
  },
  {
    q: 'Which products can I scan with the Food Scanner App?',
    a: 'Olive is versatile, allowing you to scan a wide range of food and bottled water products. Olive\'s technology is designed to pinpoint nutritional details and detect potential contaminants, making it easier than ever to keep your family safe.',
  },
  {
    q: 'Can the Food Scanner App be customized to my family\'s dietary needs?',
    a: 'Absolutely. With Olive\'s fully customizable filters, the food scanner app lets you set dietary preferences and allergies. This personalization ensures that every recommendation, from ingredient filtering to healthier product suggestions, aligns perfectly with your family\'s unique needs.',
  },
  {
    q: 'Is my data secure when I use the Olive?',
    a: 'Yes, your privacy is our top priority. Olive\'s food scanner app employs robust security protocols to safeguard your personal information while delivering transparent and accurate nutritional insights, allowing you to rest easy with every scan.',
  },
  {
    q: 'When will the Android version of the Food Scanner App be available?',
    a: 'Olive is currently available on iOS, with plans to launch the Android version soon. We understand how crucial it is for every parent to access reliable nutritional data, and the food scanner app is constantly evolving to meet that need.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">

        {/* Header */}
        <div className="faq-header">
          <div className="faq-title-wrap">
            <h2 className="faq-title">
              Frequently Asked<br />Questions by Parents
            </h2>
            <img
              src="./title.webp"
              alt="olive mascot"
              className="faq-mascot"
            />
          </div>

          <a href="#" className="faq-download-btn">
            <img
              src="./icons8-apple-90.png"
              alt="apple"
              width={16}
              height={16}
              className="faq-apple-icon"
            />
            Download for iOS
          </a>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <div className="faq-icon">
                  {openIndex === i
                    ? <Minus size={16} strokeWidth={2.5} />
                    : <Plus size={16} strokeWidth={2.5} />
                  }
                </div>
              </button>

              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}