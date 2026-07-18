import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { ServiceIcon } from '../components/Icons'
import { SERVICES } from '../data/site'

const VALUES = [
  {
    title: 'Show Up On Time',
    text: 'Deliveries, swap-outs, and service visits happen when we say they will. Your schedule is the schedule.',
  },
  {
    title: 'No Hidden Fees',
    text: 'The number on your quote is the number on your invoice. No fuel surcharges, no surprise line items.',
  },
  {
    title: 'Answer the Phone',
    text: 'A real person picks up — during business hours and on the 24/7 emergency line after hours.',
  },
  {
    title: 'Leave It Cleaner',
    text: 'Every unit serviced, every site swept, every haul disposed of responsibly at licensed facilities.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>West Texas Roots. Job Site Standards.</h1>
          <p>
            M&amp;B Rentals is a locally owned site services company built on one
            simple idea: treat every job site like it’s our own.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-content">
              <span className="eyebrow">Our Story</span>
              <h2>Built to Serve the Concho Valley</h2>
              <p>
                We started with a single roll off truck and a promise to local contractors:
                dependable equipment, honest pricing, and service you never have to chase down.
                Today we run dumpster, portable sanitation, and septic routes across seventeen
                West Texas communities — and that original promise still drives every delivery.
              </p>
              <p>
                Our team lives and works in the communities we serve. When you call, you talk
                to a neighbor, not a call center. When we quote a job, we stand behind it.
              </p>
              <Link to="/contact" className="btn btn--primary" style={{ marginTop: 12 }}>
                Work With Us
              </Link>
            </div>
            <div className="split-media">
              <ServiceIcon name="trailer" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How We Operate</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Full-Service</span>
            <h2>Everything Your Site Needs</h2>
          </div>
          <div className="card-grid">
            {SERVICES.map((s) => (
              <div className="card" key={s.slug}>
                <ServiceIcon name={s.icon} className="icon" />
                <h3>{s.shortTitle}</h3>
                <p>{s.blurb}</p>
                <Link to={`/services/${s.slug}`} className="learn-more">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Let’s Talk About Your Project"
        text="Get a same-day quote on dumpsters, portable toilets, restroom trailers, or septic service."
      />
    </>
  )
}
