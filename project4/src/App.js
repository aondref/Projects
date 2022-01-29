import React, { useState } from 'react';



function App() {
  const playerData = {
    id: 1,
    name: '',
    age: 18,
    education: '',
    career: '',
    salary: 0,
    money: 0,
    debt: 0,
  }

  const [player, setPlayer] = useState(playerData)

  return (
    <div>
      Hello World!
      {player.name === '' 
      ? <p>No player data</p> 
      : <div>
          <h2>{player.name}</h2>
          <p>{player.education}</p>
          <p>{player.salary}</p>
          <p>{player.money}</p>
      </div>
      }

      <form>
        <div className="row">
          <div className="col">
            <label htmlFor='educationList' className='form-label'>Choose Education</label>
            <input className='form-control' onSelect={(e) => e.target.value == '' ? null : console.log(e.target.value)} list='chooseEducation' id='educationList' placeholder='Type to search...' />
            <datalist id='chooseEducation'>
              <option value="High School">High School</option>
              <option value="Trade School">Trade School</option>
              <option value="Associate's Degree">Associate's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Graduate Degree">Graduate Degree</option>
            </datalist>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
