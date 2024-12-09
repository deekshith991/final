import React from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import AddressForm from "./AddressForm";
import EducationForm from "./EducationForm";
import useFormData from "../../hooks/userSetprofilehook";

const ProfileForm = () => {
    const { formData, handleInputChange, addEducation, removeEducation } = useFormData();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
            {/* Profile Section */}
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="First Name"
                    name="profile.firstName"
                    value={formData.profile.firstName}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Last Name"
                    name="profile.lastName"
                    value={formData.profile.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="Email"
                    name="profile.email"
                    type="email"
                    value={formData.profile.email}
                    onChange={handleInputChange}
                    disabled={true}
                />
                <InputField
                    label="Phone Number"
                    name="profile.phoneNo"
                    value={formData.profile.phoneNo}
                    onChange={handleInputChange}
                />
            </div>

            {/* Address Section */}
            <AddressForm formData={formData} handleInputChange={handleInputChange} />

            {/* Education Section */}
            <EducationForm formData={formData} handleInputChange={handleInputChange} addEducation={addEducation} removeEducation={removeEducation} />

            {/* Submit Button */}
            <div className="mt-6">
                <Button label="Submit" type="submit" />
            </div>
        </form>
    );
};

export default ProfileForm;
