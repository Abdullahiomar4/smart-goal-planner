import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow mb-6">
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
    </div>
  );
}

export default Overview;