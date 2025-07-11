import React, { useRef, PropsWithChildren } from "react";
import useScrollReveal from "../utils/useScrollReveal";

const ScrollReveal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollReveal;
