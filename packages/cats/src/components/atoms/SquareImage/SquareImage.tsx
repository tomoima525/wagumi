import Image from "next/image";

import type { FC } from "react";

interface SquareImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const SquareImage: FC<SquareImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div className="py-4">
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
};
