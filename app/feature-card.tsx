import type { Feature } from "./content";
import MediaLightbox from "./media-lightbox";

type FeatureCardProps = {
  feature: Feature;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <>
      <article className="feature-card">
        <span className="feature-number">{feature.number}</span>
        <div className="feature-mark">✦</div>
        <div className="feature-title-row">
          <h3>{feature.title}</h3>
          <a className="media-tab" href={`#${feature.mediaId}`}>Média ↗</a>
        </div>
        <p>{feature.text}</p>
      </article>
      <MediaLightbox
        id={feature.mediaId}
        src={feature.mediaSrc}
        title={feature.mediaTitle}
        returnTo="features"
      />
    </>
  );
}
