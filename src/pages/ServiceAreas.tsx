import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { LOCATIONS } from '../data/site'

export default function ServiceAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Coverage</span>
          <h1>Our Service Areas</h1>
          <p>
            Based in San Angelo with weekly routes across the Concho Valley, Big Country, and
            Permian Basin. Pick your city to see what’s available near you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">West Texas</span>
            <h2>Communities We Serve</h2>
            <p>
              Don’t see your town? We regularly add routes — reach out and we’ll do our best to
              get a truck to you.
            </p>
          </div>
          <div className="location-chips">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="location-chip">
                {l.city}, {l.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Not Sure If We Reach You?" text="Send us your project location and we’ll confirm coverage the same day." />
    </>
  )
}
