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
  const src = variant === "icon" ? "/tinywins-icon.svg" : "/TinyWins-logo.png";
  const width = variant === "icon" ? 40 : 612;
  const height = variant === "icon" ? 40 : 408;

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
          : `h-9 w-auto object-contain sm:h-10 ${className}`
      }
      sizes={variant === "full" ? "(max-width: 640px) 128px, 144px" : undefined}
    />
  );

  return href ? <Link href={href}>{image}</Link> : image;
}
