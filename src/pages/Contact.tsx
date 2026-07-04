import { useState, type FormEvent } from 'react'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons'
import { COMPANY, SERVICES } from '../data/site'
import { submitQuoteRequest } from '../firebase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s()+.-]{7,20}$/

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(email.trim())) next.email = 'Please enter a valid email address.'
    if (!PHONE_RE.test(phone.trim())) next.phone = 'Please enter a valid phone number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitQuoteRequest({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: service || 'Not specified',
        message: message.trim(),
      })
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setService('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get a Quote</h1>
          <p>
            Tell us a little about your project and we’ll get back to you fast — usually the
            same business day.
          </p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="quote-layout">
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              <h2>Request Your Free Quote</h2>
              <p>Fill out the form and our team will reach out with pricing and availability.</p>

              <div className="form-field">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(325) 555-0000"
                  autoComplete="tel"
                  required
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="service">Service Needed</label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Select a service (optional)</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Location, timeline, and anything else we should know (optional)"
                />
              </div>

              <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Get My Quote'}
              </button>

              {status === 'success' && (
                <div className="form-status form-status--success" role="status">
                  Thanks! Your quote request is in — we’ll be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status form-status--error" role="alert">
                  Something went wrong sending your request. Please try again, or call us
                  directly at {COMPANY.phone}.
                </div>
              )}
            </form>

            <div className="contact-info-card">
              <h3>Reach Us Directly</h3>
              <ul>
                <li>
                  <PhoneIcon />
                  <span className="label">Main Office</span>
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </li>
                <li>
                  <PhoneIcon />
                  <span className="label">24/7 Emergency</span>
                  <a href={COMPANY.emergencyPhoneHref}>{COMPANY.emergencyPhone}</a>
                </li>
                <li>
                  <MailIcon />
                  <span className="label">Email</span>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </li>
                <li>
                  <PinIcon />
                  <span className="label">Office</span>
                  {COMPANY.address}
                </li>
                <li>
                  <ClockIcon />
                  <span className="label">Hours</span>
                  {COMPANY.hours}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
