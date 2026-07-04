import { Link } from 'react-router-dom'
import { COMPANY } from '../data/site'

interface CtaBannerProps {
  heading?: string
  text?: string
}

export default function CtaBanner({
  heading = 'Ready to Get Started?',
  text = 'Tell us about your project and we’ll have a quote back to you fast — usually the same business day.',
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn--primary">
            Get a Quote
          </Link>
          <a href={COMPANY.phoneHref} className="btn btn--outline">
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
