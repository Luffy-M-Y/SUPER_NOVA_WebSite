export default function SiteNav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a className="brand" href="#top" aria-label="Accueil SUPER NOVA"><img className="brand-icon" src="/SUPER_NOVA.ico" alt="" /> SUPER NOVA</a>
      <div className="nav-links"><a href="#features">Fonctionnalités</a><a href="#screens">Aperçu</a><a href="#recovery-preview">Récupération</a><a href="#requirements">Prérequis</a></div>
      <a className="button button-small" href="/SUPER_NOVA_SETUP.exe" download>Télécharger</a>
    </nav>
  );
}
