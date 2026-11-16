import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn, ZoomOut } from "lucide-react";
import { CERTIFICATES } from "../../lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certificates = CERTIFICATES.map((certificate, index) => ({
  ...certificate,
  title: certificate.title || (certificate.photo.includes('certificat-lhybride') ? 'L’Hybride Praticien' : `Certificat ${String(index + 1).padStart(2, '0')}`),
  issuer: certificate.issuer || (certificate.photo.includes('certificat-lhybride') ? 'L’Hybride · 2026' : null),
}));

export default function CertificatesPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const isOpen = selectedIndex !== null;
  const selected = isOpen ? certificates[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const select = (index) => {
    setZoomed(false);
    setSelectedIndex(index);
  };
  const navigate = (direction) => select((selectedIndex + direction + certificates.length) % certificates.length);

  return (
    <section id="Certificates" aria-labelledby="certificates-title" className="relative scroll-mt-24 px-[5%] py-16 text-foreground sm:py-24 lg:px-[10%]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-light">
              <span className="h-px w-8 bg-primary" aria-hidden="true" /> Formation
            </p>
            <h2 id="certificates-title" className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Mes certificats<span className="text-primary">.</span></h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">Les certificats obtenus au fil de mes formations. Sélectionnez un document pour le consulter.</p>
          </div>
          <Badge className="w-fit gap-2 px-3 py-1.5 text-xs"><Award className="size-3.5" aria-hidden="true" />{certificates.length} certificats</Badge>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.photo}
              type="button"
              onClick={() => select(index)}
              aria-label={`Consulter ${certificate.title}`}
              aria-haspopup="dialog"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/95 p-4 sm:p-5">
                <img src={certificate.photo} alt={`Aperçu de ${certificate.title}`} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
                <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full border border-white/15 bg-page-background/85 text-white shadow-lg transition-colors group-hover:bg-primary" aria-hidden="true"><ZoomIn className="size-4" /></span>
              </div>
              <div className="flex items-center gap-4 p-5">
                <span className="text-xs font-medium tabular-nums text-primary-light" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold sm:text-base">{certificate.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{certificate.issuer || 'Voir le document'}</p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-light motion-reduce:transform-none" aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {createPortal(
        <dialog
          ref={dialogRef}
          aria-labelledby="certificate-preview-title"
          aria-describedby="certificate-preview-help"
          onCancel={(event) => { event.preventDefault(); setSelectedIndex(null); }}
          onClick={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
            if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
          }}
          className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%_-_1.5rem)] max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 motion-reduce:animate-none"
        >
          {selected && <div className="flex max-h-[94dvh] flex-col">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <h3 id="certificate-preview-title" className="truncate text-sm font-semibold sm:text-base">{selected.title}</h3>
                <p id="certificate-preview-help" className="mt-1 text-xs text-muted-foreground">{selected.issuer || 'Aperçu du document'}<span className="hidden sm:inline"> · Flèches pour naviguer, Échap pour fermer</span></p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Button variant="ghost" size="icon" onClick={() => setZoomed((value) => !value)} aria-label={zoomed ? 'Réduire le certificat' : 'Agrandir le certificat'} aria-pressed={zoomed} className="rounded-full">{zoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}</Button>
                <Button ref={closeRef} variant="ghost" size="icon" onClick={() => setSelectedIndex(null)} aria-label="Fermer le certificat" className="rounded-full"><X className="size-5" /></Button>
              </div>
            </div>
            <div key={selected.photo} className="min-h-0 flex-1 overflow-auto bg-surface-raised p-2 sm:p-5">
              <img src={selected.photo} alt={selected.title} className={zoomed ? 'mx-auto block w-[150%] min-w-[150%] max-w-none' : 'mx-auto block max-h-[68dvh] w-auto max-w-full object-contain'} />
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-6">
              <Button asChild variant="ghost" size="sm" className="gap-2 text-xs text-muted-foreground"><a href={selected.photo} target="_blank" rel="noopener noreferrer">Ouvrir l’original<ExternalLink className="size-3.5" /></a></Button>
              <div className="flex items-center gap-3">
                <span className="text-xs tabular-nums text-muted-foreground" aria-live="polite" aria-atomic="true">{selectedIndex + 1} / {certificates.length}</span>
                <Button variant="outline" size="icon" onClick={() => navigate(-1)} aria-label="Certificat précédent" className="size-9 rounded-full"><ChevronLeft className="size-4" /></Button>
                <Button variant="outline" size="icon" onClick={() => navigate(1)} aria-label="Certificat suivant" className="size-9 rounded-full"><ChevronRight className="size-4" /></Button>
              </div>
            </div>
          </div>}
        </dialog>, document.body
      )}
    </section>
  );
}
