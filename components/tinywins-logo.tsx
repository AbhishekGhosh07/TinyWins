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
          : `h-8 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)] sm:h-9 lg:h-11 xl:h-12 ${className}`
      }
      sizes={variant === "full" ? "(max-width: 640px) 132px, (max-width: 1024px) 152px, 168px" : undefined}
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
