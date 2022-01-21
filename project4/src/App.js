import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(0);
  const [money, setMoney] = useState(10000);
  const [salary, setSalary] = useState(50000);
  const [fund, setFund] = useState(1000000);
  const [purchase, setPurchase] = useState('');
  const [building, setBuilding] = useState([
    {
      id: 1,
      name: 'building1',
      price: 90000
    },
    {
      id: 2,
      name: 'building2',
      price: 120000
    },
    {
      id: 3,
      name: 'building3',
      price: 500000
    },
  ]);

  function purchased(property) {
    console.log(property.price)
    money >= property.price ? setMoney(money - property.price) : setPurchase(`You can't afford this`);
  }

  useEffect(() => {
    console.log(`This works!! You clicked ${user} times`)
  }, [user])

  function endTurn() {
    setMoney(money + salary);
    setPurchase('')
  }

  return (
    <div className="App">
      {
        user === 0 
        ? <h1>Hello World! You haven't clicked yet.</h1> 
        : ( user < 2
          ? <h1>Hello World! You clicked {user} once.</h1> 
          : <h1>Hello World! You clicked {user} times.</h1>
        )
      }
      <button onClick={() => setUser(user + 1)}>Click me</button>
      <br />
      <br />
      <br />
      <br />

      <section>
        <h2>My money: ${money}</h2>
        <h2>The Fund: ${fund}</h2>
        {building.map((build) => 
          <div key={build.id}>
            <h2>{build.name}</h2>
            <h2>Price: ${build.price}</h2>
            <button onClick={() => purchased(build)}>Purchase</button>
          </div>
        )}
        <button onClick={endTurn}>End Turn</button> {purchase}
      </section>
    </div>
  );
}

export default App;
