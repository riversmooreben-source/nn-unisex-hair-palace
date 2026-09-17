import logo from "../assets/logo.jpg";

export default function Logo({ variant = "dark", className = "" }) {
  const isDark = variant === "dark";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="N&N Unisex Hair Palace logo"
        className="h-11 w-11 rounded-full object-cover"
      />
      <span
        className={`font-display text-lg font-bold leading-tight tracking-wide ${
          isDark ? "text-brand-cream" : "text-brand-black"
        }`}
      >
        N&amp;N Unisex
        <br />
        <span className="text-xs font-sans font-medium tracking-widest uppercase opacity-80">
          Hair Palace
        </span>
      </span>
    </div>
  );
}
