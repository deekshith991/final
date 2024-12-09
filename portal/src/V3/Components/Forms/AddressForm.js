import React from "react";
import InputField from "../UI/InputField";

const AddressForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <h3 className="text-xl font-semibold mt-6 mb-4">Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="House No"
                    name="profile.address.houseNo"
                    value={formData.profile.address.houseNo}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Street"
                    name="profile.address.street"
                    value={formData.profile.address.street}
                    onChange={handleInputChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="Village"
                    name="profile.address.village"
                    value={formData.profile.address.village}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Town"
                    name="profile.address.town"
                    value={formData.profile.address.town}
                    onChange={handleInputChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="State"
                    name="profile.address.state"
                    value={formData.profile.address.state}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Country"
                    name="profile.address.country"
                    value={formData.profile.address.country}
                    onChange={handleInputChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                    label="Pincode"
                    name="profile.address.pincode"
                    value={formData.profile.address.pincode}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
};

export default AddressForm;
