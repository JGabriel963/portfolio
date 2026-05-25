import type { ReactNode } from "react";

type Props = {
  num: string;
  title: ReactNode;
};

export function SectionHead({ num, title }: Props) {
  return (
    <div className="section-head reveal">
      <div className="section-num">{num}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
