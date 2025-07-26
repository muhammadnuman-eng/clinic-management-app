const FormInput = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  label,
  min,
}) => (
  <div className="space-y-1">
    {label && <label className="block font-medium">{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min} // ✅ apply min to input
      className="w-full p-2 border rounded"
    />
  </div>
);

export default FormInput;
