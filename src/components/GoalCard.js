import React from "react";

function GoalCard({ goal }) {
  const { name, targetAmount, savedAmount, category, deadline } = goal;

  const progress = Math.min(
    Math.round((savedAmount / targetAmount) * 100),
    100
  ); // cap at 100%

  return (
    <div className="goal-card">
      <h3 className="goal-title">{name}</h3>
      <p className="goal-info">Category: {category}</p>
      <p className="goal-info">Deadline: {deadline}</p>
      <p className="goal-info">
        Saved: ${savedAmount} / ${targetAmount}
      </p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-percentage">{progress}% completed</div>

      {/* You can add update/delete buttons here */}
    </div>
  );
}

export default GoalCard;
