import { NavLink, useNavigate } from 'react-router-dom';
import { SIDEBAR_CONFIG } from '../utils/constants';
import './Sidebar.css';

/* eslint-disable react/prop-types */
function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      {/* Backdrop overlay for mobile screens */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-icon">⚡</span>
          <h1 className="sidebar-logo">Admin Panel</h1>
          <button className="sidebar-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <nav className="sidebar-menu">
          {SIDEBAR_CONFIG.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                isActive ? 'sidebar-item active' : 'sidebar-item'
              }
              onClick={onClose} // close drawer on link click on mobile
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
