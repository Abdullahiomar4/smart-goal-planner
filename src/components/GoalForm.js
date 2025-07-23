import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    savedAmount: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4001/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        targetAmount: +formData.targetAmount,
        savedAmount: +formData.savedAmount,
      }),
    })
      .then((res) => res.json())
      .then((newGoal) => {
        onAddGoal(newGoal);
        setFormData({
          name: "",
          category: "",
          targetAmount: "",
          savedAmount: "",
          deadline: "",
        });
      })
      .catch((err) => console.error("Failed to add goal:", err));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-6 max-w-md mx-auto p-4 bg-white rounded-lg shadow"
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal Name"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        type="number"
        placeholder="Target Amount"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="savedAmount"
        value={formData.savedAmount}
        onChange={handleChange}
        type="number"
        placeholder="Saved Amount"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        type="date"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;
