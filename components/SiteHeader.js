export default function SiteHeader() {
  return (
    // <header className="site-header">
    //   <div className="container header-inner">
    //     <a className="brand" href="/" aria-label="Siddheshwar Solar home">
    //       <img src="/images/logo-transparent.png" alt="Siddheshwar Solar" />
    //     </a>
    //     <nav className="nav" aria-label="Primary navigation">
    //       <a href="/">Home</a>
    //       <a href="/#about">About</a>
    //       <a className="pm-nav-link" href="/#subsidy">PM Surya Ghar</a>
    //       <a href="/#projects">Projects</a>
    //       <a href="/#contact">Contact</a>
    //     </nav>
    //     <a className="header-cta" href="/#contact">Get a Quote <span>→</span></a>
    //   </div>
    // </header>
    <header className="site-header ">
        <div className="container header-inner epc-header-inner">
          <a className="epc-brand" href="/" aria-label="Siddheshwar Solar home">
            <img src="/images/logo-transparent.png" alt="" />
            <span><b>SIDDHESHWAR</b><strong>SOLAR</strong><small>CLEAN ENERGY. BRIGHTER TOMORROW.</small></span>
          </a>
          <nav className="nav epc-nav" aria-label="Primary navigation">
            <a href="/">Home</a><a href="/#services">Services</a><a href="/residential-solar">Residential</a><a href="/commercial-industrial-solar">Commercial</a><a className="active" href="/epc">EPC</a><a href="/#projects">Projects</a><a href="/#contact">Contact</a>
          </nav>
          <a className="header-cta" href="/#contact">Get a Free Quote <span>↗</span></a>
        </div>
      </header>
  );
}
