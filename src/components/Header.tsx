import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { COMPANY, SERVICES } from '../data/site'
import { LogoMark } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            Serving San Angelo &amp; West Texas · {COMPANY.hours}
          </span>
          <span>
            24/7 Emergency: <a href={COMPANY.emergencyPhoneHref}>{COMPANY.emergencyPhone}</a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo" onClick={close} aria-label="San Angelo Waste Management home">
            <LogoMark className="logo-mark" />
            <div className="logo-text">
              San Angelo
              <span>Waste Management</span>
            </div>
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav${open ? ' open' : ''}`}>
            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}>
              About Us
            </NavLink>
            {SERVICES.map((s) => (
              <NavLink key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                {s.shortTitle}
              </NavLink>
            ))}
            <NavLink to="/service-areas" onClick={close}>
              Service Areas
            </NavLink>
            <Link to="/contact" className="btn btn--primary" onClick={close}>
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
