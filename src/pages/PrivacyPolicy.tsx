import { Link } from 'react-router-dom'
import { COMPANY } from '../data/site'

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: July 4, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Who We Are</h2>
          <p>
            {COMPANY.name} (“we,” “us,” or “our”) operates this website to provide information
            about our services and to let you request quotes and apply for jobs. This policy
            explains what information we collect, how we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you choose to give us:</p>
          <ul>
            <li>
              <strong>Quote requests:</strong> your name, email address, phone number, and any
              project details you include.
            </li>
            <li>
              <strong>Job applications:</strong> the information you provide on our application
              form, such as contact details, availability, work history, and qualifications.
            </li>
            <li>
              <strong>Usage data:</strong> we use Google Analytics (through Firebase) to
              understand how visitors use the site — pages viewed, general location, and device
              type. This data is aggregated and does not identify you personally.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your quote request with pricing and availability.</li>
            <li>To review and respond to your job application.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to third
            parties.
          </p>

          <h2>Where Your Information Is Stored</h2>
          <p>
            Form submissions are stored securely in Google Firebase (Cloud Firestore), part of
            Google Cloud. Access is restricted to authorized members of our team. You can read
            about Google’s security practices at{' '}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">
              firebase.google.com/support/privacy
            </a>
            .
          </p>

          <h2>How Long We Keep It</h2>
          <p>
            We keep quote requests and applications only as long as needed to serve you and meet
            our business and legal obligations. You may ask us to delete your information at any
            time.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>You may request a copy of the personal information we hold about you.</li>
            <li>You may ask us to correct or delete your information.</li>
            <li>You can use browser settings or extensions to limit analytics tracking.</li>
          </ul>

          <h2>Children’s Privacy</h2>
          <p>
            Our website is not directed at children under 13, and we do not knowingly collect
            personal information from them.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If we update this policy, we will post the new version on this page with a revised
            “last updated” date.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions or requests about your data? Reach us at{' '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, call{' '}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>, or write to us at {COMPANY.address}.
          </p>

          <p style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn--primary">
              Back to Get a Quote
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
