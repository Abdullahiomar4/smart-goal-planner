import React, { useState } from "react"; // Don't forget to import useState

function DepositForm({ goals, onUpdateGoal }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const selectedGoal = goals.find((g) => g.id === parseInt(goalId));
    if (!selectedGoal) return;

    const updatedAmount = selectedGoal.savedAmount + parseFloat(amount);

    onUpdateGoal(selectedGoal.id, { savedAmount: updatedAmount });

    setGoalId("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Add Deposit</h2>
      <select
        value={goalId}
        onChange={(e) => setGoalId(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      >
        <option value="">Select a goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Add Deposit
      </button>
    </form>
  );
}

export default DepositForm; // ✅ this is what was missing