import type { FC } from "react";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="py-3">
      <p className="text-4xl font-bold tracking-widest">{title}</p>
    </div>
  );
};
