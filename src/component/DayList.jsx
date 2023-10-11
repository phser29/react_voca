import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFehch from '../hooks/useFehch';

function DayList() {
  const days = useFehch("http://localhost:3001/days");

  if(days.length === 0) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <ul className='list_day'>
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DayList;