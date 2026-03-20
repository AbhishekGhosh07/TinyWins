import Image from "next/image";
import Link from "next/link";

type TinyWinsLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
  href?: string;
};

export function TinyWinsLogo({
  variant = "full",
  className = "",
  priority = false,
  href = "/",
}: TinyWinsLogoProps) {
  const src = variant === "icon" ? "/tinywins-icon.svg" : "/tinywins-logo-tight.png";
  const width = variant === "icon" ? 40 : 317;
  const height = variant === "icon" ? 40 : 115;

  const image = (
    <Image
      src={src}
      alt="TinyWins"
      width={width}
      height={height}
      priority={priority}
      className={
        variant === "icon"
          ? `h-10 w-10 object-contain ${className}`
          : `h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.24)] sm:h-12 ${className}`
      }
      sizes={variant === "full" ? "(max-width: 640px) 152px, 176px" : undefined}
    />
  );

  return href ? (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {image}
    </Link>
  ) : (
    image
  );
}
