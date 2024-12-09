import { useState } from "react";

const useFormData = () => {
    const [formData, setFormData] = useState({
        profile: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            address: {
                houseNo: "",
                street: "",
                village: "",
                town: "",
                state: "",
                country: "",
                pincode: "",
            },
        },
        education: [
            {
                instituteName: "",
                percentage: "",
                fromYear: "",
                toYear: "",
                fromEdu: "",
                toEdu: "",
                major: "",
            },
        ],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split(".");
        setFormData((prevData) => {
            const updatedData = { ...prevData };
            let currentData = updatedData;
            for (let i = 0; i < nameParts.length - 1; i++) {
                currentData = currentData[nameParts[i]];
            }
            currentData[nameParts[nameParts.length - 1]] = value;
            return updatedData;
        });
    };

    const addEducation = () => {
        setFormData((prevData) => ({
            ...prevData,
            education: [
                ...prevData.education,
                {
                    instituteName: "",
                    percentage: "",
                    fromYear: "",
                    toYear: "",
                    fromEdu: "",
                    toEdu: "",
                    major: "",
                },
            ],
        }));
    };

    const removeEducation = () => {
        setFormData((prevData) => {
            const updatedEducation = prevData.education.slice(0, -1);
            return {
                ...prevData,
                education: updatedEducation,
            };
        });
    };

    return { formData, handleInputChange, addEducation, removeEducation };
};

export default useFormData;