"use client";

import Image from "next/image";
import { useState } from "react";

type AgentPortraitProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
};

export function AgentPortrait({
  src,
  alt,
  initials,
  className,
}: AgentPortraitProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex size-full items-center justify-center bg-muted text-3xl font-semibold tracking-tight text-muted-foreground ${className ?? ""}`}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={396}
      height={496}
      className={`size-full object-cover object-[center_20%] ${className ?? ""}`}
      sizes="(max-width: 1024px) 200px, 240px"
      priority
      onError={() => setFailed(true)}
    />
  );
}
