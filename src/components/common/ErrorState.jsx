const ErrorState = ({
  title = "Something went wrong",
  message,
}) => {
  return (
    <div className="card py-16 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {message}
      </p>
    </div>
  );
};

export default ErrorState;