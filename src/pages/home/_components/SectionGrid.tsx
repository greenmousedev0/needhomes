import type { PropsWithChildren } from "react";

export default function Sectiongrid(props: PropsWithChildren) {
  return (
    <div className="container mx-auto flex min-h-[520px] flex-col md:flex-row ">
      {props.children}
    </div>
  );
}
