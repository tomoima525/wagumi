import type { FC } from "react";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="my-4">
      <p className="text-4xl font-bold tracking-widest">{title}</p>
    </div>
  );
};
