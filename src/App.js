import React, { useEffect, useState } from "react";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/goals")
      .then((r) => r.json())
      .then(setGoals)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleUpdateGoal(id, updatedFields) {
    fetch(`http://localhost:4000/goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id === updatedGoal.id ? updatedGoal : goal
          )
        );
      })
      .catch((err) => console.error("Update failed:", err));
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onUpdateGoal={handleUpdateGoal} />
      <Overview goals={goals} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={handleDeleteGoal}
            onUpdate={handleUpdateGoal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
