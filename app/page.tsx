const features = [
  {
    number: "01",
    title: "Wi-Fi scanner",
    text: "See the Wi-Fi networks available around you in a clear, focused local interface.",
  },
  {
    number: "02",
    title: "Password manager",
    text: "Update your Windows account password from within the desktop application.",
  },
  {
    number: "03",
    title: "Recovery USB",
    text: "Prepare a recovery USB drive when you need a practical backup path.",
  },
];

const screenshots = [
  ["Start_Scan.webp", "SUPER NOVA Wi-Fi scanner start screen"],
  ["Scan.webp", "SUPER NOVA Wi-Fi scan results"],
  ["start_Password.webp", "SUPER NOVA password manager start screen"],
  ["password.webp", "SUPER NOVA password manager"],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="SUPER NOVA home"><span>✦</span> SUPER NOVA</a>
        <div className="nav-links"><a href="#features">Features</a><a href="#screens">Screens</a><a href="#requirements">Requirements</a></div>
        <a className="button button-small" href="/SUPER_NOVA_SETUP.exe" download>Download</a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-content">
        <p className="eyebrow">WINDOWS DESKTOP UTILITY · LOCAL FIRST</p>
        <h1>A little more calm<br />for your <em>Windows PC.</em></h1>
        <p className="hero-copy">SUPER NOVA gathers the practical things you occasionally need—your Wi-Fi information, account settings and a recovery tool—in one familiar desktop application.</p>
        <div className="hero-actions">
          <a className="button" href="/SUPER_NOVA_SETUP.exe" download>Download SUPER NOVA <span>↓</span></a>
          <a className="text-link" href="#features">See what it does <span>→</span></a>
        </div>
        <p className="offline-note"><span>●</span> Runs locally on Windows — works offline</p>
        </div>
        <div className="product-window" aria-hidden="true">
          <div className="window-bar"><i /><i /><i /><span>SUPER NOVA</span></div>
          <div className="window-main"><div className="window-symbol">✦</div><p>Good to see you.</p><strong>What would you like to do?</strong><div className="window-actions"><b>Network information</b><b>Account settings</b><b>Recovery utility</b></div></div>
          <div className="window-footer">Everything stays on this computer <span>●</span></div>
        </div>
      </section>

      <section id="features" className="section features">
        <div className="section-intro"><p className="eyebrow">BUILT FOR THE ESSENTIALS</p><h2>No clutter.<br /><em>Just useful tools.</em></h2></div>
        <div className="feature-grid">
          {features.map((feature) => <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span><div className="feature-mark">✦</div><h3>{feature.title}</h3><p>{feature.text}</p>
          </article>)}
        </div>
      </section>

      <section id="screens" className="section screenshots">
        <div className="section-intro"><p className="eyebrow">A CLOSER LOOK</p><h2>Designed for<br /><em>real moments.</em></h2></div>
        <div className="shot-grid">
          {screenshots.map(([file, alt]) => <figure key={file} className="shot">
            <img src={`/screenshots/${file}`} alt={alt} />
          </figure>)}
        </div>
        <p className="asset-note">Add the application captures to <code>public/screenshots/</code> to display them here.</p>
      </section>

      <section id="requirements" className="section requirements">
        <div><p className="eyebrow">SYSTEM REQUIREMENTS</p><h2>Ready when<br /><em>you are.</em></h2></div>
        <div className="requirements-card">
          <div><span>Operating system</span><strong>Windows 10 or Windows 11</strong></div>
          <div><span>Connection</span><strong>Not required after download</strong></div>
          <div><span>Installation</span><strong>Local administrator access may be needed</strong></div>
        </div>
      </section>

      <section className="cta"><p className="eyebrow">LOCAL BY DESIGN</p><h2>Keep the essentials<br /><em>close at hand.</em></h2><p>One focused utility, ready whenever you need it.</p><a className="button" href="/SUPER_NOVA_SETUP.exe" download>Download SUPER NOVA <span>↓</span></a></section>

      <footer><a className="brand" href="#top"><span>✦</span> SUPER NOVA</a><p>Local Windows utility. No cloud connection required.</p><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
