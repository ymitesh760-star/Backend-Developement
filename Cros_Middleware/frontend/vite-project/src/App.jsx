function App() {

  function foo() {
    fetch('http://localhost:5001/home')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <button onClick={foo}> Click</button>
    </div>
  );
}

export default App;