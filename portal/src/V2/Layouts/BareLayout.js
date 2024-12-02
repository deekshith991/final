import Header from "../Common/Header";

const BareLayout = ({ title, form }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header fixed at the top */}
            <Header className="fixed top-0 bg-white shadow-md py-4 text-center" />

            {/* Main content below the header */}
            <div className="mt-20 w-full max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded">
                <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
                {form}
            </div>
        </div>
    );
};

export default BareLayout;
