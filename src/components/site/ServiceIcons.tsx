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
        <path d="M15.5 2.5H7C5.5 2.5 4.5 3.5 4.5 5V11.5C4.5 13 5.5 14 7 14H9.5L12 16.5V14H15.5C17 14 18 13 18 11.5V5C18 3.5 17 2.5 15.5 2.5Z" />
        <path d="M7.5 7H13.5" />
        <path d="M7.5 9.5H11.5" />
        {/* Foreground chat bubble with sparkle */}
        <path d="M19.5 6.5H16.5C15.5 6.5 14.5 7.5 14.5 8.5V13.5C14.5 14.5 15.5 15.5 16.5 15.5H18L19.5 17V15.5H19.5C20.5 15.5 21.5 14.5 21.5 13.5V8.5C21.5 7.5 20.5 6.5 19.5 6.5Z" />
        <path d="M17.5 10L17.8 11L18.8 11.2L17.8 11.5L17.5 12.5L17.2 11.5L16.2 11.2L17.2 11Z" />
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
        <path d="M7.5 11.5L10.5 8.5L13 10.5L15.5 7.5" />
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
        <path d="M18 4L18.4 5.2L19.6 5.5L18.4 5.8L18 7L17.6 5.8L16.4 5.5L17.6 5.2Z" />
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
        <path d="M3 4H21L15 12V18L9 21V12L3 4Z" />
        {/* Cursor pointer */}
        <path d="M14 13L14 22L17 19L19.5 23.5L22 22L19.5 17.5H23.5L14 13Z" />
      </g>
    </svg>
  );
}
