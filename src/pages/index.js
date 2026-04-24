import * as React from "react"
import "../styles/global.css"

const services = [
  "Brand strategy",
  "Website design",
  "Gatsby development",
  "Performance optimisation",
]

const IndexPage = () => {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="/">Bright Studio</a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Gatsby website starter</p>
            <h1>Fast, polished websites for teams that need to move.</h1>
            <p className="lede">
              A lightweight Gatsby site with responsive layouts, clean components,
              and sensible defaults. Edit the copy, add your content, and deploy.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">Start a project</a>
              <a className="button secondary" href="#work">View work</a>
            </div>
          </div>

          <div className="heroCard" aria-label="Website performance summary">
            <span>Launch-ready</span>
            <strong>Modern Gatsby build</strong>
            <p>Responsive design, clear typography, and a simple structure for quick customisation.</p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Services</p>
        <h2>Everything needed for a sharp web presence.</h2>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service}>
              <h3>{service}</h3>
              <p>Structured, practical delivery focused on speed, clarity, and conversion.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section split">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Built to load quickly and read clearly.</h2>
        </div>
        <p>
          Replace this section with case studies, product screenshots, testimonials,
          or a concise portfolio summary.
        </p>
      </section>

      <section id="contact" className="cta">
        <p className="eyebrow">Contact</p>
        <h2>Ready to shape this into your site?</h2>
        <p>Edit the details in <code>src/pages/index.js</code> and styles in <code>src/styles/global.css</code>.</p>
        <a className="button primary" href="mailto:hello@example.com">hello@example.com</a>
      </section>
    </main>
  )
}

export const Head = () => <title>Bright Studio | Gatsby Website</title>

export default IndexPage
