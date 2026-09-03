import ImageLightbox from "./image-lightbox";
import { recoveryScreenshots } from "./content";

const imageLightboxId = (file: string) => `lightbox-${file.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

export default function RecoveryGallery() {
  return (
    <div className="recovery-grid">
      {recoveryScreenshots.map(([file, title, text], index) => (
        <figure key={file} className="recovery-shot">
          <div className="recovery-shot-image">
            <a className="shot-trigger" href={`#${imageLightboxId(file)}`} aria-label={`Agrandir : ${title}`}>
              <img src={`/screenshots/${file}`} alt={title} />
            </a>
          </div>
          <figcaption>
            <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </figcaption>
          <ImageLightbox id={imageLightboxId(file)} src={`/screenshots/${file}`} alt={title} returnTo="recovery-preview" />
        </figure>
      ))}
    </div>
  );
}
