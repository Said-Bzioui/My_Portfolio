import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

function TooltipProvider({ delayDuration = 100, ...props }) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}
function Tooltip(props) {
  return <TooltipPrimitive.Root {...props} />;
}
function TooltipTrigger(props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}
function TooltipContent({ className, sideOffset = 8, children, ...props }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn("z-50 rounded-lg border border-primary/25 bg-popover px-3 py-2 text-xs text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=top]:slide-in-from-bottom-2 motion-reduce:animate-none", className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-popover" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
