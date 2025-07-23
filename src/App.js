import React, { useEffect, useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("/goals") // Proxy handles the domain
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <strong>{goal.name}</strong> - ${goal.savedAmount} / ${goal.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
