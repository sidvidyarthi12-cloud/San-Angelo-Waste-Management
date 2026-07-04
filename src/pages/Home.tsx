import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { ServiceIcon } from '../components/Icons'
import { COMPANY, EXTRA_SERVICES, LOCATIONS, SERVICES, TESTIMONIALS } from '../data/site'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Serving San Angelo &amp; West Texas</span>
          <h1>
            Turnkey <em>Dumpster Rentals</em>, Portable Toilets &amp; Septic Services
          </h1>
          <p>
            One call covers your whole site. Fast delivery, dependable service schedules, and
            straightforward pricing with no hidden fees — backed by 24/7 after-hours support.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn--primary">
              Get a Quote
            </Link>
            <a href={COMPANY.phoneHref} className="btn btn--outline">
              Call {COMPANY.phone}
            </a>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>
            <div className="hero-badge">
              <strong>17+</strong>
              <span>Cities Served</span>
            </div>
            <div className="hero-badge">
              <strong>100%</strong>
              <span>Upfront Pricing</span>
            </div>
            <div className="hero-badge">
              <strong>Same-Week</strong>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Do</span>
            <h2>Site Services Done Right</h2>
            <p>
              From the first dumpster drop to the final septic pump-out, we keep construction
              sites, events, and businesses across the Concho Valley running clean.
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
            <div className="split-media">
              <ServiceIcon name="dumpster" />
            </div>
            <div className="split-content">
              <span className="eyebrow">Roll Off Dumpsters</span>
              <h2>The Right Container, On Time, Every Time</h2>
              <p>
                Whether you’re gutting a kitchen or running a commercial build, we size the
                container to the job and handle every swap-out on your schedule.
              </p>
              <ul className="check-list">
                <li>20, 30, and 40 yard roll off containers</li>
                <li>Residential, commercial, and oilfield projects</li>
                <li>Flat-rate pricing — no fuel or hidden surcharges</li>
                <li>Fast swap-outs so your crew never waits</li>
              </ul>
              <Link to="/services/roll-off-dumpsters" className="btn btn--navy">
                View Dumpster Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-content">
              <span className="eyebrow">Portable Sanitation</span>
              <h2>Clean Units Your Crew Will Actually Thank You For</h2>
              <p>
                Every portable restroom we place is pressure-washed, sanitized, and restocked on
                a guaranteed service schedule — from single-unit residential jobs to hundred-unit
                oilfield spreads.
              </p>
              <ul className="check-list">
                <li>Standard, ADA-compliant, and high-rise units</li>
                <li>Hand wash and sanitizer stations</li>
                <li>Luxury restroom trailers for events</li>
                <li>Guaranteed weekly service visits</li>
              </ul>
              <Link to="/services/portable-toilets" className="btn btn--navy">
                View Restroom Options
              </Link>
            </div>
            <div className="split-media">
              <ServiceIcon name="toilet" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <ServiceIcon name="trailer" />
            </div>
            <div className="split-content">
              <span className="eyebrow">Restroom Trailers</span>
              <h2>Luxury Trailers for Events Worth Remembering</h2>
              <p>
                Weddings, corporate gatherings, and VIP hospitality call for more than a
                standard unit. Our climate-controlled restroom trailers bring flushing
                toilets, running water, and real comfort anywhere your event takes you.
              </p>
              <ul className="check-list">
                <li>2, 4, and 8 station trailer options</li>
                <li>Heating, A/C, and interior lighting</li>
                <li>Running water sinks and vanity mirrors</li>
                <li>Delivery, setup, and teardown included</li>
              </ul>
              <Link to="/services/restroom-trailers" className="btn btn--navy">
                View Trailer Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-content">
              <span className="eyebrow">Septic Services</span>
              <h2>Licensed Septic Pumping &amp; Holding Tanks</h2>
              <p>
                Our licensed operators pump, clean, and maintain septic systems for homes,
                businesses, and remote operations — and when disaster strikes, our emergency
                line answers around the clock.
              </p>
              <ul className="check-list">
                <li>Residential and commercial septic pumping</li>
                <li>Aboveground holding tank rentals</li>
                <li>Fresh water and wastewater tanks</li>
                <li>24/7 emergency response</li>
              </ul>
              <Link to="/services/septic-services" className="btn btn--navy">
                View Septic Services
              </Link>
            </div>
            <div className="split-media">
              <ServiceIcon name="septic" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Reviews</span>
            <h2>Trusted by Contractors, Event Hosts &amp; Operators</h2>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial" key={t.author}>
                <div className="stars">★★★★★</div>
                <blockquote>“{t.quote}”</blockquote>
                <cite>
                  {t.author}
                  <span>{t.role}</span>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">More Ways We Help</span>
            <h2>Additional Site Services</h2>
          </div>
          <div className="card-grid">
            {EXTRA_SERVICES.map((s) => (
              <div className="card" key={s.slug}>
                <ServiceIcon name={s.icon} className="icon" />
                <h3>{s.shortTitle}</h3>
                <p>{s.blurb}</p>
                <Link to="/contact" className="learn-more">
                  Request a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Where We Work</span>
            <h2>Proudly Serving West Texas</h2>
            <p>
              Based in San Angelo with routes running across the Concho Valley, Big Country, and
              the Permian Basin.
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

      <CtaBanner />
    </>
  )
}
