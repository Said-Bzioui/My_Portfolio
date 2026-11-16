import { ArrowUpRight } from "lucide-react";

const StatusCard = ({ icon: Icon, href, value, label, description }) => (
  <a
    href={href}
    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-primary/40 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:p-7"
  >
    <div className="mb-6 flex items-center justify-between">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-light" aria-hidden="true" />
    </div>
    <span className="text-5xl font-semibold tracking-tight text-foreground tabular-nums">{value}</span>
    <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
  </a>
);

export default StatusCard;
