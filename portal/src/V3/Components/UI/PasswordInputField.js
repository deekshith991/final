import React from "react";
import InputField from "./InputField";

const PasswordInput = ({ value, onChange, error }) => {
    return (
        <InputField
            label="Password"
            type="password"
            name="password"
            value={value}
            onChange={onChange}
            placeholder="Enter your password"
            error={error}
        />
    );
};

export default PasswordInput;
