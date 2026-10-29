'use client';

import { useMemo, useState } from 'react';
import SiteHeader from '/components/SiteHeader';
const services = [
  { number: '01', title: 'Residential Solar', text: 'Custom rooftop systems shaped around the roof, energy use and the way your home works.', href: '#contact' },
  { number: '02', title: 'Commercial & Industrial', text: 'High-capacity rooftop and ground-level solutions for factories, warehouses and businesses.', href: '#contact' },
  { number: '03', title: 'Solar EPC', text: 'Engineering, procurement, construction and commissioning — one team from survey to handover.', href: '#contact' },
  { number: '04', title: 'Consultation', text: 'System sizing, technology selection, savings planning and project guidance before you invest.', href: '#calculator' },
  { number: '05', title: 'AMC & Maintenance', text: 'Routine cleaning, inspections and operational checks designed to protect long-term performance.', href: '#contact' }
];

const projects = [
  { image: '/images/project-rooftop-2.jpg', kicker: 'ROOFTOP SOLAR', title: 'Rooftop Solar Installation', meta: 'Jaipur · Residential · Site-engineered structure' },
  { image: '/images/project-installation-wide.jpeg', kicker: 'SITE EXECUTION', title: 'Structure & Installation', meta: 'Jaipur · Installation in progress' },
  { image: '/images/project-canopy.jpg', kicker: 'SOLAR CANOPY', title: 'Custom Solar Structure', meta: 'Jaipur · Designed around the site' },
  { image: '/images/project-sunset.jpg', kicker: 'SUN TO SOCKET', title: 'Solar at Work', meta: 'Rajasthan · Real project photography' }
];

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value);
}

export default function HomePage() {
  const [bill, setBill] = useState(6000);
  const [calcDone, setCalcDone] = useState(false);
  const estimate = useMemo(() => {
    const monthly = Math.max(1000, Number(bill) || 0);
    const kw = Math.max(1, Math.min(100, Math.round((monthly / 1150) * 2) / 2));
    const monthlyUnits = Math.round(monthly / 9);
    return { kw, units: monthlyUnits, savings: Math.round(monthly * 0.8) };
  }, [bill]);

  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />
        <div className="hero-content container">
          <div className="eyebrow"><span /> JAIPUR · RAJASTHAN · SOLAR EPC</div>
          <h1>From the first<br /><em>ray</em> to the last<br />connection.</h1>
          <p className="hero-lead">Custom-built rooftop and EPC solar solutions for homes, businesses and industries — engineered for your site and handled end-to-end.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Get a Free Quote <span>→</span></a>
            <a className="button button-ghost" href="#projects">View Projects <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div><b>3–50+ kW</b><span>rooftop capability</span></div>
            <div><b>Jaipur based</b><span>serving Rajasthan</span></div>
            <div><b>End-to-end</b><span>survey to handover</span></div>
          </div>
        </div>
        <div className="scroll-mark">SCROLL <span>↓</span></div>
      </section>

      <section className="statement">
        <div className="container statement-grid">
          <p className="section-label">FROM SUN TO SOCKET</p>
          <div>
            <h2>Solar should feel <span>straightforward.</span></h2>
            <p>From the first site check to the final paperwork, Siddheshwar Solar manages the moving parts so you get a properly planned project — without having to chase every step yourself.</p>
          </div>
        </div>
      </section>

      <section className="journey">
        <div className="container">
          <div className="journey-head">
            <p className="section-label">THE SOLAR JOURNEY</p>
            <p>One project. One coordinated process. From the first assessment to power flowing from your rooftop.</p>
          </div>
          <div className="journey-track">
            <div><span>01</span><b>ASSESS</b><small>Understand your site and energy use.</small></div>
            <i>→</i>
            <div><span>02</span><b>ENGINEER</b><small>Design the system around the site.</small></div>
            <i>→</i>
            <div><span>03</span><b>BUILD</b><small>Procurement, structure and installation.</small></div>
            <i>→</i>
            <div><span>04</span><b>POWER</b><small>Commission, hand over and support.</small></div>
          </div>
        </div>
      </section>

      <section id="subsidy" className="subsidy">
        <div className="container">
          <div className="subsidy-top">
            <div>
              <p className="section-label">PM SURYA GHAR MUFT BIJLI YOJANA</p>
              <h2>Make the <span>subsidy process</span><br />less complicated.</h2>
            </div>
            <p>We help residential customers with the application journey and supporting paperwork through the National Portal.</p>
          </div>

          <div className="subsidy-bands">
            <article className="subsidy-band">
              <span className="band-label">01 · 1 kW</span>
              <strong>₹30,000</strong>
              <h3>For 1 kW system</h3>
              <p>Ideal for smaller homes and lower electricity use.</p>
            </article>
            <article className="subsidy-band featured">
              <span className="popular-tag">MOST POPULAR</span>
              <span className="band-label">02 · 2 kW</span>
              <strong>₹60,000</strong>
              <h3>For 2 kW system</h3>
              <p>A common starting point for average household consumption.</p>
            </article>
            <article className="subsidy-band">
              <span className="band-label">03 · 3 kW+</span>
              <strong>₹78,000</strong>
              <h3>For 3 kW+ systems</h3>
              <p>For larger homes with higher electricity consumption.</p>
            </article>
          </div>
          <p className="subsidy-note">Reference figures shown here follow the material you provided. Eligibility, approved capacity and subsidy amounts should be verified against the current official scheme rules before publication.</p>
        </div>
      </section>

      <section id="services" className="services section-dark">
        <div className="container">
          <div className="section-head dark-head">
            <div><p className="section-label">SOLAR SERVICES</p><h2>Built around the site.<br /><span>Not a template.</span></h2></div>
            <p>Residential rooftops through commercial and industrial EPC — designed, procured, installed and handed over by one team.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <a className="service-row" href={service.href} key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-title">{service.title}</span>
                <span className="service-text">{service.text}</span>
                <span className="service-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-head">
            <div><p className="section-label">RECENT FIELD WORK</p><h2>Real roofs. <span>Real work.</span></h2></div>
            <p>Actual installation photography from Siddheshwar Solar projects. We’ll keep adding system size, location and client-approved case studies as the portfolio grows.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, idx) => (
              <article className={`project-card ${idx === 0 ? 'project-large' : ''}`} key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay" />
                <div className="project-info"><span>{project.kicker}</span><h3>{project.title}</h3><p>{project.meta}</p></div>
              </article>
            ))}
          </div>
          <div className="project-note">Project names, locations and client information will be shown only with permission.</div>
        </div>
      </section>

      <section id="calculator" className="calculator">
        <div className="container calculator-grid">
          <div>
            <p className="section-label">START WITH THE NUMBERS</p>
            <h2>What could solar<br /><span>look like for you?</span></h2>
            <p className="calc-copy">Use this first-pass calculator to get an indicative starting point. Your final system size and savings are confirmed after we review your bill, roof and site.</p>
          </div>
          <div className="calc-panel">
            <label htmlFor="bill">Average monthly electricity bill</label>
            <div className="bill-input"><span>₹</span><input id="bill" type="number" value={bill} onChange={(e) => { setBill(e.target.value); setCalcDone(false); }} min="1000" step="500" /><span>/ month</span></div>
            <button className="button button-primary calc-button" onClick={() => setCalcDone(true)}>Calculate Indicative Size <span>→</span></button>
            {calcDone && (
              <div className="calc-result">
                <div><span>Indicative system</span><strong>{estimate.kw} kW</strong></div>
                <div><span>Bill-equivalent usage</span><strong>~{estimate.units} units/mo</strong></div>
                <div><span>Indicative offset</span><strong>₹{formatINR(estimate.savings)}</strong></div>
                <a href="#contact">Get a site-specific quote →</a>
              </div>
            )}
            <p className="calc-disclaimer">Illustrative only. Actual system size, generation and savings depend on tariff, roof area, orientation, shading, sanctioned load and site conditions.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-image"><img src="/images/project-installation-vertical.jpeg" alt="Siddheshwar Solar rooftop installation" loading="lazy" /></div>
          <div className="about-copy">
            <p className="section-label">WHY SIDDHESHWAR SOLAR</p>
            <h2>Engineering first.<br /><span>Execution matters.</span></h2>
            <p>Siddheshwar Solar is a Jaipur-based solar EPC company serving homes, businesses and industries across Rajasthan. We combine site-specific engineering with practical project execution, documentation support and after-installation care.</p>
            <div className="feature-lines">
              <div><span>01</span><b>Custom engineering</b><p>Structures and layouts designed for the actual roof and project.</p></div>
              <div><span>02</span><b>Complete support</b><p>From application and subsidy paperwork to installation and handover.</p></div>
              <div><span>03</span><b>Clear communication</b><p>Transparent scope, pricing and project stages — without the runaround.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section-dark">
        <div className="container">
          <div className="section-head dark-head">
            <div><p className="section-label">HOW IT WORKS</p><h2>From first call<br /><span>to final handover.</span></h2></div>
          </div>
          <div className="process-line">
            {['Consult', 'Site Survey', 'Design', 'Procure', 'Install', 'Commission', 'Maintain'].map((step, i) => (
              <div key={step} className="process-step"><span>0{i + 1}</span><b>{step}</b><i>{i < 6 ? '→' : '✓'}</i></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="section-label">LET'S BUILD YOUR SOLAR PROJECT</p>
            <h2>Tell us what<br /><span>you’re planning.</span></h2>
            <p className="contact-copy">Share your requirement and we’ll get back to you for a consultation or site assessment.</p>
            <div className="contact-details">
              <a href="tel:+917727868091">+91 77278 68091</a>
              <a href="mailto:Siddheshwar.solar@gmail.com">Siddheshwar.solar@gmail.com</a>
              <span>Shop No. 1, Sector 9, Malviya Nagar,<br />Jaipur, Rajasthan</span>
            </div>
          </div>
          <form className="lead-form" action="mailto:Siddheshwar.solar@gmail.com" method="post" encType="text/plain">
            <div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required placeholder="10-digit number" /></label></div>
            <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
            <label>Requirement<select name="requirement"><option>Residential Solar</option><option>Commercial Solar</option><option>Industrial Solar</option><option>Solar EPC</option><option>Consultation</option><option>AMC / Maintenance</option></select></label>
            <label>Tell us about the project<textarea name="message" rows="5" placeholder="Monthly bill, approximate system size, location, roof type, etc."></textarea></label>
            <button className="button button-primary" type="submit">Send Enquiry <span>↗</span></button>
            <p className="form-note">This first version routes enquiries to your email. We’ll replace it with a proper lead-management API when we build the private admin system.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand"><img src="/images/logo-transparent.png" alt="Siddheshwar Solar" /></div>
          <div className="footer-copy"><strong>FROM SUN TO SOCKET</strong><span>Jaipur · Rajasthan</span></div>
          <div className="footer-links"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">Why Us</a><a href="#contact">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
