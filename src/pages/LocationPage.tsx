import { Link, Navigate, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { ServiceIcon } from '../components/Icons'
import { COMPANY, LOCATIONS, SERVICES } from '../data/site'

export default function LocationPage() {
  const { slug } = useParams()
  const location = LOCATIONS.find((l) => l.slug === slug)

  if (!location) {
    return <Navigate to="/404" replace />
  }

  const cityState = `${location.city}, ${location.state}`
  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Service Area</span>
          <h1>Site Services in {cityState}</h1>
          <p>
            Roll off dumpsters, portable toilets, restroom trailers, and septic services
            delivered to {location.city} on regular weekly routes — with the same flat-rate
            pricing and dependable service schedule we bring to every West Texas community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Available in {location.city}</span>
            <h2>Everything Your Site Needs</h2>
            <p>
              Every service below runs on scheduled routes through {cityState}. Call{' '}
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> or request a quote online.
            </p>
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

      <section className="section section--gray">
        <div className="container">
          <div className="split">
            <div className="split-content">
              <span className="eyebrow">Local Service</span>
              <h2>Why {location.city} Chooses Us</h2>
              <p>
                We’re not a national broker dispatching whoever answers — our own trucks and our
                own crews run through {location.city} every week. That means faster deliveries,
                honest local pricing, and a driver who knows your site.
              </p>
              <ul className="check-list">
                <li>Regular weekly routes through {cityState}</li>
                <li>Same flat-rate pricing as our home market</li>
                <li>24/7 emergency septic response</li>
                <li>One vendor for dumpsters, restrooms, and septic</li>
              </ul>
              <Link to="/contact" className="btn btn--primary">
                Get a {location.city} Quote
              </Link>
            </div>
            <div className="split-media">
              <ServiceIcon name="dumpster" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nearby</span>
            <h2>Other Communities We Serve</h2>
          </div>
          <div className="location-chips">
            {otherLocations.map((l) => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="location-chip">
                {l.city}, {l.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading={`Need Service in ${location.city}?`} />
    </>
  )
}
