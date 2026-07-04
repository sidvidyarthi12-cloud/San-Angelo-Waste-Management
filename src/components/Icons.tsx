interface IconProps {
  className?: string
}

export function DumpsterIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <path d="M10 26h44l-5 24H15z" />
      <path d="M6 26h52" strokeLinecap="round" />
      <path d="M24 20h16l3 6H21z" />
      <path d="M22 32v12M32 32v12M42 32v12" strokeLinecap="round" />
    </svg>
  )
}

export function ToiletIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <rect x="18" y="8" width="28" height="48" rx="2" />
      <path d="M18 18h28" strokeLinecap="round" />
      <circle cx="40" cy="34" r="2.4" fill="currentColor" stroke="none" />
      <path d="M25 8v-2M39 8v-2" strokeLinecap="round" />
    </svg>
  )
}

export function TrailerIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <rect x="6" y="18" width="44" height="24" rx="3" />
      <path d="M50 34h8" strokeLinecap="round" />
      <circle cx="18" cy="48" r="5" />
      <circle cx="38" cy="48" r="5" />
      <path d="M14 26h8M26 26h8M38 26h6" strokeLinecap="round" />
    </svg>
  )
}

export function SepticIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <rect x="8" y="24" width="36" height="22" rx="6" />
      <path d="M44 32h10v10" strokeLinecap="round" />
      <path d="M16 24v-6h8v6" />
      <path d="M18 34c2 3 6 3 8 0s6-3 8 0" strokeLinecap="round" />
    </svg>
  )
}

export function FenceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20v34M32 20v34M52 20v34" />
      <path d="M12 14l0 0M12 20l-4-6h8zM32 20l-4-6h8zM52 20l-4-6h8z" />
      <path d="M6 30h52M6 44h52" />
    </svg>
  )
}

export function WashoutIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 28h40l-4 22H16z" />
      <path d="M20 36c2 3 6 3 8 0s6-3 8 0 6 3 8 0" />
      <path d="M32 10v8M26 14l6 4 6-4" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6l4.2 2.5-.8 1.3L11 13V7h2v5.6z" />
    </svg>
  )
}

export function LogoMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="10" fill="#bf240e" />
      <path d="M14 26h36l-5 22H19z" fill="#ffffff" />
      <path d="M11 26h42v-4H11z" fill="#f5f5f5" opacity="0.9" />
      <path d="M26 18h12l3 4H23z" fill="#f5f5f5" />
      <rect x="23" y="32" width="3.5" height="11" fill="#112337" />
      <rect x="31" y="32" width="3.5" height="11" fill="#112337" />
      <rect x="39" y="32" width="3.5" height="11" fill="#112337" />
    </svg>
  )
}

const ICONS = {
  dumpster: DumpsterIcon,
  toilet: ToiletIcon,
  trailer: TrailerIcon,
  septic: SepticIcon,
  fence: FenceIcon,
  washout: WashoutIcon,
}

export function ServiceIcon({ name, className }: { name: keyof typeof ICONS; className?: string }) {
  const Icon = ICONS[name]
  return <Icon className={className} />
}
