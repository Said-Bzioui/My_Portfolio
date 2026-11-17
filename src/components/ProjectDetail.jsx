import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Code2, ExternalLink, FileImage, FolderOpen, Layers, X, ZoomIn, ZoomOut } from "lucide-react";
import Github from "@thesvg/react/github";
import { PROJECTS } from "../../lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SeoHead from "@/components/SeoHead";

function ProjectImage({ src, alt, className, eager = false }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <>
      {!loaded && !failed && <span aria-hidden="true" className="absolute inset-0 bg-white/5 motion-safe:animate-pulse" />}
      {failed ? (
        <span className="flex min-h-32 w-full flex-col items-center justify-center gap-3 px-4 py-10 text-sm text-muted-foreground">
          <FileImage className="size-8" aria-hidden="true" /> Aperçu indisponible
        </span>
      ) : (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} className={className} />
      )}
    </>
  );
}

function ProjectGallery({ project }) {
  const images = [...new Set([project.photo, ...(project.pictures || [])].filter(Boolean))];
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, [open]);

  const select = (next) => { setIndex(next); setZoomed(false); };
  const move = (direction) => select((index + direction + images.length) % images.length);
  if (!images.length) return null;

  return (
    <>
      <figure className="overflow-hidden rounded-2xl border border-white/10 bg-card">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-primary" aria-hidden="true" /> Aperçu du projet</span>
          <span className="text-xs tabular-nums text-muted-foreground">{index + 1} / {images.length}</span>
        </div>
        <button type="button" onClick={() => { setZoomed(false); setOpen(true); }} aria-label={`Agrandir l’aperçu de ${project.title}`} aria-haspopup="dialog" className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-surface-raised focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary">
          <ProjectImage key={images[index]} src={images[index]} alt={`${project.title}, aperçu ${index + 1}`} eager className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none" />
          <span aria-hidden="true" className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/15 bg-page-background/85 px-3 py-2 text-xs text-white shadow-lg"><ZoomIn className="size-4" /> Agrandir</span>
        </button>
        {images.length > 1 && <div className="flex gap-3 overflow-x-auto border-t border-white/10 p-4" aria-label="Choisir une capture">
          {images.map((image, imageIndex) => <button key={image} type="button" onClick={() => select(imageIndex)} aria-label={`Afficher la capture ${imageIndex + 1}`} aria-pressed={index === imageIndex} className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === imageIndex ? 'border-primary' : 'border-transparent hover:border-white/30'}`}>
            <ProjectImage key={image} src={image} alt="" className="h-full w-full object-cover" />
          </button>)}
        </div>}
      </figure>

      {createPortal(<dialog ref={dialogRef} aria-labelledby="project-image-title" onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      }} className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%_-_1.5rem)] max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 motion-reduce:animate-none">
        {open && <div className="flex max-h-[94dvh] flex-col">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
            <h2 id="project-image-title" className="truncate text-sm font-medium">{project.title}</h2>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={() => setZoomed((value) => !value)} aria-label={zoomed ? 'Réduire la capture' : 'Agrandir la capture'} aria-pressed={zoomed}>{zoomed ? <ZoomOut /> : <ZoomIn />}</Button>
              <Button ref={closeRef} variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer l’aperçu"><X /></Button>
            </div>
          </div>
          <div className="relative min-h-0 flex-1 overflow-auto bg-surface-raised p-2 sm:p-4">
            <ProjectImage key={images[index]} src={images[index]} alt={`${project.title}, capture ${index + 1}`} eager className={zoomed ? 'block w-[150%] min-w-[150%] max-w-none' : 'mx-auto block max-h-[72dvh] w-auto max-w-full object-contain'} />
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
            <Button asChild variant="ghost" size="sm"><a href={images[index]} target="_blank" rel="noopener noreferrer">Ouvrir l’image<ExternalLink className="size-3.5" /></a></Button>
            {images.length > 1 && <div className="flex items-center gap-3">
              <span className="text-xs tabular-nums text-muted-foreground" aria-live="polite">{index + 1} / {images.length}</span>
              <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Capture précédente"><ChevronLeft /></Button>
              <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Capture suivante"><ChevronRight /></Button>
            </div>}
          </div>
        </div>}
      </dialog>, document.body)}
    </>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const position = PROJECTS.findIndex((project) => String(project.id) === id);
  const project = PROJECTS[position];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [id]);

  if (!project) return (
    <>
      <SeoHead title="Projet introuvable | SAID BZIOUI" description="Ce projet n’est pas disponible. Retrouvez les autres réalisations dans le portfolio de Said Bzioui." path={`/project/${id}`} noindex />
    <main className="flex min-h-screen items-center justify-center bg-page-background px-6 text-center text-foreground">
      <div className="max-w-md">
        <FolderOpen className="mx-auto mb-6 size-12 text-primary-light" aria-hidden="true" />
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary-light">Projet introuvable</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ce projet n’est pas disponible.</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Retrouvez les autres réalisations dans mon portfolio.</p>
        <Button asChild className="mt-7 rounded-full px-6"><Link to="/#Projects"><ArrowLeft className="size-4" />Voir les projets</Link></Button>
      </div>
    </main>
    </>
  );

  const stack = [...new Set(project.stack || [])];
  const features = project.Features || [];
  const previous = PROJECTS[position - 1];
  const next = PROJECTS[position + 1];

  return (
    <>
    <SeoHead title={`${project.title} | Projet de SAID BZIOUI`} description={project.description} path={`/project/${id}`} image={project.photo} type="article" />
    <main className="relative min-h-screen bg-page-background px-[5%] pb-12 text-foreground sm:pb-20 lg:px-[8%]">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between gap-5 border-b border-white/10 py-5 sm:py-7">
          <Link to="/" className="text-sm font-semibold tracking-wide">SAID BZIOUI<span className="text-primary">.</span></Link>
          <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground"><Link to="/#Projects"><ArrowLeft className="size-4" />Tous les projets</Link></Button>
        </header>
        <nav aria-label="Fil d’Ariane" className="mt-7 flex min-w-0 items-center gap-2 text-xs text-muted-foreground sm:mt-10">
          <Link to="/#Projects" className="shrink-0 transition-colors hover:text-primary-light">Projets</Link><ChevronRight className="size-3.5 shrink-0" aria-hidden="true" /><span aria-current="page" className="truncate text-foreground/80">{project.title}</span>
        </nav>
        <div className="py-8 sm:py-12">
          <Badge className="mb-5 gap-2"><Layers className="size-3" aria-hidden="true" />Projet {String(position + 1).padStart(2, '0')}</Badge>
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,1fr)] lg:gap-10">
          <div className="min-w-0 space-y-7 sm:space-y-9">
            <ProjectGallery key={project.id} project={project} />
            <section aria-labelledby="project-overview-title" className="rounded-2xl border border-white/10 bg-card p-5 sm:p-7">
              <h2 id="project-overview-title" className="mb-4 text-xl font-semibold">À propos du projet</h2>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{project.description}</p>
            </section>
            {features.length > 0 && <section aria-labelledby="project-features-title" className="rounded-2xl border border-white/10 bg-card p-5 sm:p-7">
              <h2 id="project-features-title" className="mb-5 text-xl font-semibold">Fonctionnalités</h2>
              <ul className="grid gap-4 sm:grid-cols-2">{features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-light"><Check className="size-3" aria-hidden="true" /></span>{feature}</li>)}</ul>
            </section>}
          </div>

          <aside aria-label="Informations et liens du projet" className="space-y-5 lg:sticky lg:top-8">
            <Card className="gap-0 overflow-hidden border-white/10 py-0">
              <CardContent className="space-y-6 p-5 sm:p-6">
                <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-light"><Code2 className="size-5" aria-hidden="true" /></span><div><h2 className="font-semibold">Technologies</h2><p className="mt-0.5 text-xs text-muted-foreground">Le stack utilisé pour ce projet</p></div></div>
                {stack.length ? <ul className="flex flex-wrap gap-2" aria-label="Technologies utilisées">{stack.map((tech) => <li key={tech}><Badge className="rounded-lg border-white/10 bg-surface-raised px-3 py-1.5 text-xs font-normal text-foreground/90">{tech}</Badge></li>)}</ul> : <p className="text-sm text-muted-foreground">Le stack n’est pas renseigné pour ce projet.</p>}
                <div className="space-y-3 border-t border-white/10 pt-5">
                  {project.link ? <Button asChild className="min-h-11 w-full rounded-xl"><a href={project.link} target="_blank" rel="noopener noreferrer">Voir le site<ArrowUpRight className="size-4" /></a></Button> : <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs text-muted-foreground">Aucune démonstration publique disponible.</p>}
                  {project.github && <Button asChild variant="outline" className="min-h-11 w-full rounded-xl border-white/15"><a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="size-4" aria-hidden="true" />Code source<ArrowUpRight className="size-4" /></a></Button>}
                </div>
              </CardContent>
            </Card>
            <p className="px-2 text-xs leading-relaxed text-muted-foreground">Les liens vers le site et le code source s’ouvrent dans un nouvel onglet.</p>
          </aside>
        </div>

        <nav aria-label="Parcourir les projets" className="mt-12 grid gap-4 border-t border-white/10 pt-7 sm:mt-16 sm:grid-cols-2">
          {previous ? <Link to={`/project/${previous.id}`} className="group flex items-center gap-4 rounded-xl border border-white/10 p-5 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft className="size-5 shrink-0 text-primary-light transition-transform group-hover:-translate-x-1" /><div className="min-w-0"><p className="mb-1 text-xs text-muted-foreground">Projet précédent</p><p className="truncate text-sm font-medium">{previous.title}</p></div></Link> : <Link to="/#Projects" className="flex items-center gap-3 rounded-xl border border-white/10 p-5 text-sm text-muted-foreground hover:text-primary-light"><ArrowLeft className="size-4" />Tous les projets</Link>}
          {next && <Link to={`/project/${next.id}`} className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-primary"><div className="min-w-0"><p className="mb-1 text-xs text-muted-foreground">Projet suivant</p><p className="truncate text-sm font-medium">{next.title}</p></div><ArrowRight className="size-5 shrink-0 text-primary-light transition-transform group-hover:translate-x-1" /></Link>}
        </nav>
      </div>
    </main>
    </>
  );
}
