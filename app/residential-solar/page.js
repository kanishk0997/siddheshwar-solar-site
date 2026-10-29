
import SiteHeader from '/components/SiteHeader';


export const metadata = {
  title: 'Residential Solar in Jaipur | Siddheshwar Solar',
  description: 'Custom-designed residential rooftop solar solutions in Jaipur and Rajasthan, including site assessment, design, installation and subsidy assistance.',
};

const steps = [
  ['01', 'SITE ASSESSMENT', 'We understand your roof, electricity use, available space and project requirements.'],
  ['02', 'SYSTEM DESIGN', 'A site-specific solar layout is planned around your home and energy needs.'],
  ['03', 'DOCUMENTATION', 'We assist with the required applications and subsidy-related paperwork.'],
  ['04', 'INSTALLATION', 'Our team handles structure, equipment installation, testing and commissioning.'],
  ['05', 'HANDOVER', 'The completed system is checked, explained and handed over with ongoing support available.'],
];

const faqs = [
  ['What size residential solar system do I need?', 'System size depends on electricity consumption, sanctioned load, roof area, orientation, shading and other site conditions. We determine the appropriate size after reviewing your bill and site.'],
  ['Can Siddheshwar Solar help with subsidy paperwork?', 'Yes. We assist residential customers through the application journey and supporting paperwork. Eligibility and subsidy amounts are subject to the current applicable scheme rules.'],
  ['Do you install systems on existing homes?', 'Yes. Residential rooftop systems can be designed around the existing roof structure and available installation area.'],
  ['How do I get a quotation?', 'Share your electricity bill and basic site details with us. We can then discuss the requirement and prepare a project-specific quotation.'],
];

export default function ResidentialSolarPage() {
  return (
    <main>
      <SiteHeader />

      <section className="service-hero">
        <div className="service-hero-image" aria-hidden="true" />
        <div className="container service-hero-content">
          <p className="eyebrow"><span /> RESIDENTIAL SOLAR · JAIPUR</p>
          <h1>Solar for your home.<br /><em>Designed around you.</em></h1>
          <p className="service-hero-lead">Custom-designed rooftop solar systems for homes — from site assessment and system design to installation and subsidy assistance.</p>
          <div className="hero-actions"><a className="button button-primary" href="/#contact">Get a Free Quote <span>→</span></a><a className="button button-ghost" href="/#projects">See Our Work <span>↓</span></a></div>
        </div>
      </section>

      <section className="service-intro">
        <div className="container service-intro-grid">
          <p className="section-label">ROOFTOP SOLAR FOR HOMES</p>
          <div><h2>Make your roof<br /><span>work harder.</span></h2><p>Every home is different. We plan the system around your electricity use, roof structure and available space instead of forcing a standard package onto the site.</p></div>
        </div>
      </section>

      <section className="service-photo-section">
        <div className="container service-photo-grid">
          <div className="service-photo"><img src="/images/project-rooftop-2.jpg" alt="Residential rooftop solar installation" /></div>
          <div className="service-photo-copy"><p className="section-label">A SITE-SPECIFIC APPROACH</p><h2>From bill<br /><span>to rooftop.</span></h2><p>We start by understanding the requirement, then move through assessment, engineering, documentation and installation. The goal is a system that fits the property and the way your household uses electricity.</p><a className="text-link" href="/#contact">Discuss your home <span>→</span></a></div>
        </div>
      </section>

      <section className="service-process section-dark">
        <div className="container">
          <div className="section-head dark-head"><div><p className="section-label">HOW WE HANDLE IT</p><h2>One coordinated<br /><span>process.</span></h2></div><p>From the first conversation to the finished rooftop, we keep the project moving through clear stages.</p></div>
          <div className="service-process-list">{steps.map(([n,t,d]) => <div className="service-process-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><i>→</i></div>)}</div>
        </div>
      </section>

      <section className="residential-capacity">
        <div className="container"><div className="section-head"><div><p className="section-label">COMMON RESIDENTIAL SIZES</p><h2>Small roof.<br /><span>Big difference.</span></h2></div><p>We work with residential systems from smaller rooftops through larger home installations, with final sizing based on the actual site and energy requirement.</p></div>
          <div className="capacity-line"><div><span>01</span><strong>3 kW</strong><p>For homes with a more moderate electricity requirement.</p></div><div><span>02</span><strong>5 kW</strong><p>A common residential system size for higher household consumption.</p></div><div><span>03</span><strong>8 kW</strong><p>For larger homes and higher electricity usage.</p></div><div><span>04</span><strong>10+ kW</strong><p>Larger residential requirements assessed case by case.</p></div></div>
        </div>
      </section>

      <section className="residential-faq"><div className="container faq-grid"><div><p className="section-label">RESIDENTIAL SOLAR FAQ</p><h2>Before you<br /><span>go solar.</span></h2></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="service-cta"><div className="container service-cta-inner"><div><p className="section-label">READY TO START?</p><h2>Let's design the right<br /><span>system for your home.</span></h2></div><div><p>Send us your basic requirement or electricity bill and we'll take it from there.</p><a className="button button-primary" href="/#contact">Get a Free Quote <span>→</span></a></div></div></section>
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
