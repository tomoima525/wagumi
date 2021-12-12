import type { FC } from "react";

import { SquareImage } from "@/cats/components/atoms/SquareImage";

interface RandomCatProps {
  src: string;
  alt: string;
}

export const RandomCat: FC<RandomCatProps> = ({ src, alt }) => {
  const width = 320;
  const height = 320;

  // @todo randomize src for display
  return (
    <div className="my-4">
      <SquareImage src={src} width={width} height={height} alt={alt} />
    </div>
  );
};
