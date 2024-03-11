import { twMerge } from "tailwind-merge";
import { cn } from "../../libs/utils";

function Button({ children, className, ...restProps }) {
  let active = true;
  return (
    <button
      className={cn(
        "rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700",
        className,
        // { "bg-gray-600": active },
        active? "bg-green-500" : "bg-black",
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex2() {
  return (
    <div className="grid h-screen place-content-center">
      <Button className="hover:bg-blue-500">Click</Button>
    </div>
  );
}
