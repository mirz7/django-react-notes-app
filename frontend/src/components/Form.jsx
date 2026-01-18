import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/auth.css"

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const name = method === "login" ? "Login" : "Register";
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error.response?.data?.message || error.message || "An error occurred")
        } finally {
            setLoading(false)
        }
    };
    
    const handleNavigate = () => {
        if (method === "login") {
            navigate("/register");
        } else {
            navigate("/login");
        }
    };
    
    return (
        <div className="auth-page">
            <form onSubmit={handleSubmit} className="form-container">
                <h1>{name}</h1>
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className="form-button" type="submit" disabled={loading}>
                    {loading ? "Loading..." : name}
                </button>
                
                <div className="form-footer">
                    <p className="form-footer-text">
                        {method === "login" 
                            ? "Don't have an account?" 
                            : "Already have an account?"}
                    </p>
                    <button 
                        type="button" 
                        className="form-link-button" 
                        onClick={handleNavigate}
                    >
                        {method === "login" ? "Register here" : "Login here"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form