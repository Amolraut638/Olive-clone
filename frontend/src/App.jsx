import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import HealthBenefits from './components/HealthBenefits'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import ProtectFamily from './components/ProtectFamily'
import Independent from './components/Independent'
import FAQ from './components/FAQ'
import FamilySafe from './components/FamilySafe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-wrap">
      <div className="page-card">
        <Navbar />
        <Hero />
      </div>

      <div style={{ marginTop: '40px' }}>
        <HowItWorks />
      </div>

      <div style={{ marginTop: '60px', marginLeft: '-20px', marginRight: '-20px' }}>
        <HealthBenefits />
      </div>

      <div style={{ marginTop: '60px' }}>
        <Testimonials />
      </div>

      <div style={{ marginTop: '40px' }}>
        <Comparison />
      </div>

      <div style={{ marginTop: '40px' }}>
        <Pricing />
      </div>

      <div style={{ marginTop: '40px' }}>
        <ProtectFamily />
      </div>

      <div style={{ marginTop: '40px' }}>
        <Independent />
      </div>

      <div style={{ marginTop: '40px'}}>
        <FAQ />
      </div>

      <div style={{ marginTop: '40px' }}>
        <FamilySafe />
      </div>

      <div style={{ marginTop: '40px', marginLeft: '-20px', marginRight: '-20px', marginBottom: '-20px' }}>
        <Footer />
      </div>

    </div>
  )
}

export default App