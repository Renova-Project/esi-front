import { cn } from "@/lib/utils";
import React from "react";

function Button({ children, className, ...rest }) {
  return (
    <button
      className={cn(
        "bg-gradient-to-b from-btnGradientStart via-btnGradientStart via-30% to-btnGradientEnd font-semibold py-3 px-10",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
