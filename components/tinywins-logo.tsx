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
  const src = variant === "icon" ? "/tinywins-icon.svg" : "/tinywins-logo.svg";
  const width = variant === "icon" ? 40 : 176;
  const height = variant === "icon" ? 40 : 44;

  const image = (
    <Image
      src={src}
      alt="TinyWins"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto ${className}`}
    />
  );

  return href ? <Link href={href}>{image}</Link> : image;
}
