type MediaLightboxProps = {
  id: string;
  src: string;
  title: string;
  returnTo: string;
};

export default function MediaLightbox({ id, src, title, returnTo }: MediaLightboxProps) {
  return (
    <div id={id} className="lightbox media-lightbox">
      <a className="lightbox-backdrop" href={`#${returnTo}`} aria-label="Fermer la vidéo" />
      <div className="lightbox-content">
        <a className="lightbox-close" href={`#${returnTo}`} aria-label="Fermer la vidéo">×</a>
        <video controls preload="metadata">
          <source src={src} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
        <p>{title}</p>
      </div>
    </div>
  );
}
