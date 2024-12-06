import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200/10 bg-white/5 p-6 backdrop-blur-lg dark:bg-black/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
