import Image from "next/image";

export interface HelixqueLogoProps {
  size?: number;
  className?: string;
  title?: string;
}

// Raster/SVG logo from public/logo.svg for brand consistency
export default function HelixqueLogo({ size = 40, className, title = "HelixQue" }: HelixqueLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt={title}
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}


