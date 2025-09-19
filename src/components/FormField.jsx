import { Controller } from "react-hook-form";

const FormField = ({ control, label, name, Component, type = "text" }) => {
  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[#4B465C]">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              control={control}
              type={type}
            />
          );
        }}
      />
    </div>
  );
};
export default FormField;
