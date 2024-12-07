import React, { useState } from "react";
import EmailInput from "../UI/EmailInputField";
import PasswordInput from "../UI/PasswordInputField";
import Button from "../UI/Button";
import useLoginHandler from "../../hooks/useLoginHandler";

const LoginForm = ({ onSuccess, onError }) => {
    const { handleLogin } = useLoginHandler();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await handleLogin({ email, password });
            onSuccess && onSuccess();
        } catch (err) {
            onError && onError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded">
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="flex justify-center mt-4">
                <Button
                    label={isLoading ? "Loading..." : "Login"}
                    type="submit"
                    disabled={isLoading}
                />
            </div>
        </form>
    );
};

export default LoginForm;
