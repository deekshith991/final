import React, { useState } from "react";
import EmailInput from "../UI/EmailInputField";
import PasswordInput from "../UI/PasswordInputField";
import UserCompanySelect from "../UI/UserCompanySelect";
import Button from "../UI/Button";
import useRegisterHandler from "../../hooks/useRegisterHandler";

const RegisterForm = ({ onSuccess, onError }) => {
    const { handleRegister } = useRegisterHandler();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("user");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(accountType);
        try {
            await handleRegister({ email, password, accountType }); // Passing the registration data
            onSuccess && onSuccess();
        } catch (err) {
            onError && onError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Register</h2>

            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            <UserCompanySelect selectedRole={accountType} onChange={setAccountType} />

            <div className="flex justify-center mt-6">
                <Button
                    label={isLoading ? "Loading..." : "Register"}
                    type="submit"
                    disabled={isLoading}
                />
            </div>
        </form>
    );
};


export default RegisterForm;
