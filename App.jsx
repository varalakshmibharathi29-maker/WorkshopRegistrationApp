import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const exists = participants.find(
      (p) => p.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      setMessage("Participant already registered!");
      return;
    }

    const newParticipant = {
      name,
      email,
    };

    setParticipants([...participants, newParticipant]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>Workshop Registration App</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <h3>{message}</h3>}

      <h2>Participant List</h2>

      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant.name} - {participant.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
