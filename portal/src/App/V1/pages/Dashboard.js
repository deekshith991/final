

const Dashboard = ({ userData }) => {

    return (
        <>
            <div>
                <p>Welcome, {userData.email || "mr.Handsome"} </p>
                <p>Account Type: {userData.accountType}</p>
            </div>
        </>
    )
}

export default Dashboard;