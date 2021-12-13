import type { ImageProps } from "next/image";
import Image from "next/image";
import type { FC } from "react";

interface SquareImageProps extends ImageProps {
  size: number;
}

export const SquareImage: FC<SquareImageProps> = ({ alt, size, ...props }) => {
  return (
    <div className="py-4">
      <Image width={size} height={size} alt={alt} {...props} />
    </div>
  );
};
