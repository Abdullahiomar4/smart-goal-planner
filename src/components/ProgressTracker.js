// src/components/ProgressTracker.js
import React from 'react';

const ProgressTracker = ({ goals }) => {
  if (goals.length === 0) return <p>No goals to track yet.</p>;

  const totalTarget = goals.reduce((sum, goal) => sum + (Number(goal.targetAmount) || 0), 0);
  const totalSaved = goals.reduce((sum, goal) => sum + (Number(goal.savedAmount) || 0), 0);
  const progress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  return (
    <div className="progress-tracker">
      <h4>Total Progress</h4>
      <div className="tracker-bar" style={{ border: '1px solid #ccc', height: '20px', width: '100%' }}>
        <div
          className="tracker-fill"
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#4caf50',
            transition: 'width 0.3s',
          }}
        ></div>
      </div>
      <p>{progress.toFixed(1)}% saved (${totalSaved.toFixed(2)} of ${totalTarget.toFixed(2)})</p>
    </div>
  );
};

export default ProgressTracker;
