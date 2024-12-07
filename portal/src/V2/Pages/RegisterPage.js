
import RegisterForm from "../forms/RegisterForm";
import BareLayout from "../Layouts/BareLayout";

const RegisterPage = () => {

    return (
        <BareLayout title={"Register"} form={<RegisterForm />} />
    )
}

export default RegisterPage;