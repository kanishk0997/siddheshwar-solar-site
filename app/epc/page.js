import SiteHeader from '/components/SiteHeader';

export const metadata = {
  title: 'Solar EPC Contracting | Siddheshwar Solar',
  description: 'End-to-end solar EPC contracting in Rajasthan — engineering, procurement, installation, approvals, testing, commissioning and project support.',
};

const epcSteps = [
  ['01', 'FEASIBILITY & SITE STUDY', 'Technical survey, load review, roof or land assessment, shadow analysis and project requirements.'],
  ['02', 'ENGINEERING & DESIGN', 'System sizing, module layout, structure, electrical design, protection and project documentation.'],
  ['03', 'PROCUREMENT', 'Planned sourcing and coordination of modules, inverters, structures, BOS and project-specific equipment.'],
  ['04', 'INSTALLATION & EXECUTION', 'Civil, structural, electrical and solar installation managed as one coordinated project.'],
  ['05', 'TESTING & COMMISSIONING', 'Inspection, testing, synchronization, documentation and handover after successful commissioning.'],
  ['06', 'O&M / AMC', 'Post-commissioning support, preventive maintenance and AMC options for long-term performance.'],
];

const kusum = [
  ['A', 'COMPONENT A', 'Decentralized solar plants', 'Grid-connected solar plants of 500 kW to 2 MW can be developed by eligible farmers, groups, cooperatives, panchayats, FPOs and other eligible entities. Power is purchased by the DISCOM at the applicable tariff determined by the State regulator.'],
  ['B', 'COMPONENT B', 'Standalone solar pumps', 'Support for standalone solar agriculture pumps in eligible off-grid areas. The current MNRE scheme page describes central financial assistance of 30% of benchmark or tender cost, whichever is lower, with state support and beneficiary contribution subject to the applicable implementation framework.'],
  ['C', 'COMPONENT C', 'Pump & feeder solarisation', 'Existing grid-connected agriculture pumps can be solarised, while feeder-level solarisation can provide daytime agricultural power through a larger solar plant. Individual pump solarisation can also allow surplus generation to be sold to the DISCOM under the applicable framework.'],
];

export default function EpcPage() {
  return (
    <main>
      <SiteHeader />

      <section className="service-hero epc-hero">
        <div className="service-hero-image" aria-hidden="true" />
        <div className="container service-hero-content">
          <p className="eyebrow"><span /> SOLAR EPC CONTRACTING · RAJASTHAN</p>
          <h1>One team.<br /><em>One complete project.</em></h1>
          <p className="service-hero-lead">From the first site survey to final commissioning, Siddheshwar Solar coordinates the engineering, procurement and execution needed to turn a solar project into an operating asset.</p>
          <div className="hero-actions"><a className="button button-primary" href="/#contact">Discuss Your Project <span>→</span></a><a className="button button-ghost" href="#process">See Our EPC Process <span>↓</span></a></div>
        </div>
      </section>

      <section className="service-intro epc-intro">
        <div className="container service-intro-grid">
          <p className="section-label">END-TO-END EPC</p>
          <div><h2>Engineering first.<br /><span>Execution without gaps.</span></h2><p>A solar EPC project has many moving parts — site conditions, structural requirements, electrical integration, procurement, safety, approvals, testing and commissioning. We bring those pieces together under one coordinated execution plan.</p></div>
        </div>
      </section>

      <section className="epc-visual">
        <div className="container epc-visual-grid">
          <div className="epc-visual-image"><img src="/images/commercial-rooftop-wide.jpg" alt="Large rooftop solar project" /></div>
          <div className="epc-visual-copy"><p className="section-label">FROM DRAWING TO DELIVERY</p><h2>Built to work<br /><span>in the real world.</span></h2><p>Good EPC is not only about installing modules. It is about making the design practical to build, safe to operate and clear to maintain.</p><div className="epc-points"><span>01 · SITE CONDITIONS</span><span>02 · ELECTRICAL INTEGRATION</span><span>03 · STRUCTURAL EXECUTION</span><span>04 · TESTING & HANDOVER</span></div></div>
        </div>
      </section>

      <section id="process" className="service-process section-dark">
        <div className="container">
          <div className="section-head dark-head"><div><p className="section-label">OUR EPC PROCESS</p><h2>From feasibility<br /><span>to commissioning.</span></h2></div><p>Every project is different, but the execution discipline stays the same: understand the site, engineer the system, coordinate the work and verify the finished plant.</p></div>
          <div className="service-process-list">{epcSteps.map(([n,t,d]) => <div className="service-process-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><i>→</i></div>)}</div>
        </div>
      </section>

      <section className="epc-kusum">
        <div className="container">
          <div className="section-head"><div><p className="section-label">PM-KUSUM</p><h2>Solar for<br /><span>agriculture & land.</span></h2></div><p>PM-KUSUM is a Ministry of New and Renewable Energy scheme covering decentralized solar plants, standalone solar pumps and solarisation of grid-connected agricultural pumps and feeders. Eligibility, allocation, subsidy and implementation are handled through the designated implementing agencies and the applicable state process.</p></div>
          <div className="kusum-grid">{kusum.map(([letter,title,subtitle,desc]) => <article className="kusum-card" key={letter}><div className="kusum-letter">{letter}</div><p>{title}</p><h3>{subtitle}</h3><span>{desc}</span></article>)}</div>
          <div className="kusum-note"><strong>Important:</strong> MNRE's main scheme page currently lists the scheme period through 31 March 2026. A recent MNRE communication says implementation timelines for recently signed PPAs have been extended to 31 March 2027; availability of new applications, state allocations and financial assistance can therefore vary by component and state. We will verify the applicable Rajasthan process before quoting a project. <a href="https://pmkusum.mnre.gov.in/" target="_blank" rel="noreferrer">Official PM-KUSUM portal ↗</a></div>
        </div>
      </section>

      <section className="epc-kusum-detail section-dark">
        <div className="container epc-kusum-detail-grid">
          <div><p className="section-label">WHERE EPC MEETS PM-KUSUM</p><h2>Survey.<br /><span>Design. Execute.</span></h2></div>
          <div><p>For eligible PM-KUSUM projects, the EPC role can extend beyond equipment installation: site survey, technical documentation, system design, vendor coordination, installation, testing and commissioning all need to align with the applicable tender and implementing-agency requirements.</p><p>In Rajasthan, current government procurement records also show KUSUM-A opportunities involving design, survey, supply, installation, testing, commissioning and long-term O&amp;M through RESCO mode.</p><a className="text-link epc-light-link" href="/#contact">Talk to us about a KUSUM project <span>→</span></a></div>
        </div>
      </section>

      <section className="epc-compliance">
        <div className="container">
          <div className="section-head"><div><p className="section-label">PROJECT CONTROL</p><h2>Clear scope.<br /><span>Clean handover.</span></h2></div><p>We structure EPC execution around measurable deliverables so the project team, client and site stakeholders know what is being delivered at each stage.</p></div>
          <div className="epc-control-grid"><div><b>ENGINEERING</b><p>System layouts, electrical design and project documentation.</p></div><div><b>PROCUREMENT</b><p>Equipment coordination around approved specifications and project requirements.</p></div><div><b>EXECUTION</b><p>Installation, site coordination, safety and quality checks.</p></div><div><b>COMMISSIONING</b><p>Testing, documentation and handover of the completed system.</p></div></div>
        </div>
      </section>

      <section className="service-cta"><div className="container service-cta-inner"><div><p className="section-label">HAVE A PROJECT IN MIND?</p><h2>Let's build the<br /><span>right EPC plan.</span></h2></div><div><p>Share the site location, approximate capacity, electricity requirement or tender scope. We'll start by understanding the project.</p><a className="button button-primary" href="/#contact">Request an EPC Discussion <span>→</span></a></div></div></section>

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
