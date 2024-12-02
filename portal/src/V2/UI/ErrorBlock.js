

const ErrorBlock = ({ error }) => {
    return (
        <>
            <div className="mb-4 p-2 text-red-600 bg-red-100 border border-red-300 rounded">
                {error}
            </div>
        </>
    )
}

export default ErrorBlock;