type ImageLightboxProps = {
  id: string;
  src: string;
  alt: string;
  returnTo: string;
};

export default function ImageLightbox({ id, src, alt, returnTo }: ImageLightboxProps) {
  return (
    <div id={id} className="lightbox">
      <a className="lightbox-backdrop" href={`#${returnTo}`} aria-label="Fermer l’aperçu" />
      <div className="lightbox-content">
        <a className="lightbox-close" href={`#${returnTo}`} aria-label="Fermer l’aperçu">×</a>
        <img src={src} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
}
