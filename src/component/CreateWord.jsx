import React, { useRef, useState } from 'react';
import useFehch from '../hooks/useFehch'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CreateWord = () => {
  const days = useFehch('http://localhost:3001/days');
  const history = useHistory();
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if(!isLoading) {
      setIsloading(true);
      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          day : dayRef.current.value,
          eng : engRef.current.value,
          kor : korRef.current.value, 
          isDone : false
        }),
      })
      .then(res => {
        if(res.ok) {
          alert("추가 되었습니다.");
          history.push(`/day/${dayRef.current.value}`);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='input_area'>
          <label>Eng</label>
          <input type="text" placeholder='computer' ref={engRef} />
        </div>
        <div className='input_area'>
          <label>Kor</label>
          <input type="text" placeholder='컴퓨터' ref={korRef}/>
        </div>
        <div className='input_area'>
          <label>Day</label>
          <select ref={dayRef}>
            {days.map(day => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select><br/>
          <button style={{opacity: isLoading ? 0.3 :1 }}>{isLoading ? "Saving..." : "저장"}</button>
        </div>
      </form>
    </div>
  );
};

export default CreateWord;