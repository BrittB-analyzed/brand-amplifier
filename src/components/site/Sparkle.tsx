import { cn } from "@/lib/utils";

interface SparkleProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "molten" | "blue" | "white" | "twilight";
  animate?: boolean;
}

const sizeMap = { sm: "text-base", md: "text-2xl", lg: "text-4xl", xl: "text-6xl" };
const colorMap = {
  molten: "text-molten",
  blue: "text-btn-blue",
  white: "text-white",
  twilight: "text-twilight",
};

export function Sparkle({ className, size = "md", color = "molten", animate = false }: SparkleProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block leading-none",
        sizeMap[size],
        colorMap[color],
        animate && "animate-sparkle-pulse",
        className,
      )}
    >
      ✦
    </span>
  );
}