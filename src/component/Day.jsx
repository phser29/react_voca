import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Word from './Word';
import useFehch from '../hooks/useFehch';
const Day = () => {
  const param = useParams();
  const day = param.day;

  const words = useFehch(`http://localhost:3001/words?day=${day}`);
  
  return (
    <div>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;