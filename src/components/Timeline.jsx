import { BriefcaseBusiness, Check, GraduationCap } from "lucide-react";

const ExperienceProjects = ({ projects }) => {
    if (!projects?.length) return null;

    return (
        <div className="mt-6 border-t border-white/10 pt-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Projets marquants
            </h4>
            <ul className="grid gap-3 sm:grid-cols-1">
                {projects.map((project) => (
                    <li key={project.name} className="rounded-xl border border-white/10 bg-black/10 p-3.5">
                        <p className="text-sm font-semibold text-foreground">{project.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Responsibilities = ({ items }) => {
    if (!items?.length) return null;

    return (
        <div className="mt-6 border-t border-white/10 pt-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Responsabilités principales
            </h4>
            <ul className="divide-y divide-white/[0.07]">
                {items.map((responsibility) => (
                    <li key={responsibility.title} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-primary">
                            <Check className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-foreground">{responsibility.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{responsibility.summary}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Timeline = ({ data = [] }) => (
    <div className="py-10 sm:py-14">
        <ol className="relative mx-auto max-w-6xl space-y-8 before:absolute before:bottom-8 before:left-[11px] before:top-8 before:w-px before:bg-gradient-to-b before:from-primary/70 before:via-secondary/35 before:to-transparent md:space-y-12 md:before:left-1/2 md:before:-translate-x-1/2">
            {data.map((item, index) => {
                const isEducation = !item.projects && !item.responsibilities;
                const Icon = isEducation ? GraduationCap : BriefcaseBusiness;

                return (
                    <li
                        key={`${item.title}-${item.date}`}
                        className={`relative pl-10 md:flex md:w-1/2 md:pl-0 ${item.side === "left" ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                    >
                        <span className={`absolute left-0 top-6 z-10 flex size-6 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_20px_rgba(120,90,255,0.2)] md:top-7 md:translate-x-1/2 ${item.side === "left" ? "md:left-auto md:right-[-7px]" : "md:left-[-14px] md:right-auto"}`}>
                            <Icon className="size-3.5" aria-hidden="true" />
                        </span>
                        <article className="w-full rounded-2xl border border-white/10 bg-card/70 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-6">
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    {isEducation ? "Formation" : "Expérience"}
                                </span>
                                <time className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground/75">
                                    {item.date}
                                </time>
                            </div>
                            <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            <Responsibilities items={item.responsibilities} />
                            <ExperienceProjects projects={item.projects} />
                        </article>
                    </li>
                );
            })}
        </ol>
    </div>
);

export default Timeline;
