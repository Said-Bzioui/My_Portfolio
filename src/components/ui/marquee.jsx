import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group/marquee flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        "motion-reduce:overflow-visible",
        className
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 ? true : undefined}
          className={cn(
            "flex shrink-0 justify-around gap-(--gap)",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
            "motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:shrink",
            i > 0 && "motion-reduce:hidden"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
