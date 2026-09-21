import wordmark from "../assets/logo-wordmark.png";
import emblem from "../assets/logo-emblem.jpg";

// "wordmark" (nav bar, favicon source): simpler lockup, reads well at small sizes.
// "emblem" (hero, footer): full circular badge — has room to hold its detail there.
export default function Logo({ variant = "wordmark", className = "" }) {
  if (variant === "emblem") {
    return (
      <img
        src={emblem}
        alt="N&N Hair & Beauty"
        className={`rounded-full object-cover ${className || "h-16 w-16"}`}
      />
    );
  }

  return (
    <img
      src={wordmark}
      alt="N&N Hair & Beauty"
      className={`w-auto object-contain ${className || "h-9"}`}
    />
  );
}
