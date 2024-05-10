import { cn } from "@/lib/utils";

export const TableHead = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid bg-white/10 text-crayola px-5 py-3 border border-crayola gap-12 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const TableRow = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-5 px-5 py-3 bg-white/5 text-white gap-12 border-b border-white/10 last:border-b-0",
        className
      )}
    >
      {children}
    </div>
  );
};

function Table({ children }) {
  return (
    <div className="overflow-x-scroll lg:overflow-x-hidden">
      <div className="min-w-max">{children}</div>
    </div>
  );
}

export default Table;
