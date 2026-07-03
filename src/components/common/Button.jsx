import clsx from "clsx";
import Spinner from "./Spinner";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};

const Button = ({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        variants[variant],
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
  <div className="flex items-center gap-2">
    <Spinner size="sm" />
    Loading...
  </div>
) : (
  children
)}
    </button>
  );
};

export default Button;