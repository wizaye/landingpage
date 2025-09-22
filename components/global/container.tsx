import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Container = ({ children, delay = 0, className }: ContainerProps) => {
  return (
    <div 
      className={cn("", className)}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;