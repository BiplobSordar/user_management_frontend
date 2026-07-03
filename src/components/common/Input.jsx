import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block font-medium text-slate-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={clsx(
            "input-base",
            error &&
              "border-red-500 focus:ring-red-200",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;