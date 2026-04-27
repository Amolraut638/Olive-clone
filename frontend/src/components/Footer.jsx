import '../styles/Footer.css'
import { useState } from 'react'

const toolLinks = [
    'Explore Foods',
    'Allergy Scanner App',
    'Gluten Free Scanner',
    'Dairy Free App',
    'Food Ingredient Checker',
]

const aboutLinks = ['Blog', 'Email us', 'Contact us']

const legalLinks = [
    'Terms of Service',
    'Privacy Policy',
    'Refund Policy',
    'Medical Consent',
    'Sign in',
]

export default function Footer() {
    const [email, setEmail] = useState('')

    return (
        <footer className="footer">
            <div className="footer-inner">

                {/* ── TOP GRID ── */}
                <div className="footer-top">

                    {/* Col 1 — Tools */}
                    <div className="footer-col">
                        <p className="footer-col-title">Explore More Olive Tools</p>
                        <ul className="footer-links">
                            {toolLinks.map((l) => (
                                <li key={l}><a href="#">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2 — About */}
                    <div className="footer-col">
                        <p className="footer-col-title">About</p>
                        <ul className="footer-links">
                            {aboutLinks.map((l) => (
                                <li key={l}><a href="#">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Brand + Newsletter */}
                    <div className="footer-col footer-col--brand">

                        {/* Logo */}
                        {/* Logo */}
                        <div className="footer-logo">
                            <span className="footer-logo-text">Olive</span>
                        </div>

                        <p className="footer-brand-desc">
                            Get the latest lab testing data<br />sent directly to your inbox.
                        </p>

                        {/* Newsletter */}
                        <div className="footer-newsletter">
                            <input
                                type="email"
                                placeholder="Enter Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="footer-input"
                            />
                            <button className="footer-subscribe-btn">Subscribe</button>
                        </div>

                    </div>
                </div>

                {/* ── DIVIDER ── */}
                <div className="footer-divider" />

                {/* ── BOTTOM ── */}
                <div className="footer-bottom">
                    <div className="footer-legal">
                        {legalLinks.map((l) => (
                            <a key={l} href="#">{l}</a>
                        ))}
                    </div>
                    <p className="footer-copy">© 2026 Olive Inc.</p>
                </div>

            </div>
        </footer>
    )
}