import React, { useState, useEffect } from 'react';

const sampleData = [{
  id: 1,
  name: 'Arm Day',
  exercises: [
    {
      id: 1,
      name: 'pushups',
      instructions: 'Get down on the floor and push the earth away from yourself like Chuck Norris',
      video: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
      equipment_needed: null,
      muscles: [
        {
          id: 1,
          name: 'arms',
        },
        {
          id: 2,
          name: 'core',
        },
      ],
    },
  ],
}];

const Dashboard = () => {
  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    setWorkouts(sampleData);
  }, [workouts]);

  return (
    <div className="dashboard">
      dashboard
    </div>
  );
};

export default Dashboard;
