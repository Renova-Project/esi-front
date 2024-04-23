import { cn } from "@/lib/utils";
import React from "react";

function Button({ children, className, ...rest }) {
  return (
    <button
      className={cn(
        "text-white bg-honolulu font-semibold py-3 px-10 relative z-20",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
