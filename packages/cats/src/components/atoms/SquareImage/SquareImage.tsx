import Image from "next/image";

import type { FC } from "react";

interface SquareImageProps {
  src: string;
  alt: string;
  size: number;
}

export const SquareImage: FC<SquareImageProps> = ({ src, alt, size }) => {
  return (
    <div className="py-4">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
};
