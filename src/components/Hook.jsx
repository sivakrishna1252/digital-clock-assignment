import React, { useContext } from "react";
import { UserContext } from "../components/UserContext.jsx";

export default function Hook() {
  const { user, logout } = useContext(UserContext);

  return (
    <div style={{ background: "black", color: "white", padding: "10px" }}>
      <h2 style={{ color: "#00ff88"}}>Login app page</h2>
      {user ? (
        <div>
          <p>Welcome, {user} This is Usecontext</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
