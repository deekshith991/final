
import APPV3 from "./APPV3";
import { AuthProvider } from "./Contexts/AuthContext";

const IndexApp = () => {

    return (
        <div className="border-1 border-black max-w-full max-h-screen">
            <AuthProvider>
                <APPV3 />
            </AuthProvider>
        </div>
    )
}


export default IndexApp;