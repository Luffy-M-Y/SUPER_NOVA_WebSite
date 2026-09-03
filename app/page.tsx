import FeatureCard from "./feature-card";
import ScreenshotGallery from "./screenshot-gallery";
import RecoveryGallery from "./recovery-gallery";
import SiteNav from "./site-nav";
import SiteFooter from "./site-footer";
import { features } from "./content";

export default function Home() {
  return (
    <main>
      <SiteNav />

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
          {features.map((feature) => <FeatureCard feature={feature} key={feature.number} />)}
        </div>
      </section>

      <section id="screens" className="section screenshots">
        <div className="section-intro"><p className="eyebrow">APERÇU DE L’APPLICATION</p><h2>Pensé pour<br /><em>les vrais besoins.</em></h2></div>
        <ScreenshotGallery />
      </section>

      <section id="recovery-preview" className="section recovery-preview">
        <div className="section-intro"><p className="eyebrow">APERÇU DE L’OUTIL DE RÉCUPÉRATION</p><h2>Une préparation<br /><em>guidée et lisible.</em></h2></div>
        <RecoveryGallery />
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

      <SiteFooter />
    </main>
  );
}
