import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Fixed: named export in v4+
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useEffect, useState } from "react";
import api from "../api"; // Fixed: import the api instance

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const refreshToken = async () => {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            try {
                const res = await api.post("/api/token/refresh/", {
                    refresh: refreshToken
                });
                if (res.status === 200) {
                    localStorage.setItem(ACCESS_TOKEN, res.data.access);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.log(error);
                setIsAuthorized(false);
            }
        };

        const auth = async () => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (!token) {
                setIsAuthorized(false);
                return;
            }
            
            try {
                const decode = jwtDecode(token);
                const tokenExpiration = decode.exp;
                const now = Date.now() / 1000;
                
                if (tokenExpiration < now) {
                    await refreshToken();
                } else {
                    setIsAuthorized(true);
                }
            } catch (error) {
                console.log("Token decode error:", error);
                setIsAuthorized(false);
            }
        };

        auth().catch(() => setIsAuthorized(false));
    }, []); // Empty dependency array is fine here

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;