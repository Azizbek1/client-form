import React from 'react';

const Adminmain = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
    return (
        <div>
            <h1>Admin</h1>
            <button onClick={handleLogout} className="btn btn-danger">Chiqish</button>
        </div>
    );
}

export default Adminmain;
