import type { ImageProps } from "next/image";
import Image from "next/image";
import type { FC } from "react";

import styles from "./GlowLogo.module.css";

type LogoGlowProps = Pick<ImageProps, "src">;

export const GlowLogo: FC<LogoGlowProps> = ({ src }) => {
  return (
    <div className="relative w-96 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <Image
        priority
        alt="logo"
        layout="intrinsic"
        src={src}
        className={styles.glow}
      />
    </div>
  );
};
