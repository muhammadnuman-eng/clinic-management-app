const ErrorBox = ({ errors }) => {
  if (!errors.length) return null;

  return (
    <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded text-sm">
      <ul className="list-disc list-inside space-y-1">
        {errors.map((err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorBox;
