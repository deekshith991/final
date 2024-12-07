import React from "react";
import InputField from "./InputField";

const EmailInput = ({ value, onChange, error }) => {
    return (
        <InputField
            label="Email"
            type="email"
            name="email"
            value={value}
            onChange={onChange}
            placeholder="Enter your email"
            error={error}
        />
    );
};

export default EmailInput;
