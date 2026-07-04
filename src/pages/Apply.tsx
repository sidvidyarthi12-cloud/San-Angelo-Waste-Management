import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data/site'
import { submitJobApplication } from '../firebase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  consent?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s()+.-]{7,20}$/

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function YesNo({
  label,
  value,
  onChange,
  name,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  name: string
}) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <div className="radio-group">
        {['Yes', 'No'].map((opt) => (
          <label key={opt} className="radio-option">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default function Apply() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const [heardAbout, setHeardAbout] = useState('')
  const [daysAvailable, setDaysAvailable] = useState<string[]>([])
  const [shifts, setShifts] = useState('')
  const [overtime, setOvertime] = useState('')
  const [startDate, setStartDate] = useState('')
  const [transportation, setTransportation] = useState('')
  const [desiredPay, setDesiredPay] = useState('')

  const [appliedBefore, setAppliedBefore] = useState('')
  const [knowsEmployee, setKnowsEmployee] = useState('')
  const [employer1, setEmployer1] = useState('')
  const [employer2, setEmployer2] = useState('')
  const [employer3, setEmployer3] = useState('')
  const [reference1, setReference1] = useState('')
  const [reference2, setReference2] = useState('')

  const [over18, setOver18] = useState('')
  const [workAuthorized, setWorkAuthorized] = useState('')
  const [drugTest, setDrugTest] = useState('')
  const [accommodations, setAccommodations] = useState('')

  const [skills, setSkills] = useState('')
  const [education, setEducation] = useState('')
  const [military, setMilitary] = useState('')

  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  function toggleDay(day: string) {
    setDaysAvailable((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    )
  }

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(email.trim())) next.email = 'Please enter a valid email address.'
    if (!PHONE_RE.test(phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (!consent) next.consent = 'Please agree to the acknowledgment to continue.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitJobApplication({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        details: {
          address: address.trim(),
          heardAbout: heardAbout.trim(),
          daysAvailable,
          shifts: shifts.trim(),
          overtime,
          startDate,
          transportation,
          desiredPay: desiredPay.trim(),
          appliedBefore,
          knowsEmployee,
          employer1: employer1.trim(),
          employer2: employer2.trim(),
          employer3: employer3.trim(),
          reference1: reference1.trim(),
          reference2: reference2.trim(),
          over18,
          workAuthorized,
          drugTest,
          accommodations,
          skills: skills.trim(),
          education: education.trim(),
          military: military.trim(),
        },
        consent: true,
      })
      setStatus('success')
      window.scrollTo(0, 0)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">Careers</span>
            <h1>Application Received!</h1>
            <p>
              Thanks for applying to {COMPANY.name}. Our team reviews every application and
              will reach out if there’s a fit. Feel free to call us at {COMPANY.phone} with any
              questions.
            </p>
          </div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link to="/" className="btn btn--navy">
              Back to Home
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1>Job Application</h1>
          <p>
            We’re hiring drivers, service technicians, and yard crew across West Texas. Fill
            out the application below and we’ll be in touch.
          </p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <form className="quote-form apply-form" onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Personal Information</legend>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="app-name">Full Name *</label>
                  <input
                    id="app-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>
                <div className="form-field">
                  <label htmlFor="app-phone">Phone *</label>
                  <input
                    id="app-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && <div className="field-error">{errors.phone}</div>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="app-email">Email *</label>
                  <input
                    id="app-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>
                <div className="form-field">
                  <label htmlFor="app-address">Address</label>
                  <input
                    id="app-address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="street-address"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Availability</legend>
              <div className="form-field">
                <label htmlFor="app-heard">How did you hear about this position?</label>
                <input
                  id="app-heard"
                  type="text"
                  value={heardAbout}
                  onChange={(e) => setHeardAbout(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Days You Can Work</label>
                <div className="radio-group">
                  {DAYS.map((day) => (
                    <label key={day} className="radio-option">
                      <input
                        type="checkbox"
                        checked={daysAvailable.includes(day)}
                        onChange={() => toggleDay(day)}
                      />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="app-shifts">Hours / Shifts Available</label>
                  <input
                    id="app-shifts"
                    type="text"
                    value={shifts}
                    onChange={(e) => setShifts(e.target.value)}
                    placeholder="e.g. 6 AM – 4 PM"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="app-start">Earliest Start Date</label>
                  <input
                    id="app-start"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <YesNo
                  label="Willing to work overtime?"
                  name="overtime"
                  value={overtime}
                  onChange={setOvertime}
                />
                <YesNo
                  label="Do you have reliable transportation?"
                  name="transportation"
                  value={transportation}
                  onChange={setTransportation}
                />
              </div>
              <div className="form-field">
                <label htmlFor="app-pay">Desired Pay</label>
                <input
                  id="app-pay"
                  type="text"
                  value={desiredPay}
                  onChange={(e) => setDesiredPay(e.target.value)}
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Employment History</legend>
              <div className="form-row">
                <YesNo
                  label="Have you applied with us before?"
                  name="appliedBefore"
                  value={appliedBefore}
                  onChange={setAppliedBefore}
                />
                <YesNo
                  label="Any friends or relatives working here?"
                  name="knowsEmployee"
                  value={knowsEmployee}
                  onChange={setKnowsEmployee}
                />
              </div>
              <div className="form-field">
                <label htmlFor="app-emp1">Most Recent Employer (name &amp; dates)</label>
                <input id="app-emp1" type="text" value={employer1} onChange={(e) => setEmployer1(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="app-emp2">Previous Employer (name &amp; dates)</label>
                <input id="app-emp2" type="text" value={employer2} onChange={(e) => setEmployer2(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="app-emp3">Previous Employer (name &amp; dates)</label>
                <input id="app-emp3" type="text" value={employer3} onChange={(e) => setEmployer3(e.target.value)} />
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="app-ref1">Reference 1 (name &amp; contact)</label>
                  <input id="app-ref1" type="text" value={reference1} onChange={(e) => setReference1(e.target.value)} />
                </div>
                <div className="form-field">
                  <label htmlFor="app-ref2">Reference 2 (name &amp; contact)</label>
                  <input id="app-ref2" type="text" value={reference2} onChange={(e) => setReference2(e.target.value)} />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Background &amp; Eligibility</legend>
              <div className="form-row">
                <YesNo label="Are you 18 or older?" name="over18" value={over18} onChange={setOver18} />
                <YesNo
                  label="Are you authorized to work in the U.S.?"
                  name="workAuthorized"
                  value={workAuthorized}
                  onChange={setWorkAuthorized}
                />
              </div>
              <div className="form-row">
                <YesNo
                  label="Willing to take a pre-employment drug test?"
                  name="drugTest"
                  value={drugTest}
                  onChange={setDrugTest}
                />
                <YesNo
                  label="Do you need any job accommodations?"
                  name="accommodations"
                  value={accommodations}
                  onChange={setAccommodations}
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Skills &amp; Education</legend>
              <div className="form-field">
                <label htmlFor="app-skills">
                  Skills &amp; qualifications relevant to this position (CDL, equipment
                  experience, certifications, etc.)
                </label>
                <textarea
                  id="app-skills"
                  rows={4}
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="app-education">
                  Education (high school, college, vocational training)
                </label>
                <textarea
                  id="app-education"
                  rows={3}
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="app-military">Military service (branch &amp; rank, if any)</label>
                <input
                  id="app-military"
                  type="text"
                  value={military}
                  onChange={(e) => setMilitary(e.target.value)}
                />
              </div>
              <p className="form-note">
                Have a resume? Email it to{' '}
                <a href={`mailto:${COMPANY.email}?subject=Resume — Job Application`}>
                  {COMPANY.email}
                </a>{' '}
                after submitting your application.
              </p>
            </fieldset>

            <div className="form-field checkbox-field">
              <label htmlFor="app-consent">
                <input
                  id="app-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I certify that the information provided is true and complete, I understand
                  that employment is at-will, and I agree to the{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>. *
                </span>
              </label>
              {errors.consent && <div className="field-error">{errors.consent}</div>}
            </div>

            <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
            </button>

            {status === 'error' && (
              <div className="form-status form-status--error" role="alert">
                Something went wrong submitting your application. Please try again, or call us
                at {COMPANY.phone}.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
