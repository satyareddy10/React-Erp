import { useEffect, useState } from "react";
import { getUser } from "../services/userService";
function Dashboard() {
    const [user, setUser] = useState([])

    const getUser1 = async () => {
        const response = await getUser();
        setUser(response.data);
    }
    useEffect(() => {
        getUser1();
    }, []);
    return (
        <div className="dashboard-card">
            <h1 style={{ color: '#818cf8', marginBottom: '8px' }}>Welcome back, {user?.username || 'Admin'}!</h1>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>User ID: #{user?.id || 'N/A'}</p>
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#9ca3af' }}>
                <p>Use the sidebar navigation to manage different modules of your admin dashboard.</p>
            </div>
        </div>
    );
}

export default Dashboard;