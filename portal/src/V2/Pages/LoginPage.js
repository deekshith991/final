
import LoginForm from "../forms/LoginForm";
import BareLayout from "../Layouts/BareLayout";

const LoginPage = () => {

    return (
        <BareLayout title={"Login"} form={<LoginForm />} />
    )
}

export default LoginPage;