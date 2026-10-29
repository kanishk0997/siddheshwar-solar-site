import SiteHeader from '/components/SiteHeader';


export const metadata = {
  title: 'Commercial & Industrial Solar | Siddheshwar Solar',
  description: 'Commercial and industrial solar solutions in Jaipur and Rajasthan, from site assessment and engineering to installation, commissioning and support.',
};

const steps = [
  ['01', 'SITE & LOAD ASSESSMENT', 'We review the site, available roof area, electricity usage and project requirements before sizing the system.'],
  ['02', 'ENGINEERING & DESIGN', 'The system is planned around the roof, electrical infrastructure, load profile and practical site conditions.'],
  ['03', 'PROCUREMENT & EXECUTION', 'Equipment, structure and installation are coordinated through a clear project scope and execution plan.'],
  ['04', 'TESTING & COMMISSIONING', 'The completed plant is checked, tested and commissioned before handover.'],
  ['05', 'SUPPORT & AMC', 'Post-installation support and AMC options help keep the system maintained over the long term.'],
];

const sectors = [
  ['01', 'MANUFACTURING', 'Solar designed around factory roofs, operating schedules and daytime electricity consumption.'],
  ['02', 'COMMERCIAL', 'Rooftop solutions for businesses, offices, showrooms, warehouses and other commercial facilities.'],
  ['03', 'PETROL PUMPS', 'Site-specific solar systems planned around available canopy or rooftop space and operating requirements.'],
  ['04', 'INSTITUTIONS', 'Solutions for facilities looking to reduce recurring electricity costs with on-site generation.'],
];

export default function CommercialIndustrialSolarPage() {
  return (
    <main>
      <SiteHeader />

      <section className="service-hero ci-hero">
        <div className="service-hero-image" aria-hidden="true" />
        <div className="container service-hero-content">
          <p className="eyebrow"><span /> COMMERCIAL &amp; INDUSTRIAL · RAJASTHAN</p>
          <h1>Solar built around<br /><em>your business.</em></h1>
          <p className="service-hero-lead">Engineered rooftop solar solutions for factories, businesses and commercial facilities — from feasibility and design to installation, commissioning and support.</p>
          <div className="hero-actions"><a className="button button-primary" href="/#contact">Request a Site Assessment <span>→</span></a><a className="button button-ghost" href="/#projects">See Our Work <span>↓</span></a></div>
        </div>
      </section>

      <section className="service-intro">
        <div className="container service-intro-grid">
          <p className="section-label">SOLAR FOR BUSINESS &amp; INDUSTRY</p>
          <div><h2>Your electricity bill<br /><span>is part of the equation.</span></h2><p>Commercial and industrial solar needs more than panels on a roof. We look at the site, electrical requirement, available space and project constraints to develop a system that fits the way your business operates.</p></div>
        </div>
      </section>

      <section className="service-photo-section">
        <div className="container service-photo-grid">
          <div className="service-photo"><img src="/images/commercial-rooftop-detail.jpg" alt="Commercial rooftop solar installation by Siddheshwar Solar" /></div>
          <div className="service-photo-copy"><p className="section-label">ENGINEERING FIRST</p><h2>From site<br /><span>to generation.</span></h2><p>We coordinate the project from assessment through installation and commissioning, with the design built around the actual site rather than a one-size-fits-all package.</p><a className="text-link" href="/#contact">Discuss your project <span>→</span></a></div>
        </div>
      </section>

      <section className="ci-rooftop-gallery">
        <div className="container">
          <div className="section-head">
            <div><p className="section-label">ON THE ROOFTOP</p><h2>Built around<br /><span>the site in front of us.</span></h2></div>
            <p>Every commercial roof brings its own geometry, access points, equipment and operating constraints. These are the kinds of details we work around during execution.</p>
          </div>
          <div className="ci-rooftop-images">
            <figure className="ci-rooftop-image ci-rooftop-image-large">
              <img src="/images/commercial-rooftop-wide.jpg" alt="Solar panels installed across a large industrial rooftop" />
              <figcaption>Large rooftop array with clear maintenance access.</figcaption>
            </figure>
            <figure className="ci-rooftop-image">
              <img src="/images/commercial-rooftop-installation.jpg" alt="Solar mounting structure and panels on a commercial rooftop" />
              <figcaption>Module mounting and structure on an operating rooftop.</figcaption>
            </figure>
            <figure className="ci-rooftop-image">
              <img src="/images/commercial-rooftop-detail.jpg" alt="Close view of a commercial rooftop solar installation" />
              <figcaption>Array layout planned around the roof and its equipment.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ci-projects section-dark">
        <div className="container">
          <div className="section-head dark-head"><div><p className="section-label">PROJECT EXPERIENCE</p><h2>Built for<br /><span>real sites.</span></h2></div><p>Our commercial and industrial work includes a 50 kW installation at Imagination Aluminium Works and a 30 kW petrol pump project currently in progress.</p></div>
          <div className="ci-project-grid">
            <div className="ci-project-card"><img src="/images/commercial-rooftop-wide.jpg" alt="Commercial rooftop solar installation" /><div><span>COMPLETED PROJECT</span><h3>50 kW · Imagination Aluminium Works</h3><p>Commercial solar installation planned and executed for an operating industrial facility.</p></div></div>
            <div className="ci-project-card"><img src="/images/project-canopy.jpg" alt="Petrol pump solar canopy project" /><div><span>IN PROGRESS</span><h3>30 kW · Petrol Pump</h3><p>A commercial solar project being developed around the site's available structure and operational requirements.</p></div></div>
          </div>
        </div>
      </section>

      <section className="ci-sectors">
        <div className="container">
          <div className="section-head"><div><p className="section-label">WHERE WE WORK</p><h2>Solar for<br /><span>working businesses.</span></h2></div><p>Different facilities have different roofs, loads and operating patterns. The project starts with understanding those differences.</p></div>
          <div className="ci-sector-list">{sectors.map(([n,t,d]) => <div className="ci-sector-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><i>→</i></div>)}</div>
        </div>
      </section>

      <section className="service-process section-dark">
        <div className="container">
          <div className="section-head dark-head"><div><p className="section-label">HOW WE HANDLE IT</p><h2>One project.<br /><span>One coordinated team.</span></h2></div><p>From the first site review to commissioning, we keep engineering, execution and communication connected.</p></div>
          <div className="service-process-list">{steps.map(([n,t,d]) => <div className="service-process-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><i>→</i></div>)}</div>
        </div>
      </section>

      <section className="ci-capacity">
        <div className="container"><div className="section-head"><div><p className="section-label">PROJECT SCALE</p><h2>From rooftop<br /><span>to larger systems.</span></h2></div><p>Commercial and industrial requirements vary widely. We size each project after reviewing the site, electrical requirement and intended use rather than prescribing a fixed capacity.</p></div>
          <div className="capacity-line"><div><span>01</span><strong>20–50 kW</strong><p>For smaller commercial facilities and growing business requirements.</p></div><div><span>02</span><strong>50–100 kW</strong><p>For larger rooftops, workshops and industrial facilities.</p></div><div><span>03</span><strong>100 kW+</strong><p>For higher-consumption commercial and industrial sites assessed case by case.</p></div><div><span>04</span><strong>Custom</strong><p>System sizing is finalized after engineering and site assessment.</p></div></div>
        </div>
      </section>

      <section className="service-cta"><div className="container service-cta-inner"><div><p className="section-label">PLANNING A PROJECT?</p><h2>Let's assess your<br /><span>site and requirement.</span></h2></div><div><p>Share your electricity bill, approximate requirement or site details and we'll start with the right questions.</p><a className="button button-primary" href="/#contact">Request a Free Assessment <span>→</span></a></div></div></section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand"><img src="/images/logo-transparent.png" alt="Siddheshwar Solar" /></div>
          <div className="footer-copy"><strong>FROM SUN TO SOCKET</strong><span>Jaipur · Rajasthan</span></div>
          <div className="footer-links"><a href="/#services">Services</a><a href="/#projects">Projects</a><a href="/#about">Why Us</a><a href="/#contact">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
