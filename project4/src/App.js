//This will automatically add commas where I need them toLocaleString()
function App() {
  const budget = [40000, 20000, 30000, 55000, 24000];
  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(budget.reduce(reducer).toLocaleString());
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
