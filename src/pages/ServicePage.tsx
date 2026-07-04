import { Link, Navigate, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { ServiceIcon } from '../components/Icons'
import { LOCATIONS, SERVICES } from '../data/site'

const SERVICE_DETAILS: Record<string, { heading: string; paragraphs: string[]; faqs: { q: string; a: string }[] }> = {
  'roll-off-dumpsters': {
    heading: 'Roll Off Dumpsters Sized for Any Job',
    paragraphs: [
      'From weekend garage cleanouts to multi-phase commercial builds, the right container keeps your project moving. We deliver 20, 30, and 40 yard roll off dumpsters with driveway-safe placement and pick them up the moment you call — or swap them out so your crew never stops working.',
      'Every rental includes delivery, pickup, and disposal at a licensed facility for one flat rate. Need it longer? Extended rental periods are always available.',
    ],
    faqs: [
      {
        q: 'What size dumpster do I need?',
        a: 'A 20 yard handles most home renovations and roofing jobs, a 30 yard suits full cleanouts and new construction, and a 40 yard is the workhorse for demolition and commercial projects. Not sure? Tell us about the job and we’ll size it for you.',
      },
      {
        q: 'What can I put in the dumpster?',
        a: 'Construction debris, household junk, roofing material, yard waste, and most demolition material. Hazardous waste, liquids, tires, and batteries need special handling — call us and we’ll point you in the right direction.',
      },
      {
        q: 'How fast can you deliver?',
        a: 'Most containers are delivered within one to two business days, and same-day delivery is often available inside San Angelo.',
      },
    ],
  },
  'portable-toilets': {
    heading: 'Portable Restrooms That Stay Clean',
    paragraphs: [
      'A dirty unit reflects on your company. That’s why every portable toilet we place is pressure-washed, sanitized, restocked, and inspected on a guaranteed weekly schedule — more often if your site needs it.',
      'We carry standard units, ADA-compliant units, and high-rise units for multi-story projects, plus hand wash stations and sanitizer stands to keep your site OSHA-compliant.',
    ],
    faqs: [
      {
        q: 'How often are units serviced?',
        a: 'Weekly service is included with every rental. High-traffic sites and events can schedule two or three visits per week.',
      },
      {
        q: 'How many units does my site need?',
        a: 'The rule of thumb is one unit per ten workers on a standard 40-hour week. For events, plan roughly one unit per 75 guests for a four-hour gathering.',
      },
      {
        q: 'Do you rent for single-day events?',
        a: 'Absolutely. We handle everything from one-day gatherings to season-long festival contracts.',
      },
    ],
  },
  'restroom-trailers': {
    heading: 'Luxury Restroom Trailers for Events That Matter',
    paragraphs: [
      'Weddings, corporate events, and VIP hospitality deserve better than a plastic box. Our climate-controlled restroom trailers feature flushing porcelain toilets, running-water sinks, vanity mirrors, and interior lighting your guests will notice.',
      'We deliver, level, connect, and style the trailer before your event, then handle teardown after — you never lift a finger.',
    ],
    faqs: [
      {
        q: 'What sizes are available?',
        a: 'Two-station trailers cover intimate gatherings up to about 100 guests, four-station trailers handle mid-size events, and eight-station trailers serve large weddings and festivals.',
      },
      {
        q: 'What do trailers need on site?',
        a: 'A reasonably level spot and a standard power connection. No water hookup? No problem — onboard fresh water tanks keep everything running.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'Spring and fall weekends fill up fast. We recommend reserving four to six weeks ahead for peak season dates.',
      },
    ],
  },
  'septic-services': {
    heading: 'Licensed Septic Pumping & Holding Tank Rentals',
    paragraphs: [
      'Whether it’s a routine residential pump-out or an emergency backup at 2 AM, our licensed septic operators arrive with the right equipment and honest recommendations — never upsells.',
      'For job sites and remote operations, we rent aboveground holding tanks plus fresh water and wastewater tanks, with scheduled pump-outs that keep your operation running without interruption.',
    ],
    faqs: [
      {
        q: 'How often should a septic tank be pumped?',
        a: 'Most household tanks need pumping every three to five years, depending on tank size and household size. We’ll check sludge levels and give you an honest answer — if it can wait, we’ll tell you.',
      },
      {
        q: 'Do you handle emergencies?',
        a: 'Yes. Our 24/7 emergency line is answered around the clock, and an operator can usually be on site within hours.',
      },
      {
        q: 'What are holding tanks used for?',
        a: 'Aboveground holding tanks serve job sites, man camps, and events where a septic connection isn’t available. We deliver the tank, schedule pump-outs, and haul waste to licensed disposal facilities.',
      },
    ],
  },
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  const details = slug ? SERVICE_DETAILS[slug] : undefined

  if (!service || !details) {
    return <Navigate to="/404" replace />
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>{service.title}</h1>
          <p>{service.blurb}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-content">
              <span className="eyebrow">Overview</span>
              <h2>{details.heading}</h2>
              {details.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <ul className="check-list" style={{ marginTop: 8 }}>
                {service.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn--primary">
                Get a Quote
              </Link>
            </div>
            <div className="split-media">
              <ServiceIcon name={service.icon} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="card-grid">
            {details.faqs.map((f) => (
              <div className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Coverage</span>
            <h2>Available Across West Texas</h2>
            <p>We run regular routes through all of these communities.</p>
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

      <section className="section section--gray">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">More Services</span>
            <h2>We Also Offer</h2>
          </div>
          <div className="card-grid">
            {otherServices.map((s) => (
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

      <CtaBanner heading={`Need ${service.shortTitle}?`} />
    </>
  )
}
