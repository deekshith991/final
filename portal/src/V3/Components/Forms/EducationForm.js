import React from "react";
import InputField from "../UI/InputField";
import Button from "../UI/Button";

const EducationForm = ({ formData, handleInputChange, addEducation, removeEducation }) => {
    return (
        <>
            <h3 className="text-2xl font-semibold text-black mt-8 mb-6">Education</h3>
            {formData.education.map((edu, index) => (
                <div key={index} className="border p-6 mb-6 rounded-lg bg-white shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <InputField
                            label="Institute Name"
                            name={`education.${index}.instituteName`}
                            value={edu.instituteName}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                        <InputField
                            label="Percentage"
                            name={`education.${index}.percentage`}
                            type="number"
                            value={edu.percentage}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <InputField
                            label="From Year"
                            name={`education.${index}.fromYear`}
                            type="number"
                            value={edu.fromYear}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                        <InputField
                            label="To Year"
                            name={`education.${index}.toYear`}
                            type="number"
                            value={edu.toYear}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <InputField
                            label="From Education Level"
                            name={`education.${index}.fromEdu`}
                            value={edu.fromEdu}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                        <InputField
                            label="To Education Level"
                            name={`education.${index}.toEdu`}
                            value={edu.toEdu}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                    </div>
                    <div className="mb-6">
                        <InputField
                            label="Major"
                            name={`education.${index}.major`}
                            value={edu.major}
                            onChange={handleInputChange}
                            className="input-field-style"
                        />
                    </div>
                </div>
            ))}
            <div className="flex space-x-4">
                <Button label="Add Education" onClick={addEducation} type="button" className="add-education-button" />
                {formData.education.length > 1 && (
                    <Button label="Remove Last Education" onClick={removeEducation} type="button" className="remove-education-button" />
                )}
            </div>
        </>
    );
};

export default EducationForm;
