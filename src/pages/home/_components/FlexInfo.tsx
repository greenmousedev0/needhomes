import type { PropsWithChildren } from "react";

interface FlexInfoProps extends PropsWithChildren {
  className?: string;
}

export default function FlexInfo({ className, children }: FlexInfoProps) {
  return (
    <div
      className={`flex-1  min-h-[320px] flex flex-col  justify-center leading-loose space-y-4 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
