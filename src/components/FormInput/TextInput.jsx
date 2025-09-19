import { TextField } from "@mui/material";
import React from "react";

export const TextInput = ({ onChange, value, name, type = "text" }) => {
  return (
    <div>
      <TextField
        fullWidth
        slotProps={{
          input: { className: "h-10 py-2 px-3" },
          htmlInput: { className: "!p-0" },
        }}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default TextInput;
