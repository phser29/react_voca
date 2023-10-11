import React from 'react';
import useFetch from '../hooks/useFehch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days');
  const history = useHistory();
  
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        day : days.length + 1,
        isDone : false
      }),
    })
    .then(res => {
      if(res.ok) {
        alert("추가 되었습니다.");
        history.push('/');
      }
    })
  }

  return (
    <div>
      <h1>현재 일수 : {days.length}일</h1>
      <button onClick={addDay}>추가</button>
    </div>
  );
};

export default CreateDay;