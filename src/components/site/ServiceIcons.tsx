import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  size?: number;
};

export function GeoIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Background chat bubble with message lines */}
        <path d="M16.5 3H7.5C6.1 3 5 4.1 5 5.5V12C5 13.4 6.1 14.5 7.5 14.5H9.5L12 17V14.5H16.5C17.9 14.5 19 13.4 19 12V5.5C19 4.1 17.9 3 16.5 3Z" />
        <path d="M7.8 7.5H13.2" />
        <path d="M7.8 10H11.5" />
        {/* Foreground chat bubble with sparkle */}
        <path d="M19.5 7H16C14.6 7 13.5 8.1 13.5 9.5V14C13.5 15.4 14.6 16.5 16 16.5H17.5L19 18V16.5H19.5C20.9 16.5 22 15.4 22 14V9.5C22 8.1 20.9 7 19.5 7Z" />
        <path d="M17.5 10L17.8 10.8L18.7 11L17.8 11.2L17.5 12L17.2 11.2L16.3 11L17.2 10.8Z" />
      </g>
    </svg>
  );
}

export function SeoIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20L15.5 15.5" />
        <path d="M8 11L10.5 8.5L13 10L15.5 7" />
      </g>
    </svg>
  );
}

export function SeaAiAdsIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Target / bullseye */}
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2V5" />
        <path d="M12 19V22" />
        <path d="M22 12H19" />
        <path d="M5 12H2" />
        {/* Sparkle accent */}
        <path d="M18 5L18.4 6.2L19.6 6.5L18.4 6.8L18 8L17.6 6.8L16.4 6.5L17.6 6.2Z" />
      </g>
    </svg>
  );
}

export function CroIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Funnel */}
        <path d="M4 5H20L15 12V19L9 22V12L4 5Z" />
        {/* Cursor pointer */}
        <path d="M16 15L20 21L18 22L17 24L13 18" />
      </g>
    </svg>
  );
}
