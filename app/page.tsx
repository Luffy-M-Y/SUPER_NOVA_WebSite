const features = [
  {
    number: "01",
    title: "Scanner Wi-Fi",
    text: "Consultez localement les informations du réseau Wi-Fi connecté dans une interface claire. La localisation Windows peut être requise.",
    mediaId: "media-scan-wifi",
    mediaSrc: "/screenshots/scan_wifi.mp4",
    mediaTitle: "Démonstration pratique du scanner Wi-Fi",
  },
  {
    number: "02",
    title: "Mot de passe Windows",
    text: "Gérez les mots de passe des comptes Windows locaux depuis l’application. Les comptes Microsoft restent gérés dans les paramètres Windows.",
    mediaId: "media-password",
    mediaSrc: "/screenshots/MDP_change.mp4",
    mediaTitle: "Démonstration pratique de la gestion des mots de passe",
  },
  {
    number: "03",
    title: "Compagnon Recovery",
    text: "SUPER NOVA RECOVERY est un projet WinPE séparé pour créer, lorsque nécessaire, une clé USB de récupération autorisée.",
    mediaId: "media-recovery",
    mediaSrc: "/screenshots/RECOVERY.mp4",
    mediaTitle: "Démonstration pratique de SUPER NOVA RECOVERY",
  },
];

const screenshots = [
  ["vue_generale.webp", "Vue générale de SUPER NOVA"],
  ["scan_wifi.webp", "Analyse des informations Wi-Fi"],
  ["mot_de_passe_definition1.webp", "Choix Je n’ai pas de mot de passe"],
  ["mot_de_passe_definition2.webp", "Définition d’un nouveau mot de passe"],
  ["Mot_de_passe_defini.webp", "Mot de passe défini avec succès"],
  ["mot_de_passe_incorect.webp", "Message de mot de passe incorrect"],
  ["onglet_recovery.webp", "Onglet Recovery de SUPER NOVA"],
  ["creation_clef_succes.webp", "Création réussie d’une clé de récupération"],
] as const;

const recoveryScreenshots = [
  ["select_key.webp", "Sélection de la clé USB", "Choisissez précisément le périphérique à préparer avant toute écriture."],
  ["avertissemnt_formatage_clef.webp", "Avertissement avant le formatage", "Les données de la clé sélectionnée seront effacées avant la création."],
  ["creation_clef_winpe.webp", "Création de la clé WinPE", "La copie de l’image et la préparation des fichiers WinPE se déroulent étape par étape."],
  ["creation_clef_succes.webp", "Création de la clé terminée", "La clé est prête à démarrer le parcours de récupération Windows."],
] as const;

const lightboxId = (file: string) => `lightbox-${file.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Accueil SUPER NOVA"><img className="brand-icon" src="/SUPER_NOVA.ico" alt="" /> SUPER NOVA</a>
        <div className="nav-links"><a href="#features">Fonctionnalités</a><a href="#screens">Aperçu</a><a href="#recovery-preview">Récupération</a><a href="#requirements">Prérequis</a></div>
        <a className="button button-small" href="/SUPER_NOVA_SETUP.exe" download>Télécharger</a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="eyebrow">UTILITAIRE WINDOWS · LOCAL AVANT TOUT</p>
          <h1>Un peu plus de sérénité<br />pour votre <em>PC Windows.</em></h1>
          <p className="hero-copy">SUPER NOVA réunit les outils Windows du quotidien — informations Wi-Fi et paramètres des comptes locaux — dans une application de bureau familière. SUPER NOVA RECOVERY reste un projet compagnon séparé pour les supports de récupération amorçables.</p>
          <div className="hero-actions">
            <a className="button" href="/SUPER_NOVA_SETUP.exe" download>Télécharger SUPER NOVA <span>↓</span></a>
            <a className="text-link" href="#features">Découvrir les fonctionnalités <span>→</span></a>
          </div>
          <p className="offline-note"><span>●</span> Fonctionne localement sur Windows — utilisable hors ligne</p>
        </div>
        <div className="product-window" aria-hidden="true">
          <div className="window-bar"><i /><i /><i /><span>SUPER NOVA</span></div>
          <div className="window-main"><div className="window-symbol">✦</div><p>Bienvenue.</p><strong>Que souhaitez-vous faire&nbsp;?</strong><div className="window-actions"><b>Informations réseau</b><b>Paramètres du compte</b><b>Compagnon Recovery</b></div></div>
          <div className="window-footer">Tout reste sur cet ordinateur <span>●</span></div>
        </div>
      </section>

      <section id="features" className="section features">
        <div className="section-intro"><p className="eyebrow">CONÇU POUR L’ESSENTIEL</p><h2>Sans superflu.<br /><em>Juste des outils utiles.</em></h2></div>
        <div className="feature-grid">
          {features.map((feature) => <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span><div className="feature-mark">✦</div><div className="feature-title-row"><h3>{feature.title}</h3><a className="media-tab" href={`#${feature.mediaId}`}>Média ↗</a></div><p>{feature.text}</p>
          </article>)}
        </div>
        {features.map((feature) => <div id={feature.mediaId} className="lightbox media-lightbox" key={feature.mediaId}>
          <a className="lightbox-backdrop" href="#features" aria-label="Fermer la vidéo" />
          <div className="lightbox-content">
            <a className="lightbox-close" href="#features" aria-label="Fermer la vidéo">×</a>
            <video controls preload="metadata">
              <source src={feature.mediaSrc} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
            <p>{feature.mediaTitle}</p>
          </div>
        </div>)}
      </section>

      <section id="screens" className="section screenshots">
        <div className="section-intro"><p className="eyebrow">APERÇU DE L’APPLICATION</p><h2>Pensé pour<br /><em>les vrais besoins.</em></h2></div>
        <div className="shot-grid">
          {screenshots.map(([file, alt]) => <figure key={file} className="shot">
            <a className="shot-trigger" href={`#${lightboxId(file)}`} aria-label={`Agrandir : ${alt}`}>
              <img src={`/screenshots/${file}`} alt={alt} />
            </a>
            <div id={lightboxId(file)} className="lightbox">
              <a className="lightbox-backdrop" href="#screens" aria-label="Fermer l’aperçu" />
              <div className="lightbox-content">
                <a className="lightbox-close" href="#screens" aria-label="Fermer l’aperçu">×</a>
                <img src={`/screenshots/${file}`} alt={alt} />
                <p>{alt}</p>
              </div>
            </div>
          </figure>)}
        </div>
      </section>

      <section id="recovery-preview" className="section recovery-preview">
        <div className="section-intro"><p className="eyebrow">APERÇU DE L’OUTIL DE RÉCUPÉRATION</p><h2>Une préparation<br /><em>guidée et lisible.</em></h2></div>
        <div className="recovery-grid">
          {recoveryScreenshots.map(([file, title, text], index) => <figure key={file} className="recovery-shot">
            <div className="recovery-shot-image">
              <a className="shot-trigger" href={`#${lightboxId(file)}`} aria-label={`Agrandir : ${title}`}>
                <img src={`/screenshots/${file}`} alt={title} />
              </a>
            </div>
            <figcaption><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></figcaption>
            <div id={lightboxId(file)} className="lightbox">
              <a className="lightbox-backdrop" href="#recovery-preview" aria-label="Fermer l’aperçu" />
              <div className="lightbox-content">
                <a className="lightbox-close" href="#recovery-preview" aria-label="Fermer l’aperçu">×</a>
                <img src={`/screenshots/${file}`} alt={title} />
                <p>{title}</p>
              </div>
            </div>
          </figure>)}
        </div>
      </section>

      <section id="requirements" className="section requirements">
        <div><p className="eyebrow">PRÉREQUIS SYSTÈME</p><h2>Prêt quand<br /><em>vous l’êtes.</em></h2></div>
        <div className="requirements-card">
          <div><span>Système d’exploitation</span><strong>Windows 10 ou Windows 11</strong></div>
          <div><span>Connexion</span><strong>Non requise après le téléchargement</strong></div>
          <div><span>Scan Wi-Fi</span><strong>La localisation Windows peut être requise</strong></div>
          <div><span>Installation</span><strong>Des droits administrateur locaux peuvent être nécessaires pour les comptes</strong></div>
        </div>
      </section>

      <section className="cta"><p className="eyebrow">LOCAL PAR CONCEPTION</p><h2>Gardez l’essentiel<br /><em>à portée de main.</em></h2><p>Un utilitaire ciblé, prêt quand vous en avez besoin.</p><a className="button" href="/SUPER_NOVA_SETUP.exe" download>Télécharger SUPER NOVA <span>↓</span></a></section>

      <footer><a className="brand" href="#top"><img className="brand-icon" src="/SUPER_NOVA.ico" alt="" /> SUPER NOVA</a><p>Utilitaire Windows local. Aucune connexion cloud requise.</p><a href="https://github.com/Luffy-M-Y/SUPER_NOVA_WebSite" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
