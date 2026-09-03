import ImageLightbox from "./image-lightbox";
import { screenshots } from "./content";

const imageLightboxId = (file: string) => `lightbox-${file.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

export default function ScreenshotGallery() {
  return (
    <div className="shot-grid">
      {screenshots.map(([file, alt]) => (
        <figure key={file} className="shot">
          <a className="shot-trigger" href={`#${imageLightboxId(file)}`} aria-label={`Agrandir : ${alt}`}>
            <img src={`/screenshots/${file}`} alt={alt} />
          </a>
          <ImageLightbox id={imageLightboxId(file)} src={`/screenshots/${file}`} alt={alt} returnTo="screens" />
        </figure>
      ))}
    </div>
  );
}
