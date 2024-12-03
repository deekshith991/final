

const SuccessBlock = ({ error }) => {
    return (
        <>
            <div className="mb-4 p-2 text-red-600 bg-green-100 border border-green-300 rounded">
                {error}
            </div>
        </>
    )
}

export default SuccessBlock;