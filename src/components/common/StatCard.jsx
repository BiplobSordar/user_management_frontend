const StatCard = ({
  title,
  value,
  color = "blue",
}) => {
  const colors = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <div className="card p-6 transition hover:shadow-lg">
      <div
        className={`inline-flex rounded-lg px-3 py-2 ${colors[color]}`}
      >
        <span className="text-lg font-bold">
          {value}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default StatCard;