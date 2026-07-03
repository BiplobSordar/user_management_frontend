const EmptyState = ({
  title,
  description,
  action,
}) => {
  return (
    <div className="card py-16 text-center">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;