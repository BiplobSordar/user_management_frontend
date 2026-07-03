const sizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const Spinner = ({
  size = "md",
  centered = false,
}) => {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 ${sizes[size]}`}
    />
  );

  if (centered) {
    return (
      <div className="flex justify-center py-10">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Spinner;