import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext.jsx"

export default function Login() {
  const { user, login } = useContext(UserContext)
  const [name, setName] = useState("")

  if (user) return null

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="text"
        placeholder="Enter username..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => login(name)}>Login</button>
    </div>
  )
}
