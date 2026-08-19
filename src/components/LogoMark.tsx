type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <span
      className={`select-none font-mono font-medium tracking-tight ${className}`}
    >
      fr<span className="opacity-60">/</span>
    </span>
  );
}
