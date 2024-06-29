import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.scss";

const Dashboard : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="dahsboardWrapper">
            <p>This is dashboard</p>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default Dashboard;