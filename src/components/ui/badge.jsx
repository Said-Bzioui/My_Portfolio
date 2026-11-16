import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function Badge({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";
  return <Comp data-slot="badge" className={cn("inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-primary-light", className)} {...props} />;
}
