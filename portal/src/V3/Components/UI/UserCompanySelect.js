
import Select from "./Select";

const UserCompanySelect = ({ selectedRole, onChange }) => {
    const handleChange = (value) => {
        onChange(value);
        console.log("Selected Role:", value);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded">
            <Select
                label="Select Role"
                options={[
                    { value: "user", label: "User" },
                    { value: "company", label: "Company" },
                ]}
                value={selectedRole}
                onChange={handleChange}
            />
            <p className="text-gray-700 mt-4">
                Current Selection: <strong>{selectedRole}</strong>
            </p>
        </div>
    );
};


export default UserCompanySelect;