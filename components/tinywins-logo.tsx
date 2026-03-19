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
  const width = variant === "icon" ? 40 : 240;
  const height = variant === "icon" ? 40 : 64;

  const image = (
    <div
      className={
        variant === "icon"
          ? `inline-flex h-10 w-10 items-center justify-center overflow-hidden ${className}`
          : `relative inline-flex h-10 w-[180px] items-center justify-center overflow-hidden sm:h-11 sm:w-[196px] ${className}`
      }
    >
      <Image
        src={src}
        alt="TinyWins"
        fill={variant === "full"}
        width={variant === "icon" ? width : undefined}
        height={variant === "icon" ? height : undefined}
        priority={priority}
        className={
          variant === "icon"
            ? "h-auto w-auto object-contain"
            : "scale-[1.9] object-cover object-center"
        }
        sizes={variant === "full" ? "(max-width: 640px) 180px, 196px" : undefined}
      />
    </div>
  );

  return href ? <Link href={href}>{image}</Link> : image;
}
