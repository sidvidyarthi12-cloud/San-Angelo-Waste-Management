import { Link } from 'react-router-dom'
import { COMPANY, LOCATIONS, SERVICES } from '../data/site'
import { LogoMark } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerLocations = LOCATIONS.slice(0, 8)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="logo" aria-label="San Angelo Waste Management home">
              <LogoMark className="logo-mark" />
              <div className="logo-text">
                San Angelo
                <span>Waste Management</span>
              </div>
            </Link>
            <p>
              Locally owned and operated, we deliver dependable dumpster rentals, portable
              sanitation, and septic services across the Concho Valley and West Texas — with
              honest pricing and no hidden fees.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/service-areas">Service Areas</Link>
              </li>
              <li>
                <Link to="/contact">Get a Quote</Link>
              </li>
              <li>
                <Link to="/apply">Apply for a Job</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={COMPANY.phoneHref}>Main: {COMPANY.phone}</a>
              </li>
              <li>
                <a href={COMPANY.emergencyPhoneHref}>Emergency: {COMPANY.emergencyPhone}</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>{COMPANY.address}</li>
            </ul>
            <h4 style={{ marginTop: 24 }}>Areas We Serve</h4>
            <ul>
              {footerLocations.map((l) => (
                <li key={l.slug}>
                  <Link to={`/locations/${l.slug}`}>
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas">View all locations →</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {year} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
